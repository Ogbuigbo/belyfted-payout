import React from "react";
import Header from "../../_partials/Header";
import DeveloperHero from "./_components/DeveloperHero";
import APIFeaturesSection from "./_components/ApiFeauturesSection";
import QuickStart from "./_components/QuickStart";
import CoreFeaturesSection from "./_components/CoreFeaturesSection";
import GetStarted from "../../_partials/_components/GetStarted";
import Security from "./_components/Security";
import DeveloperResourcesSection from "./_components/DeveloperResorceSection";
import IntegrationFlow from "./_components/IntegrationFlow";

function page() {
  return (
    <div className="bg-[#FBF8FB]">
      <div className="relative">
        <Header />
        <DeveloperHero />
      </div>
      <APIFeaturesSection />
      <QuickStart />
      <CoreFeaturesSection />
      <IntegrationFlow />
      <DeveloperResourcesSection />
      <Security />
      <GetStarted />
    </div>
  );
}

export default page;
