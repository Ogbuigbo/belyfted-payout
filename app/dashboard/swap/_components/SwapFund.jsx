"use client";

import React, { useState, useMemo } from "react";
import Search from "../../../_components/Search";
import useUsers from "../_hooks/useSwapFund";
import { useRouter } from "next/navigation";
import TableFilter from "../../../_components/TableFilter";
import Popover from "../../../_components/Popover";
import SwapFundTable from "./SwapFundTable";

function SwapFund() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { addUser, removeUser, restrictUser, editUser, filterUsers } =
    useUsers();

  const [tableFilter, setTableFilter] = useState({});

  const filterFields = [
    { name: "from", label: "From", type: "date" },
    { name: "to", label: "To", type: "date" },
    {
      name: "status",
      label: "Status",
      type: "select",
      options: [
        { value: "Active", label: "Active" },
        { value: "Restricted", label: "Restricted" },
      ],
    },
    {
      name: "sourceCurrency",
      label: "Source Currency",
      type: "select",
      options: [
        { value: "USD", label: "USD" },
        { value: "NGN", label: "NGN" },
        { value: "GBP", label: "GBP" },
        { value: "CAD", label: "CAD" },
      ],
    },
    {
      name: "destinationCurrency",
      label: "Destination Currency",
      type: "select",
      options: [
        { value: "USD", label: "USD" },
        { value: "NGN", label: "NGN" },
        { value: "GBP", label: "GBP" },
        { value: "CAD", label: "CAD" },
      ],
    },
  ];

  const filteredUsers = useMemo(() => {
    let result = filterUsers(searchQuery);
    if (tableFilter.status) {
      result = result.filter((u) => u.status === tableFilter.status);
    }
    return result;
  }, [filterUsers, searchQuery, tableFilter]);

  return (
    <div className="md:space-y-6 space-y-4 h-screen overflow-hidden lg:pl-[26px]">
      <div className="flex justify-between items-start pb-6">
        <div>
          <h1 className="md:text-2xl text-lg font-semibold text-[#303032]">
            Swap Funds History
          </h1>
          <p className="font-semibold text-[#777779] text-xs md:text-base leading-8 mt-[12px]">
            View all your swap funds history
          </p>
        </div>
        <button
          onClick={() => router.push("/dashboard/swap/new")}
          className="md:px-6 md:py-[14px] px-4 py-2 bg-[#042656] text-sm text-white rounded-lg hover:bg-[#031c40] transition-colors"
        >
          Swap Fund
        </button>
      </div>

      {/* Table controls: Search, Filter, Export */}
      <div className="flex flex-col md:flex-row justify-end items-center  gap-4 relative">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <Search
            placeholder="Search"
            value={searchQuery}
            onChange={setSearchQuery}
          />
          {/* Filter Button with Popover */}
          <Popover
            trigger={({ open, setOpen }) => (
              <button
                type="button"
                className="flex items-center gap-2 pr-2 pl-4 py-[12px] border border-[#C8C6C9] rounded bg-white hover:bg-gray-100 text-sm text-[#777779]"
                onClick={() => setOpen(!open)}
              >
                Filter
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.33331 2.16732C1.33331 1.43094 1.93027 0.833984 2.66665 0.833984H13.3333C14.0697 0.833984 14.6666 1.43094 14.6666 2.16732V2.71232C14.6666 3.21891 14.4744 3.70662 14.1288 4.07696L10.3586 8.11644C10.1281 8.36334 9.99998 8.68848 9.99998 9.0262V11.7553C9.99998 12.0078 9.85731 12.2387 9.63146 12.3516L6.96479 13.6849C6.52152 13.9065 5.99998 13.5842 5.99998 13.0886V9.0262C5.99998 8.68848 5.87182 8.36334 5.64139 8.11644L1.8712 4.07696C1.52555 3.70662 1.33331 3.21891 1.33331 2.71232V2.16732Z"
                    stroke="#717171"
                  />
                </svg>
              </button>
            )}
          >
            {({ setOpen }) => (
              <TableFilter
                fields={filterFields}
                onApply={(vals) => {
                  setTableFilter(vals);
                  setOpen(false);
                }}
                onReset={() => {
                  setTableFilter({});
                  setOpen(false);
                }}
              />
            )}
          </Popover>
          {/* Export Button (placeholder) */}
          <button
            type="button"
            className="flex items-center gap-2 pr-2 pl-4 py-[12px] border border-[#C8C6C9] rounded bg-white hover:bg-gray-100 text-sm text-[#777779]"
          >
            Export
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.96 6.43359C13.36 6.64026 14.34 7.87359 14.34 10.5736V10.6603C14.34 13.6403 13.1467 14.8336 10.1667 14.8336H5.82665C2.84665 14.8336 1.65332 13.6403 1.65332 10.6603V10.5736C1.65332 7.89359 2.61999 6.66026 4.97999 6.44026"
                stroke="#777779"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 10.4988V2.91211"
                stroke="#777779"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2333 4.39935L8 2.16602L5.76666 4.39935"
                stroke="#777779"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-x-scroll h-full">
        <SwapFundTable
          users={filteredUsers}
          loading={false}
          onRemoveUser={removeUser}
          onRestrictUser={restrictUser}
        />
      </div>
    </div>
  );
}

export default SwapFund;
