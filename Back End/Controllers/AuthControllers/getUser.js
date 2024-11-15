const AdminModel = require("../../Models/AdminModel/adminModel");
const SellerModel = require("../../Models/SellerModel/sellerSchema");

const getUser = async (req, res) => {
    const { id, role } = req;

    try {
        if (role === 'admin') {

            const admin = await AdminModel.findById(id);
            return res.status(200).json({ success: true, message: "admin", userInfo: admin });

        } else if (role === 'seller') {

            const seller = await SellerModel.findById(id);
            return res.status(200).json({ success: true, message: "seller", userInfo: seller });

        } else {
            return res.status(400).json({ success: false, message: "Invalid role" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Error fetching user info.", error: error.message });
    }
};

module.exports = getUser;
