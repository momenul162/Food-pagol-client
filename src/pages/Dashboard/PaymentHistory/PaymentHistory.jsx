import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePayment from "../../../hooks/usePayment";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
  const [payment, refetch] = usePayment();

  return (
    <div className="overflow-x-auto min-w-full px-20">
      <SectionTitle subHeader="How many" mainHeader="Payment History"></SectionTitle>
      <table className="table">
        {/* head */}
        <thead className="bg-[#D1A054] text-white">
          <tr>
            <th>Email</th>
            <th>Category</th>
            <th>Total Price</th>
            <th>Payment Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {payment &&
            payment.map((item) => (
              <tr key={item._id}>
                <th>{item.email}</th>
                <th>Food Order</th>
                <td>{item.price}</td>
                <td>{item.dete}</td>
                <td>
                  <Link className="text-error underline" to={`/dashboard/review/${item._id}`}>
                    Review
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
