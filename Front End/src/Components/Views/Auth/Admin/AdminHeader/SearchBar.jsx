import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className="relative w-[320px]">
            <input 
                type="text" 
                name="search" 
                placeholder="Search for anything..."
                className="w-full py-2 pl-12 pr-4 bg-gradient-to-r from-[#ffe8e4] to-[#ffe0da] text-gray-800 rounded-full border-2 border-transparent outline-none shadow-md focus:border-[#ee7447] focus:shadow-lg transition-all duration-300 ease-in-out"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#D68060] text-lg pointer-events-none" />
        </div>
    )
}

export default SearchBar;
