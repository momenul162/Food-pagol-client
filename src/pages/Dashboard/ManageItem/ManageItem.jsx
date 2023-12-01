import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import { baseUrl } from "../../../config/baseURL";
import Swal from "sweetalert2";

const ManageItem = () => {
  const [menu, , refetch] = useMenu();

  // const handleRemove = (item) => {
  //   const { data, refetch } = useQuery({
  //     queryKey: ["menuItem"],
  //     queryFn: async (item) => {
  //       const res = await baseUrl.delete(`/menu/${item._id}`);
  //       console.log(res);
  //     },
  //   });
  // };

  const handleRemove = async (item) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await baseUrl.delete(`/menu/${item._id}`);
        console.log(res);

        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Cart Remove Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } catch (error) {
        console.error("Error deleting item:", error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while deleting the item!",
        });
      }
    }
  };

  return (
    <div className="overflow-x-auto min-w-full px-16">
      <SectionTitle subHeader="How many" mainHeader="Manage All Items"></SectionTitle>
      <div className="flex justify-between mb-8 uppercase">
        <h1 className="text-3xl">Tota Items: {menu.length}</h1>
      </div>
      <table className="table">
        {/* head */}
        <thead className="bg-[#D1A054] text-white">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Item Name</th>
            <th className="text-right">Price</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>

        {menu?.map((item, index) => (
          <tbody key={item._id}>
            {/* row 1 */}
            <tr>
              <th>{index + 1}</th>
              <td>
                <img width={"75px"} src={item.image} alt="" />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button
                  onClick={() => handleMakeAdmin()}
                  className="btn btn-square btn-outline text-white bg-[#D1A054]"
                >
                  <FaEdit />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleRemove(item)}
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

export default ManageItem;
