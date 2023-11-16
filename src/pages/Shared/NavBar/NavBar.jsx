import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

const NavBar = () => {
  const [error, setError] = useState(true);
  const [cart] = useCart();
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => setError(error.message));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/foods/salad">Foods</Link>
      </li>

      {user ? (
        <li onClick={handleSignOut}>
          <Link to="/">Log out</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-blue-800 bg-opacity-75 text-white max-w-screen-xl">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case">
            <img src="/logo.png" className="w-[45px]" alt="" />{" "}
            <h1 className="md:text-3xl text-orange-500">FOOD PAGOL</h1>
          </Link>
        </div>
        <div className="w-full navbar-end">
          <div className="navbar hidden lg:flex">
            <ul className="menu menu-horizontal px-1 ">{navItems}</ul>
          </div>
          <Link to="/dashboard/mycart">
            <div className="navbar-end mr-5 flex items-center gap-4">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <div className="text-3xl">
                    <FaCartShopping></FaCartShopping>
                  </div>
                  <span className="badge badge-sm badge-error indicator-item">
                    +{cart?.length || 0}
                  </span>
                </div>
              </label>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="hello" alt="hello" />
                </div>
              </label>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
