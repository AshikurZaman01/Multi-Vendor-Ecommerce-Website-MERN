import { TiEye } from "react-icons/ti";

const DeactiveSellerList = () => {
    return (
        <div className="overflow-x-auto max-h-[400px] rounded-lg shadow-lg">
            <table className="min-w-full text-center bg-white rounded-lg">
                {/* Table Header */}
                <thead className="sticky top-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md uppercase">
                    <tr>
                        <th className="px-4 py-3 font-semibold">No</th>
                        <th className="px-4 py-3 font-semibold">Image</th>
                        <th className="px-4 py-3 font-semibold">Name</th>
                        <th className="px-4 py-3 font-semibold">Email</th>
                        <th className="px-4 py-3 font-semibold">Payment Status</th>
                        <th className="px-4 py-3 font-semibold">Status</th>
                        <th className="px-4 py-3 font-semibold">Action</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <tr
                            key={index}
                            className="hover:bg-gradient-to-r from-indigo-50 to-indigo-100 transition duration-200"
                        >
                            <td className="px-4 py-3 border-b text-gray-700">{index + 1}</td>

                            {/* Image Column */}
                            <td className="px-4 py-3 border-b">
                                <img
                                    src="https://img.freepik.com/free-vector/simple-flat-i-heart-you-valentine-s-day-t-shirt_742173-14411.jpg"
                                    alt="Category"
                                    className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-indigo-400 shadow-sm"
                                />
                            </td>

                            {/* Name Column */}
                            <td className="px-4 py-3 border-b font-medium text-indigo-800">
                                Ashik
                            </td>

                            {/* Email Column */}
                            <td className="px-4 py-3 border-b text-gray-600">
                                ashik@example.com
                            </td>

                            {/* Payment Status Column */}
                            <td className="px-4 py-3 border-b">
                                <span className="px-3 py-1 text-sm font-semibold bg-yellow-100 text-yellow-800 rounded-full">
                                    Pending
                                </span>
                            </td>

                            {/* Status Column */}
                            <td className="px-4 py-3 border-b">
                                <span className="px-3 py-1 text-sm font-semibold bg-red-100 text-red-800 rounded-full">
                                    Deactive
                                </span>
                            </td>

                            {/* Action Column */}
                            <td className="px-4 py-3 border-b">
                                <button className="flex items-center justify-center w-7 h-7 bg-green-500  rounded hover:bg-green-600 transition">
                                    <TiEye size={20} className="text-white" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeactiveSellerList;
