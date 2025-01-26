import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";
import useMember from "../Hooks/useMember";

const MemberRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isMember, isMemberLoading] = useMember();
  const location = useLocation();

  if (loading || isMemberLoading || loading) {
    return <Loader />;
  }

  if (user && isMember) {
    return children;
  }

  console.log('Redirecting to home...');
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default MemberRoutes;
