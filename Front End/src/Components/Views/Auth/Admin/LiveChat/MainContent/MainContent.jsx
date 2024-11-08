import { FaList } from "react-icons/fa";
import ChatBox from "./ChatBox";
import MessageInput from "./MessageInput";

const MainContent = ({ toggleSidebar }) => {
    return (
        <div className="flex-1 bg-white md:pl-4">


            <div className="flex items-center justify-between p-4">

                <div className="flex items-center gap-3">
                    <img
                        className="w-14 h-14 rounded-full border-2 border-blue-600"
                        src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
                        alt="Active Seller"
                    />

                    <h2 className="text-lg font-bold">Piyal</h2>

                    {/* toggle btn for mobile */}
                    <div
                        onClick={toggleSidebar}
                        className="md:hidden flex items-center absolute right-4 top-4 justify-center w-10 h-10 bg-blue-600 text-white rounded-full cursor-pointer"
                    >
                        <FaList />
                    </div>
                    {/* toggle btn for mobile */}

                </div>
            </div>

            {/* Chat Box  */}
            <ChatBox />
            {/* Chat Box  */}

            {/* Message Input  */}
            <MessageInput />
            {/* Message Input  */}

        </div>
    );
};

export default MainContent;
