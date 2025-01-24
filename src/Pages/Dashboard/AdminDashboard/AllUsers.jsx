import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import {
  getAuth,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from "firebase/auth";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { firebaseDeleteUser } = useContext(AuthContext);
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res, "res");
      return res.data;
    },
  });
  
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Please reauthenticate",
      input: "password",
      inputLabel: "Enter your password to confirm deletion",
      inputPlaceholder: "Password",
      inputAttributes: {
        type: "password",
        required: true,
      },
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const auth = getAuth();
        const currentUser = auth.currentUser;
        const credential = EmailAuthProvider.credential(
          currentUser.email,
          result.value
        );

        reauthenticateWithCredential(currentUser, credential)
          .then(() => {
            axiosSecure.delete(`/users/${user._id}`).then((res) => {
              if (res.data.deletedCount > 0) {
                firebaseDeleteUser(user)
                  .then(() => {
                    refetch();
                    Swal.fire({
                      title: "Deleted!",
                      text: `${user.email} has been deleted.`,
                      icon: "success",
                    });
                  })
                  .catch((error) => {
                    console.error(error);
                    Swal.fire(
                      "Error",
                      `Error deleting user: ${error.message}`,
                      "error"
                    );
                  });
              } else {
                Swal.fire(
                  "Error",
                  "Failed to delete the user from the database",
                  "error"
                );
              }
            });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire(
              "Reauthentication Failed",
              "Please ensure your password is correct.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-4">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-center">
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-md bg-orange-500"
                    >
                      <h2
                        className="text-white 
                                        text-lg"
                      >
                        Make Admin
                      </h2>
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
