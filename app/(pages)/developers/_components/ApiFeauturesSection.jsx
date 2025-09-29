import React from "react";

function APIFeaturesSection() {
  return (
    <div className="bg-[#FBF8FB] lg:pt-[90px] pt-[50px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="lg:text-[38px] text-3xl font-extrabold text-[#303032] mb-6">
            A Powerful, Flexible API
          </h2>
          <p className="text-gray-600 font-medium text-base max-w-5xl mx-auto">
            The Yodepay API is a robust set of tools that lets you
            programmatically handle payments, manage user wallets, transfer
            funds, and track transactions. Our API is built on a modern, RESTful
            architecture, ensuring fast, reliable, and secure integration for
            developers of all skill levels.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Fast Integration */}
          <div className="bg-white border border-gray-200 rounded-3xl py-5 px-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-[11px] flex gap-2 items-center ">
              <div className="w-[2px] h-[33px] bg-[#BD6B00] rounded-full "></div>
              <h3 className="text-xl font-semibold">Fast Integration</h3>
            </div>
            <p className="font-medium">
              Go live in minutes with our comprehensive SDKs and clear
              documentation
            </p>
          </div>

          {/* Secure Endpoints */}
          <div className="bg-white border border-gray-200 rounded-3xl py-5 px-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-[11px] flex gap-2 items-center ">
              <div className="w-[2px] h-[33px] bg-[#BD6B00] rounded-full"></div>
              <h3 className="text-xl font-semibold">Secure Endpoints</h3>
            </div>
            <p className="font-medium">
              All data is encrypted and protected with industry-standard
              security protocols.
            </p>
          </div>

          {/* Reliable Uptime */}
          <div className="bg-white border border-gray-200 rounded-3xl py-5 px-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-[11px] flex gap-2 items-center ">
              <div className="w-[2px] h-[33px] bg-[#BD6B00] rounded-full "></div>
              <h3 className="text-xl font-semibold ">Reliable Uptime</h3>
            </div>
            <p className="font-medium">
              Our platform guarantees high availability for your
              mission-critical applications.
            </p>
          </div>

          {/* Global Support */}
          <div className="bg-white border border-gray-200 rounded-3xl py-5 px-6 hover:shadow-lg transition-shadow duration-300">
            <div className="mb-[11px] flex gap-2 items-center ">
              <div className="w-[2px] h-[33px] bg-[#BD6B00] rounded-full "></div>
              <h3 className="text-xl font-semibold">Global Support</h3>
            </div>
            <p className="font-medium">
              Process payments and transfers across multiple currencies and
              regions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default APIFeaturesSection;
