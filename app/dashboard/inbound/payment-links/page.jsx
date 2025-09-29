"use client";

import React, { useState } from "react";
import EmptyState from "./_components/EmptyState";
import CreatePaymentLink from "./_components/CreatePaymentLink";
import PaymentLinkList from "./_components/PaymentLinkList";

export default function PaymentLinksPage() {
  const [links, setLinks] = useState([]);
  const [showCreate, setShowCreate] = useState(false);

  const handleCreateLink = (newLink) => {
    setLinks([...links, { ...newLink, id: links.length + 1 }]);
    setShowCreate(false);
  };

  if (links.length === 0 && !showCreate) {
    return <EmptyState onCreate={() => setShowCreate(true)} />;
  }

  if (showCreate) {
    return (
      <CreatePaymentLink
        onBack={() => setShowCreate(false)}
        onCreate={handleCreateLink}
      />
    );
  }

  return <PaymentLinkList links={links} onCreate={() => setShowCreate(true)} />;
}
