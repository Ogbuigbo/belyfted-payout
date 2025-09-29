import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={13}
    fill="none"
    {...props}
  >
    <path
      stroke="#2F4B73"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.215 3.465 10.25 6.5 7.215 9.535M5.505 6.5h4.66M1.75 6.5h1.735"
    />
  </svg>
);
export default SvgComponent;
