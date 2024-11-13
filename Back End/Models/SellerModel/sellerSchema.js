const mongoose = require("mongoose");

const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    image: {
        type: String,
        default: ''
    },
    status: {
        type: String,
        default: 'pending'
    },
    role: {
        type: String,
        default: 'seller'
    },
    payment: {
        type: String,
        default: 'inactive'
    },
    method: {
        type: String,
        required: true
    },
    shopInfo: {
        type: Object,
        default: {}
    }

}, { timestamps: true })

const SellerModel = mongoose.model("Seller", sellerSchema);

module.exports = SellerModel;