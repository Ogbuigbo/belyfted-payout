import React from "react";
import EmptyState from "./EmptyState";

function Refund() {
  return (
    <div className="lg:pl-10">
      <h1 className="text-2xl font-semibold">Refund</h1>
      <h2>Easily view your initiated refunds</h2>
      <EmptyState />
    </div>
  );
}

export default Refund;
