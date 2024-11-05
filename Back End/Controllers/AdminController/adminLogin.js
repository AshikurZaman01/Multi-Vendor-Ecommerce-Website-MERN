const AdminModel = require("../../Models/AdminModel/adminModel");
const bcrypt = require("bcrypt");
const createToken = require("../../Utils/CreateToken/tokenCreate");

const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check for missing email or password
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // Check if admin exists
        const admin = await AdminModel.findOne({ email }).select("+password");
        if (!admin) {
            return res.status(400).json({ message: "Admin not found" });
        }

        // Check if password is correct
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Password is incorrect" });
        }

        // Create token for admin
        const token = await createToken({
            id: admin._id,
            email: admin.email,
            role: admin.role,
        });

        // Set token in a cookie
        res.cookie("accessToken", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        // Send success response
        return res.status(200).json({ success: true, message: "Admin login successfully", AdminToken: token });

    } catch (error) {
        console.error(error);
        if (!res.headersSent) { // Ensure headers haven’t been sent
            res.status(500).json({ message: "Admin Login failed", error: error.message });
        }
    }
};

module.exports = adminLogin;
