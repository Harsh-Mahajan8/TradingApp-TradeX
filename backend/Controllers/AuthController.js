const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists", success: false });
        }

        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);

        res.status(201).json({
            message: "User signed up successfully",
            success: true,
            user: { username: user.username, email: user.email },
            token // <-- send token in response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", success: false });
    }
};

module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required", success: false });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "Incorrect email or password", success: false });
        }

        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(401).json({ message: "Incorrect email or password", success: false });
        }

        const token = createSecretToken(user._id);

        res.status(200).json({
            message: `${user.username} logged in successfully`,
            success: true,
            token // <-- send token here
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", success: false });
    }
};

module.exports.getUser = async (req, res) => {
    try {
        res.status(200).json({
            message: "User data retrieved successfully",
            success: true,
            user: {
                username: req.user.username,
                email: req.user.email,
                _id: req.user._id
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", success: false });
    }
};

module.exports.LogOut = async (req, res) => {
    try {
        res.status(200).json({
            message: "Logged out successfully",
            success: true
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error", success: false });
    }
};
