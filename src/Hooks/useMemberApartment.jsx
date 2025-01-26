
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import Loader from "../Components/Loader";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useMemberApartment = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    if(!user){
        return <Loader></Loader>
    }
  
    // Fetch apartment data
     const { data: memberInfo, isLoading: apartmentsLoading } = useQuery({
       queryKey: ["memberInfo"],
       queryFn: async () => {
       
         const res = await axiosSecure.get(`/member/apartments/${user.email}`);
         if (res.status === 404) {
           return [];
         }
         return res.data;
       },
     });

    return { memberInfo, apartmentsLoading };
};

export default useMemberApartment;