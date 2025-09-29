import React from "react";
import Header from "../../_partials/Header";
import BlogHero from "./_components/BlogHero";
import Blog from "./_components/BlogSection";
import BlogSection from "./_components/BlogSection";

function page() {
  return (
    <div>
      <div className="relative">
        <Header />
        <BlogHero />
      </div>
      <BlogSection />
    </div>
  );
}

export default page;
