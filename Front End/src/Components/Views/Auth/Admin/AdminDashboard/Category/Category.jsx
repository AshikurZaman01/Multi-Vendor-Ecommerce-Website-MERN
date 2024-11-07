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
        <div className="px-4 lg:px-8 pt-4">

            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 h-full">
                <div className="w-full lg:w-7/12 bg-gray-300 p-4 rounded-lg shadow-lg">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-4">
                        <CategoryPerPage setPerPageItems={setPerPageItems} />
                        <CategorySearch searchData={searchData} setSearchData={setSearchData} />
                    </div>
                    <CategoryList />
                </div>

                <div className="w-full lg:w-5/12 bg-blue-100 p-6 rounded-lg shadow-lg">
                    <AddCategory />
                </div>
            </div>

        </div>
    );
}

export default Category;
