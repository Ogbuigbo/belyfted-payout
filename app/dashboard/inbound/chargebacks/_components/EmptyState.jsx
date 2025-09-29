import React from "react";

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-[#e6e6e8] rounded-xl min-h-[424px] w-full mt-16">
      <svg
        width="43"
        height="43"
        viewBox="0 0 43 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.7499 18.875V17.9999C33.7499 11.4003 33.7497 8.10044 31.6996 6.0502C29.6493 4 26.3495 4 19.7499 4C13.1505 4 9.8506 4.00011 7.80035 6.05028C5.75016 8.10051 5.75012 11.4003 5.75007 17.9998L5.75 25.875C5.74995 31.628 5.74993 34.5046 7.33879 36.4406C7.62971 36.7952 7.95476 37.1202 8.30925 37.4112C10.2453 39 13.1219 39 18.8749 39"
          stroke="#777779"
          stroke-width="2.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.75 12.75H26.75M12.75 19.75H19.75"
          stroke="#777779"
          stroke-width="2.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M32 32.875L29.375 31.9125V27.625M21.5 31.125C21.5 35.4743 25.0257 39 29.375 39C33.7243 39 37.25 35.4743 37.25 31.125C37.25 26.7757 33.7243 23.25 29.375 23.25C25.0257 23.25 21.5 26.7757 21.5 31.125Z"
          stroke="#777779"
          stroke-width="2.625"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <h1 className="font-semibold">No Recent Chargebacks</h1>

      <p className="font-medium text-sm text-[#8E98A8]">
        You have no chargebacks raised on your collections
      </p>
    </div>
  );
}

export default EmptyState;
