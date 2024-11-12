import { FaSackDollar } from "react-icons/fa6"

const SellerPaymentsData = () => {
    return (
        <div className="px-2 md:px-7 py-5">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">

                <div className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 flex justify-between items-center p-5 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-col justify-start items-start space-y-2">
                        <h2 className="text-4xl font-bold text-white">$3433</h2>
                        <span className="font-medium text-white opacity-80">Total Sales</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-xl">
                        <FaSackDollar className="text-blue-600 text-3xl" />
                    </div>
                </div>


                <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 flex justify-between items-center p-5 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-col justify-start items-start space-y-2">
                        <h2 className="text-4xl font-bold text-white">$20</h2>
                        <span className="font-medium text-white opacity-80">Available Amount</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-xl">
                        <FaSackDollar className="text-green-600 text-3xl" />
                    </div>
                </div>


                <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 flex justify-between items-center p-5 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-col justify-start items-start space-y-2">
                        <h2 className="text-4xl font-bold text-white">$120</h2>
                        <span className="font-medium text-white opacity-80">Withdrawl Amount</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-xl">
                        <FaSackDollar className="text-yellow-600 text-3xl" />
                    </div>
                </div>

                <div className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 flex justify-between items-center p-5 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <div className="flex flex-col justify-start items-start space-y-2">
                        <h2 className="text-4xl font-bold text-white">$5320</h2>
                        <span className="font-medium text-white opacity-80">Pending Amount</span>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center shadow-xl">
                        <FaSackDollar className="text-red-600 text-3xl" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SellerPaymentsData