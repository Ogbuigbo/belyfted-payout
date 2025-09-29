import React from "react";
import Hero from "./_components/Hero";
import Cards from "./_components/Cards";
import Header from "../../_partials/Header";
import ContactForm from "./_components/ContactForm";
import FAQSection from "./_components/FAQSection";

function page() {
  return (
    <div>
      <div className="relative">
        <Header />
        <Hero />
      </div>
      <Cards />
      <ContactForm />
      <FAQSection />
    </div>
  );
}

export default page;
