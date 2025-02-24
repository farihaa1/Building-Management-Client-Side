import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Components/Loader";

const AgreementRequests = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: requests = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["agreementRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/agreement-request");
      return res.data;
    },
  });
 

  const handleAccept = async (id) => {
    await axiosSecure.patch(`/agreement-request/accept/${id}`);

    refetch();
  };

  const handleReject = async (id) => {
    axiosSecure.patch(`/agreement-request/reject/${id}`);
    refetch();
  };

  if (isLoading) {
    return <Loader></Loader>;
  }

  if (isError) {
    return <div>Error loading agreement requests.</div>;
  }

  return (
    <div className="font-mulish">
      <h1 className="text-2xl font-bold mb-6">Agreement Requests</h1>
      <table className="w-full border">
        <thead className="w-full">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Floor</th>
            <th className="border p-2">Block</th>
            <th className="border p-2">Room</th>
            <th className="border p-2">Rent</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests ? (
            <>
              {requests.map((req) => (
                <tr key={req._id} className="w-full">
                  <td className="border p-2">{req.name}</td>
                  <td className="border p-2">{req.email}</td>
                  <td className="border p-2">{req.floorNo}</td>
                  <td className="border p-2">{req.blockName}</td>
                  <td className="border p-2">{req.apartmentNo}</td>
                  <td className="border p-2">{req.rent}</td>
                  <td className="border p-2">{req.date}</td>
                  <td className="border p-2">
                    <button
                      className="text-green-500 mr-2"
                      onClick={() => handleAccept(req._id)}
                    >
                      Accept
                    </button>
                    <button
                      className="text-red-500"
                      onClick={() => handleReject(req._id)}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <>
              <p>No Agreement found</p>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AgreementRequests;
