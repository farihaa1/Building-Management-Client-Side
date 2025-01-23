import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Welcome from "../../../Components/Welcome/Welcome";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4 pb-0">
      <Welcome />
      <div className="bg-gray-100 p-6 rounded shadow-md mt-8 min-h-screen">
        <h2 className="text-3xl font-bold mb-4">My Profile</h2>
        <div className="space-y-2 p-2">
          <p>Name:{user?.displayName }</p>
          <p>Email: {user?.email }</p>
          <p>Agreement Accept Date: None</p>
          <p>Rented Apartment Info: Floor: None, Block: None, Room No: None</p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
