import { forwardRef } from 'react';
import { FixedSizeList as List } from 'react-window';

const PaymentRequest = () => {
    const data = [
        { id: 1, amount: "$450", status: "Pending", date: "8 Nov 2024" },
        { id: 2, amount: "$320", status: "Completed", date: "7 Nov 2024" },
        { id: 3, amount: "$150", status: "Pending", date: "6 Nov 2024" },
        { id: 4, amount: "$280", status: "Failed", date: "5 Nov 2024" },
        { id: 5, amount: "$500", status: "Pending", date: "4 Nov 2024" },
        { id: 6, amount: "$450", status: "Completed", date: "3 Nov 2024" },
        { id: 7, amount: "$180", status: "Pending", date: "2 Nov 2024" },
        { id: 8, amount: "$90", status: "Failed", date: "1 Nov 2024" },
    ];

    // Handle Wheel Event
    const handleOnWheel = (event) => {
        const { deltaY } = event;
        console.log("Scroll deltaY:", deltaY);
    };

    // Custom Outer Element with Wheel Event
    const outerElementType = forwardRef((props, ref) => {
        return <div ref={ref} onWheel={handleOnWheel} {...props}></div>;
    });

    // Row Component
    const Row = ({ index, style }) => {
        const { id, amount, status, date } = data[index];
        const statusColors = {
            Pending: "bg-yellow-100 text-yellow-700",
            Completed: "bg-green-100 text-green-700",
            Failed: "bg-red-100 text-red-700",
        };

        return (
            <div
                style={style}
                className="flex items-center text-sm rounded-lg p-2 hover:bg-gray-100 transition duration-150"
            >
                <div className="w-[20%] p-2 whitespace-nowrap">{id}</div>
                <div className="w-[20%] p-2 whitespace-nowrap">{amount}</div>
                <div className="w-[20%] p-2 whitespace-nowrap">
                    <span className={`py-1 px-3 rounded-full text-xs ${statusColors[status]}`}>
                        {status}
                    </span>
                </div>
                <div className="w-[20%] p-2 whitespace-nowrap">{date}</div>
                <div className="w-[20%] p-2 whitespace-nowrap">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded-lg shadow hover:bg-blue-600 transition">
                        Confirm
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className="px-2 lg:px-7 pt-5">
            <div className="w-full p-4 rounded-md bg-white shadow-md">
                <h1 className="text-2xl font-semibold pb-5 text-gray-800">Withdrawal Requests</h1>
                <div className="w-full">
                    <div className="w-full overflow-x-auto">
                        {/* Table Header */}
                        <div className="flex uppercase text-xs font-semibold bg-gray-100 p-2 rounded-lg text-gray-600">
                            <div className="w-[20%] p-2">No</div>
                            <div className="w-[20%] p-2">Amount</div>
                            <div className="w-[20%] p-2">Status</div>
                            <div className="w-[20%] p-2">Date</div>
                            <div className="w-[20%] p-2">Action</div>
                        </div>

                        {/* Virtualized List */}
                        <List
                            style={{ minWidth: '340px' }}
                            className="List"
                            height={350}
                            itemCount={data.length}
                            itemSize={45}
                            outerElementType={outerElementType}
                        >
                            {Row}
                        </List>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentRequest;
