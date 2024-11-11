import { FaEdit } from 'react-icons/fa'
import { FaTrashCan } from 'react-icons/fa6'
import { IoEyeOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const ProdcutList = () => {
    return (
        <div className="max-h-[400px] overflow-y-auto scrollbar-hide rounded-lg shadow-lg p-4">
            <table className="w-full text-center bg-indigo-50 rounded-lg">
                <thead className="sticky top-0 bg-indigo-500 text-white shadow">
                    <tr>
                        <th className="px-6 py-3 font-semibold">No</th>
                        <th className="px-6 py-3 font-semibold">Image</th>
                        <th className="px-6 py-3 font-semibold">Name</th>
                        <th className="px-6 py-3 font-semibold">Category</th>
                        <th className="px-6 py-3 font-semibold">Price</th>
                        <th className="px-6 py-3 font-semibold">Discount</th>
                        <th className="px-6 py-3 font-semibold">Stock</th>
                        <th className="px-6 py-3 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                        <tr
                            key={index}
                            className="hover:bg-indigo-100 transition duration-200"
                        >
                            <td className="px-6 py-4 border-b border-indigo-200">{index + 1}</td>
                            <td className="px-6 py-4 border-b border-indigo-200">
                                <img
                                    src="https://img.freepik.com/free-vector/simple-flat-i-heart-you-valentine-s-day-t-shirt_742173-14411.jpg"
                                    alt="Category"
                                    className="h-16 w-16 rounded-full border-2 border-indigo-300"
                                />
                            </td>
                            <td className="px-6 py-4 border-b border-indigo-200">Tshirt</td>

                            <td className="px-6 py-4 border-b border-indigo-200">Cloths</td>

                            <td className="px-6 py-4 border-b border-indigo-200">500</td>

                            <td className="px-6 py-4 border-b border-indigo-200">30%</td>

                            <td className="px-6 py-4 border-b border-indigo-200">350</td>

                            <td className="px-6 py-4 border-b border-indigo-200">

                                <div className='flex justify-center items-center gap-2'>
                                    <Link to="#" className="mr-2 text-indigo-500 hover:text-indigo-700">
                                        <FaEdit />
                                    </Link>

                                    <Link to="#" className="ml-2 text-red-500 hover:text-red-700">
                                        <FaTrashCan />
                                    </Link>

                                    <Link to="#" className="ml-2 text-red-500 hover:text-red-700">
                                        <IoEyeOutline />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProdcutList