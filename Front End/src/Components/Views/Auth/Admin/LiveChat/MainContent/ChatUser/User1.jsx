
const User1 = () => {
    return (
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
    )
}

export default User1