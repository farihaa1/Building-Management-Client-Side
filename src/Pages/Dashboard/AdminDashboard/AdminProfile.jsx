import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Components/Loader";

const AdminProfile = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  // Admin Info Query
  const {
    data: adminInfo,
    isLoading: adminLoading,
    error: adminError,
  } = useQuery({
    queryKey: [user?.email, "adminInfo"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data.adminInfo;
    },
    
  });
  

  const { data: statistics=[], isLoading: statisticsLoading } = useQuery({
    queryKey: ["statistics"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/apartments");

      return res.data;
    },
  });

  // Consolidated Loading and Error Handling
  if (adminLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="font-mulish">
      <h1 className="text-2xl font-bold mb-6">Admin Profile</h1>
      <div className="flex gap-6 items-center mb-6">
        <img
          src={user?.photoURL}
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
        <p>Total Apartments: {statistics?.totalRooms || 0}</p>

        <p>Agreement Rooms: {statistics?.unavailablePercentage || 0}%</p>
        <p>Total Users: {statistics?.totalUsers || 0}</p>
        <p>Available Rooms: {statistics?.availablePercentage || 0}%</p>
        <p>Total Members: {statistics?.totalMembers || 0}</p>
      </div>
    </div>
  );
};

export default AdminProfile;
