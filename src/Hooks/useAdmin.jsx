import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useEffect, useState } from "react";
import axios from "axios";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();



  // Query to check admin status
  const {
    data: isAdmin,
    isLoading: isAdminLoading,
    isError,
  } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    enabled: !!user?.email && !loading, 
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
    
      return res.data?.admin || false;  
    },
    
  });

 
  return [ isAdmin, isAdminLoading, isError ];
};

export default useAdmin;
