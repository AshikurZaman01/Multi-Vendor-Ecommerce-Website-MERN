const mongoose = require('mongoose');

const sellerCustomerSchema = new mongoose.Schema({

    myId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Seller',
        required: true
    },
    myFriends: {
        type: Array,
        default: []
    }

}, { timestamps: true })

const SellerCustomerModel = mongoose.model('SellerCustomer', sellerCustomerSchema);
module.exports = SellerCustomerModel;