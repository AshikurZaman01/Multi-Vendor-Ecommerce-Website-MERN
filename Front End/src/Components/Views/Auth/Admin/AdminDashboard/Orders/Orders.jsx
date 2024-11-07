import { useState } from "react";
import OrdersPerPage from "./OrdersPerPage";
import OrderSearch from "./OrderSearch";
import OrdersList from "./OrdersList";

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchData, setSearchData] = useState("");
    const [perPageItems, setPerPageItems] = useState(5);

    return (
        <div className="px-4 lg:px-8 pt-4 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
            <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
                    <OrdersPerPage setPerPageItems={setPerPageItems} />
                    <OrderSearch searchData={searchData} setSearchData={setSearchData} />
                </div>
                <OrdersList perPageItems={perPageItems} currentPage={currentPage} searchData={searchData} />
            </div>
        </div>
    );
};

export default Orders;
