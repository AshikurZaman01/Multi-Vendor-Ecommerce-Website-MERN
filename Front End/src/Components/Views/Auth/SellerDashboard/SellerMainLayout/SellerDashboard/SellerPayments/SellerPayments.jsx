import SendRequest from "./PaymentPendingRequest/SendRequest";
import SellerPaymentsData from "./SellerPaymentsData";
import SuccessWitdrawl from "./SuccessWitdrawl";

const SellerPayments = () => {
    return (
        <div className="w-full">
            <SellerPaymentsData />

            <div className="flex flex-col w-full">
                <div className="w-full">
                    <SendRequest />
                </div>
                <div className="w-full  px-2 ">
                    <SuccessWitdrawl />
                </div>
            </div>
        </div>
    );
};

export default SellerPayments;


