const formidable = require('formidable');
const generateSlug = require('../../Middlewear/GenerateSlug/generateSlug');

const addCategory = async (req, res) => {

    const form = new formidable.IncomingForm();


    try {

        form.parse(req, async (err, fields, files) => {

            if (err) {
                res.status(500).send({ message: "Error in Parsing Form Data" })
            }

            let  categoryName  = fields.categoryName[0];
            const categoryImage = files;
            const categorySlug = generateSlug(categoryName);



            console.log("categoryName : ", categoryName)
            console.log("categorySlug : ", categorySlug)
        })

    } catch (error) {
        res.status(500).json({
            message: "Error in Adding Category",
            error: error.message
        }
        )
    }

}
module.exports = addCategory;