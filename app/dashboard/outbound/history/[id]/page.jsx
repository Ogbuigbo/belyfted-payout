"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function HistoryDetailsPage() {
  const router = useRouter();

  // Mock data matching the image
  const accountData = {
    dateRequested: "27/03/2025, 17:59:24",
    dateIssued: "27/03/2025, 17:59:24",
    lastUsed: "27/03/2025, 17:59:24",
    approvalStatus: "Successful",
    accountInfo: {
      accountName: "Belyfted Limited",
      accountNumber: "7946361384",
      bankName: "Wema",
      accountStatus: "Active",
      approvalStatus: "Successful",
    },
    fundingInfo: {
      accountNumber: "7946361384",
      accountName: "Belyfted Limited",
      accountHolderName: "Belyfted Limited",
      bankName: "Wema",
      bankCode: "035",
    },
  };

  return (
    <div className="min-h-screen md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border text-sm border-[#062755] text-gray-700 font-medium mb-6"
          onClick={() => router.back()}
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

        {/* Page Title */}
        <h1 className="md:text-2xl text-lg font-semibold text-gray-900 mb-8">
          History Details
        </h1>

        {/* Main Content */}
        <div className="space-y-6  rounded-xl">
          {/* Top Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 text-xs gap-6 px-6 pt-6">
            <div className="">
              <div className="text-gray-500 mb-2 font-medium">
                Date Requested
              </div>
              <div className="font-semibold text-black">
                {accountData.dateRequested}
              </div>
            </div>
            <div className="">
              <div className="text-gray-500 mb-2 font-medium">Date Issued</div>
              <div className="font-semibold text-black">
                {accountData.dateIssued}
              </div>
            </div>
            <div className="">
              <div className="text-gray-500 mb-2 font-medium">Last Used</div>
              <div className="font-semibold text-black">
                {accountData.lastUsed}
              </div>
            </div>
            <div className="">
              <div className="text-gray-500 mb-2 font-medium">
                Approval Status
              </div>
              <div className="font-semibold text-black">
                {accountData.approvalStatus}
              </div>
            </div>
          </div>

          <hr />
          {/* Account Information & Status */}
          <div className=" rounded-lg px-6">
            <h2 className="text-sm font-medium text-[#303032] mb-6">
              Account Information & Status
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-xs">
              <div>
                <div className="text-gray-500 mb-2 font-medium">
                  Account Name
                </div>
                <div className="font-semibold text-black">
                  {accountData.accountInfo.accountName}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-2 font-medium">
                  Account Number
                </div>
                <div className="font-semibold text-black">
                  {accountData.accountInfo.accountNumber}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-2 font-medium">Bank Name</div>
                <div className="font-semibold text-black">
                  {accountData.accountInfo.bankName}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-2 font-medium">
                  Account Status
                </div>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                  {accountData.accountInfo.accountStatus}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-2 font-medium">
                  Approval Status
                </div>
                <div className="font-semibold text-black">
                  {accountData.accountInfo.approvalStatus}
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* Funding Information */}
          <div className=" rounded-lg px-6 pb-6">
            <h2 className="text-sm font-medium text-[#303032] mb-2">
              Funding Information
            </h2>
            <p className="text-gray-500 text-xs mb-6">
              To fund the virtual account via bank transfer, use these details:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-xs">
              <div>
                <div className="text-gray-500 mb-2 font-medium">
                  Account Number
                </div>
                <div className="font-semibold text-black">
                  {accountData.fundingInfo.accountNumber}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-2 font-medium">
                  Account Name
                </div>
                <div className="font-semibold text-black">
                  {accountData.fundingInfo.accountName}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-2 font-medium">
                  Account Holder Name
                </div>
                <div className="font-semibold text-black">
                  {accountData.fundingInfo.accountHolderName}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-2 font-medium">Bank Name</div>
                <div className="font-semibold text-black">
                  {accountData.fundingInfo.bankName}
                </div>
              </div>
              <div>
                <div className="text-gray-500 mb-2 font-medium">Bank Code</div>
                <div className="font-semibold text-black">
                  {accountData.fundingInfo.bankCode}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
