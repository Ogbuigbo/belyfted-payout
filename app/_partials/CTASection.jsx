import Image from "next/image";
import Link from "next/link";
import React from "react";

function CTASection() {
  return (
    <div className="pb-[55px] px-4 md:px-6 lg:px-[45px] xl:px-0 ">
      <h1 className="text-3xl lg:text-5xl font-bold text-center">
        Finally, the payments engine you can trust
      </h1>
      <div className="flex items-center justify-center mt-8 md:mt-[55px]">
        <Image
          src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756188347/Frame_1618869701_optimized_d1oq1t.png"
          width={1217}
          height={695}
          alt="yodepay-cta"
          className="w-full h-auto"
          loading="lazy"
        />
      </div>

      <div className="mt-16 md:mt-32 lg:mt-[225px] bg-primary max-w-[1235px] mx-auto py-8 md:py-12 lg:py-[52px] px-6 md:px-12 lg:px-[78px] rounded-[20px] text-white flex flex-col lg:flex-row justify-between relative overflow-hidden">
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start max-w-full lg:max-w-[754px] z-10 relative">
          <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
            Ready to get Started
          </h1>
          <p className="max-w-[560px] text-[#F2F0F3] mt-4 md:mt-6 lg:mt-[23px] leading-relaxed text-justify lg:text-left">
            Manages a large amount platform makes transactions fast, secure, and
            seamless. Unlock scalable payment for your business in Africa.
          </p>

          <Link href="/register">
          <button className="bg-[#F39C12] hover:bg-orange-600 text-primary px-4 md:px-6 lg:px-3 py-3 md:py-4 rounded-lg mt-6 md:mt-8 lg:mt-[23px] font-semibold text-sm md:text-base transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex gap-2 items-center group">
            Get Started
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 md:w-5 md:h-5 lg:w-[21px] lg:h-[20px]"
            >
              <path
                d="M10.5003 18.3346C15.1027 18.3346 18.8337 14.6037 18.8337 10.0013C18.8337 5.39893 15.1027 1.66797 10.5003 1.66797C5.89795 1.66797 2.16699 5.39893 2.16699 10.0013C2.16699 14.6037 5.89795 18.3346 10.5003 18.3346Z"
                stroke="#042656"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.58301 10H12.583"
                stroke="#042656"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.917 12.5L13.417 10L10.917 7.5"
                stroke="#042656"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          </Link>
        </div>

        {/* Image positioned differently for mobile vs desktop */}
        <div className="mt-8 lg:mt-0  justify-center hidden lg:flex lg:justify-end lg:absolute lg:bottom-0 lg:right-0">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756189030/Visual_swlnpg.png"
            width={588}
            height={457}
            className="w-64 h-48 md:w-80 md:h-60 lg:w-[400px] lg:h-[300px] object-cover"
            alt="yodepay-ring"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default CTASection;
