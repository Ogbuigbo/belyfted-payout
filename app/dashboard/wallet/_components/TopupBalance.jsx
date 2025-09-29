import React, { useState } from 'react'

export default function TopupBalance() {
  const [formData, setFormData] = useState({
    currency: 'USD'
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
    {/* Currency Select */}
    <div>
      <label className="block text-[#666666]  mb-2">
        Choose Currency
      </label>
      <div className="relative">
        <select 
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          className="w-full border border-[#66666659] text-sm rounded-xl pl-10 pr-4 py-4 appearance-none"
          required
        >
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

    {/* Amount Input */}
    <div>
      <label className="block text-[#666666]  mb-2">
        Enter Amount
      </label>
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        className="w-full border border-[#66666659] text-sm rounded-xl px-3 py-4 focus:outline-none focus:ring-2 focus:ring-[#042656]"
        required
      />
    </div>

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
          Creating Wallet...
        </span>
      ) : (
        'Create Wallet'
      )}
    </button>
  </form>
  )
}