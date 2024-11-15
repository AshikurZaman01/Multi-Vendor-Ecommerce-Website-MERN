import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserInfo } from "../../../Redux/features/authSlice";

const ProtectedRoute = ({ children, allowedRoles }) => {
    const dispatch = useDispatch();
    const { role, token, userInfo } = useSelector((state) => state.auth);

    useEffect(() => {
        if (token && !userInfo) {
            dispatch(getUserInfo());
        }
    }, [dispatch, token, userInfo]);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (!userInfo) {
        return <Suspense fallback={<div>Loading...</div>} />;
    }

    if (!allowedRoles.includes(userInfo?.role)) {
        return <Navigate to="/" replace />;
    }

    return <Suspense fallback={null}>{children}</Suspense>;
};

export default ProtectedRoute;
