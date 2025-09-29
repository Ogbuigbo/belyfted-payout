"use client";

import React, { useState, useEffect } from "react";

function OTPModal({ isOpen, onClose, onVerify, onResend, userEmail, loading, modalType = 'enable' }) {
  const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(55);
  const [isCountingDown, setIsCountingDown] = useState(false);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setOtpCode(["", "", "", "", "", ""]);
      setCountdown(55);
      setIsCountingDown(true);
    }
  }, [isOpen]);

  // Handle countdown timer
  useEffect(() => {
    let interval;
    if (isCountingDown && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsCountingDown(false);
    }
    return () => clearInterval(interval);
  }, [isCountingDown, countdown]);

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit

    const newOtp = [...otpCode];
    newOtp[index] = value;
    setOtpCode(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace to go to previous input
    if (e.key === "Backspace" && !otpCode[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = () => {
    const enteredCode = otpCode.join("");
    if (enteredCode.length === 6) {
      onVerify(enteredCode);
    }
  };

  const handleResendCode = async () => {
    if (onResend) {
      await onResend();
    }
    setCountdown(55);
    setIsCountingDown(true);
    setOtpCode(["", "", "", "", "", ""]);
  };

  const handleClose = () => {
    setOtpCode(["", "", "", "", "", ""]);
    setIsCountingDown(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl p-8 max-w-[591px] w-full mx-4 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        
        <div className="w-full max-w-[381px] mx-auto">
          <h2 className="text-2xl font-bold text-[#303032] mb-2">
            {modalType === 'enable' ? 'Enable 2FA' : 'Disable 2FA'}
          </h2>
          <p className="text-sm text-[#777779] mb-8">
            Enter your 6-digit OTP sent to
            <br />
            {userEmail ? userEmail.replace(/(.{2}).*(@.*)/, '$1****$2') : 'your email'}
            <br />
            <span className={`text-xs mt-2 block ${modalType === 'enable' ? 'text-[#777779]' : 'text-red-600 font-medium'}`}>
              {modalType === 'enable' 
                ? 'This will enable two-factor authentication on your account' 
                : '⚠️ This will disable two-factor authentication and reduce your account security'
              }
            </span>
          </p>

          <div className="flex justify-center space-x-3 mb-6">
            {otpCode.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-200 rounded-lg focus:border-[#042656] focus:outline-none transition-colors"
                placeholder=""
              />
            ))}
          </div>

          <div className="text-sm text-center text-[#777779] mb-8">
            {isCountingDown ? (
              <span>
                Resend Code in 00:{countdown.toString().padStart(2, "0")}
              </span>
            ) : (
              <button
                onClick={handleResendCode}
                className="text-[#042656] hover:underline font-medium"
              >
                Resend Code
              </button>
            )}
          </div>

          <div className="space-y-3">
            <button
              onClick={handleVerify}
              disabled={otpCode.join("").length !== 6 || loading}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors disabled:cursor-not-allowed ${
                modalType === 'enable' 
                  ? 'bg-[#042656] text-white hover:bg-[#033549] disabled:bg-gray-300' 
                  : 'bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-300'
              }`}
            >
              {loading ? "Verifying..." : modalType === 'enable' ? "Enable 2FA" : "Disable 2FA"}
            </button>

            {/* <button
              onClick={handleClose}
              className="w-full bg-gray-100 text-[#303032] py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTPModal;
