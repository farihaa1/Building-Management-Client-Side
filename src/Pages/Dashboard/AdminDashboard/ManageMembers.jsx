import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Components/Loader";

const ManageMembers = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: members,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["members"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/members");
        return res.data;
      } catch (error) {
        if (error.response && error.response.status === 404) { return [];
        }
        
        throw error;
      }
    },
  });

  const handleRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action will remove the member.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Implement backend logic for role change
        console.log(`Removing member with ID: ${id}`);
        axiosSecure.patch("/users/remove-role")
          .then(res => console.log(res))
          .catch(err => console.error(err));
        Swal.fire("Removed!", "The member has been removed.", "success");
      }
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }
  const membersArray = Array.isArray(members) ? members : [];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Members</h1>
      {membersArray.length === 0 ? (
        <div>No members available</div>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {membersArray.map((member) => (
              <tr key={member._id}>
                <td className="border p-2">{member.name}</td>
                <td className="border p-2">{member.email}</td>
                <td className="border p-2">
                  <button
                    className="text-red-500"
                    onClick={() => handleRemove(member._id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageMembers;
