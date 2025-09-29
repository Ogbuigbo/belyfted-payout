"use client";

import React, { useState } from "react";

function PaymentForm({ activeTab }) {
  const [sendAmount, setSendAmount] = useState("");
  const [sendCurrency, setSendCurrency] = useState("NGN");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [receiveCurrency, setReceiveCurrency] = useState("GBP");
  const [beneficiaryType, setBeneficiaryType] = useState("");
  const [paymentScheme, setPaymentScheme] = useState("");
  const [paymentDestination, setPaymentDestination] = useState("");
  const [purpose, setPurpose] = useState("");
  const [invoice, setInvoice] = useState("");
  const [reference, setReference] = useState("");

  // Common select styles for Safari compatibility
  const selectStyles =
    "appearance-none bg-white border border-gray-200 rounded-r-lg focus:outline-none cursor-pointer text-sm " +
    "[-webkit-appearance:none] [-moz-appearance:none] [background-image:none]";

  return (
    <>
      {/* One Time Payment Content */}
      {activeTab === "one-time" && (
        <div>
          <div className="px-[20px] pt-[42px] pb-[32px] bg-white rounded-2xl">
            {/* Send Amount Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                I want to send
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  className="flex-1 px-4 py-4 border border-gray-200 rounded-l-lg focus:outline-none "
                />
                <div className="relative">
                  <select
                    value={sendCurrency}
                    onChange={(e) => setSendCurrency(e.target.value)}
                    className={`${selectStyles} px-8 py-5 border-t border-r border-b border-gray-200 rounded-r-lg`}
                    style={{
                      backgroundImage: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                    }}
                  >
                    <option value="NGN">🇳🇬 NGN</option>
                    <option value="USD">🇺🇸 USD</option>
                    <option value="EUR">🇪🇺 EUR</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-right text-sm  mt-1">
                Available Balance: NGN500,000
              </p>
            </div>

            {/* Receive Amount Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipient Receives
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={receiveAmount}
                  onChange={(e) => setReceiveAmount(e.target.value)}
                  className="flex-1 px-4 py-4 border border-gray-200 rounded-l-lg focus:outline-none"
                />
                <div className="relative">
                  <select
                    value={receiveCurrency}
                    onChange={(e) => setReceiveCurrency(e.target.value)}
                    className={`${selectStyles} px-8 py-5 border-t border-r border-b border-gray-200 rounded-r-lg`}
                    style={{
                      backgroundImage: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                    }}
                  >
                    <option value="GBP">🇬🇧 GBP</option>
                    <option value="USD">🇺🇸 USD</option>
                    <option value="EUR">🇪🇺 EUR</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction Details */}
          <div className="mt-[22px] px-[20px] pt-[20px] pb-[32px] bg-white rounded-2xl">
            <div className="mb-6">
              <h3 className="text-sm font-medium  mb-6">Transaction Details</h3>

              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[42px]">
                <div>
                  <label className="block text-sm font-medium  mb-2">
                    Beneficiary Type
                  </label>
                  <div className="relative">
                    <select
                      value={beneficiaryType}
                      onChange={(e) => setBeneficiaryType(e.target.value)}
                      className={`${selectStyles} w-full px-4 py-[10px] text-[#C5C7CA]`}
                      style={{
                        backgroundImage: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    >
                      <option value="">Select Type</option>
                      <option value="individual">Individual</option>
                      <option value="business">Business</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium  mb-2">
                    Payment Scheme
                  </label>
                  <div className="relative">
                    <select
                      value={paymentScheme}
                      onChange={(e) => setPaymentScheme(e.target.value)}
                      className={`${selectStyles} w-full px-4 py-[10px] text-[#C5C7CA] rounded-xl`}
                      style={{
                        backgroundImage: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        borderRadius: "0.75rem !important",
                      }}
                    >
                      <option value="">Select Scheme</option>
                      <option value="faster">Faster Payment</option>
                      <option value="swift">SWIFT</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium  mb-2">
                    Payment Destination
                  </label>
                  <div className="relative">
                    <select
                      value={paymentDestination}
                      onChange={(e) => setPaymentDestination(e.target.value)}
                      className={`${selectStyles}  w-full px-4 py-[10px] text-[#C5C7CA] rounded-xl`}
                      style={{
                        backgroundImage: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                        borderRadius: "0.75rem !important",
                      }}
                    >
                      <option value="">Select Destination</option>
                      <option value="bank">Bank Account</option>
                      <option value="wallet">Digital Wallet</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purpose
                  </label>
                  <div className="relative">
                    <select
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className={`${selectStyles} w-full px-4 py-[10px] text-[#C5C7CA]`}
                      style={{
                        backgroundImage: "none",
                        WebkitAppearance: "none",
                        MozAppearance: "none",
                      }}
                    >
                      <option value="">Select purpose</option>
                      <option value="personal">Personal Transfer</option>
                      <option value="business">Business Payment</option>
                      <option value="family">Family Support</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Invoice
                  </label>
                  <input
                    type="text"
                    value={invoice}
                    onChange={(e) => setInvoice(e.target.value)}
                    placeholder="Enter invoice"
                    className="w-full px-4 py-[10px] border border-gray-200 rounded-xl focus:outline-none placeholder:text-[#C5C7CA] placeholder:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Reference
                  </label>
                  <input
                    type="text"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder="Enter Reference"
                    className="w-full px-4 py-[10px] border border-gray-200 rounded-xl focus:outline-none placeholder:text-[#C5C7CA] placeholder:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Belyfted Wallet Content - Simplified for left panel */}
      {activeTab === "belyfted-wallet" && (
        <div className="bg-white rounded-2xl p-[20px]">
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Payout to Belyfted Wallet
            </h3>
            <p className="text-gray-500">
              Enter wallet details in the form on the right to proceed
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentForm;
