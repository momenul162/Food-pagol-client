import React from "react";

const AdminState = ({ icon, stateTitle, state }) => {
  return (
    <>
      <div className="text-5xl text-white">{icon}</div>
      <div>
        <div className="text-white">{stateTitle}</div>
        <div className="text-4xl font-bold text-primary">{state}</div>
      </div>
    </>
  );
};

export default AdminState;
