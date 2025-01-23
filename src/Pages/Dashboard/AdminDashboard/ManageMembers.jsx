import React from "react";

const ManageMembers = () => {
  const members = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
  ];

  const handleRemove = (id) => {
    // Implement backend logic for role change
    console.log(`Removing member with ID: ${id}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Manage Members</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td className="border p-2">{member.name}</td>
              <td className="border p-2">{member.email}</td>
              <td className="border p-2">
                <button
                  className="text-red-500"
                  onClick={() => handleRemove(member.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageMembers;
