import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <path
      stroke="#F39C12"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M18.929 8.694a8 8 0 0 0-14.237.746m16.077-3.23-.73 3.16a1 1 0 0 1-1.2.749l-3.159-.73M5.072 16.694a8 8 0 0 0 14.237-.746m-16.077 3.23.73-3.159a1 1 0 0 1 1.199-.75l3.16.73"
    />
  </svg>
);
export default SvgComponent;
