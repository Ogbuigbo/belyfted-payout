"use client";

import React, { useState } from "react";
import useBeneficiary from "../../beneficiary/_hooks/useBeneficiary";

function BeneficiaryDetails({ beneficiaryTab, setBeneficiaryTab, paymentTab }) {
  const { beneficiaries, loading } = useBeneficiary();
  const [selectedBeneficiary, setSelectedBeneficiary] = useState("");
  const [walletId, setWalletId] = useState("");
  const [walletReference, setWalletReference] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
    email: "",
    bank: "",
    country: "",
    bankAddress: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Show Belyfted Wallet form when paymentTab is "belyfted-wallet"
  if (paymentTab === "belyfted-wallet") {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Header */}
        <h3 className="text-sm font-medium text-gray-900 mb-6">Make Payout</h3>

        <div className="space-y-6">
          {/* Wallet ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Wallet ID
            </label>
            <input
              type="text"
              value={walletId}
              onChange={(e) => setWalletId(e.target.value)}
              className="w-full px-4 py-[10px] rounded-xl border border-gray-200 focus:outline-none"
              placeholder="Enter wallet ID"
            />
          </div>

          {/* Transaction Details Section */}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-4">
              Transaction Details
            </h4>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reference
              </label>
              <input
                type="text"
                value={walletReference}
                onChange={(e) => setWalletReference(e.target.value)}
                className="w-full px-4 py-[10px] rounded-xl border border-gray-200 focus:outline-none"
                placeholder="Enter reference"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show regular beneficiary details form for "one-time" payment
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <h3 className="text-sm font-medium text-gray-900 mb-6">
        Beneficiary Details
      </h3>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6">
        <button
          onClick={() => setBeneficiaryTab("new")}
          className={`px-3 md:px-6 py-[8px] rounded-2xl  text-xs transition-colors ${
            beneficiaryTab === "new"
              ? "bg-[#042656] text-white"
              : "text-[#042656] "
          }`}
        >
          New Beneficiary
        </button>
        <button
          onClick={() => setBeneficiaryTab("saved")}
          className={`px-3 md:px-6 py-[8px] rounded-2xl  text-xs transition-colors ${
            beneficiaryTab === "saved"
              ? "bg-[#042656] text-white"
              : " text-[#042656] "
          }`}
        >
          Saved Beneficiary
        </button>
      </div>

      {/* Content based on active tab */}
      {beneficiaryTab === "saved" && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Beneficiary
          </label>
          <select
            value={selectedBeneficiary}
            onChange={(e) => setSelectedBeneficiary(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none"
            disabled={loading}
          >
            <option value="">Choose a saved beneficiary</option>
            {loading ? (
              <option value="" disabled>Loading beneficiaries...</option>
            ) : beneficiaries.length === 0 ? (
              <option value="" disabled>No beneficiaries found</option>
            ) : (
              beneficiaries.map((beneficiary) => (
                <option key={beneficiary.id} value={beneficiary.id}>
                  {beneficiary.account_name || beneficiary.beneficiaryName} - {beneficiary.bank_name || beneficiary.beneficiaryBank}
                </option>
              ))
            )}
          </select>
          {loading && (
            <p className="text-xs text-gray-500 mt-1">Loading beneficiaries...</p>
          )}
        </div>
      )}

      {beneficiaryTab === "new" && (
        <div className="space-y-4">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                First name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full px-4 py-[10px] rounded-xl border border-gray-200  focus:outline-none "
              />
            </div>

            <div>
              <label className="block text-sm font-medium  mb-2">
                Last name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full px-4 py-[10px] rounded-xl border border-gray-200  focus:outline-none focus:ring-2 "
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium  mb-2">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full px-4 py-[10px] rounded-xl border border-gray-200  "
              />
            </div>

            <div>
              <label className="block text-sm font-medium  mb-2">State</label>
              <input
                type="text"
                value={formData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                className="w-full px-4 py-[10px] rounded-xl border border-gray-200  focus:outline-none "
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium  mb-2">City</label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="w-full px-4 py-[10px] rounded-xl border border-gray-200  focus:outline-none "
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Zip Code
              </label>
              <input
                type="text"
                value={formData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
                className="w-full px-4 py-[10px] rounded-xl border border-gray-200  focus:outline-none "
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium  mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-[10px] rounded-xl border border-gray-200  focus:outline-none "
            />
          </div>

          {/* Bank Details Section */}
          <div className="pt-4">
            <h4 className="text-sm font-medium  mb-4">Bank Details</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div>
                <label className="block text-sm font-medium  mb-2">Bank</label>
                <input
                  type="text"
                  value={formData.bank}
                  onChange={(e) => handleInputChange("bank", e.target.value)}
                  className="w-full px-4 py-[10px] rounded-xl border border-gray-200  focus:outline-none "
                />
              </div>

              <div>
                <label className="block text-sm font-medium  mb-2">
                  Country
                </label>
                <input
                  type="text"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  className="w-full px-4 py-[10px] rounded-xl border border-gray-200  focus:outline-none "
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium  mb-2">Address</label>
              <input
                type="text"
                value={formData.bankAddress}
                onChange={(e) =>
                  handleInputChange("bankAddress", e.target.value)
                }
                className="w-full px-4 py-[10px] rounded-xl border border-gray-200  focus:outline-none "
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BeneficiaryDetails;
