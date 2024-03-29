import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import logo from "../../assets/cart-logo2.jpg";
import useRole from "../../Hooks/useRole";
import './Navbar.css'



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [buyerRole, sellerRole, amdinRole] = useRole(user?.email);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const menuItems = (
    <React.Fragment>
      <li className="navitem">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold navbarMenu" : "text-gray-800 font-semibold"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : "text-gray-800 font-semibold"
          }
        >
          Blog
        </NavLink>
      </li>

      {user?.uid ? (
        <>
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-gray-800 font-semibold"
              }
            >
              Dashboard
            </NavLink>
          </li>
          {user?.photoURL && (
            <>
              <img
                alt=""
                style={{ height: "50px", width: "50px" }}
                className="rounded-full mb-4 md:mb-0"
                src={user?.photoURL}
                title={user?.displayName}
              />
            </>
          )}

          <li>
            <button
              onClick={handleLogOut}
              className="btn-sm mt-2 items-center text-white py-0 bg-Red ml-2 hover:bg-info"
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-bold"
                  : "text-gray-800 font-semibold"
              }
            >
              Login
            </NavLink>
          </li>
        </>
      )}
    </React.Fragment>
  );

  return (
    <div className="navbar  py-6 px-4 bg-base-100 flex justify-between dark:text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost hover:bg-transparent  normal-case text-2xl md:text-3xl"
        >
          <img src={logo} className="w-16" alt="" />
          <p className="mx-1 pl-3 md:mx-3 text-blue-400">
            <span className="hover:text-yellow-500">R</span>
            <span className="hover:text-yellow-500">e</span>
            <span className="hover:text-yellow-500">s</span>
            <span className="hover:text-yellow-500">a</span>
            <span className="hover:text-yellow-500">l</span>
            <span className="hover:text-yellow-500">e</span> <span className="hover:text-yellow-500">Z</span>
            <span className="hover:text-yellow-500">o</span>
            <span className="hover:text-yellow-500">n</span>
            <span className="hover:text-yellow-500">e</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
