import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaWallet, FaCalendarDays } from "react-icons/fa6";
import { MdEmail, MdLibraryBooks, MdMenu, MdReviews, MdShoppingBag } from "react-icons/md";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { FaHome, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import { SlCalender } from "react-icons/sl";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/userAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer md:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none md:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 md:hidden">Food Pagol</div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>

        <ul className="menu p-4 sm:w-52 md:w-72 min-h-full bg-[#D1A054]">
          <div className="menu md:mb-10">
            <NavLink to="/" className="btn btn-ghost normal-case">
              <img src="/logo.png" className="w-[45px]" alt="" />{" "}
              <h1 className="sm: text-xl md:text-3xl">FOOD PAGOL</h1>
            </NavLink>
            <p className="text-center tracking-[.3em] md:mt-8">RESTAURANT</p>
          </div>
          {/* Sidebar content here */}
          {isAdmin?.admin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminhome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/additem">
                  <ImSpoonKnife></ImSpoonKnife> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageitem">
                  <TfiMenuAlt></TfiMenuAlt> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addreview">
                  <MdLibraryBooks></MdLibraryBooks> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/alluser">
                  <FaUsers></FaUsers> All User
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userhome">
                  <FaHome></FaHome> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaCalendarDays></FaCalendarDays> Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment_history">
                  <FaWallet></FaWallet> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mycart">
                  <FaCartShopping></FaCartShopping> My Cart
                  <span className="badge badge-sm badge-error indicator-item">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <MdMenu></MdMenu> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/foods/salad">
              <MdShoppingBag></MdShoppingBag> Foods
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <MdEmail></MdEmail> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
