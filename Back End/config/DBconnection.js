
const mongoose = require('mongoose')

const DBConnection = async () => {
    try {

        await mongoose.connect('mongodb://localhost:27017/Multi-Vendor-Ecommerce')
            .then(() => {
                console.log('Connected to database')
            })
            .catch((err) => {
                console.log(err)
            })

    } catch (error) {
        console.log(error)
    }
}


module.exports = DBConnection;