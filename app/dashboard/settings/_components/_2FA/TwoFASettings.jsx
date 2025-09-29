"use client";

import React, { useState } from "react";
import OTPModal from "./OTPModal";
import { use2FA } from "../../_hooks/use2fa";

function TwoFASettings() {
  const [showModal, setShowModal] = useState(false);
  const [isEnabling, setIsEnabling] = useState(false);
  const [isDisabling, setIsDisabling] = useState(false);
  const [modalType, setModalType] = useState('enable'); // 'enable' or 'disable'
  
  const {
    isEnabled,
    loading,
    checkingStatus,
    error,
    userEmail,
    enable2FA,
    disable2FA,
    verifyOTP,
    verifyDisableOTP,
    resendOTP,
  } = use2FA();

  const handleToggle = async () => {
    if (!isEnabled) {
      // If enabling 2FA, call Enable 2FA API first
      setIsEnabling(true);
      setModalType('enable');
      const result = await enable2FA();
      if (result.success) {
        setShowModal(true);
      }
      setIsEnabling(false);
    } else {
      // If disabling, directly initiate disable process (no confirmation dialog)
      setIsDisabling(true);
      setModalType('disable');
      const result = await disable2FA();
      if (result.success) {
        setShowModal(true);
      }
      setIsDisabling(false);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setIsEnabling(false);
    setIsDisabling(false);
  };

  const handleOTPVerify = async (otpCode) => {
    let result;
    if (modalType === 'enable') {
      result = await verifyOTP(otpCode);
    } else {
      result = await verifyDisableOTP(otpCode);
    }
    
    if (result.success) {
      setShowModal(false);
      setIsEnabling(false);
      setIsDisabling(false);
    }
  };

  const handleResendOTP = async () => {
    await resendOTP();
  };

  return (
    <div className="bg-white flex items-center justify-center py-[42px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-[586px] w-full">
        <div className="mb-8">
          <h1 className="text-xl font-bold text-[#303032]">
            Two Factor Authentication
          </h1>
        </div>

        <div className="flex justify-between items-center mb-[17px]">
          <h2 className="text-sm font-medium">Two Way Authentication</h2>
          <button
            onClick={handleToggle}
            disabled={loading || checkingStatus || isEnabling}
            className={`relative inline-flex h-[19px] w-8 items-center rounded-full transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed ${
              isEnabled ? "bg-[#042656]" : "bg-gray-200"
            }`}
            role="switch"
            aria-checked={isEnabled}
            aria-labelledby="two-way-auth-label"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isEnabled ? "translate-x-[15px]" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Loading and Error States */}
        {checkingStatus && (
          <div className="mb-4 text-sm text-[#777779]">
            Checking 2FA status...
          </div>
        )}
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {loading && (
          <div className="mb-4 text-sm text-[#777779]">
            {isEnabling ? "Setting up 2FA..." : isDisabling ? "Initiating 2FA disable..." : "Processing..."}
          </div>
        )}

        <div className="text-xs text-[#777779] space-y-3">
          <p>
            Enabling Login Security OTP on your account significantly enhances
            security by adding an extra layer of protection. Here are a few key
            reasons to enable Login Security OTP:
          </p>

          <p>
            <span className="text-[#303032] font-bold">
              Increases Security:
            </span>{" "}
            Login Security OTP requires not only your password but also a second
            form of verification (like a 6-digit code sent to your email),
            making it much harder for unauthorized users to access your account.
          </p>

          <p>
            <span className="text-[#303032] font-bold">
              Protection Against Phishing:
            </span>{" "}
            Even if your password is compromised, the additional verification
            step can prevent attackers from gaining access.
          </p>

          <p>
            <span className="text-[#303032] font-bold">User Control:</span> It
            gives you more control over your account, allowing you to monitor
            and manage access effectively
          </p>
        </div>
      </div>

      <OTPModal
        isOpen={showModal}
        onClose={handleModalClose}
        onVerify={handleOTPVerify}
        onResend={handleResendOTP}
        userEmail={userEmail}
        loading={loading}
        modalType={modalType}
      />
    </div>
  );
}

export default TwoFASettings;
