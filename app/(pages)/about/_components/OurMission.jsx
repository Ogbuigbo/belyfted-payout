import Image from "next/image";
import React from "react";

function OurMissionSection() {
  return (
    <div className="pt-[103px] pb-12">
      <div className="bg-[#E6E9EE] py-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="absolute left-0 top-[15%]">
            <svg
              width="153"
              height="168"
              viewBox="0 0 153 168"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.6247 45.3952L78.0239 34.9962C89.7328 23.2872 105.062 18.4304 121.285 17.6367C127.596 17.328 130.751 17.1737 133.281 19.7037C135.811 22.2337 135.656 25.3888 135.348 31.699C134.554 47.9223 129.697 63.2517 117.988 74.9605L107.589 85.3597C99.0253 93.9235 96.5907 96.3588 98.3883 105.648C100.163 112.744 101.88 119.615 96.7202 124.775C90.4615 131.033 84.7523 131.033 78.4936 124.775L28.2097 74.4908C21.951 68.2319 21.9508 62.5229 28.2097 56.2641C33.3693 51.1044 40.2406 52.8219 47.3364 54.596C56.6256 56.3939 59.0609 53.959 67.6247 45.3952Z"
                stroke="#F2F0F3"
                stroke-width="10.5"
                stroke-linejoin="round"
              />
              <path
                d="M103.984 48.9688H104.047"
                stroke="#F2F0F3"
                stroke-width="14"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.51562 150.5L37.5156 115.5"
                stroke="#F2F0F3"
                stroke-width="10.5"
                stroke-linecap="round"
              />
              <path
                d="M44.5156 150.5L58.5156 136.5"
                stroke="#F2F0F3"
                stroke-width="10.5"
                stroke-linecap="round"
              />
              <path
                d="M2.51562 108.5L16.5156 94.5"
                stroke="#F2F0F3"
                stroke-width="10.5"
                stroke-linecap="round"
              />
            </svg>
          </div>
          <div className="absolute inset-0">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756115885/hero-bg_obbxun.png"
              alt="Background pattern"
              fill
              className="object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-[60%_40%] lg:grid-cols-2 relative gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-4 relative z-20">
              {/* Icon and Title */}
              <div className="flex md:flex-col gap-2 md:gap-0 justify-center items-center md:items-start space-y-2 mb-4">
                <div className="">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7377 8.64745L17.7185 6.66669C19.9487 4.4364 22.8686 3.51129 25.9587 3.36012C27.1607 3.30132 27.7617 3.27192 28.2435 3.75384C28.7255 4.23574 28.6961 4.8367 28.6373 6.03865C28.4861 9.1288 27.561 12.0487 25.3307 14.2789L23.3499 16.2597C21.7187 17.8909 21.255 18.3548 21.5974 20.1241C21.9354 21.4757 22.2625 22.7845 21.2797 23.7673C20.0875 24.9595 19.0001 24.9595 17.8079 23.7673L8.23004 14.1895C7.03792 12.9973 7.03788 11.9099 8.23004 10.7177C9.21283 9.73492 10.5217 10.062 11.8732 10.4C13.6426 10.7424 14.1065 10.2786 15.7377 8.64745Z"
                      stroke="#042656"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.6641 9.32812H22.6761"
                      stroke="#042656"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.33594 28.6667L10.0026 22"
                      stroke="#042656"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11.3359 28.6667L14.0026 26"
                      stroke="#042656"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M3.33594 20.6667L6.0026 18"
                      stroke="#042656"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl  font-bold text-[#042656]">
                  Our Mission
                </h2>
              </div>

              {/* Mission Text */}
              <p className="text-[#777779] font-semibold text-justify md:text-left  max-w-[529px]">
                Our mission is to simplify complex financial operations and
                provide businesses with reliable access to the tools they need
                to transact globally.
              </p>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              {/* Background decorative elements */}
              <div className="absolute -top-4 right-10 ">
                <svg
                  width="230"
                  height="230"
                  viewBox="0 0 230 230"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.3"
                    x="-6"
                    y="66.8828"
                    width="184"
                    height="184"
                    rx="20"
                    transform="rotate(-23.3343 -6 66.8828)"
                    fill="#F39C12"
                  />
                </svg>
              </div>
              <div className="absolute -bottom-4 -right-10">
                <svg
                  width="366"
                  height="192"
                  viewBox="0 0 366 192"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    opacity="0.3"
                    x="-4"
                    y="76.2188"
                    width="355.498"
                    height="121.933"
                    rx="20"
                    transform="rotate(-13.0417 -4 76.2188)"
                    fill="#F39C12"
                  />
                </svg>
              </div>

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden ">
                <Image
                  width={445}
                  height={445}
                  src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756747692/image_69_albkw2.png"
                  alt="Digital financial technology visualization"
                  className="lg:w-full lg:h-auto md:h-[500px]  w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMissionSection;
