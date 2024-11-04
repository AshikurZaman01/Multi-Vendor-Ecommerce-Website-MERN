import { IoLogoGoogle } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";

const SocialLoginButtons = () => {
    return (
        <div className='flex justify-center items-center gap-2'>

            <div className='w-[135px] h-[35px] flex justify-center items-center rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer '>
                <span><IoLogoGoogle className="text-white  text-xl" /></span>
            </div>

            <div className='w-[135px] h-[35px] flex justify-center items-center rounded-md bg-blue-700 shadow-lg hover:shadow-orange-700/50 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer '>
                <span><FaFacebookF  className="text-white  text-xl" /></span>
            </div>

        </div>
    )
}

export default SocialLoginButtons