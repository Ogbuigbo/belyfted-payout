import React from "react";

function Security() {
  return (
    <div className="flex flex-col justify-center items-center text-center pt-[66px]">
      <h1 className="text-[#303032] lg:text-[38px] text-3xl font-bold text-center mb-8">
        Security & Compliance
      </h1>
      <p className="font-medium text-[#474649] text-justify lg:text-center max-w-[889px] px-6 lg:px-0">
        At Yodepay, security is our top priority. We adhere to the highest
        industry standards, including PCI-DSS compliance, ensuring all sensitive
        data is handled with the utmost care. Our platform uses end-to-end
        encryption for all transactions and relies on secure authentication
        methods like API keys and OAuth to protect your data.
      </p>
    </div>
  );
}

export default Security;
