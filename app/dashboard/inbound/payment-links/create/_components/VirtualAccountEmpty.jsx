import React from "react";
import VcIcon from "../../../../../../public/assets/icons/vcIcon";

export default function VirtualAccountEmpty({ onRequest }) {
  return (
    <div className="flex justify-center items-center rounded-xl shadow p-8  bg-white w-full mt-[64px]">
      <div className=" max-w-lg gap-4 flex flex-col md:px-12 items-center">
        {/* Replace with your SVG/icon as needed */}
        <div className="mb-4">
          <VcIcon />
        </div>
        <h2 className="text-xl font-semibold mb-2 text-center">
          Create Your Virtual Account
        </h2>
        <p className="text-[#777779] font-medium text-center mb-6 text-sm">
          Receive payments efficiently with your dedicated virtual account
          number (BVN). It functions like a standard bank account.
        </p>
        <button
          className="bg-[#042656] text-white px-6 py-4 w-full rounded text-sm font-semibold"
          onClick={onRequest}
        >
          Request Account
        </button>
      </div>
    </div>
  );
}
