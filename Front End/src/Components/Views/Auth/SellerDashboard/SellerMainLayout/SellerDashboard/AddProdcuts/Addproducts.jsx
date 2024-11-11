import { Link } from "react-router-dom"
import AddprodcutForm from "./AddprodcutForm"

const Addproducts = () => {
    return (
        <div className="px-2 lg:px-7 pt-5">
            <div className="w-full p-4 rounded-md">
                <div className="flex justify-between items-center pb-4">

                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add New Product</h2>


                    <Link to="/all-products" className="hover:shadow-blue-500 rounded-sm px-7 py-2 my-2 bg-blue-500 text-white">
                        All products
                    </Link>
                </div>
                <AddprodcutForm />
            </div>
        </div>
    )
}

export default Addproducts
