import { useState } from "react";
import DiscountPerPage from "./DiscountPerPage";
import DsicountSearch from "./DsicountSearch";
import DiscountList from "./DiscountList";

const DiscountProdcuts = () => {

    const [discountPerPage, setDiscountPerPage] = useState(10);
    const [searchData, setSearchData] = useState("");

    return (
        <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">

                <DiscountPerPage setDiscountPerPage={setDiscountPerPage} />
                <DsicountSearch searchData={searchData} setSearchData={setSearchData} />
            </div>

            <DiscountList></DiscountList>

        </div>
    )
}

export default DiscountProdcuts