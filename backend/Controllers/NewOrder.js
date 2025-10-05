const HoldingModel = require("../models/HoldingModel.js");
const PositionModel = require("../models/PositionModel.js");
const OrderModel = require("../models/OrderModel.js");
const StockDataModel = require("../models/StockDataModel.js");
const userModel = require("../models/UserModel.js");

// module.exports.newOrderController = async (req, res) => {
//     try {
//         console.log(req.originalUrl);
//         const { name, qty, price, mode, product, orderStatus } = req.body;
//         const { avgCost: avg, percent: net, ycp } = await StockDataModel.findOne({ name });
//         const day = (((price - ycp) / ycp) * 100);
//         const tradeValue = qty * price;
//         const user = await userModel.findById(req.user._id);

//         //check if user have money that trade
//         if (product == "CNC") {
//             if (user.availableCash >= tradeValue) {
//                 //do the trade
//                 const newOrder = new OrderModel({
//                     name, qty, price, orderStatus, mode, product
//                 })
//                 await newOrder.save();
//                 //push that position in user.position

//                 user.orders.push(newOrder._id);

//                 user.availableCash -= tradeValue;
//                 //if statuc is executed //always executed incase of buy order

//                 // save in position model ->
//                 //if alredy same stock is present then simply add the qty and compute avg price
//                 const stockInPosition = await PositionModel.findOne({ name, product, user: req.user._id });
//                 if (stockInPosition) {
//                     //update qty
//                     //update avg price
//                     const newqty = stockInPosition.qty + qty;
//                     const newAvg = ((stockInPosition.avg * stockInPosition.qty + price * qty) / newqty);
//                     await PositionModel.findOneAndUpdate({ name, product, user: req.user._id }, { qty: newqty, avg: newAvg });
//                     console.log("posiiton updated in Buy stock api")
//                     //do noy push incase of update order in position model
//                     //push into user.position
//                 } else {
//                     //if not present then create new position doc.
//                     const newPosit = new PositionModel({
//                         product, name, qty, avg: price, price, day, user: req.user._id
//                     });
//                     await newPosit.save();
//                     //do not use push use addtoset as there should not be duplicate entries
//                     //pushX -> addToSet in user.position
//                     await userModel.findOneAndUpdate({ _id: req.user._id }, { $addToSet: { positions: newPosit._id } });



//                     console.log("In Buy orde api new position saved")
//                     // await PositionModel.insertOne({
//                     //     
//                     // }, { new: true }).then((res) => {
//                     //     console.log("new position is saved in Byu api", res)
//                     // })

//                 }
//             } else if (product != "CNC") {
//                 if (user.availableMargin >= tradeValue * 0.2) {
//                     const marginBlocked = tradeValue * 0.2;//20% price
//                     user.availableCash -= marginBlocked;
//                     user.availableMargin -= marginBlocked;
//                     user.usedMargin += marginBlocked;
//                 }
//             } else {
//                 res.json({ msg: "Insufficient Funds", status: "error" })
//             }
//         }

//         user.equityBalance = user.availableCash + user.usedMargin; // simplified

//         await user.save();
//         return res.json({
//             msg: `${qty} ${name} stock bought`,
//             status: "success"
//         });




//         //push that position in user.position
//         // after 24 hrs remove from posiiton 
//         // is product is cnc then 
//         // add to holding
//         // if alredy same stock is present then simply add the qty and compute avg price
//         // if not present then create new holding doc.
//         //usecron
//     } catch (e) {
//         console.log("Error in newOrder Api", e)
//         return res.json({
//             msg: `Error`,
//             status: "error"
//         });
//     };
// }

// CRON: Every day at 11:59 PM → move CNC from positions to holdings

