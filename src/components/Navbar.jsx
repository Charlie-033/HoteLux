import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Link, NavLink } from "react-router";
import { Tooltip } from "react-tooltip";
import { FaUserAltSlash } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar  px-3 md:px-8 lg:px-16">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-black"
              fill="none"
              viewBox="0 0 24 24"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rooms">Rooms</NavLink>
            </li>
            <li>
              <NavLink to="/my-bookings">My Bookings</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a className="text-lg lg:text-3xl text-stone-800">H O T E L U X</a>
          <span className="text-stone-800">Luxury Hotel</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <li>
            <NavLink
               className={({ isActive }) =>
                `bg-transparent p-0 m-0 border-none rounded-none shadow-none text-stone-800 hover:scale-125 transition-transform ${
                  isActive ? "font-semibold underline" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
               className={({ isActive }) =>
                `bg-transparent p-0 m-0 border-none rounded-none shadow-none text-stone-800 hover:scale-125 transition-transform ${
                  isActive ? "font-semibold underline" : ""
                }`
              }
              to="/rooms"
            >
              Rooms
            </NavLink>
          </li>
          <li>
            <NavLink
               className={({ isActive }) =>
                `bg-transparent p-0 m-0 border-none rounded-none shadow-none text-stone-800 hover:scale-125 transition-transform  ${
                  isActive ? "font-semibold underline" : ""
                }`
              }
              to="/my-bookings"
            >
              My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `bg-transparent p-0 m-0 border-none rounded-none shadow-none text-stone-800 hover:scale-125 transition-transform  ${
                  isActive ? "font-semibold underline" : ""
                }`
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        {/* <button
          className="p-1 rounded-3xl bg-yellow-100 font-bold md:border-2 text-xs dark:text-white dark:bg-gray-900 dark:border-white"
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? "☀️Light" : "🌙Dark"}
        </button> */}
        <span
          data-tooltip-id="user-tooltip"
          className="cursor-pointer text-sm"
          data-tooltip-content={user?.displayName || "User Unavailable"}
          data-tooltip-delay-hide={500}
        >
          {user?.photoURL ? (
            <img alt="" src={user.photoURL} className="rounded-full w-10 " />
          ) : (
            <FaUserAltSlash className="text-xl" />
          )}
          <Tooltip id="user-tooltip" place="left" />
        </span>
        {user ? (
          <>
            <Link to="/login">
              <button
                onClick={handleLogOut}
                className="p-0 m-0 border-none rounded-none shadow-none text-stone-800 hover:scale-105 transition-transform"
              >
                LogOut
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="p-0 m-0 border-none rounded-none shadow-none text-stone-800 hover:scale-105 transition-transform">
                Login
              </button>
            </Link>
            <span>|</span>
            <Link to="/register">
              <button className="p-0 m-0 border-none rounded-none shadow-none text-stone-800 hover:scale-105 transition-transform">
                Register
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
