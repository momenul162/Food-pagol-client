import React from "react";
import { Outlet } from "react-router-dom";
import bgImg from "../assets/others/authentication.png";

const LoginLayout = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayout;
