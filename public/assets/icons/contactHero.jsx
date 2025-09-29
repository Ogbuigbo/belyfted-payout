import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={412}
    height={392}
    fill="none"
    {...props}
  >
    <g opacity={0.5}>
      <path
        stroke="#F7F7F7"
        strokeWidth={12}
        d="m52.542 173.212 174.474 80.129-17.842-191.164L52.542 173.212Z"
      />
      <mask id="a" fill="#fff">
        <path d="M161.731 296.709a104.727 104.727 0 0 0 139.267 50.382 104.726 104.726 0 0 0 50.382-139.267l-94.825 44.442-94.824 44.443Z" />
      </mask>
      <path
        stroke="#F7F7F7"
        strokeWidth={24}
        d="M161.731 296.709a104.727 104.727 0 0 0 139.267 50.382 104.726 104.726 0 0 0 50.382-139.267l-94.825 44.442-94.824 44.443Z"
        mask="url(#a)"
      />
      <circle
        cx={70.5}
        cy={70.5}
        r={64.5}
        stroke="#FEF5E7"
        strokeOpacity={0.2}
        strokeWidth={12}
        transform="matrix(-1 0 0 1 432.82 71)"
      />
      <circle
        cx={9}
        cy={9}
        r={9}
        fill="#6D819D"
        transform="matrix(-1 0 0 1 265.82 177)"
      />
      <circle
        cx={9}
        cy={9}
        r={9}
        fill="#FAD69E"
        transform="matrix(-1 0 0 1 171.82 284)"
      />
    </g>
  </svg>
);
export default SvgComponent;
