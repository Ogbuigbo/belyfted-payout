"use client";

import React from "react";
import { useRouter } from "next/navigation";

function TransactionDetailsPage() {
  const router = useRouter();

  return (
    <div className="">
      <div className="">
         {/* Back Button */}
      <div className="mb-2">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border text-sm border-[#062755] text-gray-700 font-medium"
          onClick={() => router.push("/dashboard/inbound/history")}
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
      </div>
        {/* Page Title */}
        <h1 className="text-2xl font-semibold py-4 text-[#303032]">
          Transaction Overview
        </h1>

        {/* Transaction Status Section */}
        <div className="bg-white rounded-lg ">
          <div className="border-b p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 text-xs gap-6">
              <div>
                <h3 className=" font-medium text-[#777779] mb-2">
                  Date Initiated
                </h3>
                <p className=" text-[#303032] font-semibold">
                  27/03/2025, 17:59:24
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Transaction Status
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Successful
                </span>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Payment method
                </h3>
                <p className="text-[#303032] font-semibold">Bank Transfer</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Require Approval
                </h3>
                <p className="text-[#303032] font-semibold">False</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Approval Status
                </h3>
                <p className="text-[#303032] font-semibold">Approved</p>
              </div>
            </div>
          </div>

          {/* Amount & Currency Details */}
          <div className="border-b p-6">
            <h2 className="text-sm font-medium text-[#303032] mb-4">
              Amount & Currency Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Amount Paid (Source)
                </h3>
                <p className="text-[#303032] font-semibold">NGN 500.00</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Source Currency
                </h3>
                <p className="text-[#303032] font-semibold">NGN</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Amount Paid (Destination)
                </h3>
                <p className="text-[#303032] font-semibold">NGN 500.00</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Destination Currency
                </h3>
                <p className="text-[#303032] font-semibold">NGN</p>
              </div>
            </div>
          </div>

          {/* Account & Reference Information */}
          <div className="border-b p-6">
            <h2 className="text-sm font-medium text-[#303032] mb-4">
              Account & Reference Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Virtual Account Name
                </h3>
                <p className="text-[#303032] font-semibold">
                  Belyfted Checkout
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Virtual Account Number
                </h3>
                <p className="text-[#303032] font-semibold">3242720975</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Transaction Ref
                </h3>
                <p className="text-[#303032] font-semibold">fcr-p-b52e04bb06</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Merchant Ref
                </h3>
                <p className="text-[#303032] font-semibold">fcr-p-b52e04bb06</p>
              </div>
            </div>
          </div>

          {/* Fees & Charges */}
          <div className="border-b p-6">
            <h2 className="text-sm font-medium text-[#303032] mb-4">
              Fees & Charges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
              <div>
                <h3 className="font-medium text-[#777779] mb-2">Total Fee</h3>
                <p className="text-[#303032] font-semibold">NGN 8.52</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">Fee Charged</h3>
                <p className="text-[#303032] font-semibold">NGN 7.52</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">VAT</h3>
                <p className="text-[#303032] font-semibold">NGN 1.00</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Electronic Money Transfer Levy
                </h3>
                <p className="text-[#303032] font-semibold">N/A</p>
              </div>
            </div>
          </div>

          {/* Settlement Details */}
          <div className="bg-white rounded-lg border-b p-6 mb-6">
            <h2 className="text-sm font-medium text-[#303032] mb-4">
              Settlement Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs">
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Settlement Date
                </h3>
                <p className="text-[#303032] font-semibold">
                  27/03/2025, 18:00:03
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Settlement Time
                </h3>
                <p className="text-[#303032] font-semibold">-</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Settlement Destination
                </h3>
                <p className="text-[#303032] font-semibold">Wallet</p>
              </div>
              <div>
                <h3 className="font-medium text-[#777779] mb-2">
                  Settlement Batch Reference
                </h3>
                <p className="text-[#303032] font-semibold">Reference</p>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Information */}
        <h2 className="text-md font-semibold text-[#303032] mb-4">
          Customer Information
        </h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex gap-16 text-xs">
            <div>
              <h3 className="font-medium text-[#777779] mb-2">Name</h3>
              <p className="text-[#303032] font-semibold">John Doe</p>
            </div>
            <div>
              <h3 className="font-medium text-[#777779] mb-2">Email Address</h3>
              <p className="text-[#303032] font-semibold">
                John_Doe_@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Reversal Information */}
        <h2 className="text-md font-semibold text-[#303032] mb-4">
          Reversal Information
        </h2>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-xs">
            <div>
              <h3 className="font-medium text-[#777779] mb-2">Refund Type</h3>
              <p className="text-[#303032] font-semibold">Fixed</p>
            </div>
            <div>
              <h3 className="font-medium text-[#777779] mb-2">
                Expected Amount
              </h3>
              <p className="text-[#303032] font-semibold">NGN 00.00</p>
            </div>
            <div>
              <h3 className="font-medium text-[#777779] mb-2">
                Amount Received
              </h3>
              <p className="text-[#303032] font-semibold">NGN 00.00</p>
            </div>
            <div>
              <h3 className="font-medium text-[#777779] mb-2">
                Amount To Be Received
              </h3>
              <p className="text-[#303032] font-semibold">NGN 00.00</p>
            </div>
            <div>
              <h3 className="font-medium text-[#777779] mb-2">Refund Status</h3>
              <p className="text-[#303032] font-semibold">Not Initiated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDetailsPage;
