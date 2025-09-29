import Image from "next/image";
import React from "react";

function QuickStart() {
  return (
    <div className="lg:pt-[116px] pt-[50px] bg-[#FBF8FB]">
      <h1 className="lg:text-[38px] text-3xl font-bold text-[#303032] text-center lg:mb-12 mb-8">
        Quick Start
      </h1>
      <div className="flex justify-center items-center max-w-[894px] mx-auto px-6 lg:px-0">
        <Image
          src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756786100/image_65_ba8dxc.png"
          width={894}
          height={682}
          alt="belyfted code"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default QuickStart;
