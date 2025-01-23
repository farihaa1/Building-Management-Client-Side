import React, { useState } from "react";

const MakeAnnouncement = () => {
  const [announcement, setAnnouncement] = useState({ title: "", description: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the announcement to the backend
    console.log("Announcement Submitted: ", announcement);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Make Announcement</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title:</label>
          <input
            type="text"
            className="border w-full p-2"
            value={announcement.title}
            onChange={(e) => setAnnouncement({ ...announcement, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Description:</label>
          <textarea
            className="border w-full p-2"
            value={announcement.description}
            onChange={(e) => setAnnouncement({ ...announcement, description: e.target.value })}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MakeAnnouncement;
