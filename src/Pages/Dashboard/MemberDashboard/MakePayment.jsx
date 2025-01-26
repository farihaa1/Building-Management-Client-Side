import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import useMemberApartment from "../../../Hooks/useMemberApartment";

const MakePayment = () => {
  const [rent, setRent] = useState(1000);
  const [coupon, setCoupon] = useState("");


 const { memberInfo, apartmentsLoading }= useMemberApartment(); 

 
  if (apartmentsLoading) {
    return <Loader />;
  }



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


  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Make Payment</h2>
      <form>
        <p>
          <strong>Email:</strong> {memberInfo.email}
        </p>
        <p>
          <strong>Floor:</strong> {memberInfo.floorNo}
        </p>
        <p>
          <strong>Block Name:</strong> {memberInfo.blockName}
        </p>
        <p>
          <strong>Apartment No:</strong> {memberInfo.apartmentNo}
        </p>
        <p>
          <strong>Rent:</strong> ${memberInfo.rent}
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
        <div>{/* <Elements></Elements> */}</div>
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
