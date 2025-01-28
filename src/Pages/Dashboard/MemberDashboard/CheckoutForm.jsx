import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useMemberApartment from "../../../Hooks/useMemberApartment";

import "./style.css";
import Loader from "../../../Components/Loader";
import Swal from "sweetalert2";
const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [month, setMonth] = useState("");
  const [isCouponValid, setIsCouponValid] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [memberInfo] = useMemberApartment();
  const [rent, setRent] = useState(1000);
  const [coupon, setCoupon] = useState("");

  if (!memberInfo) {
    return <Loader></Loader>;
  }
  const months = [
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
  ];

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  const handleApplyCoupon = () => {
    if (coupon === "DISCOUNT50") {
      setRent((prevRent) => prevRent * 0.5);
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon!");
    }
  };

  useEffect(() => {
    if (memberInfo.rent > 0) {
      axiosSecure
        .post("/create-payment-intent", { email: user.email })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [user.email]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error");
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const paymentInfo = {
          email: user.email,
          name: user.displayName,
          rent: memberInfo.rent,
          payMonth: month,
          date: new Date(),
          apartmentId: memberInfo.apartmentId,
          apartmentNo: memberInfo.apartmentNo,
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", paymentInfo);
        if (res.data.insertedId) {
          Swal.fire("Success", "Payment Successful!", "success");
        } else {
          Swal.fire({
            icon: "error",
            text: `${res.data.message}`,
          });
        }
      }
    }
  };

  return (
    <form className=" max-w-xl flex flex-col gap-3" onSubmit={handleSubmit}>
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
          className="border rounded p-2 w-full"
        >
          <option value="">Select Month</option>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 w-full flex gap-4">
        <input
          type="text"
          name="coupon"
          placeholder="Enter coupon code"
          className="input input-bordered w-4/6"
        />

        <button
          className="input input-bordered"
          type="button"
          onClick={handleApplyCoupon}
        >
          Apply Coupon
        </button>
      </div>

      <CardElement
        className="my-5 border border-gray-400 rounded-xl p-2 pb-0"
        options={{
          style: {
            base: {
              fontSize: "22px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        disabled={!stripe}
        type="submit"
      >
        Pay
      </button>
      <p className="text-red-300"></p>
      {transactionId && (
        <p className="text-green-600">Your Transaction Id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
