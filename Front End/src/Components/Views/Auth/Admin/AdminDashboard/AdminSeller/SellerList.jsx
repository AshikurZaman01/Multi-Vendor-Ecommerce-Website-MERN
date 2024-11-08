import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { FaTrashCan } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const SellerList = () => {
    return (
        <div className="overflow-x-auto max-h-[400px] rounded-lg shadow-lg">
            <table className="min-w-full text-center bg-indigo-50 rounded-lg">
                <thead className="sticky top-0 bg-indigo-500 text-white shadow uppercase">
                    <tr>
                        <th className="px-4 py-3 font-semibold">No</th>
                        <th className="px-4 py-3 font-semibold">Image</th>
                        <th className="px-4 py-3 font-semibold">Name</th>
                        <th className="px-4 py-3 font-semibold">Shop Name</th>
                        <th className="px-4 py-3 font-semibold">Payment</th>
                        <th className="px-4 py-3 font-semibold">Email</th>
                        <th className="px-4 py-3 font-semibold">Division</th>
                        <th className="px-4 py-3 font-semibold">District</th>
                        <th className="px-4 py-3 font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <tr
                            key={index}
                            className="hover:bg-indigo-100 transition duration-200"
                        >
                            <td className="px-4 py-2 border-b">{index + 1}</td>
                            <td className="px-4 py-2 border-b">
                                <img
                                    src="https://img.freepik.com/free-vector/simple-flat-i-heart-you-valentine-s-day-t-shirt_742173-14411.jpg"
                                    alt="Category"
                                    className="h-12 w-12 md:h-16 md:w-16 rounded-full border-2 border-indigo-300"
                                />
                            </td>
                            <td className="px-4 py-2 border-b">Ashik</td>
                            <td className="px-4 py-2 border-b">Ashik Shop</td>
                            <td className="px-4 py-2 border-b">Pending</td>
                            <td className="px-4 py-2 border-b">ashik@gmail.com</td>
                            <td className="px-4 py-2 border-b">Khulna</td>
                            <td className="px-4 py-2 border-b">Fulbari gate</td>
                            <td className="px-4 py-2 border-b">
                                <Link to="#" className="mr-2 text-indigo-500 hover:text-indigo-700">
                                    <FaEdit />
                                </Link>
                                <Link to="#" className="ml-2 text-red-500 hover:text-red-700">
                                    <FaTrashCan />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SellerList;
