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
      d="M12.5 4.167 8.058 9.349a1 1 0 0 0 0 1.302l4.442 5.182"
    />
  </svg>
);
export default SvgComponent;
