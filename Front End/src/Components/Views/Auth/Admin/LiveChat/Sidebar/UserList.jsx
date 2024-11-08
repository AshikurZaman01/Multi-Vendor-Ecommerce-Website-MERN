
const UserList = ({ user, sellerId }) => {
    return (
        <div>
            {user.map((item) => (
                <div
                    key={item.id}
                    className={`flex items-center p-3 cursor-pointer rounded-md text-white ${item.id === sellerId ? "bg-green-600" : "bg-blue-700 hover:bg-blue-800"
                        }`}
                >
                    <img
                        className="w-10 h-10 rounded-full border-2 border-white"
                        src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
                        alt={item.name}
                    />
                    <div className="ml-3">
                        <h2 className="text-base font-semibold">{item.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default UserList