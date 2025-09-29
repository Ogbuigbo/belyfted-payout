"use client";

import Image from "next/image";
import React from "react";
import { useForgotPassword } from "../_hooks/useForgotPassword";
import Link from "next/link";

export default function ResetForm() {
  const { formData, handleInputChange, handleSubmit, loading, error, success } =
    useForgotPassword();

  // Allow user to resend the email by calling handleSubmit again
  const handleSendAgain = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="min-h-screen flex items-center justify-center xl:p-8 lg:py-8 p-4">
      <div className="bg-white rounded-2xl flex justify-between w-full overflow-hidden">
        {/* Left: Forgot Password Form or Email Confirmation */}
        <div className="w-full lg:max-w-[553px] lg:w-1/2 md:px-8 xl:px-12">
          {!success ? (
            <>
              {/* Logo and Header */}
              <div className="mb-8 flex flex-col items-center justify-center lg:justify-start lg:items-start">
                <div className="flex items-center mb-6">
                  <Link href="/login">
                    <Image
                      src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466560/Frame_5_1_lzqhla.png"
                      alt="Belyfted logo"
                      width={80}
                      height={63}
                    />
                  </Link>
                </div>
                <h2 className="text-[32px] font-bold text-[#042656] mt-16 mb-2">
                  Forgot Password
                </h2>
                <p className="text-gray-600">
                  Enter the email address associated with your account.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#666666] mb-[11px]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl outline-none transition-colors focus:border-[#F39C12] focus:ring-1 focus:ring-[#F39C12]"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!formData.email || loading}
                  className="w-full bg-[#042656] hover:bg-[#031a42] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                >
                  {loading ? "Sending..." : "Send Password Reset Link"}
                </button>

                {/* Return to Login Link */}
                <div className="text-center">
                  <a
                    href="/login"
                    className="text-[#042656] font-semibold hover:underline"
                  >
                    Return to Login
                  </a>
                </div>
              </div>
            </>
          ) : (
            // Email Confirmation Component
            <div className="flex flex-col justify-center">
              {/* Logo */}
              <div className="mb-12 flex items-center justify-center lg:justify-start">
                <Image
                  src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466560/Frame_5_1_lzqhla.png"
                  alt="Belyfted logo"
                  width={80}
                  height={63}
                />
              </div>

              {/* Main Content */}
              <div className="text-center  space-y-8">
                {/* Header */}
                <h2 className="text-[32px] font-bold text-[#042656] mb-6">
                  Password Reset Email
                </h2>

                {/* Email Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#042656]">
                    We have sent you an email
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    A verification link has been sent to your email. Please
                    check your email
                  </p>
                </div>

                {/* Send Again Link */}
                <div className="text-center">
                  <p className="text-gray-600">
                    Didn't receive the email yet?{" "}
                    <button
                      onClick={handleSendAgain}
                      className="text-[#042656] font-semibold hover:underline cursor-pointer"
                    >
                      Send Again
                    </button>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Dashboard Preview */}
        <div className="hidden lg:flex lg:pr-10">
          <Image
            src={
              "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466488/Sign_up_now_nkulhu.png"
            }
            alt="Belyfted dashboard preview"
            width={500}
            height={500}
            className="w-[607px] h-[740px]"
          />
        </div>
      </div>
    </div>
  );
}
