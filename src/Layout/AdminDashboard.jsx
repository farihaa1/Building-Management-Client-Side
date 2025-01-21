import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/admin-dashboard/profile" className="text-blue-500 hover:underline">
              Admin Profile
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/manage-members" className="text-blue-500 hover:underline">
              Manage Members
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/make-announcement" className="text-blue-500 hover:underline">
              Make Announcement
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/agreement-requests" className="text-blue-500 hover:underline">
              Agreement Requests
            </Link>
          </li>
          <li>
            <Link to="/admin-dashboard/manage-coupons" className="text-blue-500 hover:underline">
              Manage Coupons
            </Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-4 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
