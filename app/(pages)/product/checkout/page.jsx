import React from "react";
import Header from "../../../_partials/Header";
import CheckoutHero from "./_components/CheckoutHero";
import WhyChooseSection from "./_components/WhyChooseSection";
import PaymentMethod from "./_components/PaymentMethod";
import Security from "./_components/Security";
import GetStarted from "../../../_partials/_components/GetStarted";

function page() {
  return (
    <div>
      <div className="relative">
        <Header />
        <CheckoutHero />
      </div>
      <WhyChooseSection />
      <PaymentMethod />
      <Security />
      <GetStarted />
    </div>
  );
}

export default page;
