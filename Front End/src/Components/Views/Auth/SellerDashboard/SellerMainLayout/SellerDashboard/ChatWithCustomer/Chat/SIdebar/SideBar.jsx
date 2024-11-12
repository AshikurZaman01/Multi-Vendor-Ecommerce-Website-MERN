import { FaRegWindowClose } from "react-icons/fa"
import UserList from "./UserList"

const SideBar = ({ show, toggleSidebar, user, sellerId }) => {
    return (
        <div
            className={`w-[300px] h-full absolute z-10 transition-all duration-500 ${show ? "left-0" : "-left-[340px]"
                } md:left-0 md:relative backdrop-blur-lg bg-white/20 rounded-lg shadow-lg p-4`}
        >
            <div className="flex justify-between items-center mb-4 text-white">
                <h2 className="text-2xl font-bold">Customers</h2>
                <span onClick={toggleSidebar} className="md:hidden cursor-pointer">
                    <FaRegWindowClose size={24} />
                </span>
            </div>

            <div className="overflow-y-auto h-[calc(100%-64px)] scrollbar-hide">
                <UserList user={user} sellerId={sellerId} />
            </div>
        </div>
    )
}

export default SideBar