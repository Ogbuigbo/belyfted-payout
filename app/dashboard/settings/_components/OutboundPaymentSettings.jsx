"use client";

import { useState } from "react";


const OutBoundPayment = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [settings, setSettings] = useState({
    notifyTransfer: false,
    enableApiOnly: false,
    enableDashboardOnly: false,
    enableApiBoth: false,
    disableAllTransfers: false,
  });

  const transactionOptions = ["Charge me for this", "Charge my customers"];

  const handleDropdownSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleCheckboxChange = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSaveChanges = () => {
    console.log("Settings saved:", { selectedOption, settings });
    // Handle save logic here
  };

  return (
    <div className="w-full bg-white rounded-xl py-[42px] flex justify-center items-center">
      <div className="max-w-[586px] w-full px-4">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Out-Bound Payment
          </h2>
        </div>

        {/* Transaction Fees Section */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Transaction fees
          </label>

          {/* Custom Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none  flex items-center justify-between hover:border-gray-400 transition-colors"
            >
              <span
                className={selectedOption ? "text-gray-900" : "text-gray-500"}
              >
                {selectedOption || "Select an option"}
              </span>
              {/* <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              /> */}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                {transactionOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleDropdownSelect(option)}
                    className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 text-gray-700 border-b border-gray-100 last:border-b-0 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
          <p className="text-sm font-medium text-[#777779] mt-2">
            Fees charged by Belyfted Payout for processing your payments
          </p>
        </div>

        {/* Settings Checkboxes */}
        <div className="space-y-4 mb-8 xl:w-[764px]">
          {/* Notify me when I make Transfer */}
          <label className="flex items-start space-x-3 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={settings.notifyTransfer}
                onChange={() => handleCheckboxChange("notifyTransfer")}
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded  transition-colors"
              />
            </div>
            <span className="text-sm font-medium">
              Notify me when I make Transfer
            </span>
          </label>

          {/* Enable Transfers via API only */}
          <label className="flex items-start space-x-3 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={settings.enableApiOnly}
                onChange={() => handleCheckboxChange("enableApiOnly")}
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded  transition-colors"
              />
            </div>
            <span className="text-sm font-medium">
              Enable Transfers via API only(Transfers would only be processed
              via API)
            </span>
          </label>

          {/* Enable Transfers via Dashboard only */}
          <label className="flex items-start space-x-3 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={settings.enableDashboardOnly}
                onChange={() => handleCheckboxChange("enableDashboardOnly")}
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded  transition-colors"
              />
            </div>
            <span className="text-sm font-medium">
              Enable Transfers via Dashboard only (Transfers would only be
              processed from the dashboard)
            </span>
          </label>

          {/* Enable Transfers via API and Dashboard */}
          <label className="flex items-start space-x-3 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={settings.enableApiBoth}
                onChange={() => handleCheckboxChange("enableApiBoth")}
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded  transition-colors"
              />
            </div>
            <span className="text-sm font-medium">
              Enable Transfers via API and Dashboard(Transfers would be
              processed from both API's and dashboard)
            </span>
          </label>

          {/* Disable all transfers */}
          <label className="flex items-start space-x-3 cursor-pointer group">
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={settings.disableAllTransfers}
                onChange={() => handleCheckboxChange("disableAllTransfers")}
                className="w-5 h-5 text-blue-600 border-2 border-gray-300 rounded transition-colors"
              />
            </div>
            <span className="text-sm font-medium">
              Disable all transfers(Transfer would be disabled from both API's
              and dashboard)
            </span>
          </label>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSaveChanges}
          className="w-full bg-[#042656] hover:bg-blue-800 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none  "
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default OutBoundPayment;
