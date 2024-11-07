const OrdersPerPage = ({ setPerPageItems }) => {
    return (
        <select 
            onChange={(e) => setPerPageItems(Number(e.target.value))} 
            className="w-full sm:w-auto px-4 py-2 bg-indigo-600 text-white border border-indigo-500 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
    );
};

export default OrdersPerPage;
