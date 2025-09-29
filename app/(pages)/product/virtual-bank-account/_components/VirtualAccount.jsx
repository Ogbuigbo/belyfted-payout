"use client";

import Image from "next/image";
import React, { useState } from "react";

function VirtualAccounts() {
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      text: "Businesses selling directly on social media",
      image:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756410499/image_59_1_w5inhp.png",
    },
    {
      text: "Selling goods or services without a traditional online store",
      image:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756490262/image_60_1_rlx2pf.png",
    },
    {
      text: "Companies managing funds in multiple regions",
      image:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756490262/image_62_1_tb25bl.png",
    },
  ];

  const handleFeatureClick = (index) => {
    setSelectedFeature(index);
  };

  return (
    <div className="relative w-full pt-16 lg:pt-[112px] md:pt-[70px] px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto flex lg:flex-row md:flex-row flex-col items-center lg:items-center md:items-center gap-8 lg:gap-12 md:gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2 md:w-1/2 w-full lg:pr-8 md:pr-6">
          <h1 className="text-3xl lg:text-4xl md:text-3xl font-medium leading-tight mb-6 lg:mb-10 md:mb-6 text-center lg:text-left md:text-left">
            <span className="text-[#F39C12]">Virtual Accounts</span>
            <span className="text-[#042656]"> Are Perfect For...</span>
          </h1>

          {/* Feature List */}
          <div className="space-y-6 lg:space-y-6 md:space-y-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 lg:gap-4 md:gap-3 cursor-pointer transition-all duration-300 hover:opacity-80"
                onClick={() => handleFeatureClick(index)}
              >
                <div
                  className={`w-1 lg:w-1 md:w-1 h-12 lg:h-[72px] md:h-14 rounded-full flex-shrink-0 transition-colors duration-300 ${
                    selectedFeature === index ? "bg-[#042656]" : "bg-[#EAEAEA]"
                  }`}
                ></div>
                <div>
                  <p className="text-gray-800 text-base lg:text-sm md:text-sm font-medium lg:max-w-[244px] md:max-w-[244px]">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center lg:justify-end md:justify-end">
          <div className="relative">
            <Image
              src={features[selectedFeature].image}
              width={697}
              height={550}
              alt={`Illustration for: ${features[selectedFeature].text}`}
              className="w-full lg:w-[697px] lg:h-[550px] md:w-[450px] md:h-[300px] h-[280px] object-cover rounded-2xl lg:rounded-2xl md:rounded-xl  shadow-lg transition-all duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualAccounts;
