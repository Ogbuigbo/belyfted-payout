import React from "react";
import { useRouter } from "next/navigation";

const PaymentLinkSummary = ({ paymentData, onCopy }) => {
  const router = useRouter();
  return (
    <div className="flex-1 xl:w-[553px]  bg-white rounded-xl px-6 pb-6">
      <h2 className="text-lg font-semibold mb-6 mt-[42px]">Summary</h2>
      <div className="flex flex-col gap-8 text-xs">
        <div className="flex justify-between">
          <span className="font-medium">Name</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.name}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Description</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.description}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Amount</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.amount}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Settlement Destination</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.settlementDestination}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Currency</span>
          <div className="flex items-center gap-2">
            <span>
              <span className="text-white text-xs">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_132_17462)">
                    <path
                      d="M0.5 8.00078C0.5 11.2758 2.6 14.0508 5.5 15.0758V0.925781C2.6 1.95078 0.5 4.72578 0.5 8.00078ZM15.5 8.00078C15.5 4.72578 13.425 1.95078 10.5 0.925781V15.0758C13.425 14.0508 15.5 11.2758 15.5 8.00078Z"
                      fill="#008000"
                    />
                    <path
                      d="M5.5 15.075C6.275 15.35 7.125 15.5 8 15.5C8.875 15.5 9.725 15.35 10.5 15.075V0.925C9.725 0.65 8.875 0.5 8 0.5C7.125 0.5 6.275 0.65 5.5 0.925V15.075Z"
                      fill="#F9F9F9"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_132_17462">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
            </span>
            <span className="font-semibold text-[#8E98A8]">
              {paymentData.currency}
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Who bears the fee?</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.whoBearsFee}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Allow customers to change amount?</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.allowCustomerChangeAmount}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Allow customers to change amount?</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.allowCustomerChangeAmount}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date Created</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.dateCreated}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Last Modified</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.lastModified}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Collect phone numbers?</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.collectPhoneNumbers}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Success Message after payment</span>
          <span className="font-semibold text-[#8E98A8]">
            {paymentData.successMessage}
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span>Payment Link</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onCopy(paymentData.shortUrl)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {/* Inline SVG for Copy icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6663 8.60065V11.4007C10.6663 13.734 9.73301 14.6673 7.39967 14.6673H4.59967C2.26634 14.6673 1.33301 13.734 1.33301 11.4007V8.60065C1.33301 6.26732 2.26634 5.33398 4.59967 5.33398H7.39967C9.73301 5.33398 10.6663 6.26732 10.6663 8.60065Z"
                  stroke="#8E98A8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6663 4.60065V7.40065C14.6663 9.73398 13.733 10.6673 11.3997 10.6673H10.6663V8.60065C10.6663 6.26732 9.73301 5.33398 7.39967 5.33398H5.33301V4.60065C5.33301 2.26732 6.26634 1.33398 8.59967 1.33398H11.3997C13.733 1.33398 14.6663 2.26732 14.6663 4.60065Z"
                  stroke="#8E98A8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <span className="text-[#0671E0] font-medium">
              {paymentData.shortUrl}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Short URL</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onCopy(paymentData.shortUrl)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              {/* Inline SVG for Copy icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6663 8.60065V11.4007C10.6663 13.734 9.73301 14.6673 7.39967 14.6673H4.59967C2.26634 14.6673 1.33301 13.734 1.33301 11.4007V8.60065C1.33301 6.26732 2.26634 5.33398 4.59967 5.33398H7.39967C9.73301 5.33398 10.6663 6.26732 10.6663 8.60065Z"
                  stroke="#8E98A8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.6663 4.60065V7.40065C14.6663 9.73398 13.733 10.6673 11.3997 10.6673H10.6663V8.60065C10.6663 6.26732 9.73301 5.33398 7.39967 5.33398H5.33301V4.60065C5.33301 2.26732 6.26634 1.33398 8.59967 1.33398H11.3997C13.733 1.33398 14.6663 2.26732 14.6663 4.60065Z"
                  stroke="#8E98A8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <span className="text-[#0671E0] font-medium">
              {paymentData.shortUrl}
            </span>
          </div>
        </div>
      </div>

      <hr className="mt-8" />
      <button
        className="w-full bg-[#042656] text-white py-4 rounded-lg font-semibold mt-8 hover:bg-blue-800"
        onClick={() => router.push(`/dashboard/inbound/payment-links/edit`)}
      >
        Edit Link
      </button>
    </div>
  );
};

export default PaymentLinkSummary;
