import React, { useState, useEffect } from "react";

function EditWhitelist({ ipAddress, onSubmit, onClose }) {
  const [ip, setIp] = useState("");

  useEffect(() => {
    if (ipAddress) {
      setIp(ipAddress.ipAddress || "");
    }
  }, [ipAddress]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...ipAddress,
      ipAddress: ip,
    });
  };

  return (
    <div className="relative h-[75vh]">
      <div>
        <label className="text-sm font-medium  text-[#303032]">
          Enter IP Address
        </label>
        <textarea
          id="ipAddress"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder=""
          className="w-full h-[329px] px-3 py-2 border mt-1 border-gray-300 rounded-xl resize-none focus:outline-none "
        />
      </div>

      <p className="text-sm [#777779] font-medium">
        Use comma to separated list of IPs/domains
      </p>

      <div className="absolute bottom-0 w-full flex gap-6">
        <button
          onClick={onClose}
          className="text-sm font-medium border border-[#C8C6C9] rounded-lg py-4 w-full"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="text-sm font-medium text-white bg-[#042656] rounded-lg py-4 w-full"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditWhitelist;
