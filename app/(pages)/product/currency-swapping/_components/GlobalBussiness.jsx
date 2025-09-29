import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function GlobalBussiness() {
  return (
    <div className='relative z-30 w-full px-6 xl:px-0 overflow-hidden'>
       
         <div className=" max-w-[1235px] mx-auto "> 
              {/* Header */}
          <div className="grid lg:grid-cols-2 lg:mb-[109px] mb-[50px] gap-8 items-start">
            <div>
              <h2 className="text-3xl lg:text-[48px] font-bold text-center leading-tight lg:text-left">
              Designed for Global {" "}
                <br className='hidden lg:block' />
                Business
              </h2>
            </div>
            <div className="lg:pl-8">
              <p className="text-[#303032] text-lg font-medium text-justify lg:text-left leading-relaxed">
              Whether you're paying overseas contractors, managing international expenses, or collecting from foreign markets—YodePay  gives you full control over currency conversion.
              </p>
            </div>
          </div>

          <Image
          src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757005665/map-base_1_syt3e2.png"
          width={1152}
          height={375}
          alt="yodepay-cta"
          className="w-full h-auto"
          loading="lazy"
        />
        </div>

        <div className="w-full mt-16 md:mt-32 lg:my-[84px] my-[50px] bg-primary max-w-[1235px] mx-auto py-8 md:py-12 lg:py-[52px] px-6 md:px-12 lg:px-[78px] rounded-[20px] text-white flex flex-col lg:flex-row justify-between relative z-10 overflow-hidden">
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start max-w-full z-10 relative">
          <h1 className="text-3xl lg:text-[42px] font-bold text-center lg:text-left">
          Empower Your International Payouts
          </h1>
          <p className="max-w-[630px] text-[#F2F0F3] mt-4 md:mt-6 lg:mt-[23px] leading-relaxed text-justify lg:text-left">
          YodePay ’s built-in currency swapping lets you manage cross-border payouts without relying on multiple platforms or banks.
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
        <div className="mt-8 lg:mt-0  justify-center hidden lg:flex lg:justify-end lg:absolute lg:bottom-[-28%] lg:right-[-10%]">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756984606/Visual_oa4qyk.png"
            width={588}
            height={457}
            className="w-64 h-48 md:w-80 md:h-60 lg:w-[400px] lg:h-[300px] object-cover"
            alt="yodepay-ring"
            loading="lazy"
          />
        </div>
      </div>

      <div
        className="absolute bottom-[-15%] -left-[10%] w-[278px] h-[278px] rounded-full"
        style={{
          background: "#FEDF00",
          filter: "blur(100px)",
        }}
      />
      
    </div>
  )
}

export default GlobalBussiness