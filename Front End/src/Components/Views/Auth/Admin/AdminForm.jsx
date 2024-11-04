import { useState } from "react";
import toast from "react-hot-toast";

const AdminForm = () => {
    const [admin, setAdmin] = useState({ email: '', password: '' });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setAdmin((prevAdmin) => ({
            ...prevAdmin,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log(admin);
        toast.success('Login successful');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={admin.email}
                    onChange={handleInputChange}
                    className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                    placeholder="Enter your email"
                    required
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={admin.password}
                    onChange={handleInputChange}
                    className="shadow-md border border-gray-300 rounded-lg w-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
                    placeholder="Enter your password"
                    required
                />
            </div>

            <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-lg w-full transition duration-200"
            >
                Login
            </button>
        </form>
    );
};

export default AdminForm;
