import React from "react";
import { Link, NavLink } from "react-router-dom";

const UserNavbar = () => {
  return (
    <div>
      <div className="navbar-start hidden lg:flex items-center justify-center py-1 text-xl pb-6 w-full">
        <ul className=" px-1 w-full text-2xl flex flex-col gap-3">
          <li className="w-full">
            <Link
              to="/"
              className="text-2xl md:text-3xl font-bold text-white  flex items-center gap-2 md:gap-4 my-4 mb-12"
            >
              <img
                className="w-10 h-10 object-cover"
                src="/logo/apartment.svg"
                alt="Apartment Logo"
              />
              Harmony Heights
            </Link>
          </li>
          <li>
            <NavLink
              to="/user-dashboard/my-profile"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg ${
                  isActive
                    ? "bg-active text-white font-semibold"
                    : "text-gray-500"
                }`
              }
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-dashboard/announcements"
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg ${
                  isActive
                    ? "bg-btn1 text-white font-semibold"
                    : "text-gray-500"
                }`
              }
            >
              Announcements
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserNavbar;
