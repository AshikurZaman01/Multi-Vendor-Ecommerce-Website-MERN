
const User1 = ({ message, time }) => {
    return (
        <div className="mb-4 flex justify-start">
            <div className="flex items-start gap-3 animate-fade-in">
                <img
                    className="w-10 h-10 rounded-full border-2 border-blue-600"
                    src="https://i.pravatar.cc/150?img=1"
                    alt="User"
                />
                <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg backdrop-blur-sm">
                    <span className="block">{message}</span>
                    <span className="block text-xs text-gray-200 mt-1">{time}</span>
                </div>
            </div>
        </div>
    )
}

export default User1