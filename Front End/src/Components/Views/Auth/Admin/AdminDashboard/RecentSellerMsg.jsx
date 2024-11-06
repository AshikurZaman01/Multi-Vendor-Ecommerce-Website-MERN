import { Link } from "react-router-dom";

const RecentSellerMsg = () => {
    return (
        <div className="w-full p-4 rounded-lg shadow-lg mt-7 transition-all duration-300 hover:scale-105 bg-gradient-to-br from-purple-500 to-blue-500">

            <div className="w-full">

                <div className="mt-4 flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">Recent Seller Messages</h3>
                    <Link className="font-semibold text-sm text-yellow-300 hover:text-yellow-400 hover:underline">
                        View All
                    </Link>
                </div>

                {/* Scrollable container with hidden scrollbar */}
                <div className="overflow-y-auto h-[365px] mt-4 pr-2 scrollbar-hide">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="flex flex-col gap-2 pt-4">
                            <ol className="relative  ml-4">
                                
                                <li className="flex items-center gap-3">
                                    
                                    <div className="w-10 h-10 rounded-full shadow-lg border-2 border-yellow-300">
                                        <img
                                            className="w-full h-full rounded-full"
                                            src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png"
                                            alt=""
                                        />
                                    </div>

                                    <div className="p-3 w-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg border border-indigo-400 shadow-md">
                                        <div className="flex justify-between items-center mb-2">
                                            <Link className="font-medium text-yellow-200">Admin</Link>
                                            <time className="mb-1 text-xs font-normal text-gray-300 sm:order-last sm:mb-0">
                                                2 days ago
                                            </time>
                                        </div>
                                        <div className="p-2 text-sm font-normal bg-indigo-500 rounded-lg text-gray-100 border border-indigo-400 shadow-sm">
                                            How Are You
                                        </div>
                                    </div>
                                </li>

                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentSellerMsg;
