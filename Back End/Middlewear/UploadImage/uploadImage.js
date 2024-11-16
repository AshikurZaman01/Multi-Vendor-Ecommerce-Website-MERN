const cloudinary = require('cloudinary').v2;

const uploadImage = async (req, res, next) => {

    try {

        if (req.files) {
            const file = req.files.file;

            if (file.mimetype !== "image/jpeg" && file.mimetype !== "image/png" && file.mimetype !== "image/jpg" && file.mimetype !== "image/gif") {
                return res.status(400).send({ message: "Only image files are allowed" });
            }


            const cloudinaryResponse = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: "ecommerce-category",
                use_filename: true,
                unique_filename: true
            })

            if (!cloudinaryResponse || cloudinaryResponse.error) {
                return res.status(500).send({ message: "Failed uploading image to cloudinary" })
            }

            req.body.image = {
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url
            }
        }
        next();

    } catch (error) {
        return res.status(500).send({ message: "Failed uploading image to cloudinary" })
    }

}
module.exports = uploadImage;