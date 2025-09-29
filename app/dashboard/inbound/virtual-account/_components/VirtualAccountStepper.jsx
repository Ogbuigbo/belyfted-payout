"use client";

import React, { useState } from "react";
import SuccessModal from "./SuccessModal";

const currencies = [
  { label: "British Pounds (GBP)", value: "GBP", flag: "🇬🇧" },
  { label: "Nigerian Naira (NGN)", value: "NGN", flag: "🇳🇬" },
];

export default function VirtualAccountStepper({ step, setStep, onComplete }) {
  const [currency, setCurrency] = useState(currencies[0].value);
  const [bank, setBank] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleContinue = () => {
    setShowSuccessModal(true);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    onComplete(); // This will add the account and show the table
  };

  return (
    <>
      <div className="flex justify-center items-center bg-white rounded-xl mt-[64px] md:p-8 pb-16 w-full">
        <div className=" flex flex-col max-w-[591px] w-full items-center p-4">
          {/* Stepper indicator */}
          <div className="flex items-center w-full gap-2 mb-8">
            <span
              className={`w-4 h-4 rounded-full ${step === 1 ? "bg-[#042656]" : "bg-[#042656]"}`}
            ></span>
            <div className="w-full h-px bg-gray-300"></div>
            <span
              className={`w-4 h-4 rounded-full ${step === 2 ? "bg-[#042656]" : "bg-gray-300"}`}
            ></span>
          </div>
          {step === 1 && (
            <>
              <div className="flex flex-col items-start justify-start w-full ">
                <h2 className="text-lg font-semibold text-left">
                  Setup a Bank Account
                </h2>
                <label className="block mb-2 text-sm pt-[29px] text-left">
                  Select Currency
                </label>
                <select
                  className="w-full border rounded-lg px-4 py-3 mb-6"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {currencies.map((c) => (
                    <option key={c.value} value={c.value}>
                      {c.flag} {c.label}
                    </option>
                  ))}
                </select>
                <button
                  className="bg-[#042656] text-white px-6 py-4 rounded-lg text-sm font-semibold w-full"
                  onClick={() => setStep(2)}
                >
                  Request Account
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className="flex flex-col w-full justify-start items-start">
                <h2 className="text-lg font-semibold mb-4">
                  Account Information
                </h2>
                <label className="block mb-2 text-sm">Contact Name</label>
                <input
                  className="w-full border rounded-lg px-4 py-3 mb-4 bg-gray-100"
                  value="Belyfted Limited"
                  disabled
                />
                <p className="text-xs text-gray-500 mb-4">
                  This virtual account will be created with the BVN of the
                  director above.
                </p>
                <label className="block mb-2 text-sm">Bank</label>
                <select
                  className="w-full border rounded-lg px-4 py-3 mb-6"
                  value={bank}
                  onChange={(e) => setBank(e.target.value)}
                >
                  <option value="">Select Bank</option>
                  <option value="bank1">Bank 1</option>
                  <option value="bank2">Bank 2</option>
                </select>
                <button
                  className="bg-[#042656] text-white px-6 py-4 rounded-lg font-medium w-full disabled:bg-gray-300"
                  disabled={!bank}
                  onClick={handleContinue}
                >
                  Continue
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && <SuccessModal close={handleModalClose} />}
    </>
  );
}
