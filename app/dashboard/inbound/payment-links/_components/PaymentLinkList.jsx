import React, { useState } from "react";
import { Table } from "../../../../_components/_table/Table";
import { useRouter } from "next/navigation";
import Search from "../../../../_components/Search";

const mockLinks = [
  {
    id: 1,
    name: "Donation",
    currency: "NGN",
    dateCreated: "27/03/2025, 17:59:24",
    amount: "NGN 200.00",
    status: "Active",
  },
];

export default function PaymentLinkList({ links = mockLinks, onCreate }) {
  const [search, setSearch] = useState("");
  const filteredLinks = links.filter((link) =>
    link.name.toLowerCase().includes(search.toLowerCase()),
  );

  const columns = [
    { key: "name", label: "Name" },
    { key: "currency", label: "Currency" },
    { key: "dateCreated", label: "Date Created" },
    { key: "amount", label: "Amount" },
    {
      key: "status",
      label: "Status",
      render: (row) => (
        <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
          {row.status}
        </span>
      ),
    },
    {
      key: "actions",
      label: " ",
      render: (row) => <DropdownActions link={row} />,
    },
  ];

  return (
    <div className="md:p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Payment Links</h2>
          <p className="text-[#8E98A8] font-medium">
            You have created {links.length} payment links
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500 text-sm">
          Showing {filteredLinks.length} Entries
        </div>
        <Search />
      </div>
      <div className="bg-white h-full overflow-x-auto">
        <Table
          columns={columns}
          data={filteredLinks}
          loading={false}
          headerBgColor="!bg-[#E6E9EE]"
        />
      </div>
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
        <span className="text-xl">⋮</span>
      </button>
      {open && (
        <div className="absolute right-20 mt-2 w-32 bg-white rounded-md shadow-lg z-10">
          <button
            className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
            onClick={() =>
              router.push(`/dashboard/inbound/payment-links/${link.id}`)
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
