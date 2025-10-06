const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY); // sync verification
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ status: false, message: "User not found" });
    }

    req.user = user; // attach user to request
    next();
  } catch (err) {
    console.error("Auth Error:", err);
    return res.status(401).json({ status: false, message: "Invalid token" });
  }
};
