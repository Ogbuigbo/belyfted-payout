import React, { useState } from "react";
import { Table } from "../../../../_components/_table/Table";
import { useRouter } from "next/navigation";
import Sidebar from "../../../../_components/_sidebar/Sidebar";
import CreateWebhook from "./CreateWebhook";
import EditWebhook from "./EditWebhook";
import AddWhitelist from "./AddWhitelist";
import EditWhitelist from "./EditWhitelist";
import { useWebhook } from "../../_hooks/useWebhook";

const mockIPAddresses = [
  {
    id: 1,
    ipAddress: "example.com",
  },
  {
    id: 2,
    ipAddress: "192.168.1.1",
  },
];

export default function Webhook() {
  const { webhooks, loading, addWebhook, updateWebhook, deleteWebhook } = useWebhook();
  const [ipAddresses, setIpAddresses] = useState(mockIPAddresses);
  const [activeTab, setActiveTab] = useState("Webhook");
  const [isWebhookOpen, setIsWebhookOpen] = useState(false);
  const [isEditWebhookOpen, setIsEditWebhookOpen] = useState(false);
  const [isWhiteListOpen, setIsWhiteListOpen] = useState(false);
  const [isEditWhiteListOpen, setIsEditWhiteListOpen] = useState(false);
  const [selectedWebhook, setSelectedWebhook] = useState(null);
  const [selectedIpAddress, setSelectedIpAddress] = useState(null);

  // Webhook handlers
  const handleCreateWebhook = async (webhookData) => {
    const success = await addWebhook(webhookData);
    if (success) {
      setIsWebhookOpen(false);
    }
  };

  const handleUpdateWebhook = async (updatedWebhook) => {
    const success = await updateWebhook(updatedWebhook.id, updatedWebhook);
    if (success) {
      setIsEditWebhookOpen(false);
    }
  };

  const handleDeleteWebhook = async (id) => {
    if (window.confirm('Are you sure you want to delete this webhook?')) {
      await deleteWebhook(id);
    }
  };

  const handleEditWebhook = (webhook) => {
    setSelectedWebhook(webhook);
    setIsEditWebhookOpen(true);
  };

  // IP Whitelist handlers
  const handleAddWhitelist = (ipData) => {
    const newIp = {
      ...ipData,
      id: Date.now(),
    };
    setIpAddresses((prev) => [...prev, newIp]);
    setIsWhiteListOpen(false);
  };

  const handleUpdateWhitelist = (updatedIp) => {
    setIpAddresses(
      ipAddresses.map((ip) => (ip.id === updatedIp.id ? updatedIp : ip)),
    );
    setIsEditWhiteListOpen(false);
  };

  const handleDeleteWhitelist = (id) => {
    setIpAddresses(ipAddresses.filter((ip) => ip.id !== id));
  };

  const handleEditWhitelist = (ipAddress) => {
    setSelectedIpAddress(ipAddress);
    setIsEditWhiteListOpen(true);
  };

  const webhookColumns = [
    {
      key: "url",
      label: "URL",
      render: (row) => (
        <div className="flex items-center gap-2">
          <a
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0000FF]"
          >
            {row.url}
          </a>
          <button
            onClick={() => navigator.clipboard.writeText(row.url)}
            className="p-1 hover:bg-gray-100 rounded"
            title="Copy URL"
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="5.5"
                y="3"
                width="10"
                height="14"
                rx="3"
                stroke="#5E5E60"
                strokeWidth="1.5"
              />
              <path
                d="M17.999 7.40234C18.8957 7.92106 19.499 8.89057 19.499 10.001V18.001C19.499 19.6579 18.1559 21.001 16.499 21.001H12.499C11.3886 21.001 10.4191 20.3977 9.90039 19.501"
                stroke="#5E5E60"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      ),
    },
    { key: "environment", label: "Environment" },
    {
      key: "actions",
      label: " ",
      render: (row) => (
        <DropdownActions
          item={row}
          onEdit={handleEditWebhook}
          onDelete={handleDeleteWebhook}
        />
      ),
    },
  ];

  const ipColumns = [
    { key: "ipAddress", label: "IP Address" },
    {
      key: "actions",
      label: " ",
      render: (row) => (
        <IPDropdownActions
          ipAddress={row}
          onEdit={handleEditWhitelist}
          onDelete={handleDeleteWhitelist}
        />
      ),
    },
  ];

  return (
    <div className="md:p-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-4">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab("Webhook")}
            className={`py-2 px-4 border-b-2 font-medium text-sm ${
              activeTab === "Webhook"
                ? "border-[#F39C12] text-[#F39C12]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Webhook
          </button>
          <button
            onClick={() => setActiveTab("IP Whitelisting")}
            className={`py-2 px-4 border-b-2 font-medium text-sm ${
              activeTab === "IP Whitelisting"
                ? "border-[#F39C12] text-[#F39C12]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            IP Whitelisting
          </button>
        </div>
      </div>

      {/* Webhook Tab Content */}
      {activeTab === "Webhook" && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#303032]">Webhook</h2>
            <button
              onClick={() => setIsWebhookOpen(true)}
              className="bg-[#042656] hover:bg-blue-700 text-white px-4 py-[10px] rounded-lg font-semibold text-sm"
            >
              Add Webhooks
            </button>
          </div>

          <div className="bg-white overflow-x-auto">
            <Table
              columns={webhookColumns}
              data={webhooks}
              loading={loading}
              headerBgColor="!bg-[#E6E9EE]"
            />
          </div>

          <Sidebar
            isOpen={isWebhookOpen}
            onClose={() => setIsWebhookOpen(false)}
            title="Create Webhook"
            className="z-50"
          >
            <CreateWebhook
              onSubmit={handleCreateWebhook}
              onClose={() => setIsWebhookOpen(false)}
            />
          </Sidebar>

          <Sidebar
            isOpen={isEditWebhookOpen}
            onClose={() => setIsEditWebhookOpen(false)}
            title="Edit Webhook"
            className="z-50"
          >
            {selectedWebhook && (
              <EditWebhook
                webhook={selectedWebhook}
                onSubmit={handleUpdateWebhook}
                onClose={() => setIsEditWebhookOpen(false)}
              />
            )}
          </Sidebar>
        </>
      )}

      {/* IP Whitelisting Tab Content */}
      {activeTab === "IP Whitelisting" && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#303032]">IP Whitelist</h2>
            <button
              onClick={() => setIsWhiteListOpen(true)}
              className="bg-[#042656] hover:bg-blue-700 text-white px-4 py-[10px] rounded-lg font-semibold text-sm"
            >
              Add IP Whitelist
            </button>
          </div>

          <div className="bg-white overflow-x-auto">
            <Table
              columns={ipColumns}
              data={ipAddresses}
              loading={false}
              headerBgColor="!bg-[#E6E9EE]"
            />
          </div>

          <Sidebar
            isOpen={isWhiteListOpen}
            onClose={() => setIsWhiteListOpen(false)}
            title="Add IP Whitelist"
            className="z-50"
          >
            <AddWhitelist
              onSubmit={handleAddWhitelist}
              onClose={() => setIsWhiteListOpen(false)}
            />
          </Sidebar>

          <Sidebar
            isOpen={isEditWhiteListOpen}
            onClose={() => setIsEditWhiteListOpen(false)}
            title="Edit IP Whitelist"
            className="z-50"
          >
            {selectedIpAddress && (
              <EditWhitelist
                ipAddress={selectedIpAddress}
                onSubmit={handleUpdateWhitelist}
                onClose={() => setIsEditWhiteListOpen(false)}
              />
            )}
          </Sidebar>
        </>
      )}
    </div>
  );
}

function DropdownActions({ item, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className="px-2 py-1 rounded hover:bg-gray-100"
      >
        <span className="text-xl">⋮</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border">
            <button
              className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(item);
                setOpen(false);
              }}
            >
              Edit
            </button>
            <button
              className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 text-red-600"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(item.id);
                setOpen(false);
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function IPDropdownActions({ ipAddress, onEdit, onDelete }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className="px-2 py-1 rounded hover:bg-gray-100"
      >
        <span className="text-xl">⋮</span>
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg z-50 border">
            <button
              className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(ipAddress);
                setOpen(false);
              }}
            >
              Edit
            </button>
            <button
              className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100 text-red-600"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(ipAddress.id);
                setOpen(false);
              }}
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  );
}
