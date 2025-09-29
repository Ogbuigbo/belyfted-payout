import React from "react";

function ConfirmPayout({ onClose, onConfirm }) {
  // Sample data - you can replace this with actual data passed as props
  const paymentData = {
    name: "John Doe",
    accountNumber: "484949949",
    amountToBeSent: "NGN 4,000",
    bank: "GtBank",
    fees: "NGN50",
    amountYouReceive: "NGN50,000",
    reference: "HFHDHFHFF",
  };

  const handleConfirm = () => {
    // Handle payment confirmation logic here
    if (onConfirm) {
      onConfirm();
    }
    console.log("Payment confirmed");
  };

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Payment Details */}
      <div className="flex-1 space-y-3 mb-8 text-sm">
        {/* Name */}
        <div className="flex justify-between items-center py-1 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Name</span>
          <span className="text-gray-900 font-semibold">
            {paymentData.name}
          </span>
        </div>

        {/* Account Number */}
        <div className="flex justify-between items-center py-1 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Account Number</span>
          <span className="text-gray-900 font-semibold">
            {paymentData.accountNumber}
          </span>
        </div>

        {/* Amount to be Sent */}
        <div className="flex justify-between items-center py-1 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Amount to be Sent</span>
          <span className="text-gray-900 font-semibold">
            {paymentData.amountToBeSent}
          </span>
        </div>

        {/* Bank */}
        <div className="flex justify-between items-center py-1 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Bank</span>
          <span className="text-gray-900 font-semibold">
            {paymentData.bank}
          </span>
        </div>

        {/* Fees */}
        <div className="flex justify-between items-center py-1 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Fees</span>
          <span className="text-gray-900 font-semibold">
            {paymentData.fees}
          </span>
        </div>

        {/* Amount you receive */}
        <div className="flex justify-between items-center py-1 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Amount you receive</span>
          <span className="text-gray-900 font-semibold">
            {paymentData.amountYouReceive}
          </span>
        </div>

        {/* Reference */}
        <div className="flex justify-between items-center py-1 border-b border-gray-100">
          <span className="text-gray-600 font-medium">Reference</span>
          <span className="text-gray-900 font-semibold">
            {paymentData.reference}
          </span>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="mt-[220px] pt-6 flex justify-end h-full">
        <button
          onClick={handleConfirm}
          className="w-full bg-[#042656] text-white py-4 px-6 rounded-lg font-semibold  hover:bg-[#053066] transition-colors"
        >
          Send NGN40,000
        </button>
      </div>
    </div>
  );
}

export default ConfirmPayout;
