import LeftSide from "./LeftSide/LeftSide"
import RightSide from "./RightSide/RightSide"

const SellerPro = () => {
    return (
        <div className="px-2 lg:px-7 py-5">

            <div className="w-full flex flex-wrap">

                <div className="w-full md:w-6/12 ">
                    <LeftSide />
                </div>

                <div className="w-full md:w-6/12 ">
                    <RightSide />
                </div>



            </div>

        </div>
    )
}

export default SellerPro