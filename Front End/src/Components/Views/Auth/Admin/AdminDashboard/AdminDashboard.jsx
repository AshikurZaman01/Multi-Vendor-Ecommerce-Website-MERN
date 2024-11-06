import AdminDashboardChart from "./AdminDashboardChart";
import AdminDashboardData from "./AdminDashboardData";
import RecentSellerMsg from "./RecentSellerMsg";

const AdminDashboard = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen p-6 flex flex-col rounded">
            {/* Admin Dashboard Data */}
            <div className="mb-8">
                <AdminDashboardData />
            </div>

            <div className="flex justify-between items-start gap-5 flex-col md:flex-row ">
                <div className="w-8/12 h-full">
                    <AdminDashboardChart />
                </div>

                <div className="w-4/12 h-full">
                    <RecentSellerMsg />
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
