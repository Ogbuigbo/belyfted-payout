import React from "react";

function ExportItem() {
  return (
    <button
      type="button"
      className="flex items-center gap-2 pr-2 pl-4 py-[12px] border border-[#C8C6C9] rounded bg-white hover:bg-gray-100 text-sm text-[#777779]"
    >
      Export
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.96 6.43359C13.36 6.64026 14.34 7.87359 14.34 10.5736V10.6603C14.34 13.6403 13.1467 14.8336 10.1667 14.8336H5.82665C2.84665 14.8336 1.65332 13.6403 1.65332 10.6603V10.5736C1.65332 7.89359 2.61999 6.66026 4.97999 6.44026"
          stroke="#777779"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8 10.4988V2.91211"
          stroke="#777779"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.2333 4.39935L8 2.16602L5.76666 4.39935"
          stroke="#777779"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
}

export default ExportItem;
