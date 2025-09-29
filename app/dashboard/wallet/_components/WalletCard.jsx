import React, { useMemo } from "react";
import { getCurrencySymbol, safeFormatAmount } from "../../../lib/currencyUtils";
import { useRouter } from "next/navigation";


const WalletCard = React.memo(({ wallets = [] }) => {
  const router = useRouter();
  const memoizedWallets = useMemo(() => wallets, [wallets]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {memoizedWallets.map((wallet, idx) => (
        <div
          key={idx}
          className="rounded-[15px] border border-[#D9D9D9] bg-white p-3 flex flex-col md:min-w-[269px] md:max-w-xs shadow-sm cursor-pointer hover:shadow-md transition-shadow"
          onClick={() => router.push(`/dashboard/wallet/${wallet.uuid}`)}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#777779]">Available balance</span>
            {wallet?.flag ? (
              <img src={wallet.flag} alt="flag" className="w-[19px] h-[19px]" />
            ) : (
              <span className="w-[19px] h-[19px] inline-block bg-[#E6E9EE] rounded" />
            )}
          </div>
          <div className="flex items-end mb-2">
            <span className="text-[28px] font-medium text-[#042656]">
              {getCurrencySymbol(wallet?.currency)}
              {safeFormatAmount(wallet?.available ?? wallet?.available_balance ?? 0)}
            </span>
          </div>
          <hr />
          <div className="py-2">
            <div className="text-xs mb-1">
              Ledger Balance :{" "}
              <span className=" text-[#2B2259]">
                {getCurrencySymbol(wallet?.currency)}
                {safeFormatAmount(wallet?.ledger ?? wallet?.ledger_balance ?? 0)}
              </span>
            </div>
            <div className="text-xs mb-1">
              Locked Balance :{" "}
              <span className="text-[#2B2259]">
                {getCurrencySymbol(wallet?.currency)}
                {safeFormatAmount(wallet?.locked ?? wallet?.locked_balance ?? 0)}
              </span>
            </div>
          </div>
          <hr />
          <div className="flex items-center justify-between mt-2 text-xs text-[#2B2350]">
            <span>
              Balance ID :{" "}
              <span className="font-bold text-[#042656] underline">
                {wallet?.id || wallet?.uuid || "N/A"}
              </span>
            </span>
            <svg
              width="12"
              height="13"
              viewBox="0 0 12 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.21484 3.46484L10.2498 6.49984L7.21484 9.53484"
                stroke="#042656"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.50488 6.5H10.1649"
                stroke="#042656"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.75 6.5H3.485"
                stroke="#042656"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
});


export default WalletCard;
