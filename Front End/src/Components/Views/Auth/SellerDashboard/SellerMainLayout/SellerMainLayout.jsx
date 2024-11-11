import { Outlet } from "react-router-dom";
import SellerSidebar from "./SellerSidebar/SellerSidebar";
import SellerHeader from "./SellerHeader/SellerHeader";

const SellerMainLayout = () => {
    return (
        <div className="flex bg-[#F4F4F4] min-h-screen">
            <SellerSidebar />
            <div className="flex-1">
                <SellerHeader />
                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default SellerMainLayout;
