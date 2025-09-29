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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M15 16.875a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75ZM19.875 13.125v3.75M12.75 19.5a2.94 2.94 0 0 1-.435 1.545A2.977 2.977 0 0 1 9.75 22.5a2.977 2.977 0 0 1-2.565-1.455A2.94 2.94 0 0 1 6.75 19.5a3 3 0 1 1 6 0Z"
    />
    <path
      stroke="#042656"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.582 19.5.743.743 1.597-1.477"
    />
    <path
      stroke="#042656"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.5 17.475V12.75C7.5 10.125 9 9 11.25 9h7.5c2.25 0 3.75 1.125 3.75 3.75v4.5c0 2.625-1.5 3.75-3.75 3.75h-6.375"
    />
  </svg>
);
export default SvgComponent;
