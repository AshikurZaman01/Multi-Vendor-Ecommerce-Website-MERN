import { LuArrowBigDownDash } from "react-icons/lu";
import { Link } from 'react-router-dom';

const OrdersList = () => {
    return (
        <div className="relative mt-5 overflow-x-auto shadow-lg rounded-lg">
            <div className="w-full bg-white text-sm text-left rounded-lg">
                <div className="text-sm text-gray-500 uppercase border-b border-gray-300 bg-gray-100">

                    <div className="flex justify-between items-center px-4 py-3">
                        <div className="font-bold text-gray-800 w-[20%]">Order ID</div>
                        <div className="font-bold text-gray-800 w-[20%]">Price</div>
                        <div className="font-bold text-gray-800 w-[20%]">Payment Status</div>
                        <div className="font-bold text-gray-800 w-[20%]">Order Status</div>
                        <div className="font-bold text-gray-800 w-[20%]">Action</div>
                        <div className="w-[5%] flex justify-center">
                            <LuArrowBigDownDash className="text-2xl text-gray-600 cursor-pointer hover:text-gray-800 transition duration-200" />
                        </div>
                    </div>
                </div>

                {/* Order Row */}
                <div className="mt-3 px-4 py-2 border-b border-gray-200 hover:bg-gray-50 transition duration-200">

                    <div className="flex justify-between items-center">
                        <div className="text-gray-700 w-[20%] font-medium">5422</div>
                        <div className="text-gray-700 w-[20%] font-medium">$890</div>
                        <div className="text-yellow-500 w-[20%] font-medium">Pending</div>
                        <div className="text-yellow-500 w-[20%] font-medium">Pending</div>
                        <div className="w-[20%] text-center">
                            <Link to="#" className="text-blue-600 hover:underline">View</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersList;
