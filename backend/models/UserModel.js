const { model, Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Your username is required"],
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
   // Account Balances
    openingBalance: { type: Number, default: 0 },
    equityBalance: { type: Number, default: 0 },
    availableCash: { type: Number, default: 0 },
    availableMargin: { type: Number, default: 0 },
    usedMargin: { type: Number, default: 0 },
    holdings: [
        {
            type: Schema.Types.ObjectId,
            ref: "Holding"
        }
    ]
    ,
    positions: [{
        type: Schema.Types.ObjectId,
        ref: "Position"
    }],
    watchlist: [{
        type: Schema.Types.ObjectId,
        ref: "WatchList"
    }],
    orders: [{
        type: Schema.Types.ObjectId,
        ref: "Order"
    }
    ]
});

UserSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

module.exports = model("user", UserSchema);