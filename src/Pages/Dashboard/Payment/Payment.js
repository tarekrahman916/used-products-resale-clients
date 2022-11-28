import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const [selectedBooking, setSelectedBooking] = useState(booking);

  return (
    <div>
      <h2 className="text-3xl font-semibold my-6">
        Please pay for {booking.productName}
      </h2>
      <div className="w-96 mx-auto bg-slate-600 p-10 rounded-lg">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
