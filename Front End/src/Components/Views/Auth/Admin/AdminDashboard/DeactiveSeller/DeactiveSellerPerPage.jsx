
const DeactiveSellerPerPage = ({ setPerPageItems }) => {
    return (
        <select
            onChange={(e) => setPerPageItems(Number(e.target.value))}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto"
        >
            <option value="5">5 items</option>
            <option value="10">10 items</option>
            <option value="20">20 items</option>
        </select>
    )
}

export default DeactiveSellerPerPage