import React from "react";

const DeleteBeneficiaryModal = ({ isOpen, onCancel, onConfirm, loading, beneficiaryName }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 p-2 sm:p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[541px] p-4 sm:p-8 flex flex-col items-center">
        <div className="flex flex-col items-center mb-4 sm:mb-6">
          
          <div className="text-base sm:text-lg font-medium text-gray-900 my-4 sm:my-6 text-center">
            You are about to delete this beneficiary
          </div>
          {beneficiaryName && (
            <div className="text-sm text-gray-600 text-center mb-2">
              <strong>{beneficiaryName}</strong>
            </div>
          )}
         
        </div>
        <div className="flex w-full gap-3 sm:gap-4 mt-2 sm:mt-4">
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
            className="flex-1 bg-[#BF0000] text-white rounded-lg py-3 sm:py-4 font-medium hover:bg-red-700 transition disabled:opacity-60"
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
                Deleting...
              </span>
            ) : (
              "Delete Beneficiary"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBeneficiaryModal;
