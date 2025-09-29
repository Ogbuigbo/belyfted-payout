import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#777779"
      strokeLinecap="round"
      strokeWidth={1.25}
      d="m7.5 15.833 4.442-5.182a1 1 0 0 0 0-1.302L7.5 4.167"
    />
  </svg>
);
export default SvgComponent;
