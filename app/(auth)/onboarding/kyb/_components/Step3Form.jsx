"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import AddDirectorModal from "./_modals/AddDirectorModal";
import { useKybStep3 } from "../_hooks/useKybStep3";

function Step3Form({ onNext, onPrev }) {
  const {
    directors,
    loading,
    error: hookError,
    isModalOpen,
    openAddDirector,
    openEditDirector,
    closeModal,
    saveDirector,
    deleteDirector,
    initialDirectorData,
    submitDirectors,
    status,
  } = useKybStep3();

  // Auto-advance if session is already in a terminal state
  useEffect(() => {
    if (
      status &&
      ["SUBMITTED", "APPROVED", "UNDER_REVIEW"].includes(
        status?.toUpperCase(),
      ) &&
      onNext
    ) {
      onNext();
    }
  }, [status, onNext]);

  const [error, setError] = useState(null);

  // Clear error when directors change
  React.useEffect(() => {
    if (directors.length > 0 && error) setError(null);
  }, [directors, error]);

  const handleBack = () => {
    if (onPrev) onPrev();
  };

  const handleContinue = async () => {
    if (directors.length === 0) {
      setError("Please add at least one director before continuing.");
      return;
    }
    const ok = await submitDirectors();
    if (ok && onNext) onNext();
  };

  return (
    <div className="z-50 flex items-center justify-center p-4">
      <div className="lg:w-[701px] w-full z-50">
        {/* Background pattern */}
        <div className="relative">
          {/* Main form container */}
          <div className="relative bg-white rounded-3xl border border-[#04265642] overflow-hidden">
            {/* Progress indicator */}
            <div className="px-8 pt-6">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-[#062755] rounded-full"></div>
                  <div className="w-12 h-px bg-[#062755]"></div>
                  <div className="w-3 h-3 bg-[#062755] rounded-full"></div>
                  <div className="w-12 h-px bg-gray-300"></div>
                  <div className="w-3 h-3 bg-[#062755] rounded-full"></div>
                  <div className="w-12 h-px bg-gray-300"></div>
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="px-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Business Ultimate Beneficiary Officer
                </h2>
                <p className="text-gray-600">Kindly input your details</p>
              </div>

              <div className="space-y-6">
                {/* Number of Directors */}
                <div>
                  <label className="block font-medium text-[#666666] mb-2">
                    No. of Directors
                  </label>
                  <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
                    {directors.length}
                  </div>
                </div>

                {/* Directors List */}
                {directors.map((director, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-[#EEF5FC] rounded-lg px-4 py-2 mb-2"
                  >
                    <span>
                      Director {idx + 1}: {director.first_name}{" "}
                      {director.last_name}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => openEditDirector(idx)}
                        title="Edit"
                      >
                        <svg
                          className="w-5 h-5 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a4 4 0 01-1.414.828l-4.243 1.414a1 1 0 01-1.263-1.263l1.414-4.243a4 4 0 01.828-1.414z"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => deleteDirector(idx)}
                        title="Delete"
                      >
                        <svg
                          className="w-5 h-5 text-red-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}

                {/* Add Director Button */}
                <button
                  onClick={openAddDirector}
                  className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium bg-[#EEF5FC] transition-colors duration-200 "
                >
                  <svg
                    className="w-5 h-5 mr-2 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  Add Director
                </button>

                {/* Error message */}
                {(error || hookError) && (
                  <div className="text-red-600 text-sm mt-2">
                    {error || hookError}
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 14.6698V9.32983C18 6.00983 15.65 4.65983 12.78 6.30983L11.5 7.04983C11.19 7.22983 11 7.55983 11 7.91983V16.0798C11 16.4398 11.19 16.7698 11.5 16.9498L12.78 17.6898C15.65 19.3398 18 17.9898 18 14.6698Z"
                        fill="#062755"
                      />
                      <path
                        opacity="0.4"
                        d="M10 15.2104V8.78043C10 8.39043 9.58 8.15043 9.25 8.35043L8.15 8.99043C5.28 10.6404 5.28 13.3604 8.15 15.0104L9.25 15.6504C9.58 15.8404 10 15.6004 10 15.2104Z"
                        fill="#062755"
                      />
                    </svg>
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleContinue}
                    disabled={loading}
                    className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60"
                  >
                    {loading ? "Saving..." : "Continue"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddDirectorModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={saveDirector}
        initialData={initialDirectorData}
      />
    </div>
  );
}

export default Step3Form;
