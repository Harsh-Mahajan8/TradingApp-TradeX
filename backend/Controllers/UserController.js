const UserModel = require("../models/UserModel");
module.exports.userController = async (req, res) => {
    try {
        const { newuserData } = req.body;
        console.log("updateddata:", newuserData);
        const updatedUserData = await UserModel.findByIdAndUpdate(req.user._id, newuserData, { new: true });
        console.log(updatedUserData);
        return res.json({ msg: "User Updated", status: "success" });
    } catch (e) {
        return res.status(200).json({ msg: "Server Error", status: "error" });
    }
}
