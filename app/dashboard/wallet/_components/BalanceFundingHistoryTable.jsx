import React from "react";
import Link from "next/link";
import useFunding from "../_hooks/useFunding";
import EmptyState from "../../../_components/EmptyState";
import PageLoadingState from "../../../_components/PageLoadingState";

export default function BalanceFundingHistoryTable() {
  const { fundingLogs, loading, error } = useFunding();

  if (loading) {
    return (
      <PageLoadingState 
        title="Loading Funding History"
        description="Fetching your funding history data..."
      />
    );
  }

  if (fundingLogs.length === 0) {
    return (
      <EmptyState 
        title="No Funding History Found"
        description="You don't have any funding history yet. Your funding transactions will appear here."
      />
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white overflow-hidden">
        <thead>
          <tr className="bg-[#E6E9EE] text-[#0B0111] text-sm text-left">
            <th className="py-4 px-6 font-medium">Currency</th>
            <th className="py-4 px-6 font-medium">Date Initiated</th>
            <th className="py-4 px-6 font-medium">Amount</th>
            <th className="py-4 px-6 font-medium">Funding Method</th>
            <th className="py-4 px-6 font-medium">Status</th>
            <th className="py-4 px-6 font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="border border-[#D9D9D9] rounded-[15px]">
          {fundingLogs.map((row, idx) => (
            <tr key={row.id} className="border-b last:border-b-0 !text-sm">
              <td className="py-4 px-6 flex items-center gap-2">
                <img src={row.flag} alt="flag" className="w-[19px] h-[19px]" />
                <span className="font-medium text-[#2B2350]">
                  {row.currency}
                </span>
              </td>
              <td className="py-4 px-6 text-[#2B2350]">{row.date}</td>
              <td className="py-4 px-6 text-[#2B2350]">${row.amount}</td>
              <td className="py-4 px-6 text-[#2B2350]">{row.method}</td>
              <td className="py-4 px-6">
                <span className="bg-[#E6E9EE] text-[#042656]  px-[15px] py-[6px] rounded-[39px] font-medium text-xs">
                  {row.status}
                </span>
              </td>
              <td className="py-4 px-6">
                <Link href={`/dashboard/wallet/funding/${row.id}`}>
                  <button className="bg-[#042656] text-white  px-[15px] py-[6px] rounded-[39px] font-medium text-xs hover:bg-[#031c40] transition">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
