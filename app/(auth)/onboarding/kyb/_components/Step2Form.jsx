"use client";

import React, { useState, useEffect } from "react";
import { useKybStep2 } from "../_hooks/useKybStep2";

function Step2Form({ onNext, onPrev }) {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    loading,
    error,
    success,
    status,
    handleDescriptionChange,
  } = useKybStep2();

  useEffect(() => {
    if (
      status &&
      ["SUBMITTED", "APPROVED", "UNDER_REVIEW"].includes(
        status?.toUpperCase(),
      ) &&
      onNext
    ) {
      onNext();
    }
  }, [status, onNext]);

  const [charCount, setCharCount] = useState(
    formData.business_description?.length || 0,
  );

  const onFormSubmit = async (e) => {
    const ok = await handleSubmit(e);
    if (ok && onNext) onNext();
  };

  return (
    <div className="z-50 flex items-center justify-center p-4">
      <div className="lg:w-[701px] w-full z-50">
        {/* Background pattern */}
        <div className="relative">
          {/* Main form container */}
          <div className="relative bg-white rounded-3xl border border-[#04265642] overflow-hidden">
            {/* Progress indicator */}
            <div className="px-8 pt-6">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-[#062755] rounded-full"></div>
                  <div className="w-12 h-px bg-[#062755]"></div>
                  <div className="w-3 h-3 bg-[#062755] rounded-full"></div>
                  <div className="w-12 h-px bg-gray-300"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div className="w-12 h-px bg-gray-300"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Business Registration Info
                </h2>
                <p className="text-gray-600">Kindly input your details</p>
              </div>

              {/* Show error/success/loading */}
              {error && (
                <div className="mb-4 text-red-600 text-sm">{error}</div>
              )}
              {success && (
                <div className="mb-4 text-green-600 text-sm">{success}</div>
              )}
              {/* {loading && (
                <div className="mb-4 text-blue-600 text-sm">Loading...</div>
              )} */}

              <form className="space-y-6" onSubmit={onFormSubmit}>
                {/* Registered Country and Year */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      Registered Country
                    </label>
                    <div className="relative">
                      <select
                        name="registered_country"
                        value={formData.registered_country}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white pr-10"
                      >
                        <option value="Nigeria">Nigeria</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      Registered Year
                    </label>
                    <div className="relative">
                      <select
                        name="registered_year"
                        value={formData.registered_year}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white pr-10"
                      >
                        {Array.from({ length: 30 }, (_, i) => 2000 + i).map(
                          (year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ),
                        )}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ID Number and Company Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      ID Number
                    </label>
                    <input
                      type="text"
                      name="id_number"
                      value={formData.id_number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      Company Number
                    </label>
                    <input
                      type="text"
                      name="company_number"
                      value={formData.company_number}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Tax/VAT ID and Business Scopes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      Tax/VAT ID
                    </label>
                    <input
                      type="text"
                      name="tax_vat_id"
                      value={formData.tax_vat_id}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      Business Scopes
                    </label>
                    <div className="relative">
                      <select
                        name="business_scopes"
                        value={formData.business_scopes}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none bg-white pr-10"
                      >
                        <option value="NGO">NGO</option>
                        <option value="Corporation">Corporation</option>
                        <option value="Small Business">Small Business</option>
                        <option value="Enterprise">Enterprise</option>
                        <option value="Startup">Startup</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Description */}
                <div>
                  <label className="block font-medium text-[#666666] mb-2">
                    Business Description
                  </label>
                  <div className="relative">
                    <textarea
                      name="business_description"
                      value={formData.business_description}
                      onChange={handleDescriptionChange}
                      rows={4}
                      maxLength={200}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Describe your business..."
                    />
                    <div className="absolute bottom-3 right-3 text-sm text-gray-400">
                      {charCount}/200
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={onPrev}
                    className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    <div className="w-2 h-2 bg-current rounded-full mr-3"></div>
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60"
                  >
                    {loading ? "Saving..." : "Continue"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2Form;
