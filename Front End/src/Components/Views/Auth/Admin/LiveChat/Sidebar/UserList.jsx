const UserList = ({ user, sellerId }) => {
    return (
        <div className="space-y-3">
            {user.map((item) => (
                <div
                    key={item.id}
                    className={`flex items-center p-3 cursor-pointer rounded-lg shadow-md transition-transform transform hover:scale-105 ${item.id === sellerId
                            ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
                            : "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                        }`}
                >
                    <img
                        className="w-12 h-12 rounded-full border-2 border-white"
                        src="https://cdn-icons-png.flaticon.com/128/6997/6997662.png"
                        alt={item.name}
                    />
                    <div className="ml-4">
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
