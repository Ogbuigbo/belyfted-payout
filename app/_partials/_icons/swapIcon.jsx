import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <rect width={29} height={29} x={0.5} y={0.5} stroke="#C8C6C9" rx={7.5} />
    <path
      stroke="#042656"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.733 20.625A6.75 6.75 0 0 0 13.5 8.417m5.233 12.208V18m0 2.625h2.642M11.25 9.387a6.75 6.75 0 0 0 5.25 12.196M11.25 9.387V12m0-2.613H8.625"
    />
  </svg>
);
export default SvgComponent;
