import React from "react";
import VirtualAccount from "./_components/VirtualAccount";

function page() {
  return (
    <div className="lg:pl-10">
      <h1 className="md:text-2xl text-lg inline-block text-[#303032] font-semibold">
        Virtual Account
      </h1>
      <VirtualAccount />
    </div>
  );
}

export default page;
