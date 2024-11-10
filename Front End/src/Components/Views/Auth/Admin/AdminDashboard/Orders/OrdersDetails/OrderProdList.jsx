
const OrderProdList = () => {
    return (
        <div className="space-y-6">
        {[1, 2].map((item) => (
            <div
                key={item}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:bg-gray-100 transition"
            >
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
        ))}
    </div>
    )
}

export default OrderProdList