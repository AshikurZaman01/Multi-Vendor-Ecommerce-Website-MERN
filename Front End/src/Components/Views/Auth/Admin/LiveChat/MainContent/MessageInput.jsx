import { FaPaperPlane, FaSmile, FaPaperclip } from "react-icons/fa";

const MessageInput = () => {
    return (
        <form className="flex items-center gap-3 mt-4 px-4 py-2 bg-white rounded-full shadow-lg">
            {/* Attachment Icon */}
            <button type="button" className="text-blue-600 hover:text-blue-800">
                <FaPaperclip size={20} />
            </button>

            {/* Text Input */}
            <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 rounded-full border-0 focus:ring-0 outline-none bg-gray-100 text-gray-700"
            />

            {/* Emoji Icon */}
            <button type="button" className="text-yellow-500 hover:text-yellow-600">
                <FaSmile size={24} />
            </button>

            {/* Send Button */}
            <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-md hover:scale-105 transform transition duration-300"
            >
                <FaPaperPlane size={18} />
            </button>
        </form>
    );
};

export default MessageInput;
