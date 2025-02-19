import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaCross } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import useAdmin from "../Hooks/useAdmin";
import useMember from "../Hooks/useMember";
import useAuth from "../Hooks/useAuth";
import { useTheme } from "../Providers/ThemeContext";
import { HashLink, NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const { user, loading, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isMember, isMemberLoading] = useMember();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (user && !isAdmin && !isMember) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [user, isAdmin, isMember]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

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
        logout().then(() =>
          Swal.fire("Logged Out", "You have been logged out", "success")
        );
      }
    });
  };

  if (loading || isAdminLoading || isMemberLoading) {
    return <Loader />;
  }

  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold text-xl ${
              isActive
                ? "font-bold underline text-[1.3rem] transition-all duration-500"
                : "text-xl"
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
            `font-semibold text-xl ${
              isActive
                ? "font-bold underline text-[1.3rem] transition-all duration-500"
                : "text-xl"
            }`
          }
        >
          Apartment
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/#about"
          className={({ isActive }) =>
            `font-semibold text-xl ${
              isActive
                ? "font-bold underline text-[1.3rem] transition-all duration-500"
                : "text-xl"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/#location"
          className={({ isActive }) =>
            `font-semibold text-xl ${
              isActive
                ? "font-bold underline text-[1.3rem] transition-all duration-500"
                : "text-xl"
            }`
          }
        >
          Location
        </NavLink>
      </li>
      <li>
        <NavLink
          to={
            isUser
              ? "/dashboard/user-profile"
              : isMember
              ? "/dashboard/member-profile"
              : "/dashboard/admin-profile"
          }
          className={({ isActive }) =>
            `font-semibold text-xl ${
              isActive
                ? "font-bold underline text-[1.3rem] transition-all duration-500"
                : "text-xl"
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
      className="text-white fixed top-0 w-full font-mulish z-[100] py-1 lg:px-10 bg-primary shadow-2xl"
    >
      <div className="navbar lg:container mx-auto">
        {/* Navbar Start */}
        <div className="w-1/2 lg:w-1/4">
          {/* Mobile Dropdown */}
          <div className="lg:hidden">
            <div
              onClick={toggleMenu}
              className="lg:px-2 flex justify-end items-center cursor-pointer mr-3"
            >
              <FaBars className="w-5 h-5 md:w-8 md:h-8" />
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
              <ul className="bg-primary shadow-2xl z-[50] pt-[4.2rem] w-40 transition-all ease-linear duration-200  px-2 space-y-3 py-6 left-0 top-0 min-h-screen fixed menu-dropdown">
                <li onClick={toggleMenu} className="cursor-pointer pb-3">
                  <ImCross className="w-5 h-5" />
                </li>

                {Links}
              </ul>
            )}
          </div>
          <Link
            to="/"
            className="text-[1.4rem] md:text-[1.7rem] font-bold flex items-center gap-1 lg:gap-3"
          >
            <img
              className="w-7 h-7 lg:w-10 lg:h-10 object-cover"
              src="/logo/apartment.svg"
              alt="Apartment Logo"
            />
            Harmony Heights
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="w-2/4 navbar-center hidden lg:flex items-center justify-center  text-xl">
          <ul className="menu-horizontal px-1 gap-4 space-x-3 justify-center">
            {Links}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="w-1/2 lg:w-1/4 justify-end  flex items-center">
          <label className="swap swap-rotate rounded-full p-1">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />

            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

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
              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute top-14 w-72 py-4 right-0 bg-white px-6 shadow-md z-[10] profile-dropdown">
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
                      className="primary-btn text-white md:text-lg px-5 py-2 w-full"
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
                className="primary-btn text-white px-4  py-2 mr-3"
              >
                Register
              </Link>
              <Link to="/sign-in" className="primary-btn text-white px-4 py-2">
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
