"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLogin } from "../_hooks/useLogin";
import Link from "next/link";

export default function LoginForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { formData, handleInputChange, handleSubmit, loading, error } =
    useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center xl:p-8 lg:py-8 p-4">
      <div className="bg-white rounded-2xl flex justify-between w-full overflow-hidden">
        {/* Left: Login Form */}
        <div className="w-full lg:max-w-[553px] lg:w-1/2 md:px-8 xl:px-12">
          {/* Logo and Header */}
          <div className="mb-8 flex flex-col items-center justify-center lg:justify-start lg:items-start">
            <div className="flex items-center mb-6">
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466560/Frame_5_1_lzqhla.png"
                  alt="logo"
                  width={80}
                  height={63}
                />
              </Link>
            </div>
            <h2 className="text-[32px] font-bold text-[#042656] mb-2">
              Welcome back
            </h2>
            <p>Sign in to your account</p>
          </div>

          {/* Show errors */}
          {error && (
            <div className="mb-4 text-red-600 text-sm">
              {Array.isArray(error)
                ? error.map((err, i) => <div key={i}>{err}</div>)
                : error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
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
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-xl outline-none transition-colors"
                placeholder="Enter your email"
              />
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
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-xl outline-none transition-colors pr-10"
                  placeholder="Enter your password"
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

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <a
                href="/password-reset"
                className="text-sm text-[#042656] hover:text-blue-700"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-4 text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>

        {/* Right: Dashboard Preview */}
        <div className="hidden lg:flex lg:pr-10">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1754674273/Sign_up_now_1_vlynum.png"
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
