import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRoles }) => {

    const { role, token } = useSelector((state) => state.auth);


    if (!token) {
        return <Navigate to="/login" replace />
    }

    if (!allowedRoles.includes(role)) {
        return <Navigate to="/" replace />;
    }

    return children

}

export default ProtectedRoute