module.exports.newOrderController = async (req, res) => {
    try {
        console.log(req.originalUrl);
        const { name, qty, price, mode, product, orderStatus } = req.body;
        const { ycp } = await StockDataModel.findOne({ name });
        const day = (((price - ycp) / ycp) * 100);
        const tradeValue = qty * price;
        const user = await userModel.findById(req.user._id);
        if (!qty || qty <= 0) {
            return res.json({ msg: "Enter valid Qty!!", status: "error" });
        }

        let canTrade = false;
        let marginBlocked = 0;

        //CNC logic
        if (product === "CNC") {
            if (user.availableCash >= tradeValue) {
                user.availableCash -= tradeValue;
                canTrade = true;
                console.log("Sufficient Balance!!!");
            } else {
                // Save cancelled order

                return res.json({ msg: "Insufficient Funds", status: "error" });
            }
        }

        //Margin/MIS logic
        else {
            marginBlocked = tradeValue * 0.2; // e.g. 20% margin requirement
            if (user.availableMargin >= marginBlocked) {
                user.availableMargin -= marginBlocked;
                user.usedMargin += marginBlocked;
                canTrade = true;
                console.log("Sufficient Balance!!!");
            } else {
                return res.json({ msg: "Insufficient Margin", status: "error" });
            }
        }

        if (canTrade) {
            //Save order
            const newOrder = new OrderModel({
                name, qty, price, orderStatus, mode, product
            });
            await newOrder.save();
            user.orders.push(newOrder._id);

            //Update / Create Position
            const stockInPosition = await PositionModel.findOne({ name, product, user: req.user._id });
            if (stockInPosition) {
                const newqty = stockInPosition.qty + qty;
                const newAvg = ((stockInPosition.avg * stockInPosition.qty) + (price * qty)) / newqty;

                await PositionModel.findOneAndUpdate(
                    { name, product, user: req.user._id },
                    { qty: newqty, avg: newAvg }
                );
                console.log("Position updated in Buy stock API");
            } else {
                const newPosit = new PositionModel({
                    product, name, qty, avg: price, price, day, user: req.user._id, time: new Date()
                });

                await newPosit.save();
                await userModel.findByIdAndUpdate(
                    req.user._id, { $addToSet: { positions: newPosit._id } }
                );
                console.log("New position created in Buy stock API");
            }
        }

        //Update equity balance (simplified)
        user.equityBalance = user.availableCash + user.availableMargin;

        await user.save();
        return res.json({
            msg: `${qty} ${name} stock bought (${product})`,
            status: "success"
        });

    } catch (e) {
        console.log("Error in newOrder Api", e);
        return res.json({ msg: `Error`, status: "error" });
    }
};


module.exports.cronController = async () => {
    try {
        console.log("Running end-of-day job...");

        // Find all CNC positions
        const cncPositions = await PositionModel.find({ product: "CNC" });

        for (let pos of cncPositions) {
            // Check 24 hours passed
            const now = new Date();
            const hoursPassed = (now - pos.time) / (1000 * 60 * 60);
            console.log(`Hours passed for ${pos.name}: ${hoursPassed}`);
            if (hoursPassed < 1/(60*30)) continue;

            // Directly get userId from pos
            const userId = pos.user;

            // Check if user already has holding in same stock
            let holding = await HoldingModel.findOne({ name: pos.name, user: userId });

            if (holding) {
                // Merge qty & avg
                const totalQty = holding.qty + pos.qty;
                const newAvg =
                    (holding.avg * holding.qty + pos.avg * pos.qty) / totalQty;

                holding.qty = totalQty;
                holding.avg = newAvg;
                await holding.save();
            } else {
                // Create new holding with user link
                const newHolding = new HoldingModel({
                    product: pos.product,
                    name: pos.name,
                    qty: pos.qty,
                    avg: pos.avg,
                    price: pos.price,
                    day: pos.day,
                    user: userId
                });
                await newHolding.save();

                // Add to user's holdings array
                await userModel.findByIdAndUpdate(userId, {
                    $addToSet: { holdings: newHolding._id }
                });
            }

            // Delete position
            await PositionModel.deleteOne({ _id: pos._id });

            // Remove from user's positions array
            await userModel.findByIdAndUpdate(userId, {
                $pull: { positions: pos._id }
            });

            console.log(`Moved ${pos.name} from Position → Holding for user ${userId}`);
        }
    } catch (error) {
        console.error("Error in cron job:", error);
    }
};
