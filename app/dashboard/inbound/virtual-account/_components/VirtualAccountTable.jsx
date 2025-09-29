"use client";

import React, { useState } from "react";
import Search from "../../../../_components/Search";
import { Table } from "../../../../_components/_table/Table";
import { useRouter } from "next/navigation";

const mockAccounts = [
  {
    id: 1,
    currency: "NGN",
    dateRequested: "27-05-2025, 17:59:24",
    dateIssued: "27-05-2025, 17:59:24",
    accountName: "Belyfted Limited",
    status: "Active",
  },
  {
    id: 2,
    currency: "NGN",
    dateRequested: "27-05-2025, 17:59:24",
    dateIssued: "27-05-2025, 17:59:24",
    accountName: "Belyfted Limited",
    status: "Pending",
  },
];

export default function VirtualAccountTable({
  accounts = mockAccounts,
  onRequestAccount,
}) {
  const router = useRouter();
  // Store the ID of the row whose menu is open, or null
  const [openMenuId, setOpenMenuId] = useState(null);

  const columns = [
    { key: "currency", label: "Currency" },
    { key: "dateRequested", label: "Date Requested" },
    { key: "dateIssued", label: "Date Issued" },
    { key: "accountName", label: "Account Name" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            row.status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      key: "actions",
      label: "",
      render: (row) => {
        return (
          <div className="relative">
            <button
              className="icon-button"
              onClick={() =>
                setOpenMenuId(openMenuId === row.id ? null : row.id)
              }
            >
              <span className="three-dots">⋮</span>
            </button>
            {openMenuId === row.id && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    onClick={() => {
                      router.push(
                        `/dashboard/inbound/virtual-account/${row.id}`,
                      );
                      setOpenMenuId(null);
                    }}
                    className="block w-full px-4 py-2 text-sm text-left text-gray-700"
                  >
                    View Details
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      },
    },
  ];

  return (
    <div className="rounded-xl ">
      <div className="flex justify-end items-center lg:mb-4">
        <button
          className="bg-[#042656] md:mt-[-40px]  text-white md:px-6 md:py-[14px]  py-2 px-4 text-sm md:rounded-lg rounded-md font-semibold"
          onClick={onRequestAccount}
        >
          Request Account
        </button>
      </div>

      <div className="flex flex-col w-full items-end justify-end lg:mt-[64px] mt-[44px]  gap-4">
        <Search />
        <Table
          columns={columns}
          data={accounts}
          loading={false}
          headerBgColor="!bg-[#E6E9EE]"
        />
      </div>
    </div>
  );
}
