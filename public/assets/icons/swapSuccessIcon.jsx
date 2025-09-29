import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={89}
    height={88}
    fill="none"
    {...props}
  >
    <g filter="url(#a)">
      <rect width={72} height={72} x={8.5} y={8} fill="green" rx={36} />
      <path
        stroke="#E6F2E6"
        strokeWidth={2.625}
        d="M57.833 44c0-7.364-5.97-13.334-13.333-13.334-7.364 0-13.333 5.97-13.333 13.333 0 7.364 5.97 13.334 13.333 13.334 7.364 0 13.333-5.97 13.333-13.334Z"
      />
      <path
        stroke="#E6F2E6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.625}
        d="M39.167 44.667 42.5 48l7.333-8"
      />
    </g>
    <defs>
      <filter
        id="a"
        width={88}
        height={88}
        x={0.5}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={4}
          result="effect1_dropShadow_892_34040"
        />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0 0 0 0 0.2 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_892_34040"
        />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius={8}
          result="effect2_dropShadow_892_34040"
        />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0.501961 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend
          in2="effect1_dropShadow_892_34040"
          result="effect2_dropShadow_892_34040"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_892_34040"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgComponent;
