import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import ProfilePage from "../pages/ProfilePage";

// React component that check if user is connected to give access to Profile Page or not
function ProtectedRoute() {
    // Get Redux State part
    const connectedSelector: boolean = useSelector((state: RootState) => state.authentication.isConnected);

    return (
        <>
            {
                connectedSelector ? (
                    <ProfilePage />
                ) : (
                    <Navigate to="/forbidden" replace />
                )
            }
        </>
    );
}

export default ProtectedRoute