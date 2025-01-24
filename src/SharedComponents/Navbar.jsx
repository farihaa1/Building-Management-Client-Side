import React, { useContext, useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout, loading } = useContext(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }

  const profileRef = useRef(null);

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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg ${
              isActive ? "bg-btn1 text-white font-semibold" : "text-gray-500"
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
            `px-4 py-2 rounded-lg ${
              isActive ? "bg-btn1 text-white font-semibold" : "text-gray-500"
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
            `px-4 py-2 rounded-lg ${
              isActive ? "bg-btn1 text-white font-semibold" : "text-gray-500"
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/member-dashboard"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg ${
              isActive ? "bg-btn1 text-white font-semibold" : "text-gray-500"
            }`
          }
        >
          member Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <motion.div
      animate={{ y: [-100, 0] }}
      transition={{ duration: 0.8 }}
      className="bg-base-content text-base-300 font-poppins py-2 lg:px-10"
    >
      <div className="navbar container mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold text-white font-inter flex items-center gap-2 md:gap-4"
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
          <ul className="menu-horizontal px-1 gap-4">{Links}</ul>
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
                <div className="absolute top-14 w-72 py-4 rounded-xl right-0 bg-white px-6 shadow-md z-10">
                  <ul className="menu-vertical p-2 space-y-2 text-gray-600">
                    <li className="py-1 pl-2">
                      {user?.displayName || "Guest User"}
                    </li>
                    <li className="py-1 pl-2">
                      {user?.email || "guest@example.com"}
                    </li>
                    <li className="divider pb-1"></li>
                    <button
                      onClick={handleSignOut}
                      className="bg-primary text-white md:text-lg px-5 py-2 rounded-xl w-full"
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

          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden ml-2">
            <div
              onClick={toggleMenu}
              className="px-2 flex justify-end items-center rounded-md cursor-pointer"
            >
              <FaBars className="w-5 h-5 md:w-8 md:h-8" />
            </div>
            {isMenuOpen && (
              <ul
                className="absolute bg-base-100 rounded-lg z-[1] mt-3 w-52 p-2 shadow space-y-3 py-6 right-0"
                onClick={toggleMenu}
              >
                {Links}
              </ul>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
