import React from "react";
import Header from "../../_partials/Header";
import AboutHero from "./_components/AboutHero";
import WhyChooseUsSection from "./_components/WhyChooseUsSection";
import GetStarted from "../../_partials/_components/GetStarted";
import OurStorySection from "./_components/OurStorySection";
import OurMissionSection from "./_components/OurMission";

function page() {
  return (
    <div>
      <div className="relative ">
        <Header />
        <AboutHero />
      </div>
      <WhyChooseUsSection />
      <OurStorySection />
      <OurMissionSection />
      <GetStarted />
    </div>
  );
}

export default page;
