import { NavLink } from "react-router-dom"

const Nav = ({ routes }) => {
    return (
        <nav className="flex-grow mt-4">
            <ul className="space-y-2">
                {routes.map(route => (
                    <li key={route.id}>
                        <NavLink
                            to={`${route.path}`}
                            className={({ isActive }) => `flex items-center px-6 py-3 text-lg font-medium hover:bg-[#D68060] hover:text-white ${isActive ? 'bg-[#D68060] text-white' : ''}`}
                        >
                            {route.icon} <span className="ml-4">{route.name}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav