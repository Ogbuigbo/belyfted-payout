import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}
  >
    <path
      stroke="#703D29"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.198 5.48h4.293v4.292M8.135 8.835 11.43 5.54M5.48 11.49l1.227-1.226"
    />
  </svg>
);
export default SvgComponent;
