const User = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  try {
    // Read token from Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ status: false, message: "No token provided" });
    }

    const token = authHeader.split(" ")[1]; // get the actual token
    const decoded = jwt.verify(token, process.env.TOKEN_KEY); // verify token

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
