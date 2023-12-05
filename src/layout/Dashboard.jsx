import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaWallet, FaCalendarDays } from "react-icons/fa6";
import { MdEmail, MdLibraryBooks, MdMenu, MdReviews, MdShoppingBag } from "react-icons/md";
import { BsFillCalendar2HeartFill } from "react-icons/bs";
import { FaHome, FaUsers } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { TfiMenuAlt } from "react-icons/tfi";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/userAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center">
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side border bg-[#D1A054]">
        <div className="menu p-4 w-80">
          <NavLink to="/" className="btn btn-ghost normal-case">
            <img src="/logo.png" className="w-[45px]" alt="" />{" "}
            <h1 className="md:text-3xl pt-2">FOOD PAGOL</h1>
          </NavLink>
          <p className="text-center tracking-[.3em]">RESTAURANT</p>
        </div>
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu-bar menu p-4 md:w-80 min-h-full">
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
                <NavLink to="/dashboard/payhistory">
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
              <li>
                <NavLink to="/dashboard/addreview">
                  <MdReviews></MdReviews> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mybooking">
                  <BsFillCalendar2HeartFill></BsFillCalendar2HeartFill> My Booking
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
