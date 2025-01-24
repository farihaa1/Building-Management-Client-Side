import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <Loader />;
  }

  if (user && isAdmin) {
    return children;
  }

  console.log('Redirecting to home...');
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;
