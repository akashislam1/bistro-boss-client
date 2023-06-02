import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  } else if (user && isAdmin) {
    return children;
  } else {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
};

export default AdminRoute;
