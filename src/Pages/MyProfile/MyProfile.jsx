import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Welcome from "../../Components/Welcome/Welcome";

const MyProfile = () => {


  return (
    <div className="p-4">
      <Welcome></Welcome>
    </div>
  );
};

export default MyProfile;
