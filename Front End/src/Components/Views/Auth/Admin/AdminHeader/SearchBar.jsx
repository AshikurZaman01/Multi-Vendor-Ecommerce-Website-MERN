// SearchBar.js
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className="relative w-full max-w-[400px]">
            <input
                type="text"
                name="search"
                placeholder="Search for anything..."
                className="w-full py-2 pl-12 pr-4 bg-gradient-to-r from-[#ffe4e4] to-[#ffded2] text-gray-700 rounded-full border-2 border-transparent outline-none shadow-md focus:border-[#ff6b4a] focus:shadow-lg transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#ffd7d7] hover:to-[#ffd0c8]"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#d6785b] text-lg pointer-events-none" />
        </div>
    );
}

export default SearchBar;
