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
    <path
      stroke="#042656"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.5 7.5h1.305c.81 0 1.447.697 1.38 1.5l-.623 7.47a2.097 2.097 0 0 0 2.093 2.273h7.987c1.08 0 2.026-.885 2.108-1.958l.405-5.625c.09-1.245-.855-2.258-2.108-2.258h-9.682"
    />
    <path
      fill="#042656"
      stroke="#042656"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.188 22.5a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875ZM12.188 22.5a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875Z"
    />
    <path
      stroke="#042656"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.75 12h9"
    />
  </svg>
);
export default SvgComponent;
