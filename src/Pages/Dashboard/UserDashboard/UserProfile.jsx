import React from "react";

const UserProfile = () => {

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://via.placeholder.com/150",
    agreementDate: "None",
    rentedInfo: {
      floor: "None",
      block: "None",
      room: "None",
    },
  };

  return (
    <div className="user-profile">
      <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
      <div className="flex items-center gap-4">
        <img
          src={user.image}
          alt="User Profile"
          className="w-24 h-24 rounded-full border"
        />
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
      <div className="mt-6">
        <p><strong>Agreement Accept Date:</strong> {user.agreementDate}</p>
        <p><strong>Rented Apartment Info:</strong></p>
        <ul className="ml-4">
          <li>Floor: {user.rentedInfo.floor}</li>
          <li>Block: {user.rentedInfo.block}</li>
          <li>Room No: {user.rentedInfo.room}</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
