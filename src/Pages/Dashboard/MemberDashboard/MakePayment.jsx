import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Loader from "../../../Components/Loader";
import useMemberApartment from "../../../Hooks/useMemberApartment";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const MakePayment = () => {






  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Make Payment</h2>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default MakePayment;
