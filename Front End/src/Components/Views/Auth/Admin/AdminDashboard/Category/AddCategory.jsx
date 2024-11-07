import { CiSquarePlus } from "react-icons/ci";

const AddCategory = () => {
    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mt-10">
            <div className="text-center py-2 text-blue-600 font-semibold text-xl">
                <h1>Add New Category</h1>
            </div>

            <form className="space-y-5 mt-5">
                <div className="flex flex-col gap-y-2">
                    <label htmlFor="categoryName" className="text-blue-600 text-sm font-semibold">Category Name</label>
                    <input
                        type="text"
                        name="categoryName"
                        id="categoryName"
                        placeholder="Enter Category Name"
                        className="w-full border-b-2 border-gray-300 py-2 px-2 focus:border-blue-600 outline-none transition duration-300"
                    />
                </div>

                <div className="flex flex-col gap-y-2">
                    <label htmlFor="categoryImage" className="text-blue-600 text-sm font-semibold">Category Image</label>
                    <div className="flex items-center justify-center">
                        <label
                            htmlFor="categoryImage"
                            className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden border border-dashed border-blue-600 cursor-pointer transition duration-300 hover:bg-gray-200"
                        >
                            <img id="imagePreview" src="" alt="Category Preview" className="w-full h-full object-cover hidden" />
                            <span id="imagePlaceholder" className="text-blue-600 text-sm">Select Image</span>
                        </label>
                        <input
                            type="file"
                            id="categoryImage"
                            name="categoryImage"
                            className="hidden"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onload = (event) => {
                                        const imagePreview = document.getElementById("imagePreview");
                                        const imagePlaceholder = document.getElementById("imagePlaceholder");
                                        imagePreview.src = event.target.result;
                                        imagePreview.classList.remove("hidden");
                                        imagePlaceholder.classList.add("hidden");
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md font-medium flex items-center justify-center gap-2 transition duration-300 hover:bg-blue-700"
                    >
                        Add Category
                        <CiSquarePlus size={20} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCategory;
