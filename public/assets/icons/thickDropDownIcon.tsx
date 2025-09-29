import * as React from "react"
const SvgComponent = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={5}
    fill="none"
    {...props}
  >
    <path fill="#777779" d="M5 5 0 0h10L5 5Z" />
  </svg>
)
export default SvgComponent
