import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={42}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M21 38.5c9.665 0 17.5-7.835 17.5-17.5S30.665 3.5 21 3.5 3.5 11.335 3.5 21 11.335 38.5 21 38.5Z"
      opacity={0.4}
    />
    <path
      fill="url(#b)"
      d="m15.19 20.841 2.887.718-1.662 6.72c-.385 1.575.385 2.1 1.715 1.172l9.065-6.282c1.102-.77.945-1.663-.368-1.995l-2.887-.718 1.662-6.72c.385-1.575-.385-2.1-1.715-1.172l-9.065 6.282c-1.102.77-.945 1.663.368 1.995Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={21}
        x2={21}
        y1={3.5}
        y2={38.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#7D8998" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={21.009}
        x2={21.009}
        y1={12.105}
        y2={29.91}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#7D8998" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgComponent;
