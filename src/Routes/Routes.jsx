import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layout/Main";
import Menu from "../pages/Menu/Menu/Menu";
import Foods from "../pages/Foods/Foods/Foods";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart/MyCart";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Dashboard/AddItem/AddItem";
import ManageItem from "../pages/Dashboard/ManageItem/ManageItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "foods/:category",
        element: <Foods></Foods>,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // User Routes
      {
        path: "userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },

      // Admin Routes
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "alluser",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
      },
      {
        path: "manageitem",
        element: (
          <AdminRoute>
            <ManageItem></ManageItem>
          </AdminRoute>
        ),
      },
    ],
  },
]);
