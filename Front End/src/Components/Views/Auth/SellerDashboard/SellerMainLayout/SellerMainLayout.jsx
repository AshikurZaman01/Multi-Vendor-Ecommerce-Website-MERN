import { Outlet } from "react-router-dom";
import SellerSidebar from "./SellerSidebar/SellerSidebar";
import SellerHeader from "./SellerHeader/SellerHeader";

const SellerMainLayout = () => {
    return (
        <div className="flex">
            <SellerSidebar />
            <div className="flex-1 min-h-screen bg-[#FEFADC] text-slate-900">
                <SellerHeader />
                <main className="p-6 ml-0 lg:ml-60">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default SellerMainLayout;
