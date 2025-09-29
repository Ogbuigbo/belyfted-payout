"use client";

import React, { useState } from "react";
import Image from "next/image";
import FlashCircle from "../../public/assets/icons/flashCircle";
import MoneySend from "../../public/assets/icons/moneySend";
import MoneyChange from "../../public/assets/icons/moneyChange";
import Link from "next/link";

function Features() {
  const [activeFeature, setActiveFeature] = useState("virtual");

  const features = {
    payin: {
      title: "Payin",
      description:
        "Collect payments from clients instantly. Our secure platform makes it easy to receive money from anyone, anywhere, so you can simplify your receivables and focus on growth.",
      image:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756123743/Frame_1618870019_pglllb.png",
    },
    payout: {
      title: "Payout",
      description:
        "Send payments to vendors and suppliers effortlessly. Process bulk payments, schedule transfers, and manage your cash flow with complete transparency and security.",
      image:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756123744/Frame_1618870019_1_aoplkd.png",
    },
    virtual: {
      title: "Virtual Payment",
      description:
        "Create and manage virtual accounts for secure and organized transactions. Our platform gives you the flexibility to handle payments, and receive funds, with dedicated virtual accounts.",
      image:
        "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756123742/Frame_1618870019_2_nvlyws.png",
    },
  };

  const currentFeature = features[activeFeature];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto pl-6 pr-6 lg:pl-12 lg:pr-0">
        <div className="mx-auto">
          {/* Section Header - Always at top */}
          <div className="mb-8 text-center lg:text-left">
            <span className="text-[#BD6B00] font-semibold text-xl  md:text-2xl   mb-2 block">
              FEATURES
            </span>
            <h2 className="text-3xl lg:text-[40px] font-bold ">
              One App for all your Money Things
            </h2>
          </div>

          {/* Dashboard Image - Below header on mobile, right side on desktop */}
          <div className="mb-8 lg:hidden">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src={features[activeFeature].image}
                alt={`${features[activeFeature].title} dashboard interface`}
                width={600}
                height={400}
                className="w-full h-auto transition-all duration-500 ease-in-out"
                unoptimized
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content - Features */}
            <div className="space-y-8">
              {/* Feature Options */}
              <div className="space-y-6">
                {/* Payin */}
                <div
                  className={`w-full p-4 rounded-2xl  transition-all duration-200 ${
                    activeFeature === "payin"
                      ? " bg-[#FEF5E7]"
                      : "border-[#C8C6C9] border hover:border-gray-300 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setActiveFeature("payin")}
                    className="w-full flex items-center gap-3 text-left"
                  >
                    <FlashCircle />
                    <span className="font-semibold text-2xl text-[#303032]">
                      Payin
                    </span>
                  </button>
                  {activeFeature === "payin" && (
                    <div className="mt-2  ml-12">
                      <p className="text-[#303032] font-medium leading-relaxed mb-4">
                        {features.payin.description}
                      </p>
                      <Link href="/product/funds-transfer">
                      <button className="bg-[#F39C12] hover:bg-orange-600 text-[#042656] px-4 py-[10px] rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2">
                        Learn more
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99935 18.3346C14.6017 18.3346 18.3327 14.6037 18.3327 10.0013C18.3327 5.39893 14.6017 1.66797 9.99935 1.66797C5.39698 1.66797 1.66602 5.39893 1.66602 10.0013C1.66602 14.6037 5.39698 18.3346 9.99935 18.3346Z"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.08398 10H12.084"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.416 12.5L12.916 10L10.416 7.5"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Payout */}
                <div
                  className={`w-full p-4 rounded-2xl transition-all duration-200 ${
                    activeFeature === "payout"
                      ? " bg-[#FEF5E7]"
                      : "border-[#C8C6C9]  border hover:border-gray-300 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setActiveFeature("payout")}
                    className="w-full flex items-center gap-3 text-left"
                  >
                    <MoneySend />
                    <span className="font-semibold text-2xl text-[#303032]">
                      Payout
                    </span>
                  </button>
                  {activeFeature === "payout" && (
                    <div className="mt-4 ml-12">
                      <p className="text-[#303032] font-medium leading-relaxed mb-4">
                        {features.payout.description}
                      </p>
                      <Link href="/product/remittance">
                      <button className="bg-[#F39C12] hover:bg-orange-600 text-[#042656] px-4 py-[10px] rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2">
                        Learn more
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99935 18.3346C14.6017 18.3346 18.3327 14.6037 18.3327 10.0013C18.3327 5.39893 14.6017 1.66797 9.99935 1.66797C5.39698 1.66797 1.66602 5.39893 1.66602 10.0013C1.66602 14.6037 5.39698 18.3346 9.99935 18.3346Z"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.08398 10H12.084"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.416 12.5L12.916 10L10.416 7.5"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Virtual Payment */}
                <div
                  className={`w-full p-4 rounded-2xl transition-all duration-200 ${
                    activeFeature === "virtual"
                      ? " bg-[#FEF5E7]"
                      : "border-[#C8C6C9] border  hover:border-gray-300 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setActiveFeature("virtual")}
                    className="w-full flex items-center gap-3 text-left"
                  >
                    <MoneyChange />

                    <span className="font-semibold text-2xl text-[#303032]">
                      Virtual Payment
                    </span>
                  </button>
                  {activeFeature === "virtual" && (
                    <div className="mt-4 ml-12 ">
                      <p className="text-[#303032] font-medium leading-relaxed mb-4">
                        {features.virtual.description}
                      </p>
                      <Link href="/product/virtual-bank-account">
                      <button className="bg-[#F39C12] hover:bg-orange-600 text-[#042656] px-4 py-[10px]  rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2">
                        Learn more
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.99935 18.3346C14.6017 18.3346 18.3327 14.6037 18.3327 10.0013C18.3327 5.39893 14.6017 1.66797 9.99935 1.66797C5.39698 1.66797 1.66602 5.39893 1.66602 10.0013C1.66602 14.6037 5.39698 18.3346 9.99935 18.3346Z"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M7.08398 10H12.084"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.416 12.5L12.916 10L10.416 7.5"
                            stroke="#042656"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard (hidden on mobile, shown on desktop) */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Dashboard Image */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <Image
                    src={currentFeature.image}
                    alt={`${currentFeature.title} dashboard interface`}
                    width={600}
                    height={400}
                    className="w-full h-auto transition-all duration-500 ease-in-out"
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

export default Features;
