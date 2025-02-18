import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import Loader from "../Components/Loader";

const useMember = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: isMember=false,
    isLoading: isMemberLoading,
    isError,
  } = useQuery({
    queryKey: [user?.email, "isMember"],
    enabled: !loading && !!user?.email , 
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/member/${user.email}`);
   
      return res.data?.member;  
    },


    
  });

 
  return [ isMember, isMemberLoading, isError ];
};

export default useMember;
