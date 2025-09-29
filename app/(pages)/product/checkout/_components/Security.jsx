import React from "react";
import Image from "next/image";

function Security() {
  return (
    <div className="bg-[#E6E9EE] w-full relative py-9 px-6">
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756389273/Ellipse_711_iupl5j.png"
        alt="Security and compliance illustration"
        width={79}
        height={79}
        className="absolute left-1 top-0"
        priority
      />
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756390354/Ellipse_713_hny5o4.png"
        alt="Security and compliance illustration"
        width={79}
        height={79}
        className="absolute right-2 top-0"
        priority
      />
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756390353/Ellipse_712_mygsny.png"
        alt="Security and compliance illustration"
        width={79}
        height={79}
        className="absolute left-[50%] bottom-0"
        priority
      />
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.998 2C8.98997 2 7.03997 4.019 4.73397 4.755C3.79597 5.055 3.32697 5.204 3.13697 5.415C2.94697 5.625 2.89197 5.934 2.78097 6.55C1.59097 13.146 4.19097 19.244 10.391 21.618C11.056 21.873 11.389 22 12.001 22C12.613 22 12.947 21.872 13.613 21.617C19.812 19.244 22.409 13.146 21.219 6.55C21.108 5.934 21.052 5.625 20.862 5.414C20.672 5.203 20.204 5.054 19.266 4.755C16.959 4.019 15.006 2 11.998 2Z"
                    stroke="#303032"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 13C9 13 10 13 11 15C11 15 14.177 10 17 9"
                    stroke="#303032"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <span className="text-[#F39C12] text-lg font-semibold">
                  Security & Trust
                </span>
              </div>
              <h2 className="text-3xl font-extrabold text-[#303032] text-center lg:text-left leading-tight">
                Security and Compliance
              </h2>
            </div>

            {/* Certification List */}
            <div className="space-y-6">
              {/* PCI DSS */}
              <div className="flex items-center gap-4">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L4.5 12.5L15 1.5"
                    stroke="#008000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>
                  <h3 className="text-lg font-semibold text-[#303032]">
                    PCI DSS Level 1 Certified
                  </h3>
                </div>
              </div>

              {/* ISO Certifications */}
              <div className="flex items-center gap-4">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L4.5 12.5L15 1.5"
                    stroke="#008000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>
                  <h3 className="text-lg font-semibold text-[#303032]">
                    ISO 27001 and 22301 Certified
                  </h3>
                </div>
              </div>

              {/* NDPR Compliant */}
              <div className="flex items-center gap-4">
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 9L4.5 12.5L15 1.5"
                    stroke="#008000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <div>
                  <h3 className="text-lg font-semibold text-[#303032]">
                    NDPR Compliant
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756386792/image_34_di0qsb.png"
                alt="Security and compliance illustration"
                width={500}
                height={400}
                className="w-full max-w-lg h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Security;
