import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BeatLoader } from "react-spinners";

const Navbar = () => {
  const { user, logout, loading } = useAuth();

  const links = (
    <>
      <li>
        <NavLink className="mr-3" to="/">
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink className="mr-3" to="/update-profile">
            Update Profile
          </NavLink>
        </li>
      )}
      {user && (
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
      )}
      {!user && (
        <li>
          <Link to="/register">Register</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-cyan-500 p-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-neutral lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-white font-bold bg-cyan-500"
            >
              {links}
            </ul>
          </div>
          <a className="btn text-base md:text-xl lg:text-2xl font-bold flex gap-0">
            Home<span className="text-blue-600">Sell</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white font-bold">
            {links}
          </ul>
        </div>

        <div className="navbar-end">
          {loading && !user ? (
            <BeatLoader color="#36d7b7" />
          ) : (
            <>
              {user ? (
                <>
                  <Link to="/">
                    <button
                      onClick={logout}
                      className="btn text-white font-bold btn-accent mr-2"
                    >
                      Logout
                    </button>
                  </Link>
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          title={user.displayName || ""}
                          src={
                            user.photoURL ||
                            "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          }
                          alt="User Avatar"
                        />
                      </div>
                    </label>
                  </div>
                </>
              ) : (
                <Link to="/login">
                  <button className="btn text-white font-bold btn-accent">
                    Login
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
