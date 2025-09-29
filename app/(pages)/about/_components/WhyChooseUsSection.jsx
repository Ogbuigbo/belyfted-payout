import React from "react";
import Image from "next/image";

const WhyChooseUsSection = () => {
  const features = [
    {
      title: "Global Reach",
      description:
        "Easily send and receive payments across borders with support for multiple currencies.",
      imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757144218/Group_avvqnd.png",
      width: 161,
      height: 140,
    },
    {
      title: "Secure & Reliable",
      description:
        "Industry-leading security measures and high up-time ensure your transactions are always safe and seamless.",
      imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757144218/image_14_rehjzj.png",
      width: 171,
      height: 140,
    },
    {
      title: "Developer-Friendly APIs",
      description:
        "Integrate our robust APIs quickly and easily to customize your payment flows.",
      imageUrl: "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757144217/OBJECTS_e3zcov.png",
      width: 141,
      height: 140,
    },
  ];

  return (
    <section className="pt-[76px] px-4">
      <div className="max-w-7xl mx-auto">
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

            <div className="bg-white px-6 py-[10px] rounded-[28px] text-center border border-[#042656] ">
              <span className="text-[#042656] font-semibold">
                Why Choose Us
              </span>
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
        <h2 className="text-3xl font-bold text-center text-[#303032] mb-16">
          Unlock Growth with Our Platform
        </h2>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="pb-6 p-1 rounded-2xl  border border-[#C8C6C9] hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="w-full bg-[#FBF8FB] rounded-2xl mb-3 py-8 flex items-center justify-center">
                <Image
                  src={feature.imageUrl}
                  alt={feature.title}
                  width={feature.width}
                  height={feature.height}
                  className="object-contain max-w-full max-h-full"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: `${feature.width}px`,
                    maxHeight: `${feature.height}px`
                  }}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#303032] text-center mb-2 px-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center text-xs leading-relaxed px-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
