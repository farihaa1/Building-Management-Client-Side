import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Loader from "../Components/Loader";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useMemberApartment = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Loader></Loader>;
  }

  const { refetch, data: memberInfo = [] } = useQuery({
    queryKey: ["memberInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/member/apartments?email=${user.email}`
      );
      console.log(res.data)
      return res.data ||{};
    },
  });
  console.log(memberInfo)

  return [memberInfo, refetch];
};

export default useMemberApartment;
