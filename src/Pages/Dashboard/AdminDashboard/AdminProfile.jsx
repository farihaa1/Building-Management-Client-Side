import React from "react";

const AdminProfile = () => {
  // Replace with actual data fetched from backend
  const profileData = {
    name: "Admin Name",
    email: "admin@example.com",
    image: "https://via.placeholder.com/150",
    totalRooms: 100,
    availableRooms: 40,
    agreementRooms: 60,
    totalUsers: 120,
    totalMembers: 60,
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Profile</h1>
      <div className="flex gap-6 items-center mb-6">
        <img src={profileData.image} alt="Admin" className="w-24 h-24 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{profileData.name}</h2>
          <p>{profileData.email}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <p>Total Rooms: {profileData.totalRooms}</p>
        <p>Available Rooms: {profileData.availableRooms}</p>
        <p>Agreement Rooms: {profileData.agreementRooms}</p>
        <p>Total Users: {profileData.totalUsers}</p>
        <p>Total Members: {profileData.totalMembers}</p>
      </div>
    </div>
  );
};

export default AdminProfile;
