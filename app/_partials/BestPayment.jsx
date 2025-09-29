import React from "react";
import Image from "next/image";

function BestPayment() {
  return (
    <section className="bg-white px-6 lg:px-[45px]   overflow-hidden">
      {/* Background Pattern */}
      <div className="bg-[#F9F9F9] lg:px-[64px] py-8  relative rounded-2xl">
        <div className="absolute inset-0">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756115885/hero-bg_obbxun.png"
            alt="Background pattern"
            fill
            className="object-cover"
            unoptimized
            loading="lazy"
          />
        </div>

        <div className=" mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="">
                <div>
                  <h2 className="text-3xl lg:text-[40px] text-center lg:text-left font-semibold mb-4 leading-tight">
                    The Best Payment
                    <br />
                    Experience, Built for You
                  </h2>
                  <p className="text-lg text-[#303032] leading-relaxed ">
                    Secure, instant payments to vendors or from clients.
                    <br className="hidden lg:flex" />
                    Simplify finances and focus on growth.
                  </p>
                </div>
              </div>

              {/* Right Content - Dashboard Interface */}
              <div className="relative">
                {/* Main Dashboard */}
                <div className="relative ">
                  <Image
                    src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756115798/Frame_1618870975_qktgvq.png"
                    alt="Payment dashboard interface"
                    width={600}
                    height={400}
                    className="w-full h-auto "
                    unoptimized
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BestPayment;
