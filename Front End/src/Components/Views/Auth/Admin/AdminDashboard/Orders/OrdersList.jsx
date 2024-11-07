import { LuArrowBigDownDash } from "react-icons/lu";

const OrdersList = ({ perPageItems, currentPage, searchData }) => {
    const orders = [
        { id: "5422", price: "$890", paymentStatus: "Pending", orderStatus: "Processing" },
        { id: "6543", price: "$320", paymentStatus: "Completed", orderStatus: "Delivered" },
        { id: "7654", price: "$410", paymentStatus: "Pending", orderStatus: "Shipped" },
        { id: "8765", price: "$220", paymentStatus: "Completed", orderStatus: "Delivered" },
        { id: "9876", price: "$650", paymentStatus: "Pending", orderStatus: "Processing" },
        // More orders here...
    ];

    const filteredOrders = orders.filter((order) =>
        order.id.includes(searchData)
    );

    return (
        <div className="mt-5 overflow-x-auto rounded-lg bg-white shadow-lg">
            <div className="divide-y divide-gray-200">
                <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-between px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white uppercase text-xs font-bold border-b border-indigo-300">
                    <span>Order ID</span>
                    <span>Price</span>
                    <span>Payment Status</span>
                    <span>Order Status</span>
                </div>
                {filteredOrders.slice((currentPage - 1) * perPageItems, currentPage * perPageItems).map((order, index) => (
                    <div
                        key={order.id}
                        className={`grid grid-cols-2 sm:grid-cols-4 justify-between items-center p-4 text-indigo-900 transition duration-200 
                            ${index % 4 < 2 ? "bg-indigo-50" : "bg-purple-50"} 
                            hover:bg-indigo-100 shadow-sm rounded-lg mb-2`}
                    >
                        <span className="font-medium">{order.id}</span>
                        <span>{order.price}</span>
                        <span
                            className={`px-2 py-1 rounded-full font-semibold ${
                                order.paymentStatus === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                            }`}
                        >
                            {order.paymentStatus}
                        </span>
                        <span
                            className={`px-2 py-1 rounded-full font-semibold ${
                                order.orderStatus === "Delivered" ? "bg-blue-100 text-blue-800" : "bg-pink-100 text-pink-800"
                            }`}
                        >
                            {order.orderStatus}
                        </span>
                        <button className="sm:hidden text-indigo-600 hover:text-indigo-800 transition duration-200 font-semibold">View</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrdersList;
