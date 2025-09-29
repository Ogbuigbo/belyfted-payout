"use client";

import React, { useEffect } from "react";
import { useKybStep1 } from "../_hooks/useKybStep1";

export default function Step1Form({ onNext }) {
  const {
    formData,
    handleInputChange,
    handleSubmit,
    loading,
    error,
    success,
    status,
  } = useKybStep1();

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
          <div className="relative bg-white rounded-3xl  border border-[#04265642] overflow-hidden">
            {/* Progress indicator */}
            <div className="px-8 pt-6">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-[#062755] rounded-full"></div>
                  <div className="w-12 h-px bg-gray-300"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
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
                  Business Information
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
                {/* Name fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block  font-medium text-[#666666] mb-2">
                      Firstname
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block  font-medium text-[#666666] mb-2">
                      Lastname
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Entity and Website */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block  font-medium text-[#666666] mb-2">
                      Entity
                    </label>
                    <input
                      type="text"
                      name="entity"
                      value={formData.entity}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block  font-medium text-[#666666] mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Address fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block  font-medium text-[#666666] mb-2">
                      Address 1
                    </label>
                    <input
                      type="text"
                      name="address1"
                      value={formData.address1}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      Address 2
                    </label>
                    <input
                      type="text"
                      name="address2"
                      value={formData.address2}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* City and State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      Address City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block  font-medium text-[#666666] mb-2">
                      Address State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Country and Zip */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block  font-medium text-[#666666] mb-2">
                      Address Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Address Zip code
                    </label>
                    <input
                      type="text"
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Business Type and Industry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block  font-medium text-[#666666] mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="business_name"
                      value={formData.business_name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block  font-medium text-[#666666] mb-2">
                      Business Type
                    </label>
                    <input
                      type="text"
                      name="business_type"
                      value={formData.business_type}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-[#666666] mb-2">
                      Business Industry
                    </label>
                    <input
                      type="text"
                      name="business_industry"
                      value={formData.business_industry}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60"
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
