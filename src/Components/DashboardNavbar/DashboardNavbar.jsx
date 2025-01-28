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
        <Link to="admin-profile"  className={({ isActive }) =>
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
            }`
          }>
          Admin Profile
        </Link>
      </li>
      <li>
        <Link to="manage-members"  className={({ isActive }) =>
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
            }`
          }>
          Manage Members
        </Link>
      </li>
      <li>
        <Link to="make-announcement"  className={({ isActive }) =>
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
            }`
          }>
          Make Announcement
        </Link>
      </li>
      <li>
        <Link to="agreement-requests"  className={({ isActive }) =>
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
            }`
          }>
          Agreement Requests
        </Link>
      </li>
      <li>
        <Link to="manage-coupons"  className={({ isActive }) =>
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
            }`
          }>
          Manage Coupons
        </Link>
      </li>
      <li>
        <Link to="all-users"  className={({ isActive }) =>
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
            }`
          }>
          All Users
        </Link>
      </li>
    </>
  );

  const CommonLinks = () => (
    <>
      <li>
        <Link
          to="/"
          className="hover:underline w-full flex items-center gap-2 text-gray-400"
        >
          <FaHome></FaHome>
          Home
        </Link>
      </li>
    </>
  );

  const UserLinks = () => (
    <>
      <li>
        <NavLink
          to="user-profile"
          className={({ isActive }) =>
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
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
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
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
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
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
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
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
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
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
            ` ${
              isActive ? "text-white font-semibold" : "text-gray-500"
            }`
          }
        >
          Announcements
        </NavLink>
      </li>
    </>
  );

  const renderLinks = () => {
    if (isAdmin) return <AdminLinks />;
    if (isUser) return <UserLinks />;
    if (isMember) return <MemberLinks />;
    return null;
  };

  return (
    <div className=" h-full bg-green-950 min-h-svh">
      <div className="navbar-start hidden min-h-max lg:flex  flex-col bg-green-950 lg:p-4 lg:rounded-lg text-white items-center justify-center py-1 text-xl pb-6 w-full">
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
