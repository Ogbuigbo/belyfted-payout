"use client";

import React from "react";
import OTPVerification from "./_components/OTPVerification";
import { useOtpVerification } from "./_hooks/useOtpVerification";
import LoadingSpinner from "../../_components/LoadingSpinner";

export default function VerifyLoginOTP() {
  const {
    otp,
    loading,
    error,
    resendLoading,
    countdown,
    token,
    handleOtpChange,
    handleSubmit,
    handleResendOTP,
    handleBackToLogin
  } = useOtpVerification();

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" text="Redirecting..." />
      </div>
    );
  }

  return (
    <OTPVerification
      otp={otp}
      loading={loading}
      error={error}
      resendLoading={resendLoading}
      countdown={countdown}
      onOtpChange={handleOtpChange}
      onSubmit={handleSubmit}
      onResendOTP={handleResendOTP}
      onBackToLogin={handleBackToLogin}
    />
  );
}
