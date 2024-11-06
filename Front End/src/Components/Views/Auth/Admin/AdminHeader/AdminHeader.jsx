import Profile from "./Profile";
import SearchBar from "./SearchBar";

const AdminHeader = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-[#F6D4BA] w-full">
            <div className="ml-0 lg:ml-[260px] rounded-md h-[48px] flex items-center transition-all w-full">

                <div className="flex-1 ">
                    <SearchBar />
                </div>

                <div className=" items-center ">
                    <Profile />
                </div>

            </div>
        </div>
    );
};

export default AdminHeader;
