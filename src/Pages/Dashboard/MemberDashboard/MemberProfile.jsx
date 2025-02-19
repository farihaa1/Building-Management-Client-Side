import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Welcome from "../../../Components/Welcome/Welcome";
import useMemberApartment from "../../../Hooks/useMemberApartment";

const MemberProfile = () => {
  const { user } = useContext(AuthContext);
  const [memberInfo] = useMemberApartment();

  return (
    <div className="py-16 bg-primary/20 w-full font-mulish px-2 md:px-10">
      <div>
        <Welcome />
      </div>
      <div className=" p-6 rounded mt-8 min-h-screen">
        <div className="space-y-1 p-6 py-10 border border-gray-300 text-lg md:text-xl">
          <h2 className="text-4xl font-semibold text-center mb-8">
            Personal Information
          </h2>
          <p>Name:{user?.displayName}</p>
          <p>Email: {user?.email}</p>
          <p>Agreement Accept Date: {memberInfo.date}</p>
          <div>
            <h4 className="text-2xl font-semibold mt-8">
              {" "}
              Rented Apartment Info:
            </h4>

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
