import React from "react";
import { NavLink } from "react-router-dom";
import WebTitle from "../../../components/WebTitle/WebTitle";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-8 bg-slate-200 mt-10">
        <aside className="">
          <div className="mb-10">
            <NavLink to="/" className="btn btn-ghost normal-case">
              <img src="/logo.png" className="w-[45px]" alt="" /> <WebTitle />
            </NavLink>
            <p className="text-center text-orange-400 tracking-[.3em]">RESTAURANT</p>
          </div>
        </aside>
        <nav className="">
          <header className="footer-title text-purple-950">Social</header>
          <div className="grid grid-flow-col gap-4"></div>
        </nav>
      </footer>
      <div className="footer footer-center py-5 bg-[#151515] text-white">
        <aside>
          <p>Copyright © 2024 - All right reserved by Food Pagol Restaurant</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
