import { FaSearch } from "react-icons/fa"

const SellerSearchbar = () => {
    return (
        <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px]">
            <input
                type="text"
                name="search"
                placeholder="Search..."
                className="w-full py-2 pl-12 pr-4 bg-white text-gray-700 rounded-full border-2 border-[#D5E8F6] outline-none shadow-md focus:border-[#4A90E2] focus:shadow-lg transition-all duration- 300 ease-in-out hover:bg-[#F4F4F4]"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4A90E2] text-lg pointer-events-none" />
        </div>
    )
}

export default SellerSearchbar