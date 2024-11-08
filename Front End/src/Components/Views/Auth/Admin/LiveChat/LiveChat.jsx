import { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";

const LiveChat = () => {
    const [show, setShow] = useState(false);

    // Toggle Sidebar
    const toggleSidebar = () => {
        setShow(!show);
    };

    // Active Seller ID
    const sellerId = 50;

    // User List
    const user = [
        { id: 50, name: "Piyal" },
        { id: 51, name: "Rahim" },
        { id: 52, name: "Karim" },
        { id: 53, name: "Rahman" },
    ];

    return (
        <div className="px-2 lg:px-7 py-5">
            <div className="w-full px-4 py-4 rounded-md h-[calc(100vh-140px)] bg-gray-100">
                <div className="flex w-full h-full relative">

                    {/* Sidebar */}
                    <Sidebar show={show} toggleSidebar={toggleSidebar} user={user} sellerId={sellerId}></Sidebar>
                    {/* Sidebar */}

                    {/* Main Content */}
                    <MainContent toggleSidebar={toggleSidebar}></MainContent>
                    {/* Main Content */}

                </div>
            </div>
        </div >
    );
};

export default LiveChat;
