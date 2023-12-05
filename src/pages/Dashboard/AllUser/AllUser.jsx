import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt, FaUserTie } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { baseUrl } from "../../../config/baseURL";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await baseUrl.get("users");
    return res?.data;
  });

  const handleMakeAdmin = (user) => {
    baseUrl
      .patch(`users/admin/${user._id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is now an admin`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="overflow-x-auto min-w-full px-20">
      <SectionTitle subHeader="How many" mainHeader="All User"></SectionTitle>
      <div className="flex justify-between mb-8 uppercase">
        <h1 className="text-3xl">Tota Orders: {users.length}</h1>
      </div>
      <table className="table">
        {/* head */}
        <thead className="bg-[#D1A054] text-white">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <tbody key={user._id}>
            {/* row 1 */}
            <tr>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.role === "admin" ? (
                  "Admin"
                ) : (
                  <button
                    onClick={() => handleMakeAdmin(user)}
                    className="btn btn-square btn-outline text-white bg-[#D1A054]"
                  >
                    <FaUserTie></FaUserTie>
                  </button>
                )}
              </td>
              <td>
                <button
                  onClick={() => handleRemove(user)}
                  className="btn btn-square btn-outline text-white bg-red-600"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default AllUser;
