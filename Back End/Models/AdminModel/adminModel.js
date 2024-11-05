const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'admin'
    }
}, { timestamps: true })

const AdminModel = mongoose.model('Admin', adminSchema);
module.exports = AdminModel;