import React, { useState } from "react";
import useBeneficiary from "../_hooks/useBeneficiary";

function AddBeneficiaryForm({ onSubmit }) {
  const { addBeneficiary, loading, countries, banks, fetchingCountries, fetchingBanks, resolvingAccount, accountDetails, resolveAccount, fetchBanks } = useBeneficiary();
  const [formData, setFormData] = useState({
    // Backend required fields
    account_name: "", 
    account_number: "",
    bank_code: "",
    bank_name: "", 
    country: "",
    currency: "NGN", 
    
    // Commented out - not in backend API
    // beneficiaryName: "",
    // firstname: "",
    // lastname: "",
    // paymentDestination: "Bank Account",
    // swiftCode: "",
    // sortCode: "",
    // email: "",
  });
  
  const [bankSearch, setBankSearch] = useState("");

  // Helper function to map country codes to API format
  const getCountryCodeForAPI = (countryValue) => {
    // If it's a numeric ID, find the country and use its iso2 field
    if (typeof countryValue === 'string' && !isNaN(countryValue)) {
      const country = countries.find(c => c.id === parseInt(countryValue) || c.id === countryValue);
      if (country && country.iso2) {
        return country.iso2.toLowerCase();
      }
    }
    
    if (countryValue === 'NG' || countryValue === 'Nigeria') {
      return 'ng';
    }
    
    return countryValue.toLowerCase();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.account_name || !formData.account_number || !formData.bank_code || !formData.bank_name || !formData.country) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate bank code format
    if (!/^\d{3}$/.test(formData.bank_code)) {
      alert('Bank code must be exactly 3 digits');
      return;
    }

    // Validate account number (should be numeric)
    if (!/^\d+$/.test(formData.account_number)) {
      alert('Account number must contain only numbers');
      return;
    }
    
    // Get the ISO2 code for the selected country
    const selectedCountry = countries.find(c => c.id === parseInt(formData.country) || c.id === formData.country);
    const countryCode = selectedCountry ? selectedCountry.iso2 : formData.country;
    
    // Map form data to API format - now matches backend exactly
    const apiData = {
      account_name: formData.account_name,
      account_number: formData.account_number,
      bank_code: formData.bank_code,
      bank_name: formData.bank_name,
      country: countryCode,
      currency: countryCode === "NG" ? "NGN" : "USD" 
    };


    const success = await addBeneficiary(apiData);
    if (success) {
      onSubmit(formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Auto-populate bank code when bank is selected
    if (name === 'bank_name') {
      const selectedBank = banks.find(bank => bank.name === value);
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        bank_code: selectedBank ? selectedBank.bank_code : ''
      }));
    } else if (name === 'country') {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        bank_name: '',
        bank_code: ''
      }));
      
      // Reset bank search
      setBankSearch('');
      
      if (value) {
        const countryCode = getCountryCodeForAPI(value);
        fetchBanks(countryCode);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle bank search
  const handleBankSearch = (e) => {
    const { value } = e.target;
    setBankSearch(value);
    
    // If country is selected, fetch banks with search term
    if (formData.country && value.trim()) {
      const countryCode = getCountryCodeForAPI(formData.country);
      fetchBanks(countryCode, value.trim());
    }
  };

  // Handle account number input with auto-resolution
  const handleAccountNumberChange = async (e) => {
    const { value } = e.target;
    
    // Update form data
    setFormData((prev) => ({
      ...prev,
      account_number: value,
    }));

    // Auto-resolve account when account number is 10 digits and bank code is available
    if (value.length === 10 && formData.bank_code && /^\d{3}$/.test(formData.bank_code)) {
      try {
        const resolvedAccount = await resolveAccount(value, formData.bank_code);
        if (resolvedAccount && resolvedAccount.account_name) {
          // Auto-populate account holder name from resolved account
          setFormData((prev) => ({
            ...prev,
            account_name: resolvedAccount.account_name
          }));
        }
      } catch (error) {
        console.error('Account resolution failed:', error);
      }
    }
  };

  const inputClassName =
    "w-full px-3 py-3 border border-gray-300 rounded-lg  text-sm";
  const labelClassName = "block text-sm font-medium text-gray-600 mb-2";
  const selectClassName =
    "w-full px-3 py-3 border border-gray-300 rounded-lg  text-sm appearance-none bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 overflow-auto">
      

      {/* Commented out - not in backend API */}
      {/* 
      <div>
        <label className={labelClassName}>Beneficiary Name</label>
        <input
          type="text"
          name="beneficiaryName"
          value={formData.beneficiaryName}
          onChange={handleChange}
          placeholder="Ademola John"
          className={inputClassName}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClassName}>Firstname</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className={inputClassName}
            required
          />
        </div>
        <div>
          <label className={labelClassName}>Lastname</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            className={inputClassName}
            required
          />
        </div>
      </div>

      <div>
        <label className={labelClassName}>Payment Destination</label>
        <div className="relative">
          <select
            name="paymentDestination"
            value={formData.paymentDestination}
            onChange={handleChange}
            className={selectClassName}
          >
            <option value="Bank Account">Bank Account</option>
            <option value="Mobile Money">Mobile Money</option>
            <option value="Digital Wallet">Digital Wallet</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
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
      */}

      {/* Beneficiary Country */}
      <div>
        <label className={labelClassName}>Beneficiary Country</label>
        <div className="relative">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={selectClassName}
            required
            disabled={fetchingCountries}
          >
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.code || country.id} value={country.code || country.id}>
                {country.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
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
        {fetchingCountries && (
          <p className="text-xs text-gray-500 mt-1">Loading countries...</p>
        )}
      </div>

      {/* Bank Search */}
      {formData.country && (
        <div>
          <label className={labelClassName}>Search Bank</label>
          <input
            type="text"
            value={bankSearch}
            onChange={handleBankSearch}
            placeholder="Type bank name to search..."
            className={inputClassName}
          />
          <p className="text-xs text-gray-500 mt-1">
            Search for banks in {formData.country}
          </p>
        </div>
      )}

      {/* Bank Name */}
      <div>
        <label className={labelClassName}>Bank Name</label>
        <div className="relative">
          <select
            name="bank_name"
            value={formData.bank_name}
            onChange={handleChange}
            className={selectClassName}
            required
            disabled={fetchingBanks || !formData.country}
          >
            <option value="">
              {!formData.country ? "Select a country first" : "Select a bank"}
            </option>
            {banks.map((bank) => (
              <option key={bank.uuid || bank.bank_code} value={bank.name}>
                {bank.name}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
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
        {fetchingBanks && (
          <p className="text-xs text-gray-500 mt-1">Loading banks...</p>
        )}
        {!fetchingBanks && banks.length === 0 && formData.country && (
          <p className="text-xs text-yellow-600 mt-1">
            ⚠️ No banks found. Try searching with a different term or contact support.
          </p>
        )}
        {!formData.country && (
          <p className="text-xs text-gray-500 mt-1">
            Please select a country first to load available banks.
          </p>
        )}
      </div>

      {/* Bank Code  */}
      <div>
        <label className={labelClassName}>Bank Code</label>
        <input
          type="number"
          name="bank_code"
          value={formData.bank_code}
          onChange={handleChange}
          placeholder="Auto-filled when bank is selected"
          className={inputClassName}
          required
          pattern="[0-9]{3}"
          title="Bank code must be 3 digits"
          readOnly
        />
        <p className="text-xs text-gray-500 mt-1">
          Bank code is automatically filled when you select a bank
        </p>
      </div>

      {/* Account Number  */}
      <div>
        <label className={labelClassName}>Account Number</label>
        <div className="relative">
          <input
            type="text"
            name="account_number"
            value={formData.account_number}
            onChange={handleAccountNumberChange}
            placeholder="1234567890"
            className={inputClassName}
            required
            maxLength="10"
            pattern="[0-9]{10}"
            title="Account number must be exactly 10 digits"
          />
          {resolvingAccount && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#042656]"></div>
            </div>
          )}
        </div>
        {formData.account_number.length === 10 && accountDetails && (
          <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-700">
              ✓ Account verified: {accountDetails.account_name}
            </p>
          </div>
        )}
        {formData.account_number.length === 10 && !accountDetails && !resolvingAccount && formData.bank_code && (
          <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-700">
              ✗ Account not found or invalid
            </p>
          </div>
        )}
        <p className="text-xs text-gray-500 mt-1">
          Enter 10-digit account number. Account will be verified automatically.
        </p>
      </div>


      {/* Account Holder Name  */}
      <div>
        <label className={labelClassName}>Account Holder Name</label>
        <input
          type="text"
          name="account_name"
          value={formData.account_name}
          onChange={handleChange}
          placeholder="John Doe"
          className={inputClassName}
          required
        />
        {accountDetails && accountDetails.account_name && (
          <p className="text-xs text-green-600 mt-1">
            ✓ Auto-filled from account verification
          </p>
        )}
      </div>

      {/* Commented out - not in backend API */}
      {/* 
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClassName}>SWIFT Code</label>
          <input
            type="text"
            name="swiftCode"
            value={formData.swiftCode}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>
        <div>
          <label className={labelClassName}>Sort Code</label>
          <input
            type="text"
            name="sortCode"
            value={formData.sortCode}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label className={labelClassName}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Ademola John"
          className={inputClassName}
          required
        />
      </div>
      */}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-4 py-3 bg-[#042656] text-white rounded-lg hover:bg-[#031c40] disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium text-sm"
      >
        {loading ? "Adding Beneficiary..." : "Save Beneficiary"}
      </button>
    </form>
  );
}
export default AddBeneficiaryForm;
