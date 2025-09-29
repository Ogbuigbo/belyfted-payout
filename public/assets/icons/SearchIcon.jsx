import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}
  >
    <circle
      cx={6.189}
      cy={6.359}
      r={5.189}
      stroke="#777779"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
    />
    <path
      stroke="#777779"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.1}
      d="M9.757 10.225 13 13.468"
    />
  </svg>
);
export default SvgComponent;
