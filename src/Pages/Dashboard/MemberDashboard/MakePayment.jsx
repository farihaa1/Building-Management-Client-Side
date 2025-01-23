import React, { useState } from "react";

const MakePayment = () => {
  const [rent, setRent] = useState(1000);
  const [coupon, setCoupon] = useState("");

  const handleApplyCoupon = () => {
    if (coupon === "DISCOUNT50") {
      setRent((prevRent) => prevRent * 0.5);
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon!");
    }
  };

  const handlePayment = () => {
    alert("Payment successful!");
  };

  const memberDetails = {
    email: "john.doe@example.com",
    floor: "2nd Floor",
    block: "A Block",
    room: "Room 201",
    rent: 1000,
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Make Payment</h2>
      <form>
        <p>
          <strong>Email:</strong> {memberDetails.email}
        </p>
        <p>
          <strong>Floor:</strong> {memberDetails.floor}
        </p>
        <p>
          <strong>Block Name:</strong> {memberDetails.block}
        </p>
        <p>
          <strong>Room No:</strong> {memberDetails.room}
        </p>
        <p>
          <strong>Rent:</strong> ${rent}
        </p>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
            className="p-2 border rounded-lg"
          />
          <button
            type="button"
            onClick={handleApplyCoupon}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Apply Coupon
          </button>
        </div>
        <button
          type="button"
          onClick={handlePayment}
          className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default MakePayment;
