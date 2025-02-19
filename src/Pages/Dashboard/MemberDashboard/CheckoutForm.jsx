import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useMemberApartment from "../../../Hooks/useMemberApartment";
import "./style.css";
import Loader from "../../../Components/Loader";
import Swal from "sweetalert2";
import useCoupons from "../../../Hooks/useCoupons";

const CheckoutForm = ({ filterCoupon }) => {
  const [error, setError] = useState("");
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
  const [refetch, coupons, isCouponLoading, isError] = useCoupons();

  useEffect(() => {
  
    if (memberInfo.rent > 0) {
      axiosSecure
        .post("/create-payment-intent", {
          email: user.email,
          couponCode: filterCoupon[0]?.code,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [user.email]);

  const handleCouponChange = (e) => {

    setCoupon(e.target.value);
  };

  const handleApplyCoupon = () => {
    if (filterCoupon?.status !== "active") {
      setRent((prevRent) => prevRent * 0.5);
      Swal.fire("Success", "Coupon applied successfully!", "success");
    } else {
      Swal.fire("Error", "Invalid coupon code!", "error");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || !clientSecret) {
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
     
      setError(error.message);
    } else {
     
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
     
    } else {
     
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
    <form className="max-w-xl flex flex-col gap-3 font-mulish" onSubmit={handleSubmit}>
      <div className="mt-4 w-full flex gap-4">
        {filterCoupon ? (
          <>
            <input
              type="text"
              name="coupon"
              value={filterCoupon[0]?.code}
              className="input input-bordered w-4/6 text-gray-600"
              readOnly
            />
            <button
              className="input input-bordered"
              type="button"
              onClick={handleApplyCoupon}
            >
              Apply Coupon
            </button>
          </>
        ) : (
          <>
            <input
              type="text"
              name="coupon"
              value={coupon}
              onChange={handleCouponChange}
              placeholder="Enter coupon code"
              className="input input-bordered w-4/6 text-gray-600"
            />
            <button
              className="input input-bordered w-2/6"
              type="button"
              onClick={handleApplyCoupon}
            >
              Apply Coupon
            </button>
          </>
        )}
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
        className="primary-btn text-bold my-4"
        disabled={!stripe}
        type="submit"
      >
        Pay
      </button>
      <p className="text-red-300">{error}</p>
      {transactionId && (
        <p className="text-green-600">Your Transaction Id: {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
