import React from "react";

const AgreementRequests = () => {
  const requests = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      floor: "3",
      block: "A",
      room: "305",
      rent: "$500",
      date: "2025-01-01",
    },
  ];

  const handleAccept = (id) => {
    console.log(`Accepting request ID: ${id}`);
  };

  const handleReject = (id) => {
    console.log(`Rejecting request ID: ${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Agreement Requests</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Floor</th>
            <th className="border p-2">Block</th>
            <th className="border p-2">Room</th>
            <th className="border p-2">Rent</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req) => (
            <tr key={req.id}>
              <td className="border p-2">{req.name}</td>
              <td className="border p-2">{req.email}</td>
              <td className="border p-2">{req.floor}</td>
              <td className="border p-2">{req.block}</td>
              <td className="border p-2">{req.room}</td>
              <td className="border p-2">{req.rent}</td>
              <td className="border p-2">{req.date}</td>
              <td className="border p-2">
                <button
                  className="text-green-500 mr-2"
                  onClick={() => handleAccept(req.id)}
                >
                  Accept
                </button>
                <button className="text-red-500" onClick={() => handleReject(req.id)}>
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AgreementRequests;
