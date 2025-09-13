const User = require("../models/userModel");  // ✅ Capitalize for consistency
const jwt = require("jsonwebtoken");

// Create JWT token
const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// LOGIN USER
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        // Create a token
        const token = createToken(user._id);

        // ✅ Send single response
        return res.status(200).json({ email, token, user });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// SIGNUP USER
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);

        // Create a token
        const token = createToken(user._id);

        // ✅ Send single response
        return res.status(200).json({ email, token, user });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = {
    loginUser,
    signupUser,
};
