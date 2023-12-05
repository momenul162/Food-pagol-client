import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../../../config/baseURL";
import { IoWalletOutline } from "react-icons/io5";
import "./AdminHome.css";
import AdminState from "../../../components/AdminState/AdminState";
import { FaTruckFast, FaUsers } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

const AdminHome = () => {
  const { user } = useAuth();

  const { data: state = {} } = useQuery({
    queryKey: ["admin-state"],
    queryFn: async () => {
      const res = await baseUrl("/admin-state");
      return res.data;
    },
  });
  const { revenue, orders, products, users } = state;

  return (
    <div>
      <h1 className="text-3xl">Welcome, {user?.displayName}</h1>
      <div className="state grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="revenue flex justify-center items-center gap-2">
          {revenue?.map((order) => (
            <AdminState
              key={order._id}
              icon={<IoWalletOutline />}
              stateTitle="Revenue"
              state={order.total}
            ></AdminState>
          ))}
        </div>

        <div className="users flex justify-center items-center gap-2">
          <AdminState icon={<FaUsers />} stateTitle="Total User" state={users}></AdminState>
        </div>

        <div className="products flex justify-center items-center gap-2">
          <AdminState
            icon={<MdOutlineProductionQuantityLimits />}
            stateTitle="Products"
            state={products}
          ></AdminState>
        </div>

        <div className="orders flex justify-center items-center gap-2">
          <AdminState icon={<FaTruckFast />} stateTitle="Orders" state={orders}></AdminState>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
