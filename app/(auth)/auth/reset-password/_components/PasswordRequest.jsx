"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useResetPassword } from "../_hooks/useResetPassword";
import Link from "next/link";
import PasswordResetSuccess from "./PasswordResetSuccess";

const PasswordRequest = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const signature = searchParams.get("signature");

  const { formData, handleInputChange, handleSubmit, loading, error, success } =
    useResetPassword(token, signature);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  if (success) {
    return <PasswordResetSuccess />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center xl:p-8 lg:py-8 p-4">
      <div className="bg-white rounded-2xl flex justify-between w-full overflow-hidden">
        {/* Left: Reset Password Form */}
        <div className="w-full lg:max-w-[553px] lg:w-1/2 md:px-8 xl:px-12">
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
              Reset Password
            </h2>
            <p className="text-gray-600">
              Kindly add a new password and confirm
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-xl outline-none transition-colors focus:border-[#F39C12] focus:ring-1 focus:ring-[#F39C12]"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
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

            <div>
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-[#666666] mb-[11px]"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="password_confirmation"
                  name="password_confirmation"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.password_confirmation}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-xl outline-none transition-colors focus:border-[#F39C12] focus:ring-1 focus:ring-[#F39C12]"
                  required
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  disabled={loading}
                >
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {showConfirmPassword ? (
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

            {/* Password mismatch warning */}
            {formData.password &&
              formData.password_confirmation &&
              formData.password !== formData.password_confirmation && (
                <p className="text-red-500 text-sm">Passwords do not match</p>
              )}

            <button
              type="submit"
              disabled={
                !formData.password ||
                !formData.password_confirmation ||
                formData.password !== formData.password_confirmation ||
                loading
              }
              className="w-full bg-[#042656] hover:bg-[#031a42] disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : (
                "Continue"
              )}
            </button>
          </form>
        </div>

        {/* Right: Dashboard Preview */}
        <div className="hidden lg:flex lg:pr-10">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466560/Sign_up_now_nkulhu.png"
            alt="Belyfted dashboard preview"
            width={500}
            height={500}
            className="w-[607px] h-[740px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordRequest;
