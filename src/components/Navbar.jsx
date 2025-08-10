import { useContext } from "react";
import { AuthContext } from "../context/AuthContext/AuthContext";
import { Link, NavLink } from "react-router";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { FaMoon, FaSun, FaUserAltSlash } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => {
        console.log("Logout successful:", res);
      })
      .catch((error) => console.error("Logout error:", error));
  };

  return (
    <div>
      <div className="navbar px-3 md:px-8 lg:px-16 bg-[#dfe8f6]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-black"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/rooms">Rooms</NavLink>
              </li>

              {user && (
                <li>
                  <NavLink to={`/my-bookings/${user?.email}`}>
                    My Bookings
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center justify-center">
            <a href="/" className="text-lg lg:text-2xl text-gray-800">
              H O T E L U X
            </a>
            <span className="text-gray-800 text-sm">Luxury Hotel</span>
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

            {user && (
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `bg-transparent p-0 m-0 border-none rounded-none shadow-none text-stone-800 hover:scale-125 transition-transform ${
                      isActive ? "font-semibold underline" : ""
                    }`
                  }
                  to={`/my-bookings/${user?.email}`}
                >
                  My Bookings
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                className={({ isActive }) =>
                  `bg-transparent p-0 m-0 border-none rounded-none shadow-none text-stone-800 hover:scale-125 transition-transform ${
                    isActive ? "font-semibold underline" : ""
                  }`
                }
                to="/about"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-3">
          {/* Avatar with Tooltip */}
          <span
            data-tooltip-id="user-tooltip"
            data-tooltip-content={user?.displayName || "User Unavailable"}
            data-tooltip-delay-hide={500}
            className="cursor-pointer text-sm"
          >
            {user?.photoURL ? (
              <img
                alt="User"
                src={user.photoURL}
                className="rounded-full w-10 h-10 object-cover"
              />
            ) : (
              <FaUserAltSlash className="text-xl" />
            )}
          </span>

          {/* Tooltip placed OUTSIDE the span */}
          <Tooltip id="user-tooltip" place="left" />

          {/* Auth Buttons */}
          {user ? (
            <button
              onClick={handleLogOut}
              className="p-0 m-0 border-none rounded-none shadow-none text-stone-800 hover:scale-105 transition-transform"
            >
              LogOut
            </button>
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
    </div>
  );
};

export default Navbar;
