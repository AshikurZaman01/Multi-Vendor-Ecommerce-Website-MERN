import SellerLoginForm from "./SellerLoginForm"

const SellerLogin = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4">
            <div className="flex flex-col sm:flex-row rounded-lg w-full max-w-md overflow-hidden bg-white shadow-xl">
                <div className="p-8 w-full">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Seller Login</h2>
                    <SellerLoginForm />
                </div>
            </div>
        </div>
    )
}

export default SellerLogin