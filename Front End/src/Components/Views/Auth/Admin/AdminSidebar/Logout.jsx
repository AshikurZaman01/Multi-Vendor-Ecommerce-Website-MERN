import { FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Logout = () => {
    return (
        <div className="mt-auto mb-4">
            <NavLink
                to="/logout"
                className="flex items-center px-6 py-3 text-lg  font-medium hover:bg-red-600 hover:text-white"
            >
                <FaSignOutAlt className="mr-4" /> Logout
            </NavLink>
        </div>
    );
};

export default Logout;