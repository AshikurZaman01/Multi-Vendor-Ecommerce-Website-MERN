import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const CategorySelector = ({ category, setCategory, categories }) => {
    const [cateShow, setCateShow] = useState(false);
    const [categorySearch, setCategorySearch] = useState('');

    const filteredCategories = categories.filter(categoryItem =>
        categoryItem.name.toLowerCase().includes(categorySearch.toLowerCase())
    );

    const resetCategorySearch = () => {
        setCategorySearch('');
    };

    return (
        <div className="relative flex flex-col gap-2">
            <label htmlFor="category" className="text-lg font-medium text-gray-700">Category</label>
            <div className="relative">
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategorySearch(e.target.value)}
                    className="px-4 py-2 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-300"
                    placeholder="Search for a category"
                    onFocus={() => setCateShow(true)}
                />
                {categorySearch && (
                    <button
                        type="button"
                        onClick={resetCategorySearch}
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                    >
                        <IoMdCloseCircle size={20} />
                    </button>
                )}
            </div>

            {cateShow && filteredCategories.length > 0 && (
                <div className="absolute z-10 w-full bg-white shadow-md rounded-lg mt-2 max-h-48 overflow-y-auto">
                    {filteredCategories.map((item, indx) => (
                        <span
                            key={indx}
                            onClick={() => {
                                setCategory(item.name);
                                setCateShow(false);
                            }}
                            className="block px-4 py-2 text-gray-700 hover:bg-blue-100 cursor-pointer transition duration-200"
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategorySelector;
