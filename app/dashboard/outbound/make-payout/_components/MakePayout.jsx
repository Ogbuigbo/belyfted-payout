"use client";

import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import BeneficiaryDetails from "./BeneficiaryDetails";
import Sidebar from "../../../../_components/_sidebar/Sidebar";
import ConfirmPayout from "./ConfirmPayout";

function MakePayout() {
  const [paymentTab, setPaymentTab] = useState("one-time");
  const [beneficiaryTab, setBeneficiaryTab] = useState("new");
  const [isConfirmPayoutOpen, setIsConfirmPayoutOpen] = useState(false);

  return (
    <div className="">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-3">Make Payout</h1>
          <p className="text-[#8E98A8] font-medium">
            Click a Beneficiary to view more
          </p>
        </div>

        {/* Payment Tab Navigation */}
        <div className="flex space-x-1 mb-8">
          <button
            onClick={() => setPaymentTab("one-time")}
            className={`px-3 md:px-6 py-[8px] rounded-2xl  text-xs transition-colors ${
              paymentTab === "one-time"
                ? "bg-[#042656] text-white"
                : "text-[#042656] "
            }`}
          >
            One time payment
          </button>
          <button
            onClick={() => setPaymentTab("belyfted-wallet")}
            className={`px-3 md:px-6 py-[8px] rounded-2xl  text-xs transition-colors ${
              paymentTab === "belyfted-wallet"
                ? "bg-[#042656] text-white"
                : " text-[#042656] "
            }`}
          >
            Payout to Belyfted Wallet
          </button>
        </div>

        {/* Two Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Payment Form */}
          <PaymentForm activeTab={paymentTab} />

          {/* Right Panel - Beneficiary Details */}
          <BeneficiaryDetails
            beneficiaryTab={beneficiaryTab}
            setBeneficiaryTab={setBeneficiaryTab}
            paymentTab={paymentTab}
          />
        </div>
        <div>
          <button
            onClick={() => setIsConfirmPayoutOpen(true)}
            className=" bg-[#042656] text-white py-3 px-12 rounded-lg font-medium hover:bg-blue-800 transition-colors mt-[80px]"
          >
            Proceed
          </button>
        </div>

        <Sidebar
          isOpen={isConfirmPayoutOpen}
          onClose={() => setIsConfirmPayoutOpen(false)}
          title="Confirm Payment"
        >
          <ConfirmPayout />
        </Sidebar>
      </div>
    </div>
  );
}

export default MakePayout;
