import { useState } from "react";
import DeactiveSellerPerPage from "./DeactiveSellerPerPage";
import DeactiveSellerSearch from "./DeactiveSellerSearch";
import DeactiveSellerList from "./DeactiveSellerList";

const DeactiveSeller = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchData, setSearchData] = useState("");
    const [perPageItems, setPerPageItems] = useState(5);

    return (
        <div className="px-4 lg:px-8 py-6 bg-gray-50">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                {/* Filter Options */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                    <DeactiveSellerPerPage setPerPageItems={setPerPageItems} />
                    <DeactiveSellerSearch setSearchData={setSearchData} searchData={searchData} />
                </div>

                {/* Seller List Table */}
                <DeactiveSellerList />
            </div>
        </div>
    )
}

export default DeactiveSeller