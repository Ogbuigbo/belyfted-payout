"use client";
import React from "react";
import VirtualAccountEmpty from "./_components/VirtualAccountEmpty";

export default function CreateVirtualAccountPage() {
  const handleRequest = () => {
    alert("Request Account clicked!");
  };

  return <VirtualAccountEmpty onRequest={handleRequest} />;
}
