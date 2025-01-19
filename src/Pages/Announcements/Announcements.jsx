import React, { useEffect, useState } from "react";
import Welcome from "../../Components/Welcome/Welcome";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/announcements")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data));
  }, []);

  return (
    <div className="p-4">
      <Welcome></Welcome>
      <div className="pt-12">
        <h3 className="text-4xl font-bold text-gray-700">Announcements</h3>
        <div className="grid grid-cols-2 w-full gap-6 pt-8">
          {announcements.map((item) => (
            <div key={item.id} className="card w-full bg-primary text-primary-content">
              <div className="card-body">
                <h2 className="card-title text-xl">{item.title}</h2>
                <p className="text-base py-1">{item.description}</p>
                <div className="card-actions">
                  <button className="btn">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Announcements;
