import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const SingleCategory = ({ category, index, loading }) => {



    return (
        <tr className="hover:bg-indigo-100 transition duration-200">
            <td className="px-6 py-4 border-b border-indigo-200">{index + 1}</td>
            <td className="px-6 py-4 border-b border-indigo-200">
                <img
                    src={category.categoryImage}
                    alt="Category"
                    className="h-16 w-16 rounded-full border-2 border-indigo-300"
                />
            </td>
            <td className="px-6 py-4 border-b border-indigo-200">{category.categoryName}</td>
            <td className="px-6 py-4 border-b border-indigo-200">
                <Link to="#" className="mr-2 text-indigo-500 hover:text-indigo-700">
                    <FaEdit />
                </Link>
                <Link to="#" className="ml-2 text-red-500 hover:text-red-700">
                    <FaTrashCan />
                </Link>
            </td>
        </tr>
    );
};

export default SingleCategory;
