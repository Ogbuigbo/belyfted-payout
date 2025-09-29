"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SwapDetailsPage() {
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  // Mock data matching your image
  const swap = {
    direction: "NGN to USD",
    amountSwapped: "1 GBP",
    amountReceived: "2,000 NGN",
    rate: "1.00 GBP = 2,000 NGN",
    status: "Successful",
    transactionDate: "14/05/2025, 20:15:59",
    settlementDate: "14/05/2025, 20:16:02",
    settlementDestination: "Balance",
    fees: "N/A",
    transactionRef: "fcr-bt-749...",
    initiatedBy: "Kayode John",
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("fcr-bt-749234567890");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 md:pl-4">
      <div className="">
        {/* Back Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border text-sm border-[#062755] text-gray-700 font-medium mb-10"
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

        {/* Main Card */}
        <div className="bg-white rounded-xl ">
          {/* Header Section */}
          <div className="max-w-[482px] mx-auto">
            <div className="px-6 py-8 text-center ">
              <div className=" flex items-center justify-center mx-auto mb-4">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="52" height="52" rx="8" fill="#E6E9EE" />
                  <path
                    d="M35.2379 20.6654C34.2543 18.9617 32.8187 17.5633 31.0899 16.6247C29.3612 15.686 27.4065 15.2437 25.442 15.3467C23.4775 15.4496 21.5798 16.0938 19.9586 17.208C18.3374 18.3222 17.0559 19.8631 16.2558 21.6602M37.6912 17.3525L36.7186 21.5652C36.553 22.2827 35.837 22.7301 35.1195 22.5645L30.9068 21.5919M16.7626 31.3319C17.7462 33.0355 19.1817 34.434 20.9105 35.3726C22.6393 36.3113 24.594 36.7536 26.5585 36.6506C28.5229 36.5476 30.4207 35.9035 32.0419 34.7892C33.6631 33.675 34.9446 32.1342 35.7447 30.3371M14.3093 34.6447L15.2818 30.432C15.4475 29.7145 16.1634 29.2671 16.8809 29.4328L21.0937 30.4053"
                    stroke="#042656"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <div className="text-sm font-semibold text-[#042656] my-7">
                {swap.direction}
              </div>
              <div className="text-xl font-bold text-gray-900">
                {swap.amountSwapped}{" "}
                <span className="mx-2 text-gray-400">→</span>{" "}
                {swap.amountReceived}
              </div>
            </div>

            {/* Details Section */}
            <div className="md:px-6 px-4 pb-6 text-sm">
              <div className="bg-[#F2F0F3] rounded-lg p-4">
                <h3 className="font-semibold text-[#303032] mb-6">
                  Swap Details
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between py-2 items-center">
                    <span className="text-[#777779] font-medium">
                      Transaction Date:
                    </span>
                    <span className="text-[#303032] font-medium">
                      {swap.transactionDate}
                    </span>
                  </div>

                  <div className="flex justify-between py-2  items-center">
                    <span className="text-[#777779]  font-medium">
                      Amount Swapped:
                    </span>
                    <span className="text-[#303032] font-medium">
                      {swap.amountSwapped}
                    </span>
                  </div>

                  <div className="flex justify-between py-2  items-center">
                    <span className="text-[#777779] font-medium">
                      Amount Received:
                    </span>
                    <span className="text-[#303032] font-medium">
                      {swap.amountReceived}
                    </span>
                  </div>

                  <div className="flex justify-between py-2  items-center">
                    <span className="text-[#777779] font-medium">
                      Exchange Rate:
                    </span>
                    <span className="text-[#303032] font-medium">
                      {swap.rate}
                    </span>
                  </div>

                  <div className="flex justify-between py-2  items-center">
                    <span className="text-[#777779] font-medium">Status:</span>
                    <span className="bg-[#E6F2E6] text-[#008000] px-3 py-1 rounded-full text-xs font-medium">
                      {swap.status}
                    </span>
                  </div>

                  <div className="flex justify-between py-2  items-center">
                    <span className="text-[#777779] font-medium">
                      Settlement Date:
                    </span>
                    <span className="text-[#303032] font-medium">
                      {swap.settlementDate}
                    </span>
                  </div>

                  <div className="flex justify-between py-2  items-center">
                    <span className="text-[#777779] font-medium">
                      Settlement Destination:
                    </span>
                    <span className="text-[#303032] font-medium">
                      {swap.settlementDestination}
                    </span>
                  </div>

                  <div className="flex justify-between py-2  items-center">
                    <span className="text-[#777779] font-medium">
                      Fees Charged:
                    </span>
                    <span className="text-[#303032] font-medium">
                      {swap.fees}
                    </span>
                  </div>

                  <div className="flex justify-between py-2  items-center">
                    <span className="text-[#777779] font-medium">
                      Transaction Ref:
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[#303032] font-medium">
                        {swap.transactionRef}
                      </span>
                      <button
                        onClick={handleCopy}
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                        title={copied ? "Copied!" : "Copy reference"}
                      >
                        <svg
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.6666 9.10065V11.9007C10.6666 14.234 9.73325 15.1673 7.39992 15.1673H4.59992C2.26659 15.1673 1.33325 14.234 1.33325 11.9007V9.10065C1.33325 6.76732 2.26659 5.83398 4.59992 5.83398H7.39992C9.73325 5.83398 10.6666 6.76732 10.6666 9.10065Z"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M14.6666 5.10065V7.90065C14.6666 10.234 13.7333 11.1673 11.3999 11.1673H10.6666V9.10065C10.6666 6.76732 9.73325 5.83398 7.39992 5.83398H5.33325V5.10065C5.33325 2.76732 6.26659 1.83398 8.59992 1.83398H11.3999C13.7333 1.83398 14.6666 2.76732 14.6666 5.10065Z"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-[#777779] font-medium">
                      Initiated By:
                    </span>
                    <span className="text-[#303032] font-medium">
                      {swap.initiatedBy}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
3;
