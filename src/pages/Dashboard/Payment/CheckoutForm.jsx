import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import bgImg from "../../../assets/others/authentication.png";
import { useEffect } from "react";
import { baseUrl } from "../../../config/baseURL";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = ({ cart, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardErrro, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transectionId, setTransectionId] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    baseUrl.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: "card", card });

    if (error) {
      setCardError(error.message);
      console.log("[error]", error);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "Unknown",
          name: user?.displayName || "Anonymous",
        },
      },
    });

    if (confirmError) {
      setCardError(confirmError);
    }

    setProcessing(false);
    if (paymentIntent) {
      setTransectionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transectionId: paymentIntent.id,
        price,
        quantity: cart?.length,
        items: cart?.map((item) => item._id),
        itemNames: cart?.map((item) => item.name),
      };
      baseUrl.post("/payments", payment).then((res) => {
        console.log(res.data);
      });
    }
  };
  if (transectionId) {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Payment Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border px-4 py-10 text-center rounded-md"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="mb-4 text-green-500 text-xl">
        Total Payable Amount: <span className="text-2xl text-black font-bold">${price}</span>
      </h1>
      <CardElement
        className="border p-4 bg-white rounded-md"
        options={{
          style: {
            base: {
              fontSize: "16px",
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
      {cardErrro && <p className="text-error text-center mt-4">{cardErrro}</p>}
      <button
        type="submit"
        className="btn btn-outline border-1 border-b-4 btn-secondary mt-10 px-10"
        disabled={!stripe || !clientSecret || processing}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
