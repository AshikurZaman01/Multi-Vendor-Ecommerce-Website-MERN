import { FaHome, FaUsers, FaChartBar, FaUserSlash, FaBars, FaTimes } from 'react-icons/fa';
import { TbCategoryPlus } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { RiGitClosePullRequestLine } from "react-icons/ri";
import Nav from './Nav';
import Logout from './Logout';
import { useState } from 'react';

const AdminSidebar = () => {

    const routes = [
        { id: 1, path: 'dashboard', name: 'Dashboard', icon: <FaHome /> },
        { id: 2, path: 'orders', name: 'Orders', icon: <FaChartBar /> },
        { id: 3, path: 'category', name: 'Category', icon: <TbCategoryPlus /> },
        { id: 4, path: 'seller', name: 'Seller', icon: <FaUsers /> },
        { id: 5, path: 'paymentRequest', name: 'Payment', icon: <MdOutlinePayment /> },
        { id: 6, path: 'deactiveSeller', name: 'Deactive Seller', icon: <FaUserSlash /> },
        { id: 7, path: 'sellerRequests', name: 'Seller Requests', icon: <RiGitClosePullRequestLine /> },
        { id: 8, path: 'liveChat', name: 'Live Chat', icon: <FaUsers /> },
    ];

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRouteClick = () => {
        if (window.innerWidth < 640) {
            setIsOpen(false);
        }
    };

    return (
        <div className="relative">

            {/* Toggle button for mobile */}
            <button
                onClick={handleToggle}
                className="lg:hidden fixed top-3 left-4 z-20 p-2 bg-black text-white rounded-md"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#F3B391] to-[#E39A75] text-slate-800 shadow-lg flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-10`}>

                <div className="flex items-center justify-center h-20 shadow-md text-white text-2xl font-bold bg-[#D68060] px-4 py-10">
                    <span>Admin Panel</span>
                </div>

                <Nav routes={routes} isOpen={isOpen} setIsOpen={setIsOpen} onRouteClick={handleRouteClick} />

                <div className='divider'></div>

                <Logout />
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-5 lg:hidden"
                    onClick={handleToggle}
                ></div>
            )}
        </div>
    );
};

export default AdminSidebar;
