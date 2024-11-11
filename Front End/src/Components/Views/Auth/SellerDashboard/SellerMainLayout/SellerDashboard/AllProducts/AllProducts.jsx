import { useState } from "react"
import ProductsPerPage from "./ProductsPerPage";
import ProdcutsSearch from "./ProdcutsSearch";
import ProdcutList from "./ProdcutList";

const AllProducts = () => {

    const [productPerPage, setProductPerPage] = useState(10);
    const [searchData, setSearchData] = useState("");

    return (
        <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-2xl">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
                <ProductsPerPage setProductPerPage={setProductPerPage} />
                <ProdcutsSearch searchData={searchData} setSearchData={setSearchData} />
            </div>

            <ProdcutList></ProdcutList>

        </div>
    )
}

export default AllProducts