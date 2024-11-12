import User1 from './User1'
import User2 from './User2'

const ChatBox = () => {
    return (
        <div className="h-[calc(100vh-300px)] bg-gradient-to-b from-gray-100 to-gray-300 rounded-lg p-4 shadow-lg overflow-y-auto">

            {/* User1 Message */}
            <User1 message="Hi, How are you? 😊" time="10:30 AM" />

            {/* User2 Message */}
            <User2 message="I'm good, thank you! ✨" time="10:32 AM" />

            {/* User1 Message */}
            <User1 message="What are you doing now? 🤔" time="10:35 AM" />

            {/* User2 Message */}
            <User2 message="Just coding! 💻" time="10:37 AM" />

        </div>
    )
}

export default ChatBox