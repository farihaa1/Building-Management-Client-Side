import React from "react";
import useAuth from "../../../Hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="user-profile">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
      <div className="flex items-center gap-4">
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
      <div className="mt-6">
        <p>
          <strong>Agreement Accept Date:</strong> none
        </p>
        <p>
          <strong>Rented Apartment Info:</strong>none
        </p>
        <ul className="ml-4">
          <li>Floor: none</li>
          <li>Block: none</li>
          <li>Room No: none</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
