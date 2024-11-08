
const MessageInput = () => {
    return (
        <form className="flex items-center gap-3 mt-4">
            <input
                type="text"
                placeholder="Type a message"
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none"
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
                Send
            </button>
        </form>
    )
}

export default MessageInput