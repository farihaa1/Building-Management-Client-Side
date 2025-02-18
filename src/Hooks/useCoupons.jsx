import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCoupons = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();


  const {
    refetch,
    data: coupons=[],
    isLoading: isCouponLoading,
    isError,
  } = useQuery({
    queryKey: ["coupons"],
    enabled: !loading, 
    queryFn: async () => {
      const res = await axiosSecure.get("/coupons");
    
      return res.data|| false;  
    },
    
  });

 
  return [ refetch,coupons, isCouponLoading, isError ];
};

export default useCoupons;
