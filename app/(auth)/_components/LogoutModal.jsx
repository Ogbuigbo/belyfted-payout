import React from "react";

const LogoutModal = ({ isOpen, onCancel, onConfirm, loading }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-2 sm:p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[541px] p-4 sm:p-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#E6E9EE] mb-4">
            {/* Logout Icon SVG */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 75 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 sm:w-[75px] sm:h-[74px]"
            >
              <rect x="0.5" width="74" height="74" rx="37" fill="#042656" />
              <path
                d="M32.0762 29.2299C32.6187 22.9299 35.8562 20.3574 42.9437 20.3574H43.1712C50.9937 20.3574 54.1262 23.4899 54.1262 31.3124V42.7224C54.1262 50.5449 50.9937 53.6774 43.1712 53.6774H42.9437C35.9087 53.6774 32.6712 51.1399 32.0937 44.9449"
                stroke="#E6E9EE"
                strokeWidth="2.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M42.75 37H22.835"
                stroke="#E6E9EE"
                strokeWidth="2.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.7375 31.1387L20.875 37.0012L26.7375 42.8637"
                stroke="#E6E9EE"
                strokeWidth="2.625"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-base sm:text-lg font-medium text-gray-900 my-4 sm:my-6 text-center">
            You are about to logout from your account
          </div>
        </div>
        <div className="flex w-full  gap-3 sm:gap-4 mt-2 sm:mt-4">
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 border border-[#062755] text-[#062755] rounded-lg py-3 sm:py-4 font-medium transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 bg-[#062755] text-white rounded-lg py-3 sm:py-4 font-medium hover:bg-[#041d42] transition disabled:opacity-60"
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
              "Logout"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
