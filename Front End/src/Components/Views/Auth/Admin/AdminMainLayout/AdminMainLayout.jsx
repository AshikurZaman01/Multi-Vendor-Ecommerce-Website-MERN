import AdminHeader from "../AdminHeader/AdminHeader";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { Outlet } from 'react-router-dom';

const AdminMainLayout = () => {


    return (
        <div className="flex">

            <AdminSidebar />

            <div className="flex-1 min-h-screen bg-[#FEFADC] text-slate-900">

                <AdminHeader />

                <main className="p-6 ml-0 lg:ml-60">
                    <Outlet />
                </main>

            </div>
        </div>
    );
};

export default AdminMainLayout;
