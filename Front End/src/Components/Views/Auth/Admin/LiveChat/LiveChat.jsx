import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";

const LiveChat = () => {
    const [show, setShow] = useState(false);

    // Toggle Sidebar
    const toggleSidebar = () => setShow(!show);

    // Active Seller ID
    const sellerId = 50;

    // User List
    const user = [
        { id: 50, name: "Piyal" },
        { id: 51, name: "Rahim" },
        { id: 52, name: "Karim" },
        { id: 53, name: "Rahman" },
        { id: 54, name: "Rahman" },
        { id: 55, name: "Rahman" },
        { id: 56, name: "Rahman" },
        { id: 57, name: "Rahman" },
        { id: 58, name: "Rahman" },
    ];

    return (
        <div className="h-screen w-full bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 p-4">
            <div className="w-full h-full rounded-lg p-4 backdrop-blur-lg bg-white/30 shadow-2xl">
                <div className="flex w-full h-full">
                    {/* Sidebar */}
                    <Sidebar show={show} toggleSidebar={toggleSidebar} user={user} sellerId={sellerId} />
                    {/* Main Content */}
                    <MainContent toggleSidebar={toggleSidebar} />
                </div>
            </div>
        </div>
    );
};

export default LiveChat;
