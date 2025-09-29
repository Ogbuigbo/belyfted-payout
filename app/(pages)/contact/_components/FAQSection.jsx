"use client";

import Image from "next/image";
import React, { useState } from "react";

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(2); // Third item is open by default

  const faqData = [
    {
      question: "Who can use YodePay services?",
      answer:
        "YodePay services are available to individuals and businesses who meet our eligibility requirements. Users must be at least 18 years old and have a valid government-issued ID. Businesses must provide proper documentation and registration details.",
    },
    {
      question: "What is the average time for a payout?",
      answer:
        "Payout times vary depending on the method and destination. Typically, bank transfers take 1-3 business days, while instant transfers to supported accounts can be processed within minutes. International transfers may take 3-5 business days.",
    },
    {
      question: "What currencies are supported?",
      answer:
        "We support a wide range of major global currencies. You can manage and transact in multiple currencies from a single dashboard.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-[#F2F0F3] py-16 lg:pb-[170px] px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl  font-bold text-gray-900 mb-12 text-center ">
          Your Common Queries Answered
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - FAQ */}
          <div>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className=" rounded-2xl border border-[#0426567D] py-4 px-6  overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between "
                  >
                    <span className="font-medium  pr-4">{faq.question}</span>
                    <div className="flex-shrink-0">
                      <div className="w-[40px] h-[40px] rounded-full border-2 border-gray-300 flex items-center justify-center">
                        {openFAQ === index ? (
                          <svg
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-4 h-4 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </button>

                  {openFAQ === index && (
                    <div className="px-6 pb-5">
                      <div className="border-t border-gray-100 pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-full max-w-md lg:max-w-[602px]">
                <Image
                  src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755711747/image_52_1_ndooeo.png"
                  width={602}
                  height={400}
                  alt="Customer service representative with headset"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
