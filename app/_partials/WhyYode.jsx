import React from "react";
import ImprovedIcon from "../../public/assets/icons/improvedRecipient";
import CostIcon from "../../public/assets/icons/costIcon";
import EfficiencyIcon from "../../public/assets/icons/efficiencyIcon";
import SecureIcon from "../../public/assets/icons/secureIcon";

function WhyYode() {
  const features = [
    {
      id: 1,
      icon: <ImprovedIcon />,
      title: "IMPROVED RECIPIENT EXPERIENCE",
      description:
        "Recipients receive payments instantly or within a very short time frame.",
      position: "top-left",
      dotIcon: (
        <svg
          width="224"
          height="32"
          viewBox="0 0 224 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 28.5015L33.47 2.85156H143.79H217"
            stroke="#474649"
            stroke-width="0.6844"
            stroke-miterlimit="10"
          />
          <path
            d="M216.861 0.5C215.556 0.5 214.501 1.55707 214.501 2.84961C214.501 4.15221 215.556 5.20001 216.851 5.2002H216.854C218.155 5.20821 219.211 4.15395 219.211 2.84961C219.211 1.55606 218.155 0.500212 216.861 0.5Z"
            fill="#3B81F5"
            stroke="#042656"
          />
          <path
            d="M5.85156 26.5H5.84766C4.55835 26.492 3.50122 27.5443 3.50098 28.8496C3.50098 30.1523 4.55656 31.2002 5.85156 31.2002C7.1541 31.2 8.20117 30.1445 8.20117 28.8496C8.20093 27.5472 7.14624 26.5002 5.85156 26.5Z"
            fill="#3B81F5"
            stroke="#042656"
          />
        </svg>
      ),
    },
    {
      id: 2,
      icon: <CostIcon />,
      title: "COST SAVINGS AND CONTROL",
      description:
        "Take full control of your finances. Automate payments and track all expenses to reduce costs",
      position: "top-middle",
      dotIcon: (
        <svg
          width="224"
          height="32"
          viewBox="0 0 224 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 28.5015L33.47 2.85156H143.79H217"
            stroke="#474649"
            stroke-width="0.6844"
            stroke-miterlimit="10"
          />
          <path
            d="M214.001 2.85C214.001 4.43 215.281 5.7 216.851 5.7C218.431 5.71 219.711 4.43 219.711 2.85C219.711 1.28 218.431 0 216.861 0C215.281 0 214.001 1.28 214.001 2.85Z"
            fill="#A755F6"
          />
          <path
            d="M3.00117 28.8501C3.00117 30.4301 4.28118 31.7001 5.85118 31.7001C7.43118 31.7001 8.70117 30.4201 8.70117 28.8501C8.70117 27.2701 7.42118 26.0001 5.85118 26.0001C4.28118 25.9901 3.00117 27.2701 3.00117 28.8501Z"
            fill="#A755F6"
          />
        </svg>
      ),
    },
    {
      id: 3,
      icon: <EfficiencyIcon />,
      title: "EFFICIENCY AND AUTOMATION",
      description: "Automate payments to save time and reduce manual work.",
      position: "top-right",
      dotIcon: (
        <svg
          width="224"
          height="32"
          viewBox="0 0 224 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.5 28.5015L33.47 2.85156H143.79H217"
            stroke="#474649"
            stroke-width="0.6844"
            stroke-miterlimit="10"
          />
          <path
            d="M214.001 2.85C214.001 4.43 215.281 5.7 216.851 5.7C218.431 5.71 219.711 4.43 219.711 2.85C219.711 1.28 218.431 0 216.861 0C215.281 0 214.001 1.28 214.001 2.85Z"
            fill="#F49D0B"
          />
          <path
            d="M3.00117 28.8501C3.00117 30.4301 4.28118 31.7001 5.85118 31.7001C7.43118 31.7001 8.70117 30.4201 8.70117 28.8501C8.70117 27.2701 7.42118 26.0001 5.85118 26.0001C4.28118 25.9901 3.00117 27.2701 3.00117 28.8501Z"
            fill="#F49D0B"
          />
        </svg>
      ),
    },
    {
      id: 4,
      icon: <SecureIcon />,
      title: "SECURITY AND COMPLIANCE",
      description: "Protect transactions with a dedicated, secure platform.",
      position: "bottom-center",
      dotIcon: (
        <svg
          width="217"
          height="32"
          viewBox="0 0 217 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 28.5015L30.47 2.85156H140.79H214"
            stroke="#474649"
            stroke-width="0.6844"
            stroke-miterlimit="10"
          />
          <path
            d="M211.001 2.85C211.001 4.43 212.281 5.7 213.851 5.7C215.431 5.71 216.711 4.43 216.711 2.85C216.711 1.28 215.431 0 213.861 0C212.281 0 211.001 1.28 211.001 2.85Z"
            fill="#10B880"
          />
          <path
            d="M0.00117493 28.8501C0.00117493 30.4301 1.28118 31.7001 2.85118 31.7001C4.43118 31.7001 5.70117 30.4201 5.70117 28.8501C5.70117 27.2701 4.42118 26.0001 2.85118 26.0001C1.28118 25.9901 0.00117493 27.2701 0.00117493 28.8501Z"
            fill="#10B880"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className=" pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 lg:mb-16">
          <h2 className="text-2xl font-semibold text-[#BD6B00] mb-4 text-center lg:text-left ">
            WHY YODEPAY?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="relative">
          {/* Desktop Layout - Positioned Layout */}
          <div className="hidden lg:block relative min-h-[509px]">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={`absolute transform transition-all duration-300 hover:scale-105 ${
                  feature.position === "top-left"
                    ? "top-[20%] left-0"
                    : feature.position === "top-middle"
                      ? "top-0 left-[40%]"
                      : feature.position === "top-right"
                        ? "top-[20%] right-0"
                        : feature.position === "bottom-right"
                          ? "bottom-0 right-0"
                          : "bottom-[20%] left-[55%] -translate-x-1/2"
                }`}
                style={{
                  width: feature.position.includes("center")
                    ? "400px"
                    : "350px",
                }}
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">{feature.icon}</div>

                  {/* Content */}
                  <div className="flex-1 -mt-2 pb-2">
                    {/* Title */}
                    <h3 className=" font-bold text-[#474649] tracking-wider leading-tight mb-3">
                      {feature.title}
                    </h3>

                    {/* Dot Icon */}
                    <div className="mt-[-8px] ml-[-30px]">
                      {feature.dotIcon}
                    </div>

                    {/* Description */}
                    <p className="text-[#474649] text-sm mt-[-17px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile and Tablet Layout - Grid Layout */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="flex-shrink-0 mb-4">{feature.icon}</div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-gray-800 tracking-wider mb-3 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyYode;
