import React from "react";
import Header from "../../../_partials/Header";
import PaymentLinkHero from "./_components/PaymentLinkHero";
import GetStarted from "../../../_partials/_components/GetStarted";
import PaymentLinksSection from "./_components/PaymentLinkSection";
import PaymentStepSection from "./_components/PaymentStepSection";
import PaymentTransferSection from "./_components/PaymentTransferSection";

function page() {
  return (
    <div>
      <div className="relative">
        <Header />
        <PaymentLinkHero />
      </div>
      <PaymentLinksSection />
      <PaymentStepSection />
      <PaymentTransferSection />
      <GetStarted />
    </div>
  );
}

export default page;
