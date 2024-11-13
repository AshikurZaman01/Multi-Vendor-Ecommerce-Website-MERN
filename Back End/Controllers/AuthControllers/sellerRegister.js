const SellerModel = require("../../Models/SellerModel/sellerSchema");
const bcrypt = require("bcrypt");

const sellerRegister = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        // Validate input fields
        if (!name) {
            return res.status(400).json({ message: "Name is required" }); // Add return to stop execution
        }
        if (!email) {
            return res.status(400).json({ message: "Email is required" }); // Add return to stop execution
        }
        if (!password) {
            return res.status(400).json({ message: "Password is required" }); // Add return to stop execution
        }

        // Check if seller already exists
        const getSeller = await SellerModel.findOne({ email: email });

        if (getSeller) {
            return res.status(400).json({ message: "Seller already exists" }); // Add return to stop execution
        }

        // Create new seller
        const seller = new SellerModel({
            name: name,
            email: email,
            password: await bcrypt.hash(password, 10),
            method: "Manually",
            shopInfo: {}
        });

        // Save the seller to the database
        await seller.save();


        // Send success response
        return res.status(200).json({ success: true, message: "Seller Register Success", seller: seller });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: "Seller Register Failed", error: error.message });
    }

};

module.exports = sellerRegister;
