const CategoryPerPage = ({ setPerPageItems }) => {
    return (
        <select
            onChange={(e) => setPerPageItems(Number(e.target.value))}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
    );
}

export default CategoryPerPage;
