const User = require("../models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
    try {
        const { email, password, username, createdAt } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, password, username, createdAt });
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res
            .status(201)
            .json({ message: "User signed in successfully", success: true, user });
        next();
    } catch (error) {
        console.error(error);
    }
};


module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ message: 'All fields are required' })
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ message: 'Incorrect password or email' })
        }
        const auth = await bcrypt.compare(password, user.password)
        if (!auth) {
            return res.json({ message: 'Incorrect password or email' })
        }
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            httpOnly: true,       // JS cannot access cookie
            secure: true,         // HTTPS only
            sameSite: "none",     // cross-origin cookie
            maxAge: 1000 * 60 * 60 * 24, // 1 day
        });

        res.status(201).json({ message: `${user.username} logged in successfully`, success: true });
        next()
    } catch (error) {
        console.error(error);
    }
}

module.exports.getUser = async (req, res, next) => {
    try {
        const user = req.user;
        res.status(200).json({ username: user.username, email: user.email });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}
module.exports.LogOut = async (req, res) => {
    try {

        res.clearCookie("token");
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

}
