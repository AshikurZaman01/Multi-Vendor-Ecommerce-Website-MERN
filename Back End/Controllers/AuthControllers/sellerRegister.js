const SellerCustomerModel = require("../../Models/ChatModel/sellerCustomerModel");
const SellerModel = require("../../Models/SellerModel/sellerSchema");
const bcrypt = require("bcrypt");
const createToken = require("../../Utils/CreateToken/tokenCreate");

const sellerRegister = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input fields
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        if (!password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // Check if seller already exists
        const getSeller = await SellerModel.findOne({ email: email });

        if (getSeller) {
            return res.status(400).json({ message: "Seller already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        if (!hashedPassword) {
            return res.status(500).json({ message: "Error hashing password" });
        }

        // Create new seller
        const seller = new SellerModel({
            name: name,
            email: email,
            password: hashedPassword,
            method: "Manually",
            shopInfo: {}
        });

        // Save the seller to the database
        await seller.save();

        const sellerCustomer = await SellerCustomerModel.create({
            myId: seller._id // Store the ObjectId here
        });

        if (!sellerCustomer) {
            return res.status(500).json({ message: "Failed to create SellerCustomer" });
        }

        const token = await createToken({ id: seller._id, role: seller.role });

        res.cookie("accessToken", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        })

        // Send success response
        return res.status(200).json({ success: true, message: "Seller Register Success", seller: seller, token: token });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Seller Register Failed", error: error.message });
    }
};

module.exports = sellerRegister;
