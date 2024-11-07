const OrderSearch = ({ searchData, setSearchData }) => {
    return (
        <input
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            className="px-4 py-2 border border-indigo-300 bg-white text-indigo-700 rounded-lg shadow focus:border-indigo-600 focus:outline-none"
            placeholder="🔍 Search orders..."
            type="text"
        />
    );
};

export default OrderSearch;
