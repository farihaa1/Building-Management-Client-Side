import React, { useState } from "react";
import { FaBars, FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useMember from "../../Hooks/useMember";
import Loader from "../../Components/Loader";

const DashboardNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isMember, isMemberLoading] = useMember();
  const isUser = !isAdmin && !isMember;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
 

  const isLoading = isAdminLoading || isMemberLoading;
  if (isLoading) {
    return <Loader></Loader>;
  }

  const AdminLinks = () => (
    <>
      <li>
        <NavLink to="admin-profile"   className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }>
          Admin Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="manage-members"   className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }>
          Manage Members
        </NavLink>
      </li>
      <li>
        <NavLink to="make-announcement"   className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }>
          Make Announcement
        </NavLink>
      </li>
      <li>
        <NavLink to="agreement-requests"   className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }>
          Agreement Requests
        </NavLink>
      </li>
      <li>
        <NavLink to="manage-coupons"   className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }>
          Manage Coupons
        </NavLink>
      </li>
      <li>
        <NavLink to="all-users"   className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }>
          All Users
        </NavLink>
      </li>
    </>
  );

  const CommonLinks = () => (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }
        >
          <FaHome></FaHome>
          Home
        </NavLink>
      </li>
    </>
  );

  const UserLinks = () => (
    <>
      <li>
        <NavLink
          to="user-profile"
          className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="announcements"
          className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }
        >
          Announcements
        </NavLink>
      </li>
    </>
  );

  const MemberLinks = () => (
    <>
      <li>
        <NavLink
          to="member-profile"
          className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="make-payment"
          className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }
        >
          Make Payment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="payment-history"
          className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }
        >
          Payment History
        </NavLink>
      </li>
      <li>
        <NavLink
          to="announcements"
          className={({ isActive }) =>
            `md:text-sm ${
              isActive ? "text-white font-semibold underline" : "text-gray-300"
            }`
          }
        >
          Announcements
        </NavLink>
      </li>
    </>
  );

  const renderLinks = () => {
    if (isUser) return <UserLinks />;
    if (isMember) return <MemberLinks />;
    if (isAdmin) return <AdminLinks />;

   
    return null;
  };

  return (
    <div className=" bg-green-950 min-h-svh">
      <div className="navbar-start hidden lg:flex  flex-col bg-green-950 lg:p-4  text-white items-center justify-center py-1 text-xl pb-6 w-full">
        <ul className="px-1 w-full text-2xl flex flex-col gap-3">
          {renderLinks()}
        </ul>
        <div className="divider "></div>
        <ul className="px-1 w-full text-2xl flex gap-3">{CommonLinks()}</ul>
      </div>
      <div className="dropdown flex flex-col lg:hidden">
        <div
          onClick={toggleMenu}
          className="px-3 pt-3 ease-out flex flex-col justify-start  cursor-pointer mr-2"
        >
          <FaBars className="w-5 h-5 md:w-8 md:h-8 text-white" />
          {isMenuOpen && (
          <ul
            className="ease-in-out text-start text-xs space-y-1 pt-3"
            onClick={toggleMenu}
          >
            {renderLinks()}
            <li className="divider "></li>
            {CommonLinks()}
          </ul>
        )}
        </div>
        
      </div>
    </div>
  );
};

export default DashboardNavbar;
