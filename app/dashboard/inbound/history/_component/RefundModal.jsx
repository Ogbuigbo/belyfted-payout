import React from "react";
import SwapSuccessIcon from "../../../../../public/assets/icons/swapSuccessIcon";

function RefundModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-2 sm:p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[485px] p-4 sm:p-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-2 sm:mb-4">
          <div className="text-base sm:text-2xl font-medium text-[#303032] my-1 sm:my-4 text-center">
            Confirm Refund
          </div>
          <p className="text-[#777779] text-center font-medium">
            You are about to initiate a refund of NGN{" "}
            <span className="font-semibold text-[#042656]"> 500.00</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full mt-2 sm:mt-4">
          <button
            onClick={onClose}
            className="w-full bg-[#062755] text-white rounded-lg py-3 sm:py-[14px] font-semibold text-sm hover:bg-[#041d42] transition"
          >
            Refund
          </button>
          <button
            onClick={onClose}
            className="w-full text-[#042656] pt-4 text-sm font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default RefundModal;
