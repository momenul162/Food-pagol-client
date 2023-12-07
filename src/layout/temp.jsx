import { Outlet } from "react-router-dom";

<div className="drawer">
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
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
      <div className="flex-1 px-2 mx-2">Navbar Title</div>
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal">
          {/* Navbar menu content here */}
          <li>
            <a>Navbar Item 1</a>
          </li>
          <li>
            <a>Navbar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
    {/* Page content here */}
    <Outlet></Outlet>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200">
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
    </ul>
  </div>
</div>;
