import { FaEdit } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import { IoEyeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const ProductList = () => {

    // Example product data with id dynamically assigned
    const products = [
        { id: 1, name: 'Tshirt', category: 'Cloths', price: 500, discount: '30%', stock: 350, imageUrl: 'https://img.freepik.com/free-vector/simple-flat-i-heart-you-valentine-s-day-t-shirt_742173-14411.jpg' },
        { id: 2, name: 'Jeans', category: 'Cloths', price: 600, discount: '25%', stock: 200, imageUrl: 'https://img.freepik.com/free-vector/simple-flat-i-heart-you-valentine-s-day-t-shirt_742173-14411.jpg' },
        { id: 3, name: 'Shoes', category: 'Footwear', price: 1000, discount: '20%', stock: 150, imageUrl: 'https://img.freepik.com/free-vector/simple-flat-i-heart-you-valentine-s-day-t-shirt_742173-14411.jpg' },
        { id: 4, name: 'Shirt', category: 'Cloths', price: 700, discount: '15%', stock: 250, imageUrl: 'https://img.freepik.com/free-vector/simple-flat-i-heart-you-valentine-s-day-t-shirt_742173-14411.jpg' },
        // Add more products here...
    ];

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
                    {products.map((product, index) => (
                        <tr key={product.id} className="hover:bg-indigo-100 transition duration-200">
                            <td className="px-6 py-4 border-b border-indigo-200">{index + 1}</td>
                            <td className="px-6 py-4 border-b border-indigo-200">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="h-16 w-16 rounded-full border-2 border-indigo-300"
                                />
                            </td>
                            <td className="px-6 py-4 border-b border-indigo-200">{product.name}</td>
                            <td className="px-6 py-4 border-b border-indigo-200">{product.category}</td>
                            <td className="px-6 py-4 border-b border-indigo-200">{product.price}</td>
                            <td className="px-6 py-4 border-b border-indigo-200">{product.discount}</td>
                            <td className="px-6 py-4 border-b border-indigo-200">{product.stock}</td>
                            <td className="px-6 py-4 border-b border-indigo-200">
                                <div className="flex justify-center items-center gap-2">
                                    <Link to={`/sellerMainLayout/editProduct/${product.id}`} className="mr-2 text-indigo-500 hover:text-indigo-700">
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
    );
};

export default ProductList;
