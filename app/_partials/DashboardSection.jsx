import Image from "next/image";
import React from "react";

function DashboardSection() {
  return (
    <div className="w-full relative flex justify-center items-center pb-16 mt-[200px] md:mt-16 px-6 lg:mt-0 lg:px-12 xl:px-0">
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756277220/Dashboard_1_rvu2ui.png"
        width={1103}
        height={817}
        alt="belyfted-dashboard"
        className="w-full h-auto max-w-6xl"
        loading="lazy"
      />

      <div className="absolute md:-bottom-16 lg:-bottom-9 bg-white/80 backdrop-blur-md w-full flex items-end justify-center z-20 pb-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl py-6 rounded-xl px-8 mt-12 bg-white">
          {/* Scalability Card */}
          <div className="flex-1">
            <div className="mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 3.09779C8 3.09779 4.03374 2.74194 3.38783 3.38785C2.74191 4.03375 3.09783 8 3.09783 8"
                  stroke="#D846EE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 20.9022C8 20.9022 4.03374 21.2581 3.38783 20.6122C2.74191 19.9662 3.09783 16 3.09783 16"
                  stroke="#D846EE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 3.09779C16 3.09779 19.9663 2.74194 20.6122 3.38785C21.2581 4.03375 20.9022 8 20.9022 8"
                  stroke="#D846EE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16 20.9022C16 20.9022 19.9663 21.2581 20.6122 20.6122C21.2581 19.9662 20.9022 16 20.9022 16"
                  stroke="#D846EE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.0117 9.997L20.0634 3.94531"
                  stroke="#D846EE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99792 14.0039L3.64062 20.3822"
                  stroke="#D846EE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99732 10.0029L3.8457 3.85938"
                  stroke="#D846EE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.9805 14.0039L20.5289 20.4998"
                  stroke="#D846EE"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Scalability
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Engineered to grow with your business, our platform handles high
              transaction volumes without compromising performance.
            </p>
          </div>

          {/* Security Card */}
          <div className="flex-1 ">
            <div className="mb-6">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7088 2.49534C14.8165 1.55382 12.5009 1 10 1C7.4991 1 5.1835 1.55382 3.29116 2.49534C2.36318 2.95706 1.89919 3.18792 1.4496 3.91378C1 4.63965 1 5.34248 1 6.74814V10.2371C1 15.9205 5.54236 19.0804 8.173 20.4338C8.9067 20.8113 9.2735 21 10 21C10.7265 21 11.0933 20.8113 11.8269 20.4338C14.4576 19.0804 19 15.9205 19 10.2371V6.74814C19 5.34249 19 4.63966 18.5504 3.91378C18.1008 3.18791 17.6368 2.95706 16.7088 2.49534Z"
                  stroke="#34C759"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Security</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your data and transactions are protected by industry-leading
              encryption and robust fraud detection.
            </p>
          </div>

          {/* Efficiency Card */}
          <div className="flex-1">
            <div className="mb-6">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.62814 12.6736H8.16918C6.68545 12.6736 5.94358 12.6736 5.62736 12.1844C5.31114 11.6953 5.61244 11.0138 6.21504 9.65083L8.02668 5.55323C8.57457 4.314 8.84852 3.69438 9.37997 3.34719C9.91142 3 10.5859 3 11.935 3H14.0244C15.6632 3 16.4826 3 16.7916 3.53535C17.1007 4.0707 16.6942 4.78588 15.8811 6.21623L14.8092 8.10188C14.405 8.81295 14.2029 9.16849 14.2057 9.45952C14.2094 9.83775 14.4105 10.1862 14.7354 10.377C14.9854 10.5239 15.3927 10.5239 16.2074 10.5239C17.2373 10.5239 17.7523 10.5239 18.0205 10.7022C18.3689 10.9338 18.5513 11.3482 18.4874 11.7632C18.4382 12.0826 18.0918 12.4656 17.399 13.2317L11.8639 19.3523C10.7767 20.5545 10.2331 21.1556 9.86807 20.9654C9.50303 20.7751 9.67833 19.9822 10.0289 18.3962L10.7157 15.2896C10.9826 14.082 11.1161 13.4782 10.7951 13.0759C10.4741 12.6736 9.85877 12.6736 8.62814 12.6736Z"
                  stroke="#FFA500"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Efficiency</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Streamline your payout process with{" "}
              <br className="hidden md:flex" /> automated workflows and
              real-time <br className="hidden md:flex" /> transaction tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;
