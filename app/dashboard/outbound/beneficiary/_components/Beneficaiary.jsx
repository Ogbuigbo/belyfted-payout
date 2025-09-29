"use client";

import React, { useState, useMemo } from "react";
import { Table } from "../../../../_components/_table/Table";
import Search from "../../../../_components/Search";
import Sidebar from "../../../../_components/_sidebar/Sidebar";
import EmptyState from "../../../../_components/EmptyState";
import PageLoadingState from "../../../../_components/PageLoadingState";
import Pagination from "../../../../_components/Pagination";
import { useRouter } from "next/navigation";
import AddBeneficiaryForm from "./AddBeneficiaryForm";
import useBeneficiary from "../_hooks/useBeneficiary";

// Nigerian Flag Icon Component
const NigerianFlagIcon = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.5 8.50078C0.5 11.7758 2.6 14.5508 5.5 15.5758V1.42578C2.6 2.45078 0.5 5.22578 0.5 8.50078ZM15.5 8.50078C15.5 5.22578 13.425 2.45078 10.5 1.42578V15.5758C13.425 14.5508 15.5 11.7758 15.5 8.50078Z"
      fill="#008000"
    />
    <path
      d="M5.5 15.575C6.275 15.85 7.125 16 8 16C8.875 16 9.725 15.85 10.5 15.575V1.425C9.725 1.15 8.875 1 8 1C7.125 1 6.275 1.15 5.5 1.425V15.575Z"
      fill="#F9F9F9"
    />
  </svg>
);

// Currency mapping (for future use with other currencies)
const currencyIcons = {
  NGN: <NigerianFlagIcon />,
};

function Beneficiary({ onCreate }) {
  const [search, setSearch] = useState("");
  const [isAddBeneficiaryOpen, setIsAddBeneficiaryOpen] = useState(false);
  const router = useRouter();
  
  const { beneficiaries, loading, error, pagination, refetch, fetchBeneficiaries } = useBeneficiary();

 
  const mappedBeneficiaries = useMemo(() => 
    beneficiaries.map((beneficiary) => ({
      id: beneficiary.uuid,
      beneficiaryName: beneficiary.account_name,
      accountType: "Individual", // Default value since not provided by API
      account: beneficiary.account_number,
      paymentDestination: "Bank Account", // Default value since not provided by API
      country: beneficiary.country_code,
      currency: beneficiary.currency,
      bank_name: beneficiary.bank_name,
      bank_code: beneficiary.bank_code,
      country_name: beneficiary.country_name,
      is_active: beneficiary.is_active,
      created_at: beneficiary.created_at,
      updated_at: beneficiary.updated_at
    })), [beneficiaries]
  );


  const filteredBeneficiaries = useMemo(() => 
    mappedBeneficiaries.filter((beneficiary) =>
      beneficiary.beneficiaryName?.toLowerCase().includes(search.toLowerCase()) ||
      beneficiary.account?.toLowerCase().includes(search.toLowerCase())
    ), [mappedBeneficiaries, search]
  );

  const handleAddBeneficiary = (beneficiaryData) => {
    setIsAddBeneficiaryOpen(false);
    
    // Refetch beneficiaries after adding new one
    refetch();

    // Call onCreate prop if provided
    if (onCreate) {
      onCreate(beneficiaryData);
    }
  };

  const columns = [
    { key: "beneficiaryName", label: "Beneficiary name" },
    { key: "accountType", label: "Account Type" },
    { key: "account", label: "Account" },
    { key: "paymentDestination", label: "Payment Destination" },
    {
      key: "country",
      label: "Country",
      render: (row) => (
        <div className="flex items-center gap-2">
          <span>{row.country_name || row.country}</span>
        </div>
      ),
    },
    {
      key: "currency",
      label: "Currency",
      render: (row) => (
        <div className="flex items-center gap-2">
          {currencyIcons[row.currency] || null}
          <span>{row.currency}</span>
        </div>
      ),
    },
    {
      key: "actions",
      label: "Action",
      render: (row) => <DropdownActions link={row} />,
    },
  ];

  return (
    <div className="md:p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Beneficiary</h2>
          <p className="text-[#8E98A8] font-medium">
            Click a Beneficiary to view more
          </p>
        </div>
        <button
          onClick={() => setIsAddBeneficiaryOpen(true)}
          className="md:px-6 md:py-[14px] px-4 py-2 bg-[#042656] text-sm text-white rounded-lg hover:bg-[#031c40] transition-colors"
        >
          Add Beneficiary
        </button>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500 text-sm">
          Showing {filteredBeneficiaries.length} of {pagination.total} Entries
        </div>
        <Search value={search} onChange={setSearch} />
      </div>
      
      {loading ? (
        <PageLoadingState 
          title="Loading Beneficiaries"
          description="Fetching your beneficiary data..."
        />
      ) : filteredBeneficiaries.length === 0 ? (
        <EmptyState 
          title="No Beneficiaries Found"
          description="Add your first beneficiary to get started with payments."
        />
      ) : (
        <div className="bg-white h-full overflow-x-auto">
          <Table
            columns={columns}
            data={filteredBeneficiaries}
            loading={false}
            headerBgColor="!bg-[#E6E9EE]"
          />
          <Pagination 
            loading={loading} 
            pagination={pagination} 
            onPageChange={fetchBeneficiaries}
          />
        </div>
      )}

      {/* Add Beneficiary Sidebar */}
      <Sidebar
        isOpen={isAddBeneficiaryOpen}
        onClose={() => setIsAddBeneficiaryOpen(false)}
        title="Add Beneficiary"
      >
        <AddBeneficiaryForm onSubmit={handleAddBeneficiary} />
      </Sidebar>
    </div>
  );
}

function DropdownActions({ link }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div className="inline-block text-left">
      <button
        onClick={() => setOpen((o) => !o)}
        className="px-2 py-1 rounded hover:bg-gray-100"
      >
        <span className="text-xs font-semibold">View</span>
      </button>
      {open && (
        <div className="absolute right-20 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
          <button
            className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
            onClick={() =>
              router.push(`/dashboard/outbound/beneficiary/${link.id}`)
            }
          >
            View
          </button>
          <button className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100">
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
}

export default Beneficiary;
