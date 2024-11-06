import AdminDashboardChart from "./AdminDashboardChart";
import AdminDashboardData from "./AdminDashboardData";


const AdminDashboard = () => {

   

    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen p-6 flex flex-col rounded">

            {/* Admin Dashboard Data */}
            <div className="mb-8">
                <AdminDashboardData />
            </div>

            {/* Chart Section */}
            <AdminDashboardChart />

        </div>
    );
};

export default AdminDashboard;
