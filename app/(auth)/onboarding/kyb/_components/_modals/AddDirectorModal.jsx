"use client";

import React, { useState, useEffect } from "react";

function AddDirectorModal({ isOpen, onClose, onSave, initialData }) {
  const [directorData, setDirectorData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    email: "",
    phone: "",
    role: "",
    shares_allocated: "",
    ownership_percent: "",
  });

  const [modalError, setModalError] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setDirectorData(
        initialData || {
          first_name: "",
          last_name: "",
          middle_name: "",
          email: "",
          phone: "",
          role: "",
          shares_allocated: "",
          ownership_percent: "",
        },
      );
    }
  }, [isOpen, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for ownership_percent to ensure it has % symbol
    if (name === "ownership_percent") {
      // Remove any existing % and non-numeric characters, then add %
      const numericValue = value.replace(/[^0-9.]/g, "");
      const formattedValue = numericValue ? `${numericValue}%` : "";

      setDirectorData((prev) => ({
        ...prev,
        [name]: formattedValue,
      }));
    } else {
      setDirectorData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    // Validate required fields
    if (
      !directorData.first_name.trim() ||
      !directorData.last_name.trim() ||
      !directorData.email.trim() ||
      !directorData.phone.trim() ||
      !directorData.role.trim() ||
      !directorData.ownership_percent.trim() ||
      !directorData.shares_allocated
    ) {
      setModalError("Please fill in all required fields.");
      return;
    }
    setModalError(null);
    onSave(directorData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 md:p-10">
      <div className="bg-white rounded-2xl w-full max-w-[701px] max-h-[80vh] overflow-y-auto">
        <div className="md:p-12 p-6">
          <h3 className="md:text-[28px] text-[20px] text-center font-semibold text-[#042656] mb-2">
            Business Ultimate Beneficiary Officer
          </h3>
          <p className="text-center text-[#666666] text-[14px] md:text-[16px] mb-8">
            Kindly input your details
          </p>

          {modalError && (
            <div className="mb-4 text-red-600 text-sm">{modalError}</div>
          )}

          <div className="space-y-4">
            {/* Name fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={directorData.first_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middle_name"
                  value={directorData.middle_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={directorData.last_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={directorData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            {/* Phone and Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={directorData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  name="role"
                  value={directorData.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Ownership and Shares */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Ownership %
                </label>
                <input
                  type="text"
                  name="ownership_percent"
                  value={directorData.ownership_percent}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  placeholder="e.g., 80%"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Shares allocated
                </label>
                <input
                  type="number"
                  name="shares_allocated"
                  value={directorData.shares_allocated}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  min="0"
                  step="1"
                  placeholder="e.g., 50"
                />
              </div>
            </div>
          </div>

          <div className="flex w-full gap-3 mt-6">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#062755] w-full text-white font-medium rounded-lg hover:bg-[#041d42]"
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDirectorModal;
