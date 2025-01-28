import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Loader from "../Components/Loader";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useMemberApartment = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useContext(AuthContext);

  if (!user) {
    return <Loader></Loader>;
  }

  const { refetch, data: memberInfo = [] } = useQuery({
    queryKey: ["memberInfo", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/member/apartments?email=${user.email}`
      );
     
      return res.data || {};
    },
  });
  

  return [memberInfo, refetch];
};

export default useMemberApartment;
