import React, { useState } from 'react';
import Animation from './Animation';
import animationData from '../../../../assets/register.json';

const GradientRegistrationForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log({ name, email, password });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row rounded-lg w-full sm:w-3/4 overflow-hidden bg-white shadow-lg">

                {/* Form Portion */}
                <div className="p-8 sm:w-1/2 w-full">
                    <h2 className="text-3xl font-bold text-center mb-6">Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    evaluatePasswordStrength(e.target.value);
                                }}
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
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Confirm Your Password"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-gradient-to-l text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        >
                            Register
                        </button>
                    </form>
                </div>

                {/* Image Portion - Hidden on small screens */}
                <div className="p-8 w-full sm:w-1/2 hidden sm:block">
                    <Animation animationData={animationData} />
                </div>
            </div>
        </div>
    );
};

export default GradientRegistrationForm;
