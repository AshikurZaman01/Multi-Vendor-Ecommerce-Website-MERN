const AdminModel = require("../../Models/AdminModel/adminModel");

const getUser = async (req, res) => {

    const { id, role } = req;

    try {
        if (role === 'admin') {

            const user = await AdminModel.findById(id);
            res.status(200).json({ success: true, userInfo: user });

        } else {
            res.status(401).json({ success: false, message: "Seller" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "Not Found.", error: error.message });
    }

}
module.exports = getUser;