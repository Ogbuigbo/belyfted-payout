import React from "react";
import Button from "../../../../_partials/_components/Button";
import Link from "next/link";

function SimpleSteps() {
  const steps = [
    {
      backgroundImage:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756450630/Frame_1618870814_dcbkqs.png",
    },
    {
      backgroundImage:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756451276/Frame_1618870811_lfli2j.png",
    },
    {
      backgroundImage:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756451276/Frame_1618870812_myddit.png",
    },
    {
      backgroundImage:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756451276/Frame_1618870813_vlcemo.png",
    },
  ];

  return (
    <div className="relative w-full py-[80px] lg:py-[72px] md:py-[70px] sm:py-[50px] px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 lg:mb-[63px] md:mb-12 sm:mb-8">
          <h1 className="text-3xl text-center lg:text-left font-extrabold ">
            <span className="text-[#303032]">Simple Steps to</span> {" "}
            <br className="hidden lg:flex" />
            <span className="text-[#042656]">Receiving Global Payments</span>
          </h1>
        </div>

        {/* Steps Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 lg:gap-6 md:gap-5 sm:gap-4 mb-[42px] lg:p-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden w-full min-h-[311px] flex flex-col bg-center bg-no-repeat bg-cover md:bg-contain lg:bg-contain"
              style={{
                backgroundImage: step.backgroundImage
                  ? `url('${step.backgroundImage}')`
                  : "none",
                backgroundColor: step.backgroundImage
                  ? "transparent"
                  : "#f3f4f6",
              }}
              loading="lazy"
            >
              {/* Content Overlay */}
              <div className="relative z-10 flex-1 flex flex-col justify-end p-6 lg:p-8 md:p-6 sm:p-5">
                {/* You can add content here if needed */}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link href="/register">
          <Button variant="primary">Open Your Free Virtual Account</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SimpleSteps;
