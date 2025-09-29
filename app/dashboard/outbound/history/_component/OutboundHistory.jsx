"use client";

import React, { useState } from "react";
import Search from "../../../../_components/Search";
import { Table } from "../../../../_components/_table/Table";
import { useRouter } from "next/navigation";

const mockLinks = [
  {
    id: 1,
    date: "May 12, 2025",
    amount: "NGN5,000",
    amountReceived: "NGN6,000",
    customerRef: "DFJIDFJFJ7575",
    transactionRef: "HDJSJSD4748",
    beneficiaryName: "John Doe",
    status: "Successful",
  },
  {
    id: 2,
    date: "May 12, 2025",
    amount: "NGN5,000",
    amountReceived: "NGN6,000",
    customerRef: "DFJIDFJFJ7575",
    transactionRef: "HDJSJSD4748",
    beneficiaryName: "John Doe",
    status: "Successful",
  },
  {
    id: 3,
    date: "May 12, 2025",
    amount: "NGN5,000",
    amountReceived: "NGN6,000",
    customerRef: "DFJIDFJFJ7575",
    transactionRef: "HDJSJSD4748",
    beneficiaryName: "John Doe",
    status: "Successful",
  },
  {
    id: 4,
    date: "May 12, 2025",
    amount: "NGN5,000",
    amountReceived: "NGN6,000",
    customerRef: "DFJIDFJFJ7575",
    transactionRef: "HDJSJSD4748",
    beneficiaryName: "John Doe",
    status: "Successful",
  },
  {
    id: 5,
    date: "May 12, 2025",
    amount: "NGN5,000",
    amountReceived: "NGN6,000",
    customerRef: "DFJIDFJFJ7575",
    transactionRef: "HDJSJSD4748",
    beneficiaryName: "John Doe",
    status: "Successful",
  },
];

function OutboundHistory({ links = mockLinks, onCreate }) {
  const [search, setSearch] = useState("");
  const filteredLinks = links.filter(
    (link) =>
      link.beneficiaryName.toLowerCase().includes(search.toLowerCase()) ||
      link.customerRef.toLowerCase().includes(search.toLowerCase()) ||
      link.transactionRef.toLowerCase().includes(search.toLowerCase()),
  );

  const columns = [
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount" },
    { key: "amountReceived", label: "Amount received" },
    { key: "customerRef", label: "Customer Ref" },
    { key: "transactionRef", label: "Transaction Ref" },
    { key: "beneficiaryName", label: "Beneficiary Name" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span className="px-3 py-1 rounded-full text-xs font-medium  text-[#009900]">
          {row.status}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Action",
      render: (row) => <ViewButton link={row} />,
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">History</h2>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500 text-sm">
          Showing {filteredLinks.length} Entries
        </div>
        <div className="flex gap-4">
          <Search />
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
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 10.4988V2.91211"
                stroke="#777779"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.2333 4.39935L8 2.16602L5.76666 4.39935"
                stroke="#777779"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-white h-full overflow-x-auto ">
        <Table
          columns={columns}
          data={filteredLinks}
          loading={false}
          headerBgColor="!bg-[#042656]"
          headerTextColor="!text-white"
        />
      </div>
    </div>
  );
}

function ViewButton({ link }) {
  const router = useRouter();

  return (
    <button
      className="px-4 py-2 border border-[#042656] rounded-lg !text-sm hover:bg-gray-50"
      onClick={() => router.push(`/dashboard/outbound/history/${link.id}`)}
    >
      View
    </button>
  );
}

export default OutboundHistory;
