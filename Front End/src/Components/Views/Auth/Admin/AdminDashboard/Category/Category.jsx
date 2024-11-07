import { useState } from "react";
import CategoryPerPage from "./CategoryPerPage";
import CategorySearch from "./CategorySearch";
import AddCategory from "./AddCategory";
import CategoryList from "./CategoryList";

const Category = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchData, setSearchData] = useState("");
    const [perPageItems, setPerPageItems] = useState(5);

    console.log(searchData);

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
                    <AddCategory />
                </div>
            </div>
        </div>
    );
}

export default Category;
