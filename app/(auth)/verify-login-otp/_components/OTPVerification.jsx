import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LoadingSpinner from '../../../_components/LoadingSpinner';

const OTPVerification = ({ 
  otp, 
  loading, 
  error, 
  resendLoading, 
  countdown, 
  onOtpChange, 
  onSubmit, 
  onResendOTP,
  onBackToLogin 
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center xl:p-8 lg:py-8 p-4">
      <div className="bg-white rounded-2xl flex justify-between w-full overflow-hidden">
        {/* Left: OTP Verification Form */}
        <div className="w-full lg:max-w-[553px]  md:px-8 xl:px-12">
          {/* Logo and Header */}
          <div className=" flex flex-col items-center justify-center lg:justify-start lg:items-start">
            <div className="flex items-center ">
              <Link href="/">
                <Image
                  src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466560/Frame_5_1_lzqhla.png"
                  alt="logo"
                  width={80}
                  height={63}
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-[32px] font-bold text-[#042656] mt-[85px]">
              Enter OTP
            </h2>
            <p className="text-[#666666] mt-3">
              Enter the 6 digit code sent to your email to complete verification
            </p>
            </div>

          {/* Show errors */}
          {error && (
            <div className="mb-4 text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-6 mt-[41px]">
            {/* OTP Input */}
            <div>
              <div className="flex gap-4 justify-center">
                {[0, 1, 2, 3, 4, 5].map((index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={otp[index] || ''}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 1) {
                        const newOtp = otp.split('');
                        newOtp[index] = value;
                        const updatedOtp = newOtp.join('');
                        onOtpChange({ target: { value: updatedOtp } });
                      }
                    }}
                    className="w-[64px] h-[64px] text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none  focus:ring-[#042656] focus:border-[#042656]"
                    autoComplete="one-time-code"
                  />
                ))}
              </div>
            </div>

            {/* Resend Code */}
            <div className="text-center">
              <button
                type="button"
                onClick={onResendOTP}
                disabled={countdown > 0 || resendLoading}
                className="text-sm text-[#042656] hover:text-[#031c40] disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                {resendLoading ? (
                  "Sending..."
                ) : countdown > 0 ? (
                  `Resend Code in ${countdown}s`
                ) : (
                  "Resend Code"
                )}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || otp.length !== 6}
              className="w-full bg-[#042656] hover:bg-[#031c40] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <LoadingSpinner size="small" showText={false} />
                  <span className="ml-2">Verifying...</span>
                </div>
              ) : (
                "Confirm and Proceed"
              )}
            </button>
          </form>

          {/* Back to Login */}
          <div className="mt-6 text-center">
            <button
              onClick={onBackToLogin}
              className="text-sm text-[#042656] hover:text-[#031c40]"
            >
              Back to login
            </button>
          </div>
        </div>

        {/* Right: Dashboard Preview */}
        <div className="hidden lg:flex lg:pr-10">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466488/Sign_up_now_nkulhu.png"
            alt="Belyfted Dashboard Preview"
            width={500}
            height={500}
            className="w-[607px] h-[740px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;