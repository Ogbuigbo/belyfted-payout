import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={6}
    fill="none"
    {...props}
  >
    <g
      stroke="#14E177"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.354}
      clipPath="url(#a)"
    >
      <path d="M5.796 1.874 3.52 3.824 2.322 2.799.525 4.338" />
      <path d="M4.358 1.874h1.438v1.232" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.285 5.57h5.75V.641H.285z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
