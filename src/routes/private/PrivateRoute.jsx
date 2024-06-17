import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { loading, user } = useAuth();

    if (loading) {
        return (
            <div className="min-h-screen flex align-middle justify-center">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }

    return <Navigate to={"/login"} />
};

export default PrivateRoute;