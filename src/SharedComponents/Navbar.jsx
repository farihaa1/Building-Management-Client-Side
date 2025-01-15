import React, { useContext, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleMenu = () => setIsMenu(!isMenu);
  const closeMenu = () => setIsMenu(false);

  const handleSignOut = () => {
    logout()
      .then(() => {
        console.log("Successfully signed out");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".dropdown")) {
        closeMenu();
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
          className={({ isActive,isProfileOpen }) =>
            `px-4 py-2 rounded-lg ${isProfileOpen? "text-gray-500":""} ${
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
    </>
  );

  return (
    <motion.div
      animate={{ y: [-100, 0] }}
      transition={{ duration: 2 }}
      className="bg-base-content text-base-300 font-poppins py-2 lg:px-10"
    >
      <div className="navbar container mx-auto">
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
            ApartmentBS
          </Link>
        </div>

        <div className="navbar-end flex items-center">
          {user ? (
            <>
              <button
                onClick={handleSignOut}
                className="bg-blue text-white px-4 rounded-lg py-2 mr-3"
              >
                Sign Out
              </button>
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="relative text-white bg-gray-700 px-4 py-2 rounded-lg"
              >
                Profile
              </button>
              {isProfileOpen && (
                <div className="absolute bg-white shadow-lg rounded-md py-2 mt-2 right-0">
                  <p className="px-4 py-2">{user?.displayName || "User"}</p>
                </div>
              )}
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="bg-blue text-white px-4 rounded-lg py-2 mr-3"
              >
                Register
              </Link>
              <Link
                to="/sign-in"
                className="bg-blue text-white px-4 rounded-lg py-2"
              >
                Sign In
              </Link>
            </>
          )}
          <div onClick={toggleMenu} className="dropdown lg:hidden ml-2">
            <div
              role="button"
              className="px-2 flex justify-end items-center rounded-md"
            >
              <FaBars className="w-5 h-5 md:w-8 md:h-8" />
            </div>
            {isMenu && (
              <ul className="absolute bg-base-100 rounded-lg z-[1] mt-3 w-52 p-2 shadow space-y-3 py-6 right-0">
                {Links}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex py-2 pb-6">
        <ul className="menu-horizontal px-1 gap-4">{Links}</ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
