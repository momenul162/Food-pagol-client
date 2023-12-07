import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../../../config/baseURL";

const PaymentHistory = () => {
  const { user } = useAuth();

  const { data: history = [] } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !user,
    queryFn: async () => {
      if (!user) {
        return [];
      }
      const res = await baseUrl(`/payments?email=${user?.email}`);
      return res.data;
    },
  });

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
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {history &&
            history.map((item) => (
              <tr key={item._id}>
                <th>{item.email}</th>
                <th>Food Order</th>
                <td>{item.price}</td>
                <td>{item.dete}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
