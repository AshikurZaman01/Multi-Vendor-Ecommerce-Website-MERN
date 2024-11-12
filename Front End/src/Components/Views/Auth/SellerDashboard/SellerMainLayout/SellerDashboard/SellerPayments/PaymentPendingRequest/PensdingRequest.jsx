import { forwardRef } from 'react';
import { FixedSizeList as List } from 'react-window';

const PensdingRequest = () => {
    const data = [
        { id: 1, amount: "$450", status: "Pending", date: "8 Nov 2024" },
        { id: 2, amount: "$320", status: "Completed", date: "7 Nov 2024" },
        { id: 3, amount: "$150", status: "Pending", date: "6 Nov 2024" },
        { id: 4, amount: "$280", status: "Failed", date: "5 Nov 2024" },
        { id: 5, amount: "$500", status: "Pending", date: "4 Nov 2024" },
        { id: 6, amount: "$450", status: "Completed", date: "3 Nov 2024" },
        { id: 7, amount: "$180", status: "Pending", date: "2 Nov 2024" },
        { id: 8, amount: "$90", status: "Failed", date: "1 Nov 2024" },
        { id: 9, amount: "$350", status: "Pending", date: "31 Oct 2024" },
        { id: 10, amount: "$200", status: "Completed", date: "30 Oct 2024" },
        { id: 11, amount: "$400", status: "Pending", date: "29 Oct 2024" },
        { id: 12, amount: "$250", status: "Failed", date: "28 Oct 2024" },
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
            Pending: "bg-yellow-200 text-yellow-900",
            Completed: "bg-green-200 text-green-900",
            Failed: "bg-red-200 text-red-900",
        };
        return (
            <div
                style={style}
                className="flex items-center text-sm rounded-lg p-2 hover:bg-gradient-to-r from-blue-100 to-blue-200 transition duration-150 w-full"
            >
                <div className="flex-1 p-2 whitespace-nowrap text-blue-900 font-medium">{id}</div>
                <div className="flex-1 p-2 whitespace-nowrap text-indigo-800 font-semibold">{amount}</div>
                <div className="flex-1 p-2 whitespace-nowrap">
                    <span className={`py-1 px-3 rounded-full text-xs ${statusColors[status]}`}>
                        {status}
                    </span>
                </div>
                <div className="flex-1 p-2 whitespace-nowrap text-purple-700">{date}</div>
            </div>
        );
    };

    return (
        <div className="w-full">


            <div className="px-2 pt-5 pb-4">
                <div className="w-full p-4 rounded-md bg-gradient-to-br from-gray-50 to-gray-200 shadow-lg">
                    <h1 className="text-2xl font-semibold pb-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                        Pending Requests
                    </h1>
                    <div className="w-full">
                        <div className="w-full overflow-x-auto">
                            {/* Table Header */}
                            <div className="flex uppercase text-xs font-semibold bg-gradient-to-r from-gray-200 to-gray-300 p-2 rounded-lg text-gray-700">
                                <div className="flex-1 p-2">No</div>
                                <div className="flex-1 p-2">Amount</div>
                                <div className="flex-1 p-2">Status</div>
                                <div className="flex-1 p-2">Date</div>
                            </div>

                            {/* Virtualized List */}
                            <List
                                style={{ minWidth: '100%' }}
                                className="List"
                                height={350}
                                itemCount={data.length}
                                itemSize={50}
                                outerElementType={outerElementType}
                            >
                                {Row}
                            </List>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PensdingRequest;
