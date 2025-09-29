import React from "react";
import ContactHero from "../../../../public/assets/icons/contactHero";

function Hero() {
  return (
    <div className="w-full bg-[#E6E9EE] min-h-[500px] lg:min-h-[600px]  flex items-center justify-center relative px-4 md:px-6 lg:px-2">
      <div className="flex flex-col justify-center items-center mt-[-20px] md:mt-[-30px] lg:mt-[-40px] z-10">
        <h1 className="text-3xl lg:text-4xl  text-[#042656] font-extrabold text-center leading-tight">
          Connect with Our Team
        </h1>
        <p className="max-w-[350px] md:max-w-[500px] lg:max-w-[707px] text-center mt-3 md:mt-4 font-medium text-[#474649] text-sm md:text-base">
          Need assistance with our services or partnership opportunities? Get in
          touch, and we'll get back to you promptly.
        </p>
      </div>
      <div className="absolute right-0 hidden lg:flex">
        <ContactHero />
      </div>
    </div>
  );
}

export default Hero;
