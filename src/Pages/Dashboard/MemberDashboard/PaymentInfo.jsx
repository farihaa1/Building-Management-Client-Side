import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useAuth from "../../../Hooks/useAuth";
import useMemberApartment from "../../../Hooks/useMemberApartment";
import useCoupons from "../../../Hooks/useCoupons";
import { useLocation } from "react-router-dom";
import Loader from "../../../Components/Loader";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const PaymentInfo = () => {
  const location = useLocation();
 

  const [memberInfo] = useMemberApartment();


  const [refetch, coupons, isCouponLoading, isError] = useCoupons();
  if (!memberInfo || isCouponLoading) {
    return <Loader />;
  }

  const filterCoupon = coupons.filter(
    (coupon) => coupon._id == location.state?.id
  );

  return (
    <div className=" font-mulish">
      <h1 className="text-2xl font-bold my-4">Apply Coupon</h1>
      <Elements stripe={stripePromise}>
        <CheckoutForm filterCoupon={filterCoupon}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default PaymentInfo;
