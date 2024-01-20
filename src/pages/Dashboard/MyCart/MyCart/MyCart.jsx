import React from "react";
import useCart from "../../../../hooks/useCart";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();

  enabled: !!cart;
  const totalPrice = parseFloat(cart?.reduce((a, p) => a + p.price, 0));

  const handleRemove = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Cart Remove Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto min-w-full px-5 md:px-20">
      <SectionTitle subHeader="My Cart" mainHeader="add more"></SectionTitle>
      <div className="flex justify-between mb-8 uppercase">
        <h1 className="text-3xl">Tota Orders: {cart.length}</h1>
        <h1 className="text-3xl">Tota Price: ${totalPrice}</h1>
        <Link to="/dashboard/payment">
          <button className="btn btn-square btn-warning">PAY</button>
        </Link>
      </div>
      <table className="table">
        {/* head */}
        <thead className="bg-[#D1A054] text-white">
          <tr>
            <th>#</th>
            <th>Item Image</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {cart?.map((item, index) => (
          <tbody key={item._id}>
            {/* row 1 */}
            <tr>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{item.name}</td>
              <td className="text-end">${item.price}</td>
              <th>
                <button
                  onClick={() => handleRemove(item)}
                  className="btn btn-square btn-outline bg-red-600"
                >
                  <FaTrashAlt></FaTrashAlt>
                </button>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default MyCart;
