import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ pageNumber, setPageNumber, perPageItems, totalItems, showItem }) => {

    let totalPage = Math.ceil(totalItems / perPageItems);
    let startPage = pageNumber;

    let diff = totalPage - pageNumber;
    if (diff < showItem) {
        startPage = totalPage - showItem;
    }

    let endPage = startPage < 0 ? 0 : startPage + showItem;

    if (startPage <= 0) {
        startPage = 1
    }

    if (endPage > totalPage) {
        endPage = totalPage;
    }

    return (
        <div className="flex justify-center items-center py-4">

            <ul className="flex gap-2 text-sm">

                {/* Previous Button */}
                {pageNumber > 1 && (
                    <li>
                        <button
                            onClick={() => setPageNumber(pageNumber - 1)}
                            className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
                        >
                            <FaChevronLeft />
                        </button>
                    </li>
                )}

                {/* Page Number Buttons */}
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => setPageNumber(page)}
                            className={`px-4 py-2 text-gray-700 rounded-lg transition duration-200 
                                ${page === pageNumber ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                        >
                            {page}
                        </button>
                    </li>
                ))}

                {/* Next Button */}
                {pageNumber < totalPage && (
                    <li>
                        <button
                            onClick={() => setPageNumber(pageNumber + 1)}
                            className="flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition duration-200"
                        >
                            <FaChevronRight />
                        </button>
                    </li>
                )}

            </ul>

        </div>
    )
}

export default Pagination;
