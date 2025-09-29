import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#777779"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.333}
      d="M10.667 1.333v9.334m-9.334-10L8 6l-6.667 5.333V.667Z"
    />
  </svg>
);
export default SvgComponent;
