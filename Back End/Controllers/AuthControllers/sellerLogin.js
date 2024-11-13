const bcrypt = require("bcrypt");
const createToken = require("../../Utils/CreateToken/tokenCreate");
const SellerModel = require("../../Models/SellerModel/sellerSchema");

const sellerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate email and password
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // Find the seller by email
        const seller = await SellerModel.findOne({ email: email }).select('+password');
        if (!seller) {
            return res.status(400).json({ message: "Seller not found" });
        }

        const matchedPassword = await bcrypt.compare(password, seller.password);
        if (!matchedPassword) {
            return res.status(400).json({ message: "Invalid password" });
        }

        // Generate token
        const token = await createToken({ id: seller._id, role: seller.role });

        // Set cookie
        res.cookie("accessToken", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });

        // Send success response
        return res.status(200).json({ success: true, message: "Seller logged in successfully", seller, token });
    } catch (error) {
        console.log(error);  // Log the error for debugging
        return res.status(500).json({ message: "Seller Login failed...", error: error.message });
    }
};

module.exports = sellerLogin;
