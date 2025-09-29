import Image from "next/image";
import React from "react";

function OurStorySection() {
  return (
    <div className="pt-[76px] pb-">
      {/* Header with progress indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center space-x-4">
          <svg
            width="103"
            height="16"
            viewBox="0 0 103 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="87"
              y1="8.5"
              x2="-4.3711e-08"
              y2="8.49999"
              stroke="url(#paint0_linear_828_23570)"
            />
            <circle cx="95" cy="8" r="8" fill="#042656" />
            <defs>
              <linearGradient
                id="paint0_linear_828_23570"
                x1="4.37111e-08"
                y1="7.49999"
                x2="87"
                y2="7.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D5E2F6" />
                <stop offset="0.653846" stop-color="#0953BC" />
              </linearGradient>
            </defs>
          </svg>

          <div className="bg-white px-6 py-[10px] rounded-[28px] border border-[#042656] ">
            <span className="text-[#042656] font-semibold">Our Story</span>
          </div>
          <svg
            width="103"
            height="16"
            viewBox="0 0 103 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              y1="-0.5"
              x2="87"
              y2="-0.5"
              transform="matrix(1 -8.74221e-08 -8.74221e-08 -1 16 8)"
              stroke="url(#paint0_linear_828_23575)"
            />
            <circle
              cx="8"
              cy="8"
              r="8"
              transform="matrix(-1 0 0 1 16 0)"
              fill="#042656"
            />
            <defs>
              <linearGradient
                id="paint0_linear_828_23575"
                x1="87"
                y1="0.5"
                x2="0"
                y2="0.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D5E2F6" />
                <stop offset="0.66" stop-color="#0953BC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Main heading */}
      <p className="font-semibold text-center mb-16 max-w-[693px] mx-auto px-4 lg:px-0">
        Born from a need to simplify business finance, we built a technology
        platform with powerful tools. We empower companies to overcome financial
        barriers, enabling easier transactions and driving their growth.
      </p>

      {/* Main content area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[60%_40%] gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <Image
              width={737}
              height={492}
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756744729/image_20_wggcar.png"
              alt="Team collaboration - Four professionals working together around a laptop"
              className="w-full h-[492px] object-cover rounded-lg shadow-lg blur-[200]"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#D9D9D9] bg-opacity-25 rounded-lg"></div>
          </div>

          {/* Right side - Statistics */}
          <div className="space-y-8">
            {/* Transactions Processed */}
            <div className="bg-white py-4 px-4  rounded-lg  border-[0.5px] shadow-md border-[#C8C6C9]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-[#303032] mb-1">
                    5M+
                  </h3>
                  <p className="text-[#777779] font-medium text-xs">
                    Transactions Processed
                  </p>
                </div>
                <div className="">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#E6E9EE"
                    />
                    <path
                      d="M21.1666 15.5026V15.1692C21.1666 12.6551 21.1666 11.398 20.3856 10.617C19.6045 9.83594 18.3474 9.83594 15.8333 9.83594C13.3192 9.83594 12.0621 9.83598 11.2811 10.617C10.5001 11.398 10.5 12.6551 10.5 15.1692L10.5 18.1693C10.5 20.3609 10.5 21.4567 11.1053 22.1943C11.2161 22.3293 11.3399 22.4531 11.475 22.564C12.2125 23.1693 13.3083 23.1693 15.5 23.1693"
                      stroke="#042656"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.168 13.1641H18.5013M13.168 15.8307H15.8346"
                      stroke="#042656"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.5 20.8307L19.5 20.4641V18.8307M16.5 20.1641C16.5 21.8209 17.8431 23.1641 19.5 23.1641C21.1569 23.1641 22.5 21.8209 22.5 20.1641C22.5 18.5072 21.1569 17.1641 19.5 17.1641C17.8431 17.1641 16.5 18.5072 16.5 20.1641Z"
                      stroke="#042656"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Platform Up-time */}
            <div className="bg-white py-4 px-4  rounded-lg  border-[0.5px] shadow-md border-[#C8C6C9]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-[#303032] mb-1">
                    99.9%
                  </h3>
                  <p className="text-[#777779] font-medium text-xs">
                    Platform Up-time
                  </p>
                </div>
                <div className="">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#E6E9EE"
                    />
                    <path
                      d="M23.1654 16.5026C23.1654 20.1826 20.1787 23.1693 16.4987 23.1693C12.8187 23.1693 9.83203 20.1826 9.83203 16.5026C9.83203 12.8226 12.8187 9.83594 16.4987 9.83594C20.1787 9.83594 23.1654 12.8226 23.1654 16.5026Z"
                      stroke="#042656"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.9739 18.6211L16.9072 17.3878C16.5472 17.1745 16.2539 16.6611 16.2539 16.2411V13.5078"
                      stroke="#042656"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Businesses Trust Us */}
            <div className="bg-white py-4 px-4  rounded-lg  border-[0.5px] shadow-md border-[#C8C6C9]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-[#303032] mb-1">
                    15,000+
                  </h3>
                  <p className="text-[#777779] font-medium text-xs">
                    Businesses Trust Us
                  </p>
                </div>
                <div className="">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#E6E9EE"
                    />
                    <path
                      d="M15.4934 9.98312L12.1668 11.2365C11.4001 11.5231 10.7734 12.4298 10.7734 13.2431V18.1965C10.7734 18.9831 11.2934 20.0165 11.9268 20.4898L14.7934 22.6298C15.7334 23.3365 17.2801 23.3365 18.2201 22.6298L21.0868 20.4898C21.7201 20.0165 22.2401 18.9831 22.2401 18.1965V13.2431C22.2401 12.4231 21.6134 11.5165 20.8468 11.2298L17.5201 9.98312C16.9534 9.77646 16.0468 9.77646 15.4934 9.98312Z"
                      stroke="#042656"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.5352 16.4105L15.6085 17.4839L18.4752 14.6172"
                      stroke="#042656"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Currencies Supported */}
            <div className="bg-white py-4 px-4  rounded-lg  border-[0.5px] shadow-md border-[#C8C6C9]">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-[#303032] mb-1">
                    30+
                  </h3>
                  <p className="text-[#777779] font-medium text-xs">
                    Currencies Supported
                  </p>
                </div>
                <div className="">
                  <svg
                    width="33"
                    height="33"
                    viewBox="0 0 33 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#E6E9EE"
                    />
                    <path
                      d="M19.832 22.1693H13.1654C11.1654 22.1693 9.83203 21.1693 9.83203 18.8359V14.1693C9.83203 11.8359 11.1654 10.8359 13.1654 10.8359H19.832C21.832 10.8359 23.1654 11.8359 23.1654 14.1693V18.8359C23.1654 21.1693 21.832 22.1693 19.832 22.1693Z"
                      stroke="#042656"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.5 18.5C17.6046 18.5 18.5 17.6046 18.5 16.5C18.5 15.3954 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 15.3954 14.5 16.5C14.5 17.6046 15.3954 18.5 16.5 18.5Z"
                      stroke="#042656"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.168 14.8359V18.1693"
                      stroke="#042656"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20.832 14.8359V18.1693"
                      stroke="#292D32"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStorySection;
