import React from "react";
import Link from "next/link";

function PaymentStepSection() {
  return (
    <div className="pt-[98px] pb-[92px] px-6 xl:px-0 lg:px-12">
      <div className="bg-[#E6E9EE] md:py-[56px] md:px-[93px] p-6 rounded-[28px] max-w-[1176px] mx-auto relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Left side - Title and CTA */}
          <div className="flex-1 space-y-6">
            <div className="flex flex-col justify-center items-center md:items-start">
              <h2 className="lg:text-4xl text-3xl text-center md:text-left font-bold text-[#042656] leading-tight">
                Getting Paid in 3 { " "}<br className="hidden md:flex" />
                Simple Steps
              </h2>
              <Link href="/register">
              <button className="bg-[#F39C12] hover:bg-orange-500 text-[#042656] text-sm font-semibold px-10 py-4 rounded-lg transition-colors duration-200 mt-[29px]">
                Get Paid
              </button>
              </Link>
            </div>

            {/* Decorative circle */}
            <div className=" bg-[#042656] w-[133px] h-[133px] absolute top-[-50px] right-[-10px] rounded-full hidden md:flex"></div>
            <div className=" bg-[#042656] w-[426px] h-[426px] absolute bottom-[-191px] left-[-111px] rounded-full "></div>
            <div className="absolute bottom-0 -right-8 ">
              <svg
                width="148"
                height="82"
                viewBox="0 0 148 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.166381 0.237314L201.906 82.0957L30.1447 215.878L0.166381 0.237314Z"
                  fill="#F39C12"
                />
              </svg>
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="flex-1 space-y-4 relative z-20">
            {/* Step 1 - Generate */}
            <div className="bg-white rounded-lg py-6 px-3 relative">
              <div className="flex items-start gap-4">
                <div className="">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#0078FD"
                    />
                    <path
                      d="M20.6666 15.5026V15.1692C20.6666 12.6551 20.6666 11.398 19.8856 10.617C19.1045 9.83594 17.8474 9.83594 15.3333 9.83594C12.8192 9.83594 11.5621 9.83598 10.7811 10.617C10.0001 11.398 10 12.6551 10 15.1692L10 18.1693C9.99998 20.3609 9.99997 21.4567 10.6053 22.1943C10.7161 22.3293 10.8399 22.4531 10.975 22.564C11.7125 23.1693 12.8083 23.1693 15 23.1693"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.666 13.1641H17.9993M12.666 15.8307H15.3327"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M20 20.8307L19 20.4641V18.8307M16 20.1641C16 21.8209 17.3431 23.1641 19 23.1641C20.6569 23.1641 22 21.8209 22 20.1641C22 18.5072 20.6569 17.1641 19 17.1641C17.3431 17.1641 16 18.5072 16 20.1641Z"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#303032]">Generate</h3>
                  <p className="text-[#777779] font-medium text-sm">
                    Quickly create a secure payment link within your dashboard.
                    Set the amount, description, and currency.
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0">
                <svg
                  width="126"
                  height="126"
                  viewBox="0 0 126 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.03">
                    <path
                      d="M99.7497 55.125V52.4997C99.7497 32.701 99.7492 22.8013 93.5988 16.6506C87.4479 10.5 77.5485 10.5 57.7497 10.5C37.9514 10.5 28.0518 10.5003 21.9011 16.6508C15.7505 22.8015 15.7504 32.7008 15.7502 52.4994L15.75 76.125C15.7498 93.3839 15.7498 102.014 20.5164 107.822C21.3891 108.886 22.3643 109.86 23.4278 110.734C29.236 115.5 37.8656 115.5 55.1247 115.5"
                      stroke="#042656"
                      stroke-width="7.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M36.75 36.75H78.75M36.75 57.75H57.75"
                      stroke="#042656"
                      stroke-width="7.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M94.5 97.125L86.625 94.2375V81.375M63 91.875C63 104.923 73.5772 115.5 86.625 115.5C99.6728 115.5 110.25 104.923 110.25 91.875C110.25 78.8272 99.6728 68.25 86.625 68.25C73.5772 68.25 63 78.8272 63 91.875Z"
                      stroke="#042656"
                      stroke-width="7.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* Step 2 - Share */}
            <div className="bg-white rounded-lg py-6 px-3 shadow-sm relative">
              <div className="flex items-start gap-4">
                <div className="">
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="16" fill="#F55557" />
                    <circle
                      cx="19.6667"
                      cy="11.0026"
                      r="1.66667"
                      stroke="white"
                    />
                    <circle
                      cx="11.6667"
                      cy="15.6667"
                      r="1.66667"
                      stroke="white"
                    />
                    <path
                      d="M18.0007 12.0052L13.334 14.6719"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 17L18 20"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="19.6667"
                      cy="21.0026"
                      r="1.66667"
                      stroke="white"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#303032]">Share</h3>
                  <p className="text-[#777779] font-medium text-sm">
                    Send your link via email, SMS, chat apps, social media, or
                    embed it anywhere online.
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0">
                <svg
                  width="126"
                  height="126"
                  viewBox="0 0 126 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.03">
                    <circle
                      cx="91.875"
                      cy="23.625"
                      r="13.125"
                      stroke="#717171"
                      stroke-width="7.875"
                    />
                    <circle
                      cx="28.875"
                      cy="60.375"
                      r="13.125"
                      stroke="#717171"
                      stroke-width="7.875"
                    />
                    <path
                      d="M78.75 31.5L42 52.5"
                      stroke="#717171"
                      stroke-width="7.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M39.375 70.875L78.75 94.5"
                      stroke="#717171"
                      stroke-width="7.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle
                      cx="91.875"
                      cy="102.375"
                      r="13.125"
                      stroke="#717171"
                      stroke-width="7.875"
                    />
                  </g>
                </svg>
              </div>
            </div>

            {/* Step 3 - Receive */}
            <div className="bg-white rounded-lg py-6 px-3 shadow-sm relative">
              <div className="flex items-start gap-4">
                <div>
                  <svg
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      y="0.5"
                      width="32"
                      height="32"
                      rx="16"
                      fill="#800080"
                    />
                    <path
                      d="M14.332 17.6629C14.332 18.3096 14.832 18.8296 15.4454 18.8296H16.6987C17.232 18.8296 17.6654 18.3762 17.6654 17.8096C17.6654 17.2029 17.3987 16.9829 17.0054 16.8429L14.9987 16.1429C14.6054 16.0029 14.3387 15.7896 14.3387 15.1762C14.3387 14.6162 14.772 14.1562 15.3054 14.1562H16.5587C17.172 14.1562 17.672 14.6762 17.672 15.3229"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.998 13.5V19.5"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.6673 16.5026C22.6673 20.1826 19.6807 23.1693 16.0007 23.1693C12.3207 23.1693 9.33398 20.1826 9.33398 16.5026C9.33398 12.8226 12.3207 9.83594 16.0007 9.83594"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.334 10.5V13.1667H22.0007"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M22.6673 9.83594L19.334 13.1693"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-lg text-[#303032">Receive</h3>
                  <p className="text-[#777779] font-medium text-sm">
                    Your customer clicks the link, pays securely, and the funds
                    land in your account. Get notified instantly!
                  </p>
                </div>
              </div>
              <div className="absolute right-0 top-0">
                <svg
                  width="126"
                  height="126"
                  viewBox="0 0 126 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.03">
                    <path
                      d="M49.875 72.1775C49.875 77.27 53.8126 81.365 58.6426 81.365H68.5124C72.7124 81.365 76.125 77.795 76.125 73.3325C76.125 68.555 74.0251 66.8225 70.9276 65.72L55.125 60.2075C52.0275 59.105 49.9276 57.425 49.9276 52.595C49.9276 48.185 53.34 44.5625 57.54 44.5625H67.41C72.24 44.5625 76.1776 48.6575 76.1776 53.75"
                      stroke="#042656"
                      stroke-width="7.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M63 39.375V86.625"
                      stroke="#042656"
                      stroke-width="7.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M115.5 63C115.5 91.98 91.98 115.5 63 115.5C34.02 115.5 10.5 91.98 10.5 63C10.5 34.02 34.02 10.5 63 10.5"
                      stroke="#042656"
                      stroke-width="7.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M89.25 15.75V36.75H110.25"
                      stroke="#292D32"
                      stroke-width="7.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M115.5 10.5L89.25 36.75"
                      stroke="#292D32"
                      stroke-width="7.875"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentStepSection;
