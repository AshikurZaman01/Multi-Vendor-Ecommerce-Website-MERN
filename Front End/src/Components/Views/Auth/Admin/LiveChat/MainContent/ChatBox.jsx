import User1 from "./ChatUser/User1"
import User2 from "./ChatUser/User2"

const ChatBox = () => {
    return (
        <div className="h-[calc(100vh-300px)] bg-gray-200 rounded-md p-4 overflow-y-auto">

            {/* User1 Message */}
            <User1 />
            {/* User1 Message */}

            {/*  User2 Message */}
            <User2 />
            {/*  User2 Message */}

        </div>
    )
}

export default ChatBox