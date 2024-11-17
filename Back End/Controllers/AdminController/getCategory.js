const CategoryModel = require("../../Models/CategoryModel/CategorySchema");

const getCategory = async (req, res) => {

    const { perPage, page, searchValue } = req.query;

    const skipPage = parseInt(perPage) * (parseInt(page) - 1);

    try {

        if (searchValue) {
            const categories = await CategoryModel.find({
                $or: [
                    { categoryName: { $regex: searchValue, $options: 'i' } },
                    { categorySlug: { $regex: searchValue, $options: 'i' } }
                ]
            })
                .skip(skipPage)
                .limit(parseInt(perPage))
                .sort({ createdAt: -1 });

            const totalCategories = await CategoryModel.find({
                $or: [
                    { categoryName: { $regex: searchValue, $options: 'i' } },
                    { categorySlug: { $regex: searchValue, $options: 'i' } }
                ]
            }).countDocuments();

            res.status(200).json({
                success: true,
                message: "Categories Fetched Successfully",
                categories: categories,
                totalCategories: totalCategories
            })
        } else {

            const categories = await CategoryModel.find({}).skip(skipPage).limit(parseInt(perPage)).sort({ createdAt: -1 });

            const totalCategories = await CategoryModel.find({}).countDocuments();

            res.status(200).json({
                success: true,
                message: "Categories Fetched Successfully",
                categories: categories,
                totalCategories: totalCategories
            })

        }



    } catch (error) {
        res.status(500).json({
            message: "Something Went Wrong",
            error: error.message
        }
        )
    }

}
module.exports = getCategory;