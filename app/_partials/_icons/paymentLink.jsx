import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <rect width={29} height={29} x={0.5} y={0.5} stroke="#C8C6C9" rx={7.5} />
    <path fill="#042656" d="m13.125 16.875 3.75-3.75-3.75 3.75Z" />
    <path
      stroke="#042656"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m13.125 16.875 3.75-3.75M18.635 16.957 20.592 15A3.954 3.954 0 1 0 15 9.408l-1.957 1.957m3.914 7.27L15 20.592A3.954 3.954 0 1 1 9.408 15l1.957-1.957"
    />
  </svg>
);
export default SvgComponent;
