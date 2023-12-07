import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../../../config/baseURL";
import { IoWalletOutline } from "react-icons/io5";
import "./AdminHome.css";
import AdminState from "../../../components/AdminState/AdminState";
import { FaTruckFast, FaUsers } from "react-icons/fa6";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie } from "recharts";

// Admin state
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

  // chart color
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  // order state
  const { data: chartData = [] } = useQuery({
    queryKey: ["ordar-state"],
    queryFn: async () => {
      const res = await baseUrl("/orders/state");
      return res.data;
    },
  });

  // Bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${
      y + height
    }
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  //Pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

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
      <div className="lg:flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="totalPrice"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="numberOfItems"
            >
              {chartData.map((index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
