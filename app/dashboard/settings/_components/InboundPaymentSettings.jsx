"use client";

import { useState } from "react";

export default function InBoundPaymentSettings() {
  const [paymentNotifications, setPaymentNotifications] = useState({
    reloadWallet: false,
    swapFunds: false,
    virtualAccountApproved: false,
    receivePayment: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxChange = (name) => {
    setPaymentNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Payment notification settings saved:", paymentNotifications);
      // You could show a success message here
    } catch (error) {
      console.error("Failed to save payment notification settings:", error);
      // Handle error - could show an error message
    } finally {
      setIsLoading(false);
    }
  };

  const notificationOptions = [
    {
      id: "reloadWallet",
      key: "reloadWallet",
      label: "Notify me when I Reload Wallet",
    },
    {
      id: "swapFunds",
      key: "swapFunds",
      label: "Notify me when I Swap Funds",
    },
    {
      id: "virtualAccountApproved",
      key: "virtualAccountApproved",
      label: "Notify me when Virtual Account is Approved",
    },
    {
      id: "receivePayment",
      key: "receivePayment",
      label: "Notify me when I receive Payment",
    },
  ];

  return (
    <div className="w-full bg-white rounded-xl py-[42px] flex justify-center items-center">
      <div className="max-w-[586px] w-full px-4">
        <h2 className="text-xl font-bold mb-8 text-gray-900">
          In-Bound Payment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Payment Notification Options */}
          {notificationOptions.map((option) => (
            <div key={option.id} className="flex items-center">
              <div className="flex items-center h-5">
                <input
                  id={option.id}
                  name={option.key}
                  type="checkbox"
                  checked={paymentNotifications[option.key]}
                  onChange={() => handleCheckboxChange(option.key)}
                  className="w-5 h-5 text-blue-600 bg-white border-2 border-gray-300 rounded  cursor-pointer"
                />
              </div>
              <div className="ml-3">
                <label
                  htmlFor={option.id}
                  className="text-sm font-medium cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            </div>
          ))}

          {/* Save Button */}
          <div className="pt-8">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 px-4 rounded-lg text-white font-medium transition-colors ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#042656] hover:bg-blue-800 focus:outline-none "
              }`}
            >
              {isLoading ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
