import React from "react";

const PaymentHistory = () => {
  const payments = [
    {
      id: 1,
      month: "January",
      amount: "$1000",
      date: "2025-01-10",
    },
    {
      id: 2,
      month: "February",
      amount: "$1000",
      date: "2025-02-10",
    },
  ];

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
          {payments.map((payment) => (
            <tr key={payment.id}>
              <td className="border border-gray-300 px-4 py-2">{payment.month}</td>
              <td className="border border-gray-300 px-4 py-2">{payment.amount}</td>
              <td className="border border-gray-300 px-4 py-2">{payment.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
