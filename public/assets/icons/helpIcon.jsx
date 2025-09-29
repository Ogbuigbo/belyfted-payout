import * as React from "react";
const SvgComponent = ({ isActive = false, ...props }) => {
  const activeBackground = "#F39C12";
  const activeDetail = "#042656";
  const inactiveColor = "#E6E9EE";
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      {...props}
    >
      {isActive ? (
        <>
          {/* Filled orange background circle */}
          <circle
            cx="12"
            cy="12"
            r="10"
            fill={activeBackground}
          />
          {/* Dark blue details */}
          <path
            stroke={activeDetail}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.5 9.5a2.5 2.5 0 1 1 3.912 2.064C12.728 12.032 12 12.672 12 13.5"
          />
          <path fill="#F8E8E8" d="M12 17h.009H12Z" />
          <path
            stroke={activeDetail}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 17h.009"
          />
        </>
      ) : (
        <>
          {/* Inactive state - outline style */}
          <path
            stroke={inactiveColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
          />
          <path
            stroke={inactiveColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.5 9.5a2.5 2.5 0 1 1 3.912 2.064C12.728 12.032 12 12.672 12 13.5"
          />
          <path fill="#F8E8E8" d="M12 17h.009H12Z" />
          <path
            stroke={inactiveColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M12 17h.009"
          />
        </>
      )}
    </svg>
  );
};
export default SvgComponent;
