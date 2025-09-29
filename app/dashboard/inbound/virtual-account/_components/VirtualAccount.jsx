"use client";

import React, { useState } from "react";
import VirtualAccountEmpty from "./VirtualAccountEmpty";
import VirtualAccountStepper from "./VirtualAccountStepper";
import VirtualAccountTable from "./VirtualAccountTable";

function VirtualAccount() {
  // Mock: start with no accounts
  const [accounts, setAccounts] = useState([]);
  const [step, setStep] = useState(0); // 0: none, 1+: stepper

  // Handler for creating a new account (simulate success)
  const handleAccountCreated = () => {
    setAccounts([
      ...accounts,
      {
        id: accounts.length + 1,
        currency: "NGN",
        dateRequested: "27-05-2025, 17:59:24",
        dateIssued: "27-05-2025, 17:59:24",
        accountName: "Belyfted Limited",
        status: "Active",
      },
    ]);
    setStep(0);
  };

  if (accounts.length === 0 && step === 0) {
    return <VirtualAccountEmpty onRequest={() => setStep(1)} />;
  }

  if (step > 0) {
    return (
      <VirtualAccountStepper
        step={step}
        setStep={setStep}
        onComplete={handleAccountCreated}
      />
    );
  }

  return (
    <div className=" ">
      <VirtualAccountTable
        accounts={accounts}
        onRequestAccount={() => {
          setAccounts([]);
          setStep(0);
        }}
      />
    </div>
  );
}

export default VirtualAccount;
