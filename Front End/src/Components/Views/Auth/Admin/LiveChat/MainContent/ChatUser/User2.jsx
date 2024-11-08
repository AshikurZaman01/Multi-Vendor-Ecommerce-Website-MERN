
const User2 = () => {
    return (
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
    )
}

export default User2