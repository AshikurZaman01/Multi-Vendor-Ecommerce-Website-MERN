import { FaRegWindowClose } from "react-icons/fa"
import UserList from "./UserList"

const Sidebar = ({ show, toggleSidebar, user, sellerId }) => {
    return (
        <div className={`w-[280px] h-full absolute z-10 transition-all duration-300 ${show ? "left-0" : "-left-[336px]"
            } md:left-0 md:relative bg-blue-600 overflow-y-auto`}
        >

            {/* close btn of sm device */}
            <div className="flex justify-between items-center p-4 text-white bg-blue-600">
                <h2 className="text-xl font-bold">Sellers</h2>
                <span onClick={toggleSidebar} className="block cursor-pointer md:hidden">
                    <FaRegWindowClose />
                </span>
            </div>
            {/* close btn of sm device */}


            {/* User List */}
            <UserList user={user} sellerId={sellerId} />
            {/* User List */}


        </div>
    )
}

export default Sidebar