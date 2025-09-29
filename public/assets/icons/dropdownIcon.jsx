import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#292D32"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M11.62 5.72 7.817 9.525c-.45.45-1.184.45-1.634 0L2.38 5.721"
    />
  </svg>
);
export default SvgComponent;
