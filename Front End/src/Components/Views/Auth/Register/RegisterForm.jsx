import { useState } from "react";
import { Link } from "react-router-dom";
import SocialLoginButtons from "../SocialLoginButtons/SocialLoginButtons";

const RegisterForm = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });
    const [passwordStrength, setPasswordStrength] = useState('');

    const evaluatePasswordStrength = (password) => {
        if (password.length < 6) {
            setPasswordStrength('Too short');
        } else if (password.length < 8) {
            setPasswordStrength('Weak');
        } else if (/[A-Z]/.test(password) && /[0-9]/.test(password)) {
            setPasswordStrength('Strong');
        } else {
            setPasswordStrength('Moderate');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = user;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log({ name, email, password });
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));

        if (id === "password") evaluatePasswordStrength(value);
    };

    return (
        <form onSubmit={handleSubmit}>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={user.name}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Your Name"
                    required
                />
            </div>

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

            <div className="mb-4">
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
                <div className="mt-2">
                    <div
                        className={`h-2 rounded ${passwordStrength === 'Strong'
                            ? 'bg-green-500'
                            : passwordStrength === 'Moderate'
                                ? 'bg-yellow-500'
                                : passwordStrength === 'Weak'
                                    ? 'bg-orange-500'
                                    : 'bg-red-500'
                            }`}
                        style={{
                            width:
                                passwordStrength === ''
                                    ? '0%'
                                    : passwordStrength === 'Too short'
                                        ? '25%'
                                        : passwordStrength === 'Weak'
                                            ? '50%'
                                            : passwordStrength === 'Moderate'
                                                ? '75%'
                                                : '100%',
                        }}
                    ></div>
                    <p className="text-sm text-gray-600">{passwordStrength}</p>
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={user.confirmPassword}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Confirm Your Password"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                    Gender
                </label>
                <select
                    id="gender"
                    value={user.gender}
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                >
                    <option value="" disabled>Select your gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>



            <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
                Register
            </button>

            <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login here
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
    )
}

export default RegisterForm