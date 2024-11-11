import SellerDashboardChart from "./DashboardComponents/SellerDashboardChart"
import SellerDashboardData from "./DashboardComponents/SellerDashboardData"
import SellerDashboardRecentOrders from "./DashboardComponents/SellerDashboardRecentOrders"
import SellerRecentMsg from "./DashboardComponents/SellerRecentMsg"

const Dashboard = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen p-6 flex flex-col rounded">

            <div className="mb-8">
                <SellerDashboardData />
            </div>

            <div className="flex justify-between items-start gap-5 flex-col md:flex-row ">

                <div className="w-full md:w-8/12 h-full">
                    <SellerDashboardChart />
                </div>

                <div className="w-full md:w-4/12 h-full">
                    <SellerRecentMsg />
                </div>
            </div>

            <div>
                <SellerDashboardRecentOrders />
            </div>

        </div >
    )
}

export default Dashboard