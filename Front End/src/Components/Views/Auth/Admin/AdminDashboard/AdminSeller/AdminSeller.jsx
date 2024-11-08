import { useState } from "react";
import SellerPerPage from "./SellerPerPage";
import SellerSearch from "./SellerSearch";
import SellerList from "./SellerList";

const AdminSeller = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchData, setSearchData] = useState("");
    const [perPageItems, setPerPageItems] = useState(5);

    return (
        <div className="px-4 lg:px-8 py-6 bg-gray-50">
            <div className="bg-white p-6 rounded-lg shadow-md">

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
                    <SellerPerPage setPerPageItems={setPerPageItems} />
                    <SellerSearch searchData={searchData} setSearchData={setSearchData} />
                </div>

                <SellerList />
            </div>
        </div>
    )
}

export default AdminSeller;
