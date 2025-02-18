import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaCross } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import useAdmin from "../Hooks/useAdmin";
import useMember from "../Hooks/useMember";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isUser, setIsUser] = useState(false)
  const { user, loading, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isMember, isMemberLoading] = useMember();


  
  useEffect(() => {
    if (user && !isAdmin && !isMember) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [user, isAdmin, isMember]);


  if (loading || isAdminLoading || isMemberLoading) {
    return <Loader />;
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  useEffect(()=>{
    // on click ousinde
    setIsMenuOpen(false)
    setIsProfileOpen(false)
  },[])

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
              isActive ? "font-bold underline transition-all duration-500 " : "text-lg md:text-xl"
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
              isActive ? "font-bold underline transition-all duration-500 " : "text-lg md:text-xl"
            }`
          }
        >
          Apartment
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
            `font-semibold ${
              isActive ? "font-bold underline transition-all duration-500 " : "text-lg md:text-xl"
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
      className="text-white font-mulish py-1 lg:px-10 bg-primary "
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
            {isMenuOpen && (
              <ul
                className=" bg-primaryColor w-40 transition-all ease-linear duration-200 z-10 px-2 shadow space-y-3 py-6 left-0 top-[4.4rem] min-h-screen fixed"
                onClick={toggleMenu}
              >
              
                {Links}
              </ul>
            )}
          </div>
          <Link
            to="/"
            className="text-base lg:text-2xl md:text-3xl font-bold flex items-center gap-1 lg:gap-3"
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
          <ul className="menu-horizontal px-1 gap-4 space-x-3 justify-center">{Links}</ul>
        </div>

        {/* Navbar End */}
        <div className="w-1/2 lg:w-1/4 justify-end  flex items-center">
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
                <div className="absolute top-14 w-72 py-4  right-0 bg-white px-6 shadow-md z-[10]">
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
                      className="primary-btn text-white md:text-lg px-5 py-2  w-full"
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
              <Link
                to="/sign-in"
                className="primary-btn text-white px-4 py-2"
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
