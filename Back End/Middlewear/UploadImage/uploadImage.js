const cloudinary = require('cloudinary').v2;

const uploadImage = async (req, res, next) => {
    try {
        // Check if the file is included in the request
        if (req.files && req.files.image) {

            const { image } = req.files;

            // Validate image MIME types
            if (image.mimetype !== "image/jpeg" && image.mimetype !== "image/png" && image.mimetype !== "image/jpg" && image.mimetype !== "image/gif") {
                return res.status(400).send({ message: "Only image files are allowed" });
            }

            // Upload image to Cloudinary
            const cloudinaryResponse = await cloudinary.uploader.upload(image.tempFilePath, {
                folder: "Multi-Vaedor-Ecommerce",
                use_filename: true,
                unique_filename: true
            });

            if (!cloudinaryResponse || cloudinaryResponse.error) {
                return res.status(500).send({ message: "Failed uploading image to cloudinary" });
            }

            req.body.image = {
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url
            };
        }

        next();

    } catch (error) {
        console.error("Error uploading image:", error);  // Log error for debugging
        return res.status(500).send({ message: "Failed uploading image to cloudinary" });
    }
};

module.exports = uploadImage;
