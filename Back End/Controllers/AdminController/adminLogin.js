const AdminModel = require("../../Models/AdminModel/adminModel");
const bcrypt = require("bcrypt");
const createToken = require("../../Utils/CreateToken/tokenCreate");

const adminLogin = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email) {
            res.status(400).json({ message: "Email is required" })
        }
        if (!password) {
            res.status(400).json({ message: "Password is required" })
        }

        const admin = await AdminModel.findOne({ email }).select("+password");
        if (!admin) {
            res.status(400).json({ message: "Admin not found" })
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            res.status(400).json({ message: "Password is incorrect" })
        }

        // create token for admin
        const token = await createToken({
            id: admin._id,
            email: admin.email,
            role: admin.role,
        })

        res.cookie("accessToken", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),        // 7 days
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        })

        res.status(200).json({ success: true, message: "Admin login successfully", AdminToken: token })

    } catch (error) {
        res.status(500).json({ message: "Admin Login failed", error: error.message })
    }
}
module.exports = adminLogin;