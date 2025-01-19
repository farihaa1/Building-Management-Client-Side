import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4">
      <header className="text-gray-700 text-lg font-medium">
        <p >Welcome Back,</p>
        <h3 className="text-3xl font-bold">{user.displayName}</h3>
      </header>
    </div>
  );
};

export default MyProfile;
