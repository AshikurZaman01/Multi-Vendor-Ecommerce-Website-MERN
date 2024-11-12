import PensdingRequest from "./PensdingRequest";

const SendRequest = () => {
    return (
        <div className="w-full p-5 pb-2">
            <div className="rounded-md bg-blue-300 w-full">
                <h2 className="text-lg p-3">Send Request</h2>

                <div className="pt-5 mb-5 px-3">
                    <form action="" className="w-full">
                        <div className="flex gap-3 flex-wrap w-full">
                            <input
                                min={0}
                                type="number"
                                name="amount"
                                className="px-4 py-2 md:w-full w-full focus:border-indigo-500 outline-none bg-blue-400 border-slate-700 rounded-md text-white"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 px-4 py-2 rounded-md text-white w-full md:w-auto"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className="w-full">
                    <PensdingRequest />
                </div>
            </div>
        </div>
    );
};

export default SendRequest;


