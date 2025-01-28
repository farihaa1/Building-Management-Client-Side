import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApartments = (page, size, minRent, maxRent) => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["apartments", page, size, minRent, maxRent],
    queryFn: async () => {
      const res = await axiosSecure.get(`/apartments`, {
        params: {
          page,
          size,
          minRent: minRent || 0,
          maxRent: maxRent || Number.MAX_SAFE_INTEGER,
        },
      });
      
      return res.data ;
    },
    keepPreviousData: true,
  });

  return { data, isLoading, isError };
};

export default useApartments;
