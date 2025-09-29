"use client";

import React, { useEffect } from "react";
import AddDocumentModal from "./_modals/AddDocumentModal";
import { useKybStep4 } from "../_hooks/useKybStep4";

function Step4Form({ onNext, onPrev, documents, setDocuments }) {
  const {
    loading,
    error,
    isModalOpen,
    openModal,
    closeModal,
    saveDocuments,
    submitDocuments,
    status,
  } = useKybStep4({ documents, setDocuments });

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

  const handleBack = () => {
    if (onPrev) onPrev();
  };

  const handleContinue = async () => {
    const result = await submitDocuments();
    if ((result === true || result === "under_review") && onNext) {
      onNext();
    }
  };

  const documentFileNames = Object.values(documents)
    .filter(Boolean)
    .map((file) => file.name);

  return (
    <div className="z-50 flex items-center justify-center p-4">
      <div className="lg:w-[701px] w-full z-50">
        <div className="relative">
          <div className="relative bg-white rounded-3xl border border-[#04265642] overflow-hidden">
            <div className="px-8 pt-6">
              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-[#062755] rounded-full"></div>
                  <div className="w-12 h-px bg-[#062755]"></div>
                  <div className="w-3 h-3 bg-[#062755] rounded-full"></div>
                  <div className="w-12 h-px bg-[#062755]"></div>
                  <div className="w-3 h-3 bg-[#062755] rounded-full"></div>
                  <div className="w-12 h-px bg-[#062755]"></div>
                  <div className="w-3 h-3 bg-[#062755] rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="px-8 pb-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Business Official Document
                </h2>
                <p className="text-gray-600">Kindly upload your documents</p>
              </div>

              <div className="space-y-6">
                {documentFileNames.length > 0 && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-gray-700 mb-2">
                      Uploaded Documents:
                    </h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {documentFileNames.map((name, index) => (
                        <li key={index}>{name}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <button
                  onClick={openModal}
                  className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium bg-[#EEF5FC] hover:bg-blue-100 transition-colors duration-200 text-sm"
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
                  {documentFileNames.length > 0
                    ? "Add or Edit Documents"
                    : "Add Document"}
                </button>

                <div className="flex gap-4 pt-6">
                  <button
                    onClick={handleBack}
                    className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2"
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
                    onClick={handleContinue}
                    disabled={loading}
                    className="flex-1 bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-60"
                  >
                    {loading ? "Submitting..." : "Continue"}
                  </button>
                </div>
                {error && (
                  <div className="text-red-600 text-sm mt-2">{error}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddDocumentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={saveDocuments}
      />
    </div>
  );
}

export default Step4Form;
