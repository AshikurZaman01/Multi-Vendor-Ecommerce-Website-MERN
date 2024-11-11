import { FaBell } from "react-icons/fa"

const SellerProfile = () => {
    return (
        <div className="flex items-center gap-6">
            <div className="relative">
                <FaBell className="text-[#4A90E2] text-xl cursor-pointer hover:text-[#F39C12] transition duration-300" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center gap-3">
                <div className="text-right">
                    <h2 className="text-lg font-semibold text-gray-800">Ashik Peyal</h2>
                    <span className="text-sm font-normal text-gray-600">Seller</span>
                </div>
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="User  Avatar"
                        className="w-[48px] h-[48px] rounded-full border-2 border-[#4A90E2] object-cover transition-transform duration-300 hover:scale-105 shadow-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default SellerProfile