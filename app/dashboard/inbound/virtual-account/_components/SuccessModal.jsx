import React from "react";
import SwapSuccessIcon from "../../../../../public/assets/icons/swapSuccessIcon";

function SuccessModal({ close }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-2 sm:p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[485px] p-4 sm:p-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-2 sm:mb-4">
          <div className=" flex items-center justify-center rounded-full mb-2">
            <SwapSuccessIcon />
          </div>
          <div className="text-base sm:text-lg font-medium text-gray-900 my-1 sm:my-4 text-center">
            Virtual Account Created Successfully
          </div>
          <p className="text-sm text-gray-600 text-center">
            Your virtual account has been created and is now active. You can
            start receiving payments.
          </p>
        </div>
        <div className="flex w-full mt-2 sm:mt-4">
          <button
            onClick={close}
            className="w-full bg-[#062755] text-white rounded-lg py-3 sm:py-4 font-medium hover:bg-[#041d42] transition"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessModal;
