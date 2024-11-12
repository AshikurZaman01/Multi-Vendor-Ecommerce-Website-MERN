import { CiSquarePlus } from "react-icons/ci"
import { LuArrowBigDownDash } from "react-icons/lu"
import { Link } from "react-router-dom"

const SellerOrderList = () => {
    return (
        <div className="relative mt-5 overflow-x-auto shadow-lg rounded-lg">
            <div className="w-full bg-white text-sm rounded-lg">
                {/* Header */}
                <div className="text-sm text-gray-500 uppercase border-b border-gray-300 bg-gray-100">
                    <div className="grid grid-cols-6 gap-4 px-4 py-3">
                        <div className="font-bold text-gray-800">Order ID</div>
                        <div className="font-bold text-gray-800">Price</div>
                        <div className="font-bold text-gray-800">Payment Status</div>
                        <div className="font-bold text-gray-800">Order Status</div>
                        <div className="font-bold text-gray-800">Action</div>
                    </div>
                </div>

                {/* Order Row */}
                <div className="mt-3 px-4 py-2 border-b border-gray-200 hover:bg-gray-50 transition duration-200">
                    <div className="grid grid-cols-6 gap-4 items-center">
                        <div className="text-gray-700 font-medium">5422</div>
                        <div className="text-gray-700 font-medium">$890</div>
                        <div className="text-yellow-500 font-medium">Pending</div>
                        <div className="text-yellow-500 font-medium">Pending</div>

                        {/* View Button */}
                        <div className="text-center">
                            <Link
                                to={`/admin/orderDetails/3`}
                                className="text-blue-600 hover:text-blue-800 font-medium"
                            >
                                View
                            </Link>
                        </div>

                      
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerOrderList