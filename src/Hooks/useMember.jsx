import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMember = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();



  const {
    data: isMember,
    isLoading: isMemberLoading,
    isError,
  } = useQuery({
    queryKey: [user?.email, "isMember"],
    enabled: !!user?.email && !loading, 
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/member/${user.email}`);
   
      return res.data?.member || false;  
    },
    
  });

 
  return [ isMember, isMemberLoading, isError ];
};

export default useMember;
