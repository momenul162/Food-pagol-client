import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import usePayment from "../../../hooks/usePayment";
import { Link } from "react-router-dom";

const PaymentHistory = () => {
  const [payment] = usePayment();

  return (
    <div className="md:w-3/4 mx-auto">
      <SectionTitle subHeader="How many" mainHeader="Payment History"></SectionTitle>
      <table className="table">
        {/* head */}
        <thead className="bg-[#D1A054] text-white">
          <tr>
            <th>Email</th>
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
                <td>{item.price}</td>
                <td>{item.dete}</td>
                <td>
                  <Link className="text-error underline" to={`/dashboard/payments/${item._id}`}>
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
