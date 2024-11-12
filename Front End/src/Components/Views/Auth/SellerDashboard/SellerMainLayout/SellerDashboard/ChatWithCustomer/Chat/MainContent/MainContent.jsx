import { FaList } from "react-icons/fa"
import ChatBox from "./ChatBox"
import MessageInput from "../../../../../../Admin/LiveChat/MainContent/MessageInput"

const MainContent = ({ toggleSidebar }) => {
    return (
        <div className="flex-1 rounded-lg p-4 backdrop-blur-lg bg-white/20 shadow-lg">
            <div className="flex items-center justify-between p-4 mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-md">
                <div className="flex items-center gap-3">
                    <img
                        className="w-16 h-16 rounded-full border-2 border-white"
                        src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
                        alt="Active Seller"
                    />
                    <h2 className="text-xl font-bold">Piyal</h2>
                </div>
                <div
                    onClick={toggleSidebar}
                    className="md:hidden flex items-center justify-center w-10 h-10 bg-white/30 rounded-full cursor-pointer"
                >
                    <FaList size={20} />
                </div>
            </div>

            <ChatBox />
            <MessageInput />
        </div>
    )
}

export default MainContent