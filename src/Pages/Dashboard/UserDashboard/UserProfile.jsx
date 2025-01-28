import React from "react";
import useAuth from "../../../Hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="user-profile">
      <h1 className="lg:text-xl text-primaryColor font-bold my-4">My Profile</h1>
      <div className="flex flex-col lg:items-center gap-4 text-sm">
        <img
          src={user.photoURL}
          alt="User Profile"
          className="w-24 h-24 rounded-full border"
        />
        <div>
          <p>
            <strong>Name:</strong> {user.displayName}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
        </div>
      </div>
      <div className="mt-3 text-xs">
        <p>
          <strong>Agreement Accept Date:</strong> none
        </p>
        <p>
          <strong>Rented Apartment Info:</strong>none
        </p>
        <ul className="text-xs">
          <li>Floor: none</li>
          <li>Block: none</li>
          <li>Room No: none</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
