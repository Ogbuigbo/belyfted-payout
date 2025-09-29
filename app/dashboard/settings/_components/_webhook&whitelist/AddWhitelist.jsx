import React, { useState } from "react";

function AddWhitelist() {
  const [ipAddress, setIpAddress] = useState("");

  const handleSave = () => {
    if (ipAddress.trim()) {
      // Handle save logic here
      console.log("Saving IP addresses:", ipAddress);
    }
  };

  const handleCancel = () => {
    setIpAddress("");
    // Handle cancel logic here
    console.log("Cancelled");
  };

  return (
    <div className="h-[80vh] relative w-full">
      <div className="mb-2">
        <label
          htmlFor="ipAddress"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter IP Address
        </label>
        <textarea
          id="ipAddress"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
          placeholder=""
          className="w-full h-[329px] px-3 py-2 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <p className="text-sm text-gray-500 ">
        Use comma to separated list of IPs/domains
      </p>

      <div className="absolute bottom-0 w-full flex gap-6">
        <button className="text-sm font-medium border border-[#C8C6C9] rounded-lg py-4 w-full">
          Cancel
        </button>
        <button className="text-sm font-medium text-white bg-[#042656] rounded-lg py-4 w-full">
          Save
        </button>
      </div>
    </div>
  );
}

export default AddWhitelist;
