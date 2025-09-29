import React from "react";
import VirtualAccountHero from "./_components/VirtualAccountHero";
import Header from "../../../_partials/Header";
import GetStarted from "../../../_partials/_components/GetStarted";
import VirtualSecurity from "./_components/VirtualSecurity";
import SlowPayment from "./_components/SlowPayment";
import VirtualAccounts from "./_components/VirtualAccount";
import SimpleSteps from "./_components/SimpleSteps";

function page() {
  return (
    <div>
      <div className="relative">
        <Header />
        <VirtualAccountHero />
      </div>
      <SlowPayment />
      <SimpleSteps />
      <VirtualSecurity />
      <VirtualAccounts />
      <GetStarted />
    </div>
  );
}

export default page;
