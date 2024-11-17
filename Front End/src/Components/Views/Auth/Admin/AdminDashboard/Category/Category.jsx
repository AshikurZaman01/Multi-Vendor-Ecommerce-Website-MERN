import { useEffect, useState } from "react";
import CategoryPerPage from "./CategoryPerPage";
import CategorySearch from "./CategorySearch";
import AddCategory from "./AddCategory";
import CategoryList from "./CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, msgClear } from "../../../../../../Redux/features/categorySlice";
import toast from "react-hot-toast";

const Category = () => {

    const dispatch = useDispatch();
    const { errorMsg, loading, successMsg } = useSelector((state) => state.category)


    const [currentPage, setCurrentPage] = useState(1);
    const [searchData, setSearchData] = useState("");
    const [perPageItems, setPerPageItems] = useState(5);


    const [category, setCategory] = useState({
        categoryImage: '',
        categoryName: ''
    })

    useEffect(() => {
        if (successMsg) {
            toast.success(successMsg);
            dispatch(msgClear())
        }
        if (errorMsg) {
            toast.error(errorMsg);
            dispatch(msgClear())

        }
    }, [successMsg, errorMsg, dispatch]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!category.categoryName || !category.categoryImage) {
            toast.error('Please provide both a category name and an image.');
            return;
        }

        const formData = new FormData();
        formData.append('categoryName', category.categoryName);
        formData.append('categoryImage', category.categoryImage);

        await dispatch(addCategory(category));

        // Reset the category state and image preview
        setCategory({
            categoryImage: '',
            categoryName: ''
        });

        // Reset the image preview
        const imagePreview = document.getElementById("imagePreview");
        const imagePlaceholder = document.getElementById("imagePlaceholder");
        if (imagePreview) {
            imagePreview.src = ''; // Clear the preview image
            imagePreview.classList.add("hidden");
        }
        if (imagePlaceholder) {
            imagePlaceholder.classList.remove("hidden");
        }

        const fileInput = document.getElementById("categoryImage");
        if (fileInput) {
            fileInput.value = ''; // Clear the file input
        }
    };


    return (
        <div className="px-4 lg:px-8 py-6 bg-gray-50 min-h-screen">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8">

                {/* Category List Section */}
                <div className="w-full lg:w-7/12 bg-white p-6 rounded-lg shadow-lg order-2 md:order-1 lg:order-1">

                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                        <CategoryPerPage setPerPageItems={setPerPageItems} />
                        <CategorySearch searchData={searchData} setSearchData={setSearchData} />
                    </div>

                    <CategoryList />

                </div>

                {/* Add Category Section */}
                <div className="w-full lg:w-5/12 bg-blue-100 p-6 rounded-lg shadow-lg order-1 md:order-2 ">
                    <AddCategory category={category} setCategory={setCategory} handleSubmit={handleSubmit} loader={loading} />
                </div>

            </div>
        </div>
    );
}

export default Category;
