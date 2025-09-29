import React from "react";
// Replace with your payment link icon import if available
// import PaymentLinkIcon from "...";

export default function EmptyState({ onCreate }) {
  return (
    <div className="md:px-8">
      <h1 className="lg:text-2xl text-lg font-semibold text-[#303032] mb-[12px]">
        Payment Links
      </h1>
      <p className="font-medium text-[#8E98A8] text-sm lg:text-base">
        Create shareable links to easily collect customer payments.
      </p>
      <div className="flex justify-center items-center rounded-xl shadow p-8 bg-white w-full mt-[64px]">
        <div className="max-w-lg gap-4 flex flex-col md:px-12 items-center">
          <div className="mb-4">
            {/* Replace with your payment link SVG/icon if available */}
            <div className="rounded-full bg-[#E6E9EE]">
              <svg
                width="137"
                height="137"
                viewBox="0 0 137 137"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_129_14756)">
                  <rect
                    x="20.5"
                    y="20.5"
                    width="96"
                    height="96"
                    rx="48"
                    fill="#042656"
                  />
                  <path
                    d="M76.8078 72.9743L81.2812 68.5008C84.8108 64.9713 84.8108 59.2489 81.2812 55.7194C77.7519 52.1899 72.0294 52.1899 68.4999 55.7194L64.0263 60.1929M72.9733 76.8088L68.4999 81.2822C64.9704 84.8117 59.2479 84.8117 55.7184 81.2822C52.1889 77.7528 52.1889 72.0304 55.7184 68.5008L60.1919 64.0273"
                    stroke="#E6E9EE"
                    stroke-width="2.57143"
                    stroke-linecap="round"
                  />
                  <path
                    d="M85.6427 77.0723H82.0789M77.0713 85.6437V82.0799"
                    stroke="#E6E9EE"
                    stroke-width="2.57143"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M51.3574 59.9288H54.9212M59.9288 51.3574V54.9212"
                    stroke="#E6E9EE"
                    stroke-width="2.57143"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <h2 className="font-semibold mb-2 text-center text-[#303032]">
            Create Your First Payment Link
          </h2>
          <p className="text-[#777779] font-medium text-center mb-6 text-sm">
            Get started by generating a unique link. Share it with your
            customers so they can pay you quickly via card or bank transfer.
          </p>
          <button
            className="bg-[#112B55] text-white px-6 py-4  rounded-lg text-sm font-semibold"
            onClick={onCreate}
          >
            Create Payment Link
          </button>
        </div>
      </div>
    </div>
  );
}
