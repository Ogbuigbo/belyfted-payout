"use client";

import Image from "next/image";
import React from "react";
import useLogout from "../../../_hooks/useLogout";

function OnboardSuccess() {
  const { logout, loading } = useLogout();

  return (
    <div className="z-50 flex items-center justify-center p-4">
      <div className="lg:w-[701px] w-full z-50">
        {/* Background pattern */}
        <div className="relative p-10">
          {/* Main form container */}
          <div className="relative bg-white rounded-3xl border border-[#04265642] overflow-hidden md:p-10 px-16 py-10  md:py-20">
            {/* Success Icon */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Onboarding Successful!!
            </h1>
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <svg
                width="141"
                height="141"
                viewBox="0 0 141 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="141" height="141" rx="70.5" fill="#D1F2DE" />
                <path
                  d="M84.3744 61.2513L65.8744 79.7513L58.166 72.043M101.333 70.5013C101.333 87.5301 87.5281 101.335 70.4994 101.335C53.4706 101.335 39.666 87.5301 39.666 70.5013C39.666 53.4725 53.4706 39.668 70.4994 39.668C87.5281 39.668 101.333 53.4725 101.333 70.5013Z"
                  stroke="#22C55E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={logout}
                disabled={loading}
                className="w-full bg-primary hover:bg-blue-700 cursor-pointer text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-60"
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
                    Logging out...
                  </span>
                ) : (
                  "Proceed to Login"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardSuccess;
