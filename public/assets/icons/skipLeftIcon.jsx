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
      d="M1.333 10.667V1.333m9.334 10L4 6 10.667.667v10.666Z"
    />
  </svg>
);
export default SvgComponent;
