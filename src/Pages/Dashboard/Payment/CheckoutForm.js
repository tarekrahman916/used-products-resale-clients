import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import "./Checkout.css";

const CheckoutForm = ({ booking }) => {
  const [paymentError, setPaymentError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { price, name, email, _id, productId } = booking;

  useEffect(() => {
    fetch(
      "https://used-products-resale-server-nine.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("laptopStoreToken")}`,
        },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error.message);
      console.log(error);
    } else {
      setPaymentError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });

    if (confirmError) {
      setPaymentError(confirmError.message);
      return;
    }

    console.log(paymentIntent);

    if (paymentIntent.status === "succeeded") {
      const payment = {
        price,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
        productId,
      };

      fetch("https://used-products-resale-server-nine.vercel.app/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("laptopStoreToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            toast.success("Congrats ! Your payment completed.");
            setTransactionId(paymentIntent?.id);
          }
        });
    }
    setProcessing(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#000000",
              "::placeholder": {
                color: "#000000",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn mt-3 btn-sm btn-secondary px-10 text-white"
        type="submit"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
      <p className="text-red-600">{paymentError}</p>
      {transactionId && (
        <p className="text-white">Your transaction id {transactionId}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
