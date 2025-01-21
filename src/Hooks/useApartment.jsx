import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useApartments = (page, size) => {
  const axiosSecure = useAxiosSecure();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["apartments", page, size],
    queryFn: async () => {
      const res = await axiosSecure.get(`/apartments?page=${page}&size=${size}`);
      return res.data;
    },
    keepPreviousData: true, // Enable smooth pagination
  });

  return { data, isLoading, isError };
};

export default useApartments;
