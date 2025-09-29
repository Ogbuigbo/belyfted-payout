"use client";

import React, { useState } from "react";
import WalletCard from "./WalletCard";
import WalletTable from "./WalletTable";
import BalanceFundingHistoryTable from "./BalanceFundingHistoryTable";
import Sidebar from "../../../_components/_sidebar/Sidebar";
import GenerateReport from "./GenerateReport";
import useWallets from "../_hooks/useWallets";
import EmptyState from "../../../_components/EmptyState";
import PageLoadingState from "../../../_components/PageLoadingState";
import CreateNewWallet from "./CreateNewWallet";
import TopupBalance from "./TopupBalance";

export default function Wallet() {
  const [viewType, setViewType] = useState("card");
  const [tab, setTab] = useState("balance");
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isCreateNewWalletOpen, setIsCreateNewWalletOpen] = useState(false);
  const [isTopUpBalanceOpen, setIsTopUpBalanceOpen] = useState(false);
  const { wallets, loading, error } = useWallets();

  return (
    <div className="flex-1">
      {/* Tabs */}
      <div className="flex flex-col-reverse md:flex-row justify-end md:justify-between md:items-center">
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setTab("balance")}
            className={`px-6 py-2 rounded-full text-xs font-medium ${tab === "balance" ? "bg-[#042656] text-white" : "bg-[#E6E9EE] text-[#042656]"}`}
          >
            Wallet
          </button>
          <button
            onClick={() => setTab("funding")}
            className={`px-6 py-2 rounded-full text-xs font-medium ${tab === "funding" ? "bg-[#042656] text-white" : "bg-[#E6E9EE] text-[#042656]"}`}
          >
            Balance funding history
          </button>
        </div>
        {/* Action Buttons - Show different buttons based on active tab */}
        <div className="flex justify-end mb-4">
          {tab === "balance" ? (
            <div className="flex gap-3">
              <button
                className="border border-[#042656] text-[#042656] px-6 py-2 rounded-full font-medium text-xs flex items-center gap-2"
                onClick={() => {
                  setIsCreateNewWalletOpen(true);
                }}
              >
                Create New Wallet
              </button>
              <button
                className="bg-[#042656] text-white px-6 py-2 rounded-full font-medium text-xs flex items-center gap-2"
                onClick={() => {
                  setIsTopUpBalanceOpen(true);
                }}
              >
                Top Up Balance
               
              </button>
            </div>
          ) : (
            <button
              className="border border-[#042656] text-[#042656] px-6 py-2 rounded-full font-medium text-xs flex items-center gap-2"
              onClick={() => setIsReportOpen(true)}
            >
              Generate Report
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M10.7939 2.08398L5.20703 2.08399C4.14272 2.08399 3.38328 2.39833 2.8916 2.89063C2.40017 3.38274 2.08696 4.14154 2.08984 5.20508L2.08984 10.7939C2.08984 11.8581 2.40477 12.6177 2.89746 13.1104C3.39015 13.603 4.14975 13.917 5.21387 13.917L10.7939 13.917C11.858 13.9169 12.6168 13.6025 13.1094 13.1094C13.602 12.6161 13.917 11.8551 13.917 10.7871L13.917 5.20703L13.9023 4.82227C13.8354 3.95735 13.5414 3.32169 13.1104 2.89063C12.6177 2.39798 11.858 2.08404 10.7939 2.08398Z"
                  fill="#042656"
                  stroke="#042656"
                  strokeWidth="1.5"
                />
                <path
                  d="M5.5 6.5L10.5 6.5C10.7733 6.5 11 6.27333 11 6C11 5.72667 10.7733 5.5 10.5 5.5L5.5 5.5C5.22667 5.5 5 5.72667 5 6C5 6.27333 5.22667 6.5 5.5 6.5Z"
                  fill="#042656"
                />
                <path
                  d="M5.5 10.5L10.5 10.5C10.7733 10.5 11 10.2733 11 10C11 9.72667 10.7733 9.5 10.5 9.5L5.5 9.5C5.22667 9.5 5 9.72667 5 10C5 10.2733 5.22667 10.5 5.5 10.5Z"
                  fill="#042656"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className="flex gap-2 p-1 rounded-lg my-[10px] border w-fit ">
        {/** Define active/inactive colors */}
        {(() => {
          const activeColor = "#042656";
          const inactiveColor = "#E6E9EE";
          return (
            <>
              <button onClick={() => setViewType("card")}>
                {/* Grid SVG */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.4"
                    d="M2 12H12V22H7.81C4.17 22 2 19.83 2 16.19V12Z"
                    fill={viewType === "card" ? activeColor : inactiveColor}
                  />
                  <path
                    opacity="0.4"
                    d="M22 7.81V12H12V2H16.19C19.83 2 22 4.17 22 7.81Z"
                    fill={viewType === "card" ? activeColor : inactiveColor}
                  />
                  <path
                    d="M12 2V12H2V7.81C2 4.17 4.17 2 7.81 2H12Z"
                    fill={viewType === "card" ? activeColor : inactiveColor}
                  />
                  <path
                    d="M22 12V16.19C22 19.83 19.83 22 16.19 22H12V12H22Z"
                    fill={viewType === "card" ? activeColor : inactiveColor}
                  />
                </svg>
              </button>
              <button onClick={() => setViewType("table")}>
                {/* List SVG */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 6H21M8 12H21M8 18H21M3 6H3.01M3 12H3.01M3 18H3.01"
                    stroke={viewType === "table" ? activeColor : inactiveColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          );
        })()}
      </div>
      {tab === "balance" && (
        <>
          {loading ? (
              <PageLoadingState 
              title="Loading Wallets"
              description="Fetching your wallets data..."
            />
          ) : wallets.length === 0 ? (
            <EmptyState 
              title="No Wallets Found"
              description="You don't have any wallets yet. Contact support to set up your first wallet."
            />
          ) : (
            viewType === "card" ? <WalletCard wallets={wallets} /> : <WalletTable wallets={wallets} />
          )}
        </>
      )}
      {tab === "funding" && <BalanceFundingHistoryTable />}
      {/* Sidebar for Generate Report */}
        <Sidebar
          isOpen={isReportOpen}
          onClose={() => setIsReportOpen(false)}
          title="Generate Statement"
        >
          <GenerateReport onClose={() => setIsReportOpen(false)} />
        </Sidebar>
         {/* Sidebar for Create New Wallet */}
         <Sidebar
           isOpen={isCreateNewWalletOpen}
           onClose={() => setIsCreateNewWalletOpen(false)}
           title="Create New Wallet"
         >
           <CreateNewWallet onClose={() => setIsCreateNewWalletOpen(false)} />
         </Sidebar>

         {/* Sidebar for Top Up Balance */}
         <Sidebar
           isOpen={isTopUpBalanceOpen}
           onClose={() => setIsTopUpBalanceOpen(false)}
           title="Top Up Balance"
         >
           <TopupBalance onClose={() => setIsTopUpBalanceOpen(false)} />
         </Sidebar>
        
    </div>
  );
}
