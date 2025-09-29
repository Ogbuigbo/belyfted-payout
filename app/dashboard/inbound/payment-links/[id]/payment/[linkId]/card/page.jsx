"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CardPaymentForm from "../_components/CardPaymentForm";

export default function CardPaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [paymentData, setPaymentData] = useState({
    name: "Donation",
    description: "Payment for free will donation",
    currency: "NGN",
    amount: "1000.00",
    email: "test@gmail.com"
  });

  useEffect(() => {
    // Get payment link data from URL params
    const name = searchParams.get('name') || "Donation";
    const description = searchParams.get('description') || "Payment for free will donation";
    const amount = searchParams.get('amount') || "1000.00";
    const currency = searchParams.get('currency') || "NGN";
    const email = searchParams.get('email') || "test@gmail.com";

    setPaymentData({ name, description, currency, amount, email });
  }, [searchParams]);

  const handlePaymentSubmit = (paymentFormData) => {
    // Here you would integrate with your payment processor
    console.log("Processing card payment:", paymentFormData);
    
    // For now, just show an alert
    alert(`Card payment of ${paymentData.currency} ${paymentData.amount} processed successfully!`);
  };

  const handleBack = () => {
    // Go back to the previous step (customer details form)
    router.back();
  };

  return (
    <CardPaymentForm 
      paymentData={paymentData}
      onPaymentSubmit={handlePaymentSubmit}
      onBack={handleBack}
    />
  );
}
