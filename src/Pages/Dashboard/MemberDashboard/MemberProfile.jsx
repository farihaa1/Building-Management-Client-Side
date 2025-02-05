import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Welcome from "../../../Components/Welcome/Welcome";
import useMemberApartment from "../../../Hooks/useMemberApartment";

const MemberProfile = () => {
  const { user } = useContext(AuthContext);
  const [memberInfo] = useMemberApartment();



  return (
    <div className="p-4 pb-0">
      <Welcome />
      <div className=" p-6 rounded mt-8 min-h-screen">
      
        <div className="space-y-2 p-2">
          <p>Name:{user?.displayName}</p>
          <p>Email: {user?.email}</p>
          <p>Agreement Accept Date: {memberInfo.date}</p>
          <div>
            <h4> Rented Apartment Info:</h4>
            <p>
              <strong>Email:</strong> {memberInfo.email || "email"}
            </p>
            <p>
              <strong>Floor:</strong> {memberInfo.floorNo}
            </p>
            <p>
              <strong>Block Name:</strong> {memberInfo.blockName}
            </p>
            <p>
              <strong>Apartment No:</strong> {memberInfo.apartmentNo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
