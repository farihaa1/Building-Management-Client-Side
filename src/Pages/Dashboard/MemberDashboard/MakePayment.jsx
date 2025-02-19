import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Use navigate instead of Link
import Loader from "../../../Components/Loader";
import useMemberApartment from "../../../Hooks/useMemberApartment";

const MakePayment = () => {
  const [month, setMonth] = useState("");
  const [isFormValid, setIsFormValid] = useState(false); 
  const [memberInfo] = useMemberApartment();
  const location = useLocation();

  const navigate = useNavigate();


  if (!memberInfo) {
    return <Loader />;
  }

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    setIsFormValid(e.target.value !== ""); 
  };

  const paymentInformation = {
    email: memberInfo.email,
    month: month,
    rent: memberInfo.rent,
    apartmentId: memberInfo.apartmentId,
    apartmentNo: memberInfo.apartmentNo,
    floorNo: memberInfo.floorNo,
    blockName: memberInfo.blockName,
  };


  const handlePayClick = () => {
    if (isFormValid) {
      navigate("/dashboard/make-payment/pay",{
        state: { id: location.state?.id, paymentInformation }, 
      })
    }
  };

  return (
    <div className="p-6 bg-white font-mulish shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold my-4">Apartment Info</h1>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          value={memberInfo.email}
          className="input input-bordered w-full bg-base-200 text-gray-500"
          readOnly
        />
        <input
          type="text"
          value={memberInfo.floorNo}
          className="input input-bordered w-full bg-base-200 text-gray-500"
          readOnly
        />
        <input
          type="text"
          value={memberInfo.blockName}
          className="input input-bordered w-full bg-base-200 text-gray-500"
          readOnly
        />
        <input
          type="text"
          value={memberInfo.apartmentNo}
          className="input input-bordered w-full bg-base-200 text-gray-500"
          readOnly
        />
        <input
          type="text"
          value={memberInfo.rent}
          className="input input-bordered w-full bg-base-200 text-gray-500"
          readOnly
        />
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2" htmlFor="month">
            Select Month:
          </label>
          <select
            id="month"
            value={month}
            onChange={handleMonthChange}
            required
            className="border rounded p-2 w-full"
          >
            <option value="">Select Month</option>
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          {!isFormValid && (
            <p className="text-red-500 text-xs mt-1">Please select a month.</p>
          )}
        </div>
        <button
          type="button"
          onClick={handlePayClick}
          className={` text-bold my-4 ${!isFormValid ? "disabled w-full bg-base-300 rounded-lg py-1" : "primary-btn"}`}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default MakePayment;
