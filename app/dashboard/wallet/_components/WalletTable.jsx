"use client";

import React, { useMemo } from "react";
import { getCurrencySymbol, safeFormatAmount } from "../../../lib/currencyUtils";
import { useRouter } from "next/navigation";



const WalletTable = React.memo(({ wallets = [] }) => {
  const router = useRouter();
  const memoizedWallets = useMemo(() => wallets, [wallets]);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white overflow-hidden">
        <thead>
          <tr className="bg-[#E6E9EE] text-[#0B0111] text-sm text-left">
            <th className="py-4 px-6 font-medium">Currency</th>
            <th className="py-4 px-6 font-medium">Balance ID</th>
            <th className="py-4 px-6 font-medium">Available Balance</th>
            <th className="py-4 px-6 font-medium">Locked Balance</th>
            <th className="py-4 px-6 font-medium">Ledger Balance</th>
            <th className="py-4 px-6 font-medium"></th>
          </tr>
        </thead>
        <tbody className="border border-[#D9D9D9] rounded-[15px]">
          {memoizedWallets.map((wallet, idx) => (
            <tr key={idx} className="border-b last:border-b-0 !text-sm">
              <td className="py-4 px-6 flex items-center gap-2">
                {wallet?.flag ? (
                  <img
                    src={wallet.flag}
                    alt="flag"
                    className="w-[19px] h-[19px]"
                  />
                ) : (
                  <span className="w-[19px] h-[19px] inline-block bg-[#E6E9EE] rounded" />
                )}
                <span className="font-medium text-[#2B2350]">
                  {wallet.currency}
                </span>
              </td>
              <td className="py-4 px-6 text-[#2B2350]">{wallet.id}</td>
              <td className="py-4 px-6 text-[#2B2350]">
                {getCurrencySymbol(wallet?.currency)}
                {safeFormatAmount(wallet?.available ?? 0)}
              </td>
              <td className="py-4 px-6 text-[#2B2350]">
                {getCurrencySymbol(wallet?.currency)}
                {safeFormatAmount(wallet?.locked ?? 0)}
              </td>
              <td className="py-4 px-6 text-[#2B2350]">
                {getCurrencySymbol(wallet?.currency)}
                {safeFormatAmount(wallet?.ledger ?? 0)}
              </td>
              <td className="py-4 px-6">
                <button className="bg-[#E6E9EE] text-[#042656] px-[15px] py-[6px] rounded-[39px]  text-xs hover:bg-[#ecebfa] transition" onClick={() => router.push(`/dashboard/wallet/${wallet.uuid}`)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});


export default WalletTable;
