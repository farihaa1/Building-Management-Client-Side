import React from "react";
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useMember from "../../Hooks/useMember";
import Loader from "../../Components/Loader"

const DashboardNavbar = () => {
 
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isMember, isMemberLoading] = useMember();
  const isUser = !isAdmin && !isMember;
  

  const isLoading = isAdminLoading || isMemberLoading;
  if(isLoading){
    return <Loader></Loader>
  }

  const AdminLinks = () => (
    <>
      <li>
        <Link to="admin-profile" className="text-blue-500 hover:underline">
          Admin Profile
        </Link>
      </li>
      <li>
        <Link to="manage-members" className="text-blue-500 hover:underline">
          Manage Members
        </Link>
      </li>
      <li>
        <Link to="make-announcement" className="text-blue-500 hover:underline">
          Make Announcement
        </Link>
      </li>
      <li>
        <Link to="agreement-requests" className="text-blue-500 hover:underline">
          Agreement Requests
        </Link>
      </li>
      <li>
        <Link to="manage-coupons" className="text-blue-500 hover:underline">
          Manage Coupons
        </Link>
      </li>
      <li>
        <Link to="all-users" className="text-blue-500 hover:underline">
          All Users
        </Link>
      </li>
    </>
  );

  const CommonLinks = () => (
    <>
      <li>
        <Link to="/" className="text-blue-500 hover:underline">
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
            `px-4 py-2 rounded-lg ${
              isActive ? "bg-active text-white font-semibold" : "text-gray-500"
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
            `px-4 py-2 rounded-lg ${
              isActive ? "bg-btn1 text-white font-semibold" : "text-gray-500"
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
            isActive
              ? "text-blue-700 font-semibold"
              : "text-blue-500 hover:underline"
          }
        >
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink
          to="make-payment"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 font-semibold"
              : "text-blue-500 hover:underline"
          }
        >
          Make Payment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="payment-history"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 font-semibold"
              : "text-blue-500 hover:underline"
          }
        >
          Payment History
        </NavLink>
      </li>
      <li>
        <NavLink
          to="announcements"
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 font-semibold"
              : "text-blue-500 hover:underline"
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
    <div>
      <div className="navbar-start hidden lg:flex items-center justify-center py-1 text-xl pb-6 w-full">
        <ul className="px-1 w-full text-2xl flex flex-col gap-3">
          {renderLinks()}
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
