"use client";

import React from "react";
import BalanceCard from "./BalanceCard";
import PaymentChart from "./PaymentChart";
import UserManagementTable from "./UserTable";
import KycStatus from "./KycStatus";
import { useSelector } from "react-redux";

function Dashboard() {
  const user = useSelector((state) => state.user.user);


  const balanceInfo = {
    available: 32000.09,
    ledger: 200,
    locked: 189,
    rollingReserve: 400,
    currency: "NGN",
  };

  const users = [
    {
      id: "1",
      fullName: "John Doe",
      email: "johndoe@example.com",
      dateCreated: "2023-10-01",
      status: "Active",
      role: "User",
    },
    {
      id: "2",
      fullName: "Jane Smith",
      email: "janesmith@example.com",
      dateCreated: "2023-09-15",
      status: "Active",
      role: "Admin",
    },
  ];

  return (
    <div>
      {user?.config?.kyb_status === "REVIEW" && <KycStatus />}
      <BalanceCard balanceInfo={balanceInfo} />
      <PaymentChart />
      <UserManagementTable initialUsers={users} />
    </div>
  );
}

export default Dashboard;
