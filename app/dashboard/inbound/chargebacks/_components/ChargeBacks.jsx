import React from "react";
import EmptyState from "./EmptyState";

function ChargeBacks() {
  return (
    <div className="lg:pl-10">
      <h1 className="text-2xl font-semibold">ChargeBacks</h1>
      <h2>Check local and international chargebacks</h2>
      <EmptyState />
    </div>
  );
}

export default ChargeBacks;
