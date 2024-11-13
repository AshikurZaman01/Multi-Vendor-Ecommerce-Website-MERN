import { useState } from "react";
import ImageUploader from "../../AddProdcuts/ImageUploader";
import CategorySelector from "../../AddProdcuts/CategorySelector";

const EditProduct = () => {

    const [state, setState] = useState({
        name: '',
        description: '',
        discount: '',
        price: '',
        brand: '',
        stock: '',
        category: ''
    });

    const [categories] = useState([
        { name: 'Electronics' },
        { name: 'Clothing' },
        { name: 'Home Appliances' },
        { name: 'Furniture' },
        { name: 'Books' },
    ]);

    const inputHandler = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const [images, setImages] = useState([]);
    const [imageShow, setImageShow] = useState([]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!state.name || !state.price || !state.stock || !state.category) {
            alert("Please fill in all required fields");
            return;
        }

        // You could also add validation for price/stock being numbers if needed
        if (isNaN(state.price) || isNaN(state.stock)) {
            alert("Price and stock must be valid numbers");
            return;
        }

        // Assuming you want to save the data or call an API to submit the product details
        console.log('Product details submitted:', state);

        // After submission logic (clear form, show success message, etc.)
        setState({
            name: '',
            description: '',
            discount: '',
            price: '',
            brand: '',
            stock: '',
            category: ''
        });
        setImages([]);
        setImageShow([]);
    };

    return (
        <div className="w-full max-w-2xl mx-auto  shadow-2xl bg-gray-300 rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Edit Product</h2>

            <form onSubmit={handleSubmit}>
                {/* Product Name and Brand */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-lg font-medium text-gray-700">Product Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={state.name}
                            onChange={inputHandler}
                            className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            placeholder="Enter product name"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="brand" className="text-lg font-medium text-gray-700">Brand Name</label>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            value={state.brand}
                            onChange={inputHandler}
                            className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            placeholder="Enter brand name"
                        />
                    </div>
                </div>

                {/* Category and Stock */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <CategorySelector
                        category={state.category}
                        setCategory={(category) => setState({ ...state, category })}
                        categories={categories}
                    />
                    <div className="flex flex-col gap-2">
                        <label htmlFor="stock" className="text-lg font-medium text-gray-700">Stock</label>
                        <input
                            type="number"
                            id="stock"
                            name="stock"
                            value={state.stock}
                            onChange={inputHandler}
                            className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            placeholder="Enter stock quantity"
                        />
                    </div>
                </div>

                {/* Price and Discount */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="price" className="text-lg font-medium text-gray-700">Price</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={state.price}
                            onChange={inputHandler}
                            className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            placeholder="Enter product price"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="discount" className="text-lg font-medium text-gray-700">Discount</label>
                        <input
                            type="text"
                            id="discount"
                            name="discount"
                            value={state.discount}
                            onChange={inputHandler}
                            className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                            placeholder="Enter discount"
                        />
                    </div>
                </div>

                {/* Product Description */}
                <div className="flex flex-col gap-2 mb-6">
                    <label htmlFor="description" className="text-lg font-medium text-gray-700">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={state.description}
                        onChange={inputHandler}
                        className="px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 h-32 resize-none"
                        placeholder="Enter product description"
                    ></textarea>
                </div>

                {/* Image Upload */}
                <ImageUploader
                    images={images}
                    setImages={setImages}
                    imageShow={imageShow}
                    setImageShow={setImageShow}
                />

                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition duration-300"
                    >
                        Update Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;
