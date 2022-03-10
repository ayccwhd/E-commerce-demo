/*
 * @Author: aycc
 * @Date: 2022-03-09 18:22:14
 * @LastEditors: aycc
 * @LastEditTime: 2022-03-10 12:40:07
 * @Description: file content
 * @FilePath: \my-app\src\pages\RequireAuth.js
 */
import { useLocation, Navigate, Outlet } from "react-router-dom ";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();

    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;