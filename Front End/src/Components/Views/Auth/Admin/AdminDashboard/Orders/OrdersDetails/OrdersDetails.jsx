import { FaBox, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import SellerStatus from './SellerStatus';
import OrderProdList from './OrderProdList';

const OrdersDetails = () => {
    return (
        <div className="px-4 lg:px-10 py-6 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">

                {/* Header Section */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Order Details</h2>
                    <select className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 outline-none">
                        <option value="">Pending</option>
                        <option value="">Processing</option>
                        <option value="">Warehouse</option>
                        <option value="">Placed</option>
                        <option value="">Cancelled</option>
                    </select>
                </div>

                {/* Order Info */}
                <div className="flex justify-between items-center mb-6">
                    <div className="text-lg text-gray-600">
                        <h2 className="font-semibold">Order #3445</h2>
                        <p className="text-sm">Date: 3 Jan 2024</p>
                    </div>
                    <div className="text-lg font-semibold text-green-600 flex items-center gap-2">
                        <FaCheckCircle className="text-green-500" />
                        Paid
                    </div>
                </div>

                {/* Delivery Details */}
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-gray-700">Deliver To:</h3>
                    <p className="text-gray-600 mb-2">Raju Khan</p>
                    <p className="text-gray-600">
                        Dhaka-1000, Bangladesh <br />
                        Phone: +88-09666911463 <br />
                        Email: vcoffice@du.ac.bd
                    </p>
                </div>

                {/* Product List */}
                <OrderProdList />

                {/* Seller Status */}
                <SellerStatus />

                {/* Total Price */}
                <div className="flex justify-end mt-8">
                    <h2 className="text-2xl font-bold text-gray-800">Total Price: $450</h2>
                </div>
            </div>
        </div>
    );
};

export default OrdersDetails;
