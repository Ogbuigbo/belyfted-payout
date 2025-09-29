import React from "react";

const PaymentLinksSection = () => {
  return (
    <div className="bg-white w-full pt-[98px]">
      <section className="bg-[#021734] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="text-white text-3xl lg:text-4xl font-bold text-center mb-12">
            Why Use Our Payment Links?
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-[52px] gap-8 max-w-[989px] mx-auto">
            {/* Shareable Everywhere Card */}
            <div className="bg-[#FFDF78] rounded-2xl pt-5 px-5  pb-8 text-gray-800 relative overflow-hidden">
              <div className="w-[79px] h-[79px] bg-[#FEE593] rounded-full absolute -top-10 right-10"></div>
              <div className="w-[79px] h-[79px] bg-[#FEE593] rounded-full absolute -top-5 -right-5"></div>
              <div className="w-[79px] h-[79px] bg-[#FEE593] rounded-full absolute top-10 -right-5"></div>

              <div className="mb-6">
                {/* Icon placeholder - replace with your SVG */}
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M50.75 15.7031C50.75 19.7072 47.5042 22.9531 43.5 22.9531C39.4958 22.9531 36.25 19.7072 36.25 15.7031C36.25 11.6991 39.4958 8.45312 43.5 8.45312C47.5042 8.45312 50.75 11.6991 50.75 15.7031Z"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                  />
                  <path
                    d="M21.75 29C21.75 33.0042 18.5041 36.25 14.5 36.25C10.4959 36.25 7.25 33.0042 7.25 29C7.25 24.9958 10.4959 21.75 14.5 21.75C18.5041 21.75 21.75 24.9958 21.75 29Z"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                  />
                  <path
                    d="M50.75 42.2969C50.75 46.3011 47.5042 49.5469 43.5 49.5469C39.4958 49.5469 36.25 46.3011 36.25 42.2969C36.25 38.2927 39.4958 35.0469 43.5 35.0469C47.5042 35.0469 50.75 38.2927 50.75 42.2969Z"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                  />
                  <path
                    d="M21.0938 25.9832L36.802 18.7344M21.0938 32.026L36.802 39.2748"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-3">Shareable Everywhere</h3>
              <p className="text-[#474649] text-sm ">
                Perfect for accepting payments on platforms like Instagram,
                Facebook, WhatsApp, or in emails and invoices.
              </p>
            </div>

            {/* Secure Transactions Card */}
            <div className="bg-[#D3F2D2] rounded-2xl pt-5 px-5  pb-8 text-gray-800 relative overflow-hidden">
              <div className="w-[79px] h-[79px] bg-[#DBF5DA] rounded-full absolute -top-10 right-10"></div>
              <div className="w-[79px] h-[79px] bg-[#DBF5DA] rounded-full absolute -top-5 -right-5"></div>
              <div className="w-[79px] h-[79px] bg-[#DBF5DA] rounded-full absolute top-10 -right-5"></div>
              <div className="mb-6">
                {/* Icon placeholder - replace with your SVG */}
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3132 45.5414C10.8567 49.5779 14.2 52.7401 18.2685 52.9272C21.692 53.0845 25.1697 53.1667 28.9993 53.1667C32.829 53.1667 36.3066 53.0845 39.7301 52.9272C43.7988 52.7401 47.142 49.5779 47.6855 45.5414C48.0403 42.9072 48.3327 40.2075 48.3327 37.4583C48.3327 34.7091 48.0403 32.0095 47.6855 29.3753C47.142 25.3388 43.7988 22.1765 39.7301 21.9895C36.3066 21.8321 32.829 21.75 28.9993 21.75C25.1697 21.75 21.692 21.8321 18.2685 21.9895C14.2 22.1765 10.8567 25.3388 10.3132 29.3753C9.95855 32.0095 9.66602 34.7091 9.66602 37.4583C9.66602 40.2075 9.95855 42.9072 10.3132 45.5414Z"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                  />
                  <path
                    d="M18.125 21.7448V15.7031C18.125 9.69703 22.9939 4.82812 29 4.82812C35.0061 4.82812 39.875 9.69703 39.875 15.7031V21.7448"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.666 37.4297V37.4539"
                    stroke="#2F4B73"
                    stroke-width="4.83333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M29 37.4297V37.4539"
                    stroke="#2F4B73"
                    stroke-width="4.83333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M19.334 37.4297V37.4539"
                    stroke="#2F4B73"
                    stroke-width="4.83333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className="font-semibold mb-3">Secure Transactions</h3>
              <p className="text-[#474649] text-sm ">
                All payments processed through our links are protected with
                industry-leading security protocols.
              </p>
            </div>

            {/* Fast Setup Card */}
            <div className="bg-[#D9D4FF] rounded-2xl pt-5 px-5  pb-8 text-gray-800 relative overflow-hidden">
              <div className="w-[79px] h-[79px] bg-[#E1DDFE] rounded-full absolute -top-10 right-10"></div>
              <div className="w-[79px] h-[79px] bg-[#E1DDFE] rounded-full absolute -top-5 -right-5"></div>
              <div className="w-[79px] h-[79px] bg-[#E1DDFE] rounded-full absolute top-10 -right-5"></div>
              <div className="mb-9">
                {/* Icon placeholder - replace with your SVG */}
                <svg
                  width="58"
                  height="58"
                  viewBox="0 0 58 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M36.25 18.1302C36.25 18.1302 37.4583 18.1302 38.6667 20.5469C38.6667 20.5469 42.5048 14.5052 45.9167 13.2969"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M53.1667 16.9115C53.1667 23.5849 47.7567 28.9948 41.0833 28.9948C34.4099 28.9948 29 23.5849 29 16.9115C29 10.238 34.4099 4.82812 41.0833 4.82812C47.7567 4.82812 53.1667 10.238 53.1667 16.9115Z"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                    stroke-linecap="round"
                  />
                  <path
                    d="M54.9798 32.0083C54.9781 31.0071 54.1652 30.197 53.1642 30.1989C52.1632 30.2006 51.3531 31.0136 51.3548 32.0146L54.9798 32.0083ZM21.9097 16.3203C22.9107 16.3146 23.7176 15.4986 23.7119 14.4976C23.7063 13.4966 22.8902 12.6897 21.8892 12.6953L21.9097 16.3203ZM32.6257 51.3559H25.3757V54.9809H32.6257V51.3559ZM25.3757 51.3559C20.7915 51.3559 17.5058 51.3532 14.9814 51.068C12.4904 50.7865 10.981 50.2507 9.84202 49.3512L7.59534 52.1961C9.48849 53.6913 11.766 54.3528 14.5746 54.6701C17.3498 54.9835 20.8766 54.9809 25.3757 54.9809V51.3559ZM3.02149 33.835C3.02149 38.0615 3.01803 41.4033 3.35407 44.0387C3.69651 46.7239 4.41544 48.9126 6.02535 50.7184L8.73115 48.306C7.7968 47.2579 7.2436 45.8826 6.94997 43.58C6.64994 41.2274 6.64649 38.1575 6.64649 33.835H3.02149ZM9.84202 49.3512C9.43882 49.033 9.06726 48.683 8.73115 48.306L6.02535 50.7184C6.50313 51.2544 7.02859 51.7486 7.59534 52.1961L9.84202 49.3512ZM51.3548 33.835C51.3548 38.1575 51.3514 41.2274 51.0513 43.58C50.7577 45.8826 50.2045 47.2579 49.2702 48.306L51.9759 50.7184C53.5859 48.9126 54.3048 46.7239 54.6473 44.0387C54.9832 41.4033 54.9798 38.0615 54.9798 33.835H51.3548ZM32.6257 54.9809C37.1248 54.9809 40.6514 54.9835 43.4267 54.6701C46.2354 54.3528 48.5128 53.6913 50.406 52.1961L48.1593 49.3512C47.0203 50.2507 45.5108 50.7865 43.0197 51.068C40.4955 51.3532 37.2098 51.3559 32.6257 51.3559V54.9809ZM49.2702 48.306C48.934 48.683 48.5626 49.033 48.1593 49.3512L50.406 52.1961C50.9727 51.7486 51.4981 51.2544 51.9759 50.7184L49.2702 48.306ZM6.64649 33.835C6.64649 29.5126 6.64994 26.4427 6.94997 24.09C7.2436 21.7874 7.7968 20.412 8.73115 19.364L6.02535 16.9517C4.41544 18.7575 3.69651 20.9462 3.35407 23.6315C3.01803 26.2668 3.02149 29.6085 3.02149 33.835H6.64649ZM7.59534 15.4739C7.02859 15.9215 6.50313 16.4158 6.02535 16.9517L8.73115 19.364C9.06726 18.987 9.43882 18.6371 9.84202 18.3187L7.59534 15.4739ZM54.9798 33.835C54.9798 33.2086 54.9808 32.5955 54.9798 32.0083L51.3548 32.0146C51.3558 32.5979 51.3548 33.1999 51.3548 33.835H54.9798ZM21.8892 12.6953C18.4876 12.7146 15.7189 12.793 13.4508 13.1509C11.1488 13.5142 9.22898 14.1837 7.59534 15.4739L9.84202 18.3187C10.8263 17.5414 12.087 17.036 14.0159 16.7316C15.9788 16.4218 18.4915 16.3396 21.9097 16.3203L21.8892 12.6953Z"
                    fill="#2F4B73"
                  />
                  <path
                    d="M24.166 43.5H27.791"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M35.041 43.5H43.4993"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.04102 26.5781H24.166"
                    stroke="#2F4B73"
                    stroke-width="3.625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className=" font-semibold mb-3">
                Fast Setup, Faster Payments
              </h3>
              <p className="text-[#474649] text-sm ">
                Create links in seconds and receive funds quickly, boosting your
                cash flow.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentLinksSection;
