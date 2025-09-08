import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext"


const ProtectedRoute = () => {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return <div>Loading...<span className = "spinner"></span></div>
    }

    return isAuthenticated ? <Outlet/> : <Navigate to = "/login" />;
}

export default ProtectedRoute;