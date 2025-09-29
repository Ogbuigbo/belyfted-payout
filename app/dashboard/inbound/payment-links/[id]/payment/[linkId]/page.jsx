"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PaymentForm from "./_components/PaymentForm";

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const [paymentData, setPaymentData] = useState({
    name: "Donation",
    description: "Payment for free will donation",
    currency: "NGN"
  });
  const [initialAmount, setInitialAmount] = useState("200.00");

  useEffect(() => {
    // Get payment link data from URL params
    const name = searchParams.get('name') || "Donation";
    const description = searchParams.get('description') || "Payment for free will donation";
    const amount = searchParams.get('amount') || "200.00";
    const currency = searchParams.get('currency') || "NGN";

    setPaymentData({ name, description, currency });
    setInitialAmount(amount);
  }, [searchParams]);

  const handlePaymentSubmit = (paymentFormData) => {
    // Here you would integrate with your payment processor
    console.log("Processing payment:", paymentFormData);
    
    // For now, just show an alert
    alert(`Payment of ${paymentData.currency} ${paymentFormData.amount} processed successfully!`);
  };

  return (
    <PaymentForm 
      paymentData={paymentData}
      initialAmount={initialAmount}
      onPaymentSubmit={handlePaymentSubmit}
    />
  );
}