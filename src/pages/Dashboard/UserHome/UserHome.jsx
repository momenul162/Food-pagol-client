import React from "react";
import useAuth from "../../../hooks/useAuth";
import useMenu from "../../../hooks/useMenu";
import AdminState from "../../../components/AdminState/AdminState";
import { IoWalletOutline } from "react-icons/io5";
import { BiFoodMenu } from "react-icons/bi";
import { BsTelephoneOutbound } from "react-icons/bs";
import altPhoto from "../../../assets/alt.jpg";

const UserHome = () => {
  const { user } = useAuth();
  const [menu] = useMenu();
  const uniqueCategory = new Set(menu.map((item) => item.category));

  return (
    <div className="sm:mx-4 md:mx-10">
      <h1 className="text-3xl mb-8">Welcome, {user?.displayName}</h1>
      <div className="state grid md:grid-cols-3 gap-10">
        <div className="revenue flex justify-center items-center gap-2">
          <AdminState
            key="00112200"
            icon={<IoWalletOutline />}
            stateTitle="Menu"
            state={uniqueCategory?.size}
          ></AdminState>
        </div>

        <div className="users flex justify-center items-center gap-2">
          <AdminState
            icon={<BiFoodMenu />}
            stateTitle="Total Item"
            state={menu?.length}
          ></AdminState>
        </div>

        <div className="products flex justify-center items-center gap-2">
          <AdminState icon={<BsTelephoneOutbound />} stateTitle="Contact" state="3"></AdminState>
        </div>
      </div>
      <div className="card md:card-side items-center gap-4 mt-10 shadow-xl bg-white">
        <figure className="w-1/2 md:p-24 bg-[#D1A054]">
          <img
            className="w-[195px] rounded-full"
            src={user?.reloadUserInfo?.photoUrl || altPhoto}
            alt="Album"
          />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
