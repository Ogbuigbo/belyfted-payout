"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentText, setCurrentText] = useState("EFFORTLESS");
  const [isAnimating, setIsAnimating] = useState(false);
  const textOptions = ["EFFORTLESS", "SIMPLE", "EASY"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentText((prevText) => {
          const currentIndex = textOptions.indexOf(prevText);
          const nextIndex = (currentIndex + 1) % textOptions.length;
          return textOptions[nextIndex];
        });
        setIsAnimating(false);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative  overflow-hidden bg-[#042656]">
      <div className="relative z-10 container mx-auto px-6 lg:px-12 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* Launch Badge */}
          {/* <div className="flex justify-center mb-[20px]">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <span className="bg-white text-black text-[10px] font-semibold px-2 py-1 rounded-full mr-3">
                NEW
              </span>
              <span className="text-white text-base">Launching soon ✨</span>
            </div>
          </div> */}

          {/* Main Content */}
          <div className="text-center mb-[39px] mt-[60px]">
            <h1 className="text-5xl lg:text-[64px] font-extrabold text-white mb-[20px] leading-tight">
              PAYMENT,
              <br />
              MADE{" "}
              <span
                className={`text-[#F39C12] transition-all duration-500 ease-in-out transform ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                {currentText}
              </span>{" "}
              🚀
            </h1>

            <p className="text-xl lg:text-xl text-blue-200 mb-[20px] max-w-5xl mx-auto leading-relaxed">
              Effortlessly pay vendors and collect from clients with our fast,
              secure platform. <br /> Simplify your finances and stay in control
              every step of the way.
            </p>
            <Link href="/register">
            <button className="bg-[#F39C12] hover:bg-orange-600 px-3 py-4 rounded-lg font-semibold  transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex gap-2 items-center group">
              Get Started
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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

          {/* Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative">
              {/* Glow Effect */}

              {/* Dashboard Image */}
              <div className="">
                {/* Fingerprint Pattern */}
                <div className="absolute top-[-30px] right-[80px] opacity-60">
                  <Image
                    src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1750071245/Frame_1618870015_ws91gg.png"
                    alt="Fingerprint pattern"
                    width={122}
                    height={122}
                    className="w-[122px] h-[122px]"
                    unoptimized
                  />
                </div>
                <Image
                  src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756114085/Dashboard_ozsppg.png"
                  alt="Belyfted Dashboard"
                  width={1103}
                  height={719}
                  className="w-full h-auto rounded-t-xl relative shadow-lg z-50"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
