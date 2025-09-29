"use client";

import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

function KycStatusPage() {
  const router = useRouter();
  const [directors, setDirectors] = useState([
    { id: 1, name: "Director 1", status: "Approved" },
    { id: 2, name: "Director 2", status: "Approved" },
    { id: 3, name: "Director 3", status: "Pending" },
    { id: 4, name: "Director 4", status: "Under review" },
  ]);

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-[#E6F2E6] text-[#004E00]";
      case "Pending":
        return "bg-[#FFF6E6] text-[#FFA500]";
      case "Under review":
        return "bg-[#C8C6C9] text-[#303032]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIconColor = (status) => {
    switch (status) {
      case "Approved":
        return "#004E00";
      case "Pending":
        return "#FFA500";
      case "Under review":
        return "#303032";
      default:
        return "#6B7280";
    }
  };

  const handleVerify = (directorId) => {
    console.log(`Verify director ${directorId}`);
    setOpenDropdown(null);
  };

  const handleUploadDocument = (directorId) => {
    console.log(`Upload document for director ${directorId}`);
    // Trigger file input
    fileInputRef.current?.click();
    setOpenDropdown(null);
  };

  const handleFileChange = (event, directorId) => {
    const file = event.target.files[0];
    if (file) {
      console.log(`File selected for director ${directorId}:`, file.name);
      // Handle file upload logic here
    }
  };

  const toggleDropdown = (directorId) => {
    setOpenDropdown(openDropdown === directorId ? null : directorId);
  };

  return (
    <div className=" max-w-4xl">
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e, openDropdown)}
        className="hidden"
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
      />

      {/* Back Button */}
      <button
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border text-sm border-[#062755] text-gray-700 font-medium mb-6"
        onClick={() => router.push("/dashboard")}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 14.6708V9.33081C18 6.01081 15.65 4.66081 12.78 6.31081L11.5 7.05081C11.19 7.23081 11 7.56081 11 7.92081V16.0808C11 16.4408 11.19 16.7708 11.5 16.9508L12.78 17.6908C15.65 19.3408 18 17.9908 18 14.6708Z"
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

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-3">Status</h1>
        <p className="text-[#8E98A8] font-medium">
          Check status of directors and continue verification
        </p>
      </div>

      {/* Directors List */}
      <div className="bg-white rounded-[20px] max-w-[968px]  md:p-[30px] p-4">
        {directors.map((director, index) => (
          <div
            key={director.id}
            className={`flex items-center justify-between py-3 px-4 bg-gray-50 rounded-[20px] mb-[18px] ${
              index !== directors.length - 1 ? " border-gray-200 " : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-sm">{director.name}</span>
            </div>

            <div className="flex items-center gap-3 relative">
              {/* Status Badge with Dropdown for Pending and Under Review */}
              {director.status === "Pending" ||
              director.status === "Under review" ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => toggleDropdown(director.id)}
                    className={`px-3 py-1 rounded-full text-sm  flex items-center gap-2 ${getStatusColor(
                      director.status,
                    )}`}
                  >
                    {director.status}
                    <svg
                      width="12"
                      height="6"
                      viewBox="0 0 12 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`transition-transform ${
                        openDropdown === director.id ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M6.3169 5.79202L10.9632 0.915647C11.0407 0.834282 11.084 0.726183 11.084 0.613771C11.084 0.501359 11.0407 0.393262 10.9632 0.311897L10.9579 0.306646C10.9203 0.267066 10.875 0.235549 10.8249 0.214012C10.7747 0.192475 10.7207 0.181368 10.6661 0.181368C10.6115 0.181368 10.5575 0.192475 10.5073 0.214012C10.4571 0.235549 10.4119 0.267066 10.3743 0.306646L5.99928 4.89865L1.62603 0.306646C1.58842 0.267066 1.54316 0.235549 1.493 0.214012C1.44283 0.192475 1.38881 0.181368 1.33421 0.181368C1.27962 0.181368 1.2256 0.192475 1.17543 0.214012C1.12526 0.235549 1.08 0.267066 1.0424 0.306646L1.03715 0.311897C0.959586 0.393262 0.916317 0.501359 0.916317 0.613771C0.916317 0.726183 0.959586 0.834282 1.03715 0.915647L5.6834 5.79202C5.72426 5.83491 5.7734 5.86905 5.82785 5.89238C5.8823 5.91571 5.94092 5.92773 6.00015 5.92773C6.05939 5.92773 6.118 5.91571 6.17245 5.89238C6.2269 5.86905 6.27604 5.83491 6.3169 5.79202Z"
                        fill={getStatusIconColor(director.status)}
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  {openDropdown === director.id && (
                    <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      {director.status === "Pending" && (
                        <>
                          <button
                            onClick={() => handleVerify(director.id)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg"
                          >
                            Verify
                          </button>
                          <button
                            onClick={() => handleUploadDocument(director.id)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 last:rounded-b-lg"
                          >
                            Upload Document
                          </button>
                        </>
                      )}

                      {director.status === "Under review" && (
                        <>
                          <button
                            onClick={() => handleUploadDocument(director.id)}
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg"
                          >
                            Upload Document
                          </button>
                          <button
                            onClick={() =>
                              console.log(`View documents for ${director.id}`)
                            }
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            View Documents
                          </button>
                          <button
                            onClick={() =>
                              console.log(`Contact support for ${director.id}`)
                            }
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 last:rounded-b-lg"
                          >
                            Contact Support
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                /* Regular Status Badge for Approved */
                <span
                  className={`px-3 py-1 rounded-full text-sm  ${getStatusColor(
                    director.status,
                  )}`}
                >
                  {director.status}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KycStatusPage;
