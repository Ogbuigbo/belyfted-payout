import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <path
      fill="#042656"
      d="m6.256 22.95 6.795 6.795c2.79 2.79 7.32 2.79 10.125 0l6.585-6.585c2.79-2.79 2.79-7.32 0-10.125l-6.81-6.78a7.126 7.126 0 0 0-5.4-2.085l-7.5.36a5.796 5.796 0 0 0-5.535 5.505l-.36 7.5a7.206 7.206 0 0 0 2.1 5.415Z"
      opacity={0.4}
    />
    <path
      fill="#042656"
      d="M14.25 18.57a4.32 4.32 0 1 0 0-8.64 4.32 4.32 0 0 0 0 8.64Z"
    />
  </svg>
);
export default SvgComponent;
