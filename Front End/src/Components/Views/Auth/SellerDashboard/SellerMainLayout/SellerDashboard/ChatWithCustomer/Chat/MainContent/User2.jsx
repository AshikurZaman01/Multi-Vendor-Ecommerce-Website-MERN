import React from 'react'

const User2 = ({time , message}) => {
  return (
    <div className="mb-4 flex justify-end">
    <div className="flex items-start gap-3 animate-fade-in">
        <div className="bg-orange-500 text-white p-3 rounded-2xl shadow-lg backdrop-blur-sm">
            <span className="block">{message}</span>
            <span className="block text-xs text-gray-200 mt-1">{time}</span>
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