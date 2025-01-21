import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MemberDashboardLayout = () => {
  return (
    <div className="flex">
      
      <aside className="w-1/4 bg-gray-200 p-4 min-h-screen">
        <h2 className="text-2xl font-bold mb-6">Member Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/member-dashboard/my-profile"
              className={({ isActive }) => (isActive ? "text-blue-700 font-semibold" : "text-blue-500 hover:underline")}
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/member-dashboard/make-payment"
              className={({ isActive }) => (isActive ? "text-blue-700 font-semibold" : "text-blue-500 hover:underline")}
            >
              Make Payment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/member-dashboard/payment-history"
              className={({ isActive }) => (isActive ? "text-blue-700 font-semibold" : "text-blue-500 hover:underline")}
            >
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/member-dashboard/announcements"
              className={({ isActive }) => (isActive ? "text-blue-700 font-semibold" : "text-blue-500 hover:underline")}
            >
              Announcements
            </NavLink>
          </li>
        </ul>
      </aside>

     
      <main className="w-3/4 p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default MemberDashboardLayout;
