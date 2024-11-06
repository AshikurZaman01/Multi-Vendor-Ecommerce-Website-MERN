import { Link } from "react-router-dom";

const RecentSellerMsg = () => {
    return (
        <div className="w-full p-4 rounded-lg shadow-lg mt-7 transition-all duration-300 hover:scale-105 bg-white ">

            <div className="w-full ">

                <div className="mt-4 flex justify-between items-center">
                    <h3 className="text-xl font-semibold">Recent Seller Messages</h3>
                    <Link className="font-semibold text-sm text-gray-500 hover:text-blue-400 hover:underline">
                        View All
                    </Link>
                </div>

                {/* Scrollable container */}
                <div className="overflow-y-auto h-[365px] mt-4 pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ">
                    {[...Array(4)].map((_, index) => (
                        <div key={index} className="flex flex-col gap-2 pt-4 text-white">
                            <ol className="relative border-1 border-slate-600 ml-4">
                                <li className="flex items-center justify-start gap-2">
                                    <div className="w-10 h-10 rounded-full">
                                        <img
                                            className="w-full rounded-full h-full shadow-lg"
                                            src="https://cdn-icons-png.flaticon.com/128/4140/4140047.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="p-3 w-full bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                                        <div className="flex justify-between items-center mb-2">
                                            <Link className="font-normal">Admin</Link>
                                            <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                                                2 days ago
                                            </time>
                                        </div>
                                        <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-800">
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
