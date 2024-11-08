
const SellerSearch = ({ searchData, setSearchData }) => {
    return (
        <input
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            className="px-4 py-2 border border-indigo-300 bg-white text-indigo-600 rounded-lg shadow focus:border-indigo-500 focus:outline-none"
            placeholder="🔍 Search categories..."
            type="text"
        />
    )
}

export default SellerSearch