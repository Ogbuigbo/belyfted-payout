"use client";
import Link from "next/link";
import { Table } from "../../_components/_table/Table";

const columns = [
  { key: "date_initiated", label: "Date Initiated" },
  { key: "date_completed", label: "Date Completed" },
  { key: "transaction_type", label: "Transaction Type" },
  { key: "transaction_reference", label: "Transaction Reference" },
  { key: "amount", label: "Amount" },
  { key: "reserved", label: "Reserved" },
  {
    key: "status",
    label: "Status",
    render: (item) => (
      <span className="rounded-[39px] bg-[#1CCB0017] px-[15px] py-[6px] text-[#1CCB00] text-xs">
        {item.status}
      </span>
    ),
  },
];

const data = [
  {
    date_initiated: "24 June 2024",
    date_completed: "24 June 2024",
    transaction_type: "Transfer",
    transaction_reference: "HDHD383399",
    amount: "N5600",
    reserved: "N600",
    status: "Completed",
  },
  {
    date_initiated: "24 June 2024",
    date_completed: "24 June 2024",
    transaction_type: "Transfer",
    transaction_reference: "HDHD383399",
    amount: "N5600",
    reserved: "N600",
    status: "Completed",
  },
  {
    date_initiated: "24 June 2024",
    date_completed: "24 June 2024",
    transaction_type: "Transfer",
    transaction_reference: "HDHD383399",
    amount: "N5600",
    reserved: "N600",
    status: "Completed",
  },
  {
    date_initiated: "24 June 2024",
    date_completed: "24 June 2024",
    transaction_type: "Transfer",
    transaction_reference: "HDHD383399",
    amount: "N5600",
    reserved: "N600",
    status: "Completed",
  },
  {
    date_initiated: "24 June 2024",
    date_completed: "24 June 2024",
    transaction_type: "Transfer",
    transaction_reference: "HDHD383399",
    amount: "N5600",
    reserved: "N600",
    status: "Completed",
  },
  {
    date_initiated: "24 June 2024",
    date_completed: "24 June 2024",
    transaction_type: "Transfer",
    transaction_reference: "HDHD383399",
    amount: "N5600",
    reserved: "N600",
    status: "Completed",
  },
  {
    date_initiated: "24 June 2024",
    date_completed: "24 June 2024",
    transaction_type: "Transfer",
    transaction_reference: "HDHD383399",
    amount: "N5600",
    reserved: "N600",
    status: "Completed",
  },
];

export default function RollingReservePage() {
  return (
    <div className="w-full">
      <div className="mb-4 flex items-center gap-2">
        <Link
          href="/dashboard"
          className="text-gray-500 hover:underline text-sm flex items-center gap-4"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.500195 7.7998L6.2002 13.3998C6.6002 13.7998 7.2002 13.7998 7.6002 13.3998C8.0002 12.9998 8.0002 12.3998 7.6002 11.9998L2.7002 6.9998L7.6002 1.9998C8.0002 1.5998 8.0002 0.999804 7.6002 0.599804C7.4002 0.399804 7.2002 0.299805 6.9002 0.299805C6.60019 0.299805 6.4002 0.399804 6.2002 0.599804L0.500195 6.1998C0.100195 6.6998 0.100195 7.2998 0.500195 7.7998C0.500195 7.6998 0.500195 7.6998 0.500195 7.7998Z"
              fill="#334335"
            />
            <path
              d="M0.500195 7.7998L6.2002 13.3998C6.6002 13.7998 7.2002 13.7998 7.6002 13.3998C8.0002 12.9998 8.0002 12.3998 7.6002 11.9998L2.7002 6.9998L7.6002 1.9998C8.0002 1.5998 8.0002 0.999804 7.6002 0.599804C7.4002 0.399804 7.2002 0.299805 6.9002 0.299805C6.60019 0.299805 6.4002 0.399804 6.2002 0.599804L0.500195 6.1998C0.100195 6.6998 0.100195 7.2998 0.500195 7.7998C0.500195 7.6998 0.500195 7.6998 0.500195 7.7998Z"
              fill="white"
              fill-opacity="0.3"
            />
          </svg>
          Back
        </Link>
      </div>
      <h2 className="text-2xl font-semibold mb-4">
        Rolling Reserve -{" "}
        <span className="text-primary font-semibold">$4500</span>
      </h2>
      <div className="w-full overflow-x-scroll border ">
        <Table columns={columns} data={data} headerBgColor="!bg-[#E6E9EE]" />
      </div>
    </div>
  );
}
