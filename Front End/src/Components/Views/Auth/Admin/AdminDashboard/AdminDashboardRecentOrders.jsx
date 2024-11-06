import { Link } from "react-router-dom";

const AdminDashboardRecentOrders = () => {
    return (
        <div className="w-full p-6 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-lg shadow-lg mt-10">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold">Recent Orders</h3>
                <Link
                    to="#"
                    className="font-semibold text-sm text-yellow-300 hover:text-yellow-400 hover:underline"
                >
                    View All
                </Link>
            </div>

            <div className="overflow-x-auto rounded-lg shadow-md">

                <table className="min-w-full text-left bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 rounded-lg">

                    <thead className="bg-purple-900 text-white uppercase text-xs font-semibold border-b border-purple-800">

                        <tr>
                            <th scope="col" className="py-3 px-6">Order Id</th>
                            <th scope="col" className="py-3 px-6">Price</th>
                            <th scope="col" className="py-3 px-6">Payment Status</th>
                            <th scope="col" className="py-3 px-6">Active</th>
                        </tr>

                    </thead>

                    <tbody className="text-white text-sm">

                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item, index) => (

                                <tr key={index} className="border-b border-purple-800 hover:bg-purple-800 transition-colors duration-200">

                                    <td className="py-4 px-6 font-medium whitespace-nowrap">#435</td>

                                    <td className="py-4 px-6 whitespace-nowrap">$500</td>

                                    <td className="py-4 px-6 whitespace-nowrap">
                                        <span className="px-2 py-1 bg-yellow-300 text-yellow-900 rounded-full font-semibold">
                                            Pending
                                        </span>
                                    </td>

                                    <td className="py-4 px-6">
                                        <button className="text-blue-200 font-semibold hover:text-blue-400 transition-colors duration-200">
                                            View
                                        </button>
                                    </td>
                                </tr>

                            )
                            )
                        }

                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default AdminDashboardRecentOrders;
