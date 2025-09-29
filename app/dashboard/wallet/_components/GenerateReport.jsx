"use client";

import React, { useState } from "react";
import useFunding from "../_hooks/useFunding";

export default function GenerateReport({ onClose }) {
  const [formData, setFormData] = useState({
    currency: '',
    start_date: '',
    end_date: ''
  });
  const { generateStatement, loading } = useFunding();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.currency || !formData.start_date || !formData.end_date) {
      alert('Please fill in all required fields');
      return;
    }

    const success = await generateStatement({
      start_date: formData.start_date,
      end_date: formData.end_date,
      currency: formData.currency
    });
    
    if (success) {
      onClose(); // Close the sidebar
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Currency Select */}
      <div>
        <label className="block text-[#666666] font-medium mb-2">
          Choose Currency
        </label>
        <div className="relative">
          <select 
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            className="w-full border border-[#66666659] text-sm rounded-xl pl-10 pr-4 py-4 appearance-none focus:outline-none focus:ring-2 focus:ring-[#042656]"
            required
          >
            <option value="">Select Currency</option>
            <option value="USD">USD</option>
            <option value="NGN">NGN</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="TZS">TZS</option>
          </select>
          <span className="absolute left-3 top-1/2 -translate-y-1/2">
            {/* Example flag icon (replace with your own if needed) */}
            <img
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1751888774/Frame_1618869784_ewkle5.svg"
              alt="flag"
              className="w-5 h-5 inline-block"
            />
          </span>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path
                d="M4 6l4 4 4-4"
                stroke="#888"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
      
      {/* Date Pickers */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-[#666666] font-medium mb-2">
            Date from
          </label>
          <div className="relative">
            <input
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              className="md:w-[183px] border border-[#66666659] rounded-xl px-3 py-4 focus:outline-none focus:ring-2 focus:ring-[#042656]"
              required
            />
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-[#666666] font-medium mb-2">
            Date To
          </label>
          <div className="relative">
            <input
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
              className="md:w-[183px] border border-[#66666659] rounded-xl px-3 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#042656]"
              required
            />
          </div>
        </div>
      </div>
      
      {/* Generate Button */}
      <button
        type="submit"
        disabled={loading}
        className="bg-[#042656] text-white py-4 rounded-lg font-semibold mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-2 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              ></path>
            </svg>
            Generating...
          </span>
        ) : (
          'Generate'
        )}
      </button>
    </form>
  );
}