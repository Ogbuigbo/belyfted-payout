import React, { useState } from "react";

const AddDocumentModal = ({ isOpen, onClose, onSave }) => {
  const [documents, setDocuments] = useState({
    businessIncorporation: null,
    articlesOfMemorandum: null,
    sharesOfBusiness: null,
    proofOfAddress: null,
    proofOfId: null,
    otherDocuments: null,
  });

  const handleFileSelect = (documentType) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*,application/pdf,.doc,.docx";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setDocuments((prev) => ({
          ...prev,
          [documentType]: file,
        }));
      }
    };
    input.click();
  };

  const handleComplete = () => {
    onSave(documents);
    onClose();
  };

  const handleBack = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl w-full max-w-[701px] mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="text-center">
            <h2 className="text-[28px] font-semibold text-[#042656] mb-2">
              Add Documents 1
            </h2>
            <p className="text-gray-600 text-sm">
              Kindly upload your documents
            </p>
          </div>
        </div>

        {/* Document Upload Sections */}
        <div className="px-6 space-y-4">
          {/* Business Incorporation Certificate */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-[#666666] font-medium">
                Business Incorporation certificate
              </label>
              <span className="text-xs text-gray-400">1mb Max</span>
            </div>
            <button
              onClick={() => handleFileSelect("businessIncorporation")}
              className="w-full p-4 border-2 border-dashed border-[#B0B0B0] rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <p className="text-sm text-gray-600">
                {documents.businessIncorporation
                  ? documents.businessIncorporation.name
                  : "Click here to choose media from your gallery."}
              </p>
            </button>
          </div>

          {/* Articles of Memorandum */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-[#666666] font-medium">
                Articles of Memorandum
              </label>
              <span className="text-xs text-gray-400">1mb Max</span>
            </div>
            <button
              onClick={() => handleFileSelect("articlesOfMemorandum")}
              className="w-full p-4 border-2 border-dashed border-[#B0B0B0] rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <p className="text-sm text-gray-600">
                {documents.articlesOfMemorandum
                  ? documents.articlesOfMemorandum.name
                  : "Click here to choose media from your gallery."}
              </p>
            </button>
          </div>

          {/* Shares of the business */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-[#666666] font-medium">
                Shares of the business
              </label>
              <span className="text-xs text-gray-400">1mb Max</span>
            </div>
            <button
              onClick={() => handleFileSelect("sharesOfBusiness")}
              className="w-full p-4 border-2 border-dashed border-[#B0B0B0] rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <p className="text-sm text-gray-600">
                {documents.sharesOfBusiness
                  ? documents.sharesOfBusiness.name
                  : "Click here to choose media from your gallery."}
              </p>
            </button>
          </div>

          {/* Proof of Address */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-[#666666] font-medium">
                Proof of Address
              </label>
              <span className="text-xs text-gray-400">1mb Max</span>
            </div>
            <button
              onClick={() => handleFileSelect("proofOfAddress")}
              className="w-full p-4 border-2 border-dashed border-[#B0B0B0] rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <p className="text-sm text-gray-600">
                {documents.proofOfAddress
                  ? documents.proofOfAddress.name
                  : "Click here to choose media from your gallery."}
              </p>
            </button>
          </div>

          {/* Proof of ID */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-[#666666] font-medium">
                Proof of ID
              </label>
              <span className="text-xs text-gray-400">1mb Max</span>
            </div>
            <button
              onClick={() => handleFileSelect("proofOfId")}
              className="w-full p-4 border-2 border-dashed border-[#B0B0B0] rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <p className="text-sm text-gray-600">
                {documents.proofOfId
                  ? documents.proofOfId.name
                  : "Click here to choose media from your gallery."}
              </p>
            </button>
          </div>

          {/* Other Documents */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm text-[#666666] font-medium">
                Other Documents
              </label>
              <span className="text-xs text-gray-400">1mb Max</span>
            </div>
            <button
              onClick={() => handleFileSelect("otherDocuments")}
              className="w-full p-4 border-2 border-dashed border-[#B0B0B0] rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              <p className="text-sm text-gray-600">
                {documents.otherDocuments
                  ? documents.otherDocuments.name
                  : "Click here to choose media from your gallery."}
              </p>
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-6">
          <div className="flex gap-3">
            <button
              onClick={handleBack}
              className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              <svg
                width="20"
                height="20"
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
              onClick={handleComplete}
              className="flex-1 bg-primary hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Complete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDocumentModal;
