"use client";

import React, { useState } from "react";
import PaymentLinkSummary from "../_components/PaymentLinkSummary";
import PaymentLinkPreview from "../_components/PaymentLinkPreview";
import { useRouter } from "next/navigation";

// Main Component
const PaymentLinkDetails = ({ onBack }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const paymentData = {
    name: "Donation",
    description: "Payment for free will donation...",
    amount: "NGN 200.00",
    settlementDestination: "Balance",
    currency: "NGN",
    whoBearsFee: "Customer",
    allowCustomerChangeAmount: "No",
    dateCreated: "27/03/2025, 17:26:45",
    lastModified: "27/03/2025, 17:26:49",
    collectPhoneNumbers: "Yes",
    successMessage: "Donation successful",
    paymentLink: "Checkout.belyfted.com/payment-link/082l8e0a375a76c29fa60",
    shortUrl: "https://l.belyfted.com/3Wt",
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className=" md:px-6 ">
        {/* Back Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border text-sm border-[#062755] text-gray-700 font-medium mb-3"
          onClick={onBack}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 14.6708V9.33081C18 6.01081 15.65 4.66081 12.78 6.31081L11.5 7.05081C11.19 7.23081 11 7.56081 11 7.92081V16.0808C11 16.4408 11.19 16.7708 11.5 16.9508L12.78 17.6908C15.65 19.3408 18 17.9908 18 14.6708Z"
              fill="#062755"
            />
            <path
              opacity="0.4"
              d="M10 15.2104V8.78043C10 8.39043 9.58 8.15043 9.25 8.35043L8.15 8.99043C5.28 10.6404 5.28 13.3604 8.15 15.0104L9.25 15.6504C9.58 15.8404 10 15.6004 10 15.2104Z"
              fill="#062755"
            />
          </svg>
          Back
        </button>
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex flex-col items-start gap-4">
            <h1 className="text-2xl font-semibold">Payment Link Details</h1>
            <p className="text-[#8E98A8] font-medium">
              View more details on this payment link
            </p>
          </div>
          <button className="px-6 py-3 border mt-6 md:mt-0 border-[#C8102E] text-[#C8102E] text-sm rounded-lg hover:bg-red-50">
            Deactivate Link
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-[54px] gap-8 lg:pl-6 mt-16">
        {/* Left Side - Summary */}
        <PaymentLinkSummary paymentData={paymentData} onCopy={handleCopy} />

        {/* Right Side - Preview */}
        <PaymentLinkPreview paymentData={paymentData} />
      </div>

      {copied && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg">
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};

const PaymentLinkPage = () => {
  const [view, setView] = useState("details");
  // You can add logic to determine which view to show (table or details)
  if (view === "details") {
    return <PaymentLinkDetails onBack={() => setView("table")} />;
  }
  // Table view would be rendered here, e.g. <PaymentLinkList />
  return <div>Table View Placeholder</div>;
};

export default PaymentLinkPage;
