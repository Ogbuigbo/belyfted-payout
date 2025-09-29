"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useRegister } from "../_hooks/useRegister";
import SearchableDropdown from "../../../_components/SearchableDropdown";
import Link from "next/link";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    formData,
    handleInputChange,
    handleSubmit,
    loading,
    error,
    success,
    countries,
    countriesError,
    businessTypes,
    loadingBusinessTypes,
    businessTypesError,
    isCheckingPassword,
    loadingCountries,
    setFormData,
  } = useRegister();

  const selectedCountry = countries.find(
    (c) => c.code === formData.country || c.iso2 === formData.country,
  );
  const phoneCode = selectedCountry?.phonecode || "";
  const flag = selectedCountry?.emoji || "";

  const chevronIcon = (
    <svg
      className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
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
  );

  return (
    <div className="min-h-screen flex">
      {/* Left: Registration Form - Scrollable */}
      <div className="w-full lg:w-1/2 lg:max-w-[553px] flex-shrink-0 overflow-y-auto">
        <div className="min-h-screen flex items-center justify-center xl:p-8 lg:py-8 p-4">
          <div className="w-full max-w-md">
            {/* Logo and Header */}
            <div className="mb-8 flex flex-col items-center justify-center lg:justify-start lg:items-start">
              <div className="flex items-center mb-6">
                <Link href="/login">
                  <Image
                    src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466560/Frame_5_1_lzqhla.png"
                    alt="logo"
                    width={80}
                    height={63}
                  />
                </Link>
              </div>
              <h2 className="text-[32px] font-bold text-[#042656] mb-2">
                Sign up
              </h2>
              <p>Create your Business account</p>
            </div>

            {/* Show errors */}
            {error && (
              <div className="mb-4 text-red-600 text-sm">
                {Array.isArray(error)
                  ? error.map((err, i) => <div key={i}>{err}</div>)
                  : error}
              </div>
            )}
            {success && (
              <div className="mb-4 text-green-600 text-sm">{success}</div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-sm font-medium text-[#666666] mb-[11px]"
                  >
                    Firstname
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={formData.firstname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium text-[#666666] mb-[11px]"
                  >
                    Lastname
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={formData.lastname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Middle Name and Business Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="middlename"
                    className="block text-sm font-medium text-[#666666] mb-[11px]"
                  >
                    Middle name
                  </label>
                  <input
                    id="middlename"
                    name="middlename"
                    type="text"
                    value={formData.middlename}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-sm font-medium text-[#666666] mb-[11px]"
                  >
                    Registered Business Name
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    type="text"
                    value={formData.businessName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Country and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-[#666666] mb-[11px]"
                  >
                    Country
                  </label>
                  <div className="relative">
                    {countriesError ? (
                      <div className="text-red-500 text-sm">
                        {countriesError}
                      </div>
                    ) : (
                      <SearchableDropdown
                        options={countries.map((country) => ({
                          value: country.code || country.iso2,
                          label:
                            `${country.emoji ? country.emoji + " " : ""}${country.name || ""}` ||
                            "",
                        }))}
                        value={formData.country}
                        onChange={(val) =>
                          handleInputChange({
                            target: { name: "country", value: val },
                          })
                        }
                        placeholder="Select country"
                        disabled={!!countriesError}
                        loading={loadingCountries}
                      />
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#666666] mb-[11px]"
                  >
                    Phone number
                  </label>
                  <div className="flex overflow-hidden border bg-gray-50 border-gray-300 rounded-xl">
                    <div className="flex items-center px-3">
                      {/* <span className="text-xl mr-2">{flag}</span> */}
                      <span className="text-sm text-gray-700">{phoneCode}</span>
                    </div>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="9036367363"
                      className="px-3 py-2.5 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Email and Business Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#666666] mb-[11px]"
                  >
                    Business Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="businessType"
                    className="block text-sm font-medium text-[#666666] mb-[11px]"
                  >
                    Business Type
                  </label>
                  <div className="relative">
                    {businessTypesError ? (
                      <div className="text-red-500 text-sm">
                        {businessTypesError}
                      </div>
                    ) : (
                      <SearchableDropdown
                        options={businessTypes.map((type) => ({
                          value: type.uuid,
                          label:
                            typeof type.title === "string" ? type.title : "",
                        }))}
                        value={formData.businessType}
                        onChange={(val) =>
                          setFormData((prev) => ({
                            ...prev,
                            businessType: val,
                          }))
                        }
                        placeholder="Select type"
                        disabled={!!businessTypesError}
                        loading={loadingBusinessTypes}
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Referral */}
              <div>
                <label
                  htmlFor="referral"
                  className="block text-sm font-medium text-[#666666] mb-[11px]"
                >
                  How did you hear about Belyfted?
                </label>
                <div className="relative">
                  <SearchableDropdown
                    options={[
                      { value: "social", label: "Social Media" },
                      { value: "friend", label: "Friend/Colleague" },
                      { value: "ads", label: "Ads" },
                      { value: "search", label: "Search Engine" },
                    ].map((opt) => ({
                      value: opt.value,
                      label: typeof opt.label === "string" ? opt.label : "",
                    }))}
                    value={formData.referral}
                    onChange={(val) =>
                      setFormData((prev) => ({ ...prev, referral: val }))
                    }
                    placeholder="Select option"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[#666666] mb-[11px]"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-3 py-2.5 border ${
                      error &&
                      ((typeof error === "string" &&
                        error.includes("password")) ||
                        (Array.isArray(error) &&
                          error.some((e) => e.includes("password"))))
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-xl outline-none transition-colors pr-10`}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2">
                    {isCheckingPassword && (
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary border-t-transparent"></div>
                    )}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="flex items-center"
                      disabled={loading}
                    >
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {showPassword ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
                {error &&
                  ((typeof error === "string" && error.includes("password")) ||
                    (Array.isArray(error) &&
                      error.some((e) => e.includes("password")))) && (
                    <p className="mt-2 text-sm text-red-600">
                      {typeof error === "string"
                        ? error
                        : error.find((e) => e.includes("password"))}
                    </p>
                  )}
              </div>

              {/* Password Confirmation */}
              <div>
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-[#666666] mb-[11px]"
                >
                  Confirm Password
                </label>
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type={showPassword ? "text" : "password"}
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-xl outline-none transition-colors"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  className="w-4 h-4 border border-gray-300 rounded focus:ring-2 mt-1"
                  style={{
                    accentColor: "#F39C12",
                    backgroundColor: formData.consent ? "#F39C12" : "white",
                    borderColor: formData.consent ? "#F39C12" : "#D1D5DB",
                  }}
                />
                <label
                  htmlFor="consent"
                  className="text-sm text-gray-600 leading-relaxed"
                >
                  I hereby consent to the Terms of Use and give consent for
                  Belyfted Payout to process my data in line with Payouts
                  Privacy Policy. I also confirm I have the authorisation of the
                  Board of Directors and the Company to create this account and
                  provide their personal data.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-60"
              >
                {loading ? "Registering..." : "Continue"}
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-4 text-gray-600">
              Have an account?{" "}
              <a href="/login" className="font-semibold hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Right: Dashboard Preview - Fixed */}
      <div className="hidden lg:flex lg:w-1/2 lg:flex-shrink-0 lg:fixed lg:right-0 lg:top-0 lg:h-full lg:items-center lg:justify-center">
        <div className="lg:pr-10">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466488/Sign_up_now_nkulhu.png"
            alt="logo"
            width={500}
            height={500}
            className="w-[607px] h-[740px]"
          />
        </div>
      </div>
    </div>
  );
}
