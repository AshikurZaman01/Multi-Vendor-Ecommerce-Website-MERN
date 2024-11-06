import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaSignOutAlt, FaChartBar, FaUserSlash } from 'react-icons/fa';
import { TbCategoryPlus } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { RiGitClosePullRequestLine } from "react-icons/ri";
import Nav from './NAv';
import Logout from './Logout';

const AdminSidebar = () => {

    const routes = [
        { id: 1, path: 'dashboard', name: 'Dashboard', icon: <FaHome /> },
        { id: 2, path: 'orders', name: 'Orders', icon: <FaChartBar /> },
        { id: 3, path: 'category', name: 'Category', icon: <TbCategoryPlus /> },
        { id: 4, path: 'seller', name: 'Seller', icon: <FaUsers /> },
        { id: 5, path: 'payment', name: 'Payment', icon: <MdOutlinePayment /> },
        { id: 6, path: 'deactiveSeller', name: 'Deactive Seller', icon: <FaUserSlash /> },
        { id: 7, path: 'sellerRequests', name: 'Seller Requests', icon: <RiGitClosePullRequestLine /> },
        { id: 8, path: 'liveChat', name: 'Live Chat', icon: <FaUsers /> },
    ];

    return (
        <div className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#F3B391] to-[#E39A75] text-slate-800 shadow-lg flex flex-col">

            <div className="flex items-center justify-center h-20 shadow-md text-white text-2xl font-bold bg-[#D68060]">
                Admin Panel
            </div>

            <Nav routes={routes}></Nav>

            <Logout></Logout>
        </div>
    );
};

export default AdminSidebar;
