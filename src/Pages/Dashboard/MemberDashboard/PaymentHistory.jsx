import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loader from "../../../Components/Loader";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();


  if (!user || loading) {
    return <Loader />;
  }


  const { data: payments = [], isLoading: paymentLoading } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email && !loading,
    queryFn: async () => {
      const response = await axiosSecure.get(`/payments/${user.email}`);
      return response.data || []; 
    },
  });

 
  if (paymentLoading) {
    return <Loader />;
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Payment History</h2>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Month</th>
            <th className="border border-gray-300 px-4 py-2">Amount</th>
            <th className="border border-gray-300 px-4 py-2">Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.length > 0 ? (
            payments.map((payment) => (
              <tr key={payment._id}>
                <td className="border border-gray-300 px-4 py-2">{payment.payMonth}</td>
                <td className="border border-gray-300 px-4 py-2">{payment.rent}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(payment.date).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center p-4">
                No payment records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
