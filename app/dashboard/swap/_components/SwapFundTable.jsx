import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Table } from "../../../_components/_table/Table";

function SwapFundTable({ users = [], loading = false }) {
  const router = useRouter();
  // Store the ID of the row whose menu is open, or null
  const [openMenuId, setOpenMenuId] = useState(null);

  const columns = [
    { key: "transactionDate", label: "Transaction Date" },
    { key: "transactionRef", label: "Transaction Ref" },
    { key: "amountSwapped", label: "Amount Swapped" },
    { key: "exchangeRate", label: "Exchange Rate" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            row.status === "Active"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    { key: "settlementDate", label: "Settlement Date" },
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
                      router.push(`/dashboard/swap/${row.id}`);
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
    <Table
      columns={columns}
      data={users}
      loading={loading}
      headerBgColor="!bg-[#E6E9EE]"
    />
  );
}

export default SwapFundTable;
