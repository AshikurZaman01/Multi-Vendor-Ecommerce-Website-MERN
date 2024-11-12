import { useState } from 'react';
import { FaBars, FaHome, FaTimes } from 'react-icons/fa';
import { MdOutlineAccountCircle, MdOutlinePayment, MdOutlineSupportAgent } from 'react-icons/md';
import { RiCustomerServiceFill } from 'react-icons/ri';
import SellerLogout from './SellerLogout';
import SellerNav from './SellerNav';
import { RiShoppingBagFill } from "react-icons/ri";
import { FaShopify } from 'react-icons/fa6';
import { IoMdPricetags } from "react-icons/io";
import { LuCalendarRange } from 'react-icons/lu';

const SellerSidebar = () => {

    const routes = [
        { id: 1, path: 'dashboard', name: 'Dashboard', icon: <FaHome /> },
        { id: 2, path: 'addProducts', name: 'Add Products', icon: <RiShoppingBagFill /> },
        { id: 3, path: 'allproducts', name: 'All Products', icon: <FaShopify /> },
        { id: 4, path: 'discountProducts', name: 'Discount Products', icon: <IoMdPricetags /> },
        { id: 5, path: 'sellerOrders', name: 'Orders', icon: <LuCalendarRange /> },
        { id: 6, path: 'sellerPayments', name: 'Payment', icon: <MdOutlinePayment /> },
        { id: 7, path: 'chatCustomers', name: 'Chat With Customers', icon: <RiCustomerServiceFill /> },
        { id: 8, path: 'chatSupport', name: 'Chat With Support', icon: <MdOutlineSupportAgent /> },
        { id: 9, path: 'sellerProfile', name: 'Profile', icon: <MdOutlineAccountCircle /> },
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
            <button
                onClick={handleToggle}
                className="lg:hidden fixed top-3 left-4 z-20 p-2 bg-[#4A90E2] text-white rounded-md shadow-md transition duration-300 hover:bg-[#357ABD]"
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#4A90E2] to-[#D5E8F6] text-slate-800 shadow-lg flex flex-col transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-10`}>
                <div className="flex items-center justify-center h-20 text-white text-2xl font-bold bg-[#4A90E2] shadow-md">
                    <span>Seller Panel</span>
                </div>

                <SellerNav routes={routes} isOpen={isOpen} setIsOpen={setIsOpen} onRouteClick={handleRouteClick} />
                <div className='divider my-0'></div>
                <SellerLogout />
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-5 lg:hidden"
                    onClick={handleToggle}
                ></div>
            )}
        </div>
    );

}

export default SellerSidebar