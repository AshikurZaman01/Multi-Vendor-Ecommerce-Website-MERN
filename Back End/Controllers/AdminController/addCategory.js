const formidable = require('formidable');
const generateSlug = require('../../Middlewear/GenerateSlug/generateSlug');
const CategoryModel = require('../../Models/CategoryModel/CategorySchema');
const cloudinaryConfig = require('../../config/CloudinaryConfig');
const cloudinary = require('cloudinary').v2;

cloudinaryConfig();

const addCategory = async (req, res) => {

    const form = new formidable.IncomingForm();

    try {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(500).send({ message: "Error parsing form data", error: err.message });
            }

            const categoryName = fields.categoryName ? fields.categoryName[0] : null;
            if (!categoryName || categoryName.trim() === "") {
                return res.status(400).send({ message: "Category name is required" });
            }

            const categorySlug = generateSlug(categoryName);

            const categoryImage = files.categoryImage;
            if (!categoryImage || !categoryImage[0]) {
                return res.status(400).send({ message: "Category image is required" });
            }

            const categoryImagePath = categoryImage[0].filepath;

            try {
                const cloudinaryResponse = await cloudinary.uploader.upload(categoryImagePath, {
                    folder: "MultiVendor-CategoryImages",
                    use_filename: true,
                    unique_filename: true
                });

                if (cloudinaryResponse.error) {
                    return res.status(500).send({ message: "Failed uploading image to Cloudinary", error: cloudinaryResponse.error });
                }

                const categoryImageURL = cloudinaryResponse.secure_url;

                const newCategory = new CategoryModel({
                    categoryName,
                    categorySlug,
                    categoryImage: categoryImageURL,
                });

                await newCategory.save();

                return res.status(200).json({
                    success: true,
                    message: "Category added successfully",
                    data: newCategory
                });

            } catch (uploadError) {
                console.error("Cloudinary upload error:", uploadError);
                return res.status(500).send({ success: false, message: "Error uploading image to Cloudinary", error: uploadError.message });
            }
        });
    } catch (error) {
        console.error("Error in adding category: ", error);

        return res.status(500).json({
            success: false, message: "Error adding category", error: error.message
        });
    }
};

module.exports = addCategory;
