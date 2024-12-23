import { NavLink } from "react-router-dom";

const SellerNav = ({ routes, isOpen, setIsOpen, onRouteClick }) => {
    return (
        <nav className="flex-grow mt-4">
            <ul className="space-y-2">
                {routes.map(route => (
                    <li key={route.id}>
                        <NavLink
                            to={route.path}
                            className={({ isActive }) =>
                                `flex items-center px-6 py-3 text-lg font-medium hover:bg-[#D5E8F6] hover:text-[#333] transition duration-300 ${isActive ? 'bg-[#4A90E2] text-white' : ''}`
                            }
                            onClick={() => {
                                onRouteClick();
                                setIsOpen(!isOpen);
                            }}
                        >
                            {route.icon} <span className="ml-4">{route.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default SellerNav