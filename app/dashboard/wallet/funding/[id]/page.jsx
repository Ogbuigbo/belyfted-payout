import React from "react";
import Link from "next/link";

export default function FundingDetailsPage({ params }) {
  // For now, use static mock data
  const details = {
    currency: "USD",
    amountCharged: "$5,000",
    fee: "$5,000",
    amountDue: "$5,000",
    reference: "jhsdjhkdjs47484",
    date: "24th May, 2024",
    fundingMethod: "Transfer",
    senderName: "Adetunji John",
    status: "Success",
  };

  return (
    <div className="">
      <div className="mb-4 flex items-center gap-1">
        <Link href="/dashboard/wallet">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5002 12.8008L14.2002 18.4008C14.6002 18.8008 15.2002 18.8008 15.6002 18.4008C16.0002 18.0008 16.0002 17.4008 15.6002 17.0008L10.7002 12.0008L15.6002 7.00078C16.0002 6.60078 16.0002 6.00078 15.6002 5.60078C15.4002 5.40078 15.2002 5.30078 14.9002 5.30078C14.6002 5.30078 14.4002 5.40078 14.2002 5.60078L8.5002 11.2008C8.1002 11.7008 8.1002 12.3008 8.5002 12.8008C8.5002 12.7008 8.5002 12.7008 8.5002 12.8008Z"
              fill="#334335"
            />
            <path
              d="M8.5002 12.8008L14.2002 18.4008C14.6002 18.8008 15.2002 18.8008 15.6002 18.4008C16.0002 18.0008 16.0002 17.4008 15.6002 17.0008L10.7002 12.0008L15.6002 7.00078C16.0002 6.60078 16.0002 6.00078 15.6002 5.60078C15.4002 5.40078 15.2002 5.30078 14.9002 5.30078C14.6002 5.30078 14.4002 5.40078 14.2002 5.60078L8.5002 11.2008C8.1002 11.7008 8.1002 12.3008 8.5002 12.8008C8.5002 12.7008 8.5002 12.7008 8.5002 12.8008Z"
              fill="white"
              fill-opacity="0.3"
            />
          </svg>
        </Link>
        <span className="text-[#334335] text-sm cursor-pointer">Back</span>
      </div>
      <h1 className="text-2xl text-[#4D4D4D] mb-[22px]">
        Balance Funding History
      </h1>

      <div className="bg-white rounded-xl border border-[#E6E9EE] p-4 max-w-full">
        <h2 className=" mb-4">Transaction Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-8 text-xs mb-6">
          <div>
            <div>Currency</div>
            <div className="font-semibold">{details.currency}</div>
          </div>
          <div>
            <div>Amount Charged</div>
            <div className="font-semibold">{details.amountCharged}</div>
          </div>
          <div>
            <div>Fee</div>
            <div className="font-semibold">{details.fee}</div>
          </div>
          <div>
            <div>Amount Due</div>
            <div className="font-semibold">{details.amountDue}</div>
          </div>
          <div>
            <div>Reference</div>
            <div className="font-semibold">{details.reference}</div>
          </div>
          <div>
            <div>Date Initiated</div>
            <div className="font-semibold">{details.date}</div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6 gap-x-8 text-xs">
          <div>
            <div>Funding Method</div>
            <div className="font-semibold">{details.fundingMethod}</div>
          </div>
          <div>
            <div>Sender Name</div>
            <div className="font-semibold">{details.senderName}</div>
          </div>
          <div>
            <div>Status</div>
            <div className="font-semibold text-green-600">{details.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
