const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({

    categoryName: {
        type: String,
        required: true,
    },

    categoryImage: {
        type: String,
        required: true,
    },

    categorySlug: {
        type: String,
        required: true,
    }

}, { timestamps: true });

categorySchema.index({
    name: "text",
});

const CategoryModel = mongoose.model("Category", categorySchema);
module.exports = CategoryModel;
