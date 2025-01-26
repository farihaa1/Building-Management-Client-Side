import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Welcome from "../../../Components/Welcome/Welcome";
import useMemberApartment from "../../../Hooks/useMemberApartment";
import Loader from "../../../Components/Loader";

const MemberProfile = () => {
  const { user } = useContext(AuthContext);
  const { memberInfo, apartmentsLoading } = useMemberApartment();

  if(apartmentsLoading){
    return<Loader></Loader>;
  }

  return (
    <div className="p-4 pb-0">
      <Welcome />
      <div className="bg-gray-100 p-6 rounded shadow-md mt-8 min-h-screen">
        <h2 className="text-3xl font-bold mb-4">My Profile</h2>
        <div className="space-y-2 p-2">
          <p>Name:{user?.displayName}</p>
          <p>Email: {user?.email}</p>
          <p>Agreement Accept Date: None</p>
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
