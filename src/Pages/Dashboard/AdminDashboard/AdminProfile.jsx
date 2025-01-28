import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const AdminProfile = () => {
  const { user, loading: authLoading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  // Admin Info Query
  const { data: adminInfo, isLoading: adminLoading, error: adminError } = useQuery({
    queryKey: [user?.email, "adminInfo"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data.adminInfo;
    },
    enabled: !!user?.email,
  });

  // Users Query
  const { data: users, isLoading: usersLoading, error: usersError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Apartments Query
  const { data: apartments, isLoading: apartmentsLoading} = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/apartments")
     
      return res.data;
    },
  });
 

  // Consolidated Loading and Error Handling
  if (authLoading || adminLoading || usersLoading ) {
    return <div>Loading...</div>;
  }




  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Profile</h1>
      <div className="flex gap-6 items-center mb-6">
        <img
          src={adminInfo?.photoURL}
          alt="Admin"
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">
            {adminInfo?.name || "Admin Name"}
          </h2>
          <p>{adminInfo?.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p>Total Rooms: {adminInfo?.totalRooms || 0}</p>
        <p>Available Rooms: {adminInfo?.availableRooms || 0}</p>
        <p>Agreement Rooms: {adminInfo?.agreementRooms || 0}</p>
        <p>Total Users: {users?.length || 0}</p>
        <p>Total Members: {users?.filter(user => user.isMember).length || 0}</p>
        <p>Total Apartments: {apartments?.length || 0}</p>
      </div>
    </div>
  );
};

export default AdminProfile;
