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
      stroke="#7B61FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.05}
      d="M9.96 4.5 6.7 7.76a.993.993 0 0 1-1.4 0L2.04 4.5"
    />
  </svg>
);
export default SvgComponent;
