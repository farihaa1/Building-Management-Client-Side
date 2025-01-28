import React, { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import useAdmin from "../Hooks/useAdmin";
import useMember from "../Hooks/useMember";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, loading} = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // const [isAdmin, isAdminLoading] = useAdmin();
  // const [isMember, isMemberLoading] = useMember();
  // const isUser = !isAdmin && !isMember;

  if (loading) {
    return <Loader />;
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure you want to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logout()
          .then(() =>
            Swal.fire("Logged Out", "You have been logged out", "success")
          )
          .catch((err) => console.error(err));
      }
    });
  };

  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? "font-bold underline" : "text-green-950 "
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apartment"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? "font-bold underline" : "text-green-950 "
            }`
          }
        >
          Apartment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `font-semibold ${
              isActive ? "font-bold underline" : "text-green-950 "
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <motion.div
      animate={{ y: [-100, 0] }}
      transition={{ duration: 0.8 }}
      className="text-green-950 font-poppins py-2 lg:px-10"
    >
      <div className="navbar container mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <div
              onClick={toggleMenu}
              className="px-2 flex justify-end items-center rounded-md cursor-pointer mr-2"
            >
              <FaBars className="w-5 h-5 md:w-8 md:h-8" />
            </div>
            {isMenuOpen && (
              <ul
                className="absolute bg-base-100 rounded-lg z-[10] mt-3 w-48 px-5 shadow space-y-3 py-6 left-0"
                onClick={toggleMenu}
              >
                {Links}
              </ul>
            )}
          </div>
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold flex items-center gap-2 md:gap-4"
          >
            <img
              className="w-10 h-10 object-cover"
              src="/logo/apartment.svg"
              alt="Apartment Logo"
            />
            Harmony Heights
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex items-center justify-center py-1 text-xl pb-6">
          <ul className="menu-horizontal px-1 gap-4 space-x-3">{Links}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end flex items-center">
          {user ? (
            <div className="relative">
              <div
                onClick={toggleProfile}
                className="rounded-full w-10 h-10 md:w-12 md:h-12 cursor-pointer"
              >
                {user.photoURL ? (
                  <img
                    className="w-full h-full object-cover rounded-full bg-green-500"
                    src={user.photoURL}
                    alt="Profile"
                    title={user.displayName}
                  />
                ) : (
                  <div className="w-full h-full bg-green-500 flex items-center justify-center rounded-full">
                    <h4 className="text-lg text-white font-semibold">
                      {user.displayName?.slice(0, 1)}
                    </h4>
                  </div>
                )}
              </div>
              {isProfileOpen && (
                <div className="absolute top-14 w-72 py-4 rounded-xl right-0 bg-white px-6 shadow-md z-[10]">
                  <ul className="menu-vertical p-2 space-y-2 text-green-950">
                    <li className="py-1 pl-2">
                      {user?.displayName || "Guest User"}
                    </li>
                    <li className="py-1 pl-2">
                      {user?.email || "guest@example.com"}
                    </li>
                    <li className="divider pb-1 text-green-950"></li>
                    <button
                      onClick={handleSignOut}
                      className="primary-btn text-white md:text-lg px-5 py-2 rounded-xl w-full"
                    >
                      Sign Out
                    </button>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/register"
                className="bg-primary text-white px-4 rounded-lg py-2 mr-3"
              >
                Register
              </Link>
              <Link
                to="/sign-in"
                className="bg-primary text-white px-4 rounded-lg py-2"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
