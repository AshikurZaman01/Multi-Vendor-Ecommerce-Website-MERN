import Animation from './Animation';
import animationData from '../../../../assets/register.json';
import RegisterForm from './RegisterForm';

const Register = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4 sm:p-8">

            <div className="flex flex-col sm:flex-row rounded-lg w-full sm:w-3/4 overflow-hidden bg-white shadow-lg">

                {/* Form Portion */}
                <div className="p-8 sm:w-1/2 w-full">
                    <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Register</h2>
                    <RegisterForm />
                </div>

                {/* Image Portion - Hidden on small screens */}
                <div className="p-8 w-full sm:w-1/2  hidden sm:block">
                    <Animation animationData={animationData} />
                </div>
            </div>
        </div>
    );
};

export default Register;
