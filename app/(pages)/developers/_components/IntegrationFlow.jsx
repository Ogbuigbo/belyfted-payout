import React from "react";

const steps = [
  {
    backgroundImage:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756817747/Frame_1618870814_wtfw91.png",
  },
  {
    backgroundImage:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756817747/Frame_1618870811_whclbg.png",
  },
  {
    backgroundImage:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756817747/Frame_1618870812_bwrttz.png",
  },
  {
    backgroundImage:
      "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756817747/Frame_1618870813_whh022.png",
  },
];

function IntegrationFlow() {
  return (
    <div className="lg:pt-[116px] pt-[50px] pb-[27px] max-w-[1200px] mx-auto">
      <h1 className="lg:text-[38px] text-3xl text-center mb-8 font-bold ">
        The Integration Flow
      </h1>

      {/* Steps Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 lg:gap-6 md:gap-5 sm:gap-4  lg:p-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden w-full min-h-[311px] flex flex-col bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: step.backgroundImage
                ? `url('${step.backgroundImage}')`
                : "none",
              backgroundColor: step.backgroundImage ? "transparent" : "#f3f4f6",
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
    </div>
  );
}

export default IntegrationFlow;
