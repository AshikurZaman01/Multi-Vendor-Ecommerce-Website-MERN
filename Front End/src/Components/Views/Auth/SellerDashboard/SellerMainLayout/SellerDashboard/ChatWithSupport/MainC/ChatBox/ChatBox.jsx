
const ChatBox = () => {
    return (
        <div className="h-[calc(100vh-300px)] bg-gray-200 rounded-md p-4 overflow-y-auto">
            {/* User Message */}
            <div className="mb-4 flex justify-start">
                <div className="flex items-start gap-3">
                    <img
                        className="w-10 h-10 rounded-full border-2 border-blue-600"
                        src="https://i.pravatar.cc/150?img=1"
                        alt="User"
                    />
                    <div className="bg-blue-600 text-white p-3 rounded-lg shadow-md">
                        <span>Hi, How are you?</span>
                    </div>
                </div>
            </div>

            {/* Other User Message */}
            <div className="mb-4 flex justify-end">
                <div className="flex items-start gap-3">
                    <div className="bg-orange-500 text-white p-3 rounded-lg shadow-md">
                        <span>I'm good.</span>
                    </div>
                    <img
                        className="w-10 h-10 rounded-full border-2 border-orange-500"
                        src="https://i.pravatar.cc/150?img=8"
                        alt="Other User"
                    />
                </div>
            </div>
        </div>
    )
}

export default ChatBox