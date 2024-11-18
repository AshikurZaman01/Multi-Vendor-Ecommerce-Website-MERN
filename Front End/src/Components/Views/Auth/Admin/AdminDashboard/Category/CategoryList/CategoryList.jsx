import { FaSpinner } from "react-icons/fa";
import SingleCategory from "./SingleCategory";

const CategoryList = ({ categories, loading }) => {

    if (loading) {
        return (
            <tr>
                <td colSpan="4" className="text-center">
                    <FaSpinner className="animate-spin text-2xl mx-auto" />
                </td>
            </tr>
        );
    }


    return (
        <div className="max-h-[400px] overflow-y-auto scrollbar-hide rounded-lg shadow-lg p-4">
            <table className="w-full text-center bg-indigo-50 rounded-lg">
                <thead className="sticky top-0 bg-indigo-500 text-white shadow">
                    <tr>
                        <th className="px-6 py-3 font-semibold">No</th>
                        <th className="px-6 py-3 font-semibold">Image</th>
                        <th className="px-6 py-3 font-semibold">Name</th>
                        <th className="px-6 py-3 font-semibold">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        categories.map((category, index) =>
                            <SingleCategory key={category._id} category={category} index={index} loading={loading}></SingleCategory>)
                    }
                </tbody>

            </table>
        </div>
    );
}

export default CategoryList;
