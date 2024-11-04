import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import SocialLoginButtons from "../SocialLoginButtons/SocialLoginButtons";

const LoginForm = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = user;

        console.log({ email, password });
        // Handle login logic here, e.g., calling an API endpoint
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Email"
                    required
                />
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={user.password}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Password"
                    required
                />
            </div>

            <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
                Login
            </button>

            <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-blue-500 hover:underline">
                        Register here
                    </Link>
                </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
                <div className="w-2/5 bg-slate-700 h-[1px]"></div>
                <div className="w-auto flex justify-center items-center">
                    <span className="pb-1 font-bold mx-2 uppercase">or</span>
                </div>
                <div className="w-2/5 bg-slate-700 h-[1px]"></div>
            </div>

            <SocialLoginButtons></SocialLoginButtons>

        </form>
    );
};

export default LoginForm;
