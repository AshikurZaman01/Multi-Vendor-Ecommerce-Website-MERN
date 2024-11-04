import Animation from "../Register/Animation"
import LoginForm from "./LoginForm"
import animationData from '../../../../assets/login.json';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row rounded-lg w-full sm:w-3/4 overflow-hidden bg-white shadow-lg">

        {/* Form Portion */}
        <div className="p-8 sm:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          <LoginForm></LoginForm>

        </div>

        {/* Image Portion - Hidden on small screens */}
        <div className="p-8 w-full sm:w-1/2 hidden sm:block">
          <Animation animationData={animationData} />
        </div>
      </div>
    </div>
  )
}

export default Login