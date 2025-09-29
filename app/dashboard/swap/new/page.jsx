"use client";
import React, { useState } from "react";
import UkFlagIcon from "../../../../public/assets/icons/ukFlagIcon";
import { useRouter } from "next/navigation";
import SwapProcessingModal from "../_components/SwapSuccessModal";

export default function SwapFormPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleSwap = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="bg-gray-50 md:pl-4 min-h-screen">
      <div className="">
        {/* Header */}
        <div className="mb-6">
          <button
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border text-sm border-[#062755] text-gray-700 font-medium"
            onClick={() => router.push("/dashboard/swap")}
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
        </div>

        <h1 className="text-xl font-semibold text-[#303032] mb-6">
          Swap Funds
        </h1>

        {/* Main Card */}
        <div className="bg-white rounded-xl shadow-sm md:p-10 p-4 flex justify-center">
          {/* Warning Banner */}
          <div className="max-w-md w-full">
            <div className="bg-[#FFF6E6] rounded-lg py-[10px] px-2 mb-6">
              <p className="text-[12px] text-[#9C6500]">
                Currency swaps completed after 5:00 PM W.A.T. will be processed
                and settled on the next business day.
              </p>
            </div>

            {/* From Section */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#777779] mb-2">
                I want to swap
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full pl-3 pr-20 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  value="1"
                  readOnly
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <UkFlagIcon />
                  <span className="font-medium text-gray-700">GBP</span>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="text-gray-500"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-[#777779] mt-1">
                Available Balance:{" "}
                <span className="font-semibold text-gray-900">
                  2,000,000 GBP
                </span>
              </p>
            </div>

            {/* Swap Icon */}
            <div className="flex justify-center my-6">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="44" height="44" rx="22" fill="#F2F0F3" />
                <path
                  d="M19.01 30.5002L13.99 25.4902"
                  stroke="#042656"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.01 13.5V30.5"
                  stroke="#042656"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.99 13.5L30.01 18.51"
                  stroke="#042656"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24.99 30.5V13.5"
                  stroke="#042656"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* To Section */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#777779] mb-2">
                To
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full pl-3 pr-20 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                  value="2,000"
                  readOnly
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.125 10.5C1.125 14.5938 3.75 18.0625 7.375 19.3438V1.65625C3.75 2.9375 1.125 6.40625 1.125 10.5ZM19.875 10.5C19.875 6.40625 17.2812 2.9375 13.625 1.65625V19.3438C17.2812 18.0625 19.875 14.5938 19.875 10.5Z"
                      fill="#008000"
                    />
                    <path
                      d="M7.375 19.3438C8.34375 19.6875 9.40625 19.875 10.5 19.875C11.5938 19.875 12.6562 19.6875 13.625 19.3438V1.65625C12.6562 1.3125 11.5938 1.125 10.5 1.125C9.40625 1.125 8.34375 1.3125 7.375 1.65625V19.3438Z"
                      fill="#F9F9F9"
                    />
                  </svg>

                  <span className="font-medium text-gray-700">NGN</span>
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="text-gray-500"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Rate Info */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-sm font-medium text-[#777779]">
                  Rate:
                </span>
              </div>
              <div className="text-xs flex gap-1 justify-end items-end flex-col text-[#945F0B] font-medium">
                <span className="text-sm font-semibold text-[#303032] ml-2">
                  1GBP = 2,000 NGN
                </span>
                Refresh in 10s
              </div>
            </div>

            {/* Transaction Fee */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#777779]">Transaction fee:</span>
                <span className="font-semibold text-[#303032]">0.5 GBP</span>
              </div>
            </div>

            {/* Swap Button */}
            <button
              onClick={handleSwap}
              className="w-full bg-[#042656] hover:bg-blue-800 text-white font-semibold py-[14px] px-4 rounded-lg transition-colors text-sm duration-200"
            >
              Swap 1 GBP
            </button>
          </div>
        </div>
      </div>

      {showModal && <SwapProcessingModal onClose={handleCloseModal} />}
    </div>
  );
}
