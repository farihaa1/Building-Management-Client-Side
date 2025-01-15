import React, { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { ImCross } from "react-icons/im";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);
  const closeProfile = () => setIsProfileOpen(false);

  const handleSignOut = () => {
    logout().then(() => {
      console.log("successfully sign ot");
    });
  };

  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg ${
              isActive
                ? "bg-btn1 text-white font-semibold"
                : "text-gray-500 lg:text-gray-400 "
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/add-blog"
          className={({ isActive }) =>
            `px-4 py-2 rounded-lg ${
              isActive
                ? "bg-btn1 text-white font-semibold"
                : "text-gray-500 lg:text-gray-400 "
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
      className=" bg-base-content text-base-300 font-poppins py-2 lg:px-10 "
    >
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-1 px-2 lg:hidden">
              <FaBars className="w-5 h-5 md:w-7 md:h-7" />
            </div>
            <ul
              tabIndex={0}
              className=" dropdown-content bg-base-100 rounded-lg z-[1] mt-3 w-52 p-2 shadow space-y-3 pl-4 py-6"
            >
              {Links}
            </ul>
          </div>
          <Link
            to="/"
            className=" text-2xl md:text-3xl font-bold text-white font-inter"
          >
            ApartmentBS
          </Link>
        </div>

        <div className="navbar-end">
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
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="navbar-center hidden lg:flex py-2 pb-6">
          <ul className="menu-horizontal px-1 gap-4">{Links}</ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
