import { FaBox } from "react-icons/fa"

const SellerStatus = () => {
    return (
        <div className="mt-8">
            <div className="flex flex-wrap gap-6 p-4 bg-gray-100 rounded-lg">
                <div className="flex-1">
                    <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <FaBox className="text-blue-500" />
                        Seller 1 Order:
                    </h2>
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700">Pending</span>
                </div>

                {/* Additional Product Info */}
                <div className="flex items-center gap-4 flex-1 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition p-4">
                    <img
                        className="w-16 h-16 rounded-lg object-cover"
                        src="https://plus.unsplash.com/premium_photo-1673356301514-2cad91907f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHNoaXJ0fGVufDB8fDB8fHww"
                        alt="Product"
                    />
                    <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-800">Product Name</h2>
                        <p className="text-gray-600">
                            <span>Brand: Easy</span> <br />
                            <span>Quantity: 3</span>
                        </p>
                    </div>
                    <div className="text-lg font-semibold text-gray-800">$150</div>
                </div>
            </div>
        </div>
    )
}

export default SellerStatus