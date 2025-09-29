import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  showIcon = true,
  iconType = "arrow",
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  // Base styles that apply to all buttons
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-200 shadow-xl text-sm hover:shadow-2xl transform hover:-translate-y-1 inline-flex gap-2 items-center group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none";

  const variants = {
    primary: "bg-[#F39C12] hover:bg-orange-600 text-[#042656]",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800",
    outline:
      "border-2 border-[#F39C12] text-[#F39C12] hover:bg-[#F39C12] hover:text-white bg-transparent",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  // Size styles
  const sizes = {
    small: "px-2 py-2 text-sm",
    medium: "px-4 py-4",
    large: "px-6 py-4 text-lg",
  };

  // Icon components
  const ArrowIcon = () => (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover:translate-x-1 transition-transform duration-200"
    >
      <path
        d="M10.5003 18.3346C15.1027 18.3346 18.8337 14.6037 18.8337 10.0013C18.8337 5.39893 15.1027 1.66797 10.5003 1.66797C5.89795 1.66797 2.16699 5.39893 2.16699 10.0013C2.16699 14.6037 5.89795 18.3346 10.5003 18.3346Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.58301 10H12.583"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.917 12.5L13.417 10L10.917 7.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const PlusIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 4V16M4 10H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const CheckIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.667 5L7.5 14.167L3.333 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const getIcon = () => {
    switch (iconType) {
      case "arrow":
        return <ArrowIcon />;
      case "plus":
        return <PlusIcon />;
      case "check":
        return <CheckIcon />;
      default:
        return <ArrowIcon />;
    }
  };

  // Combine all styles
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
      {showIcon && getIcon()}
    </button>
  );
};

export default Button;
