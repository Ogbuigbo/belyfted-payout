import Image from "next/image";
import Link from "next/link";
import React from "react";

function PasswordResetSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center xl:p-8 lg:py-8 p-4">
      <div className="bg-white rounded-2xl flex justify-between w-full overflow-hidden">
        <div className="w-full lg:max-w-[553px] lg:w-1/2 md:px-8 ">
          <div className="mb-6 flex flex-col items-center justify-center lg:justify-start lg:items-start">
            <Link href="/login">
              <Image
                src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466560/Frame_5_1_lzqhla.png"
                alt="Belyfted logo"
                width={80}
                height={63}
              />
            </Link>
          </div>

          <div className="flex flex-col justify-center gap-6 mb-10 items-center">
            <h2 className="text-[32px] font-semibold text-[#042656] mt-16 mb-2">
              Password Reset Successful!
            </h2>
            <svg
              width="141"
              height="141"
              viewBox="0 0 141 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="141" height="141" rx="70.5" fill="#D1F2DE" />
              <path
                d="M84.3744 61.2513L65.8744 79.7513L58.166 72.043M101.333 70.5013C101.333 87.5301 87.5281 101.335 70.4994 101.335C53.4706 101.335 39.666 87.5301 39.666 70.5013C39.666 53.4725 53.4706 39.668 70.4994 39.668C87.5281 39.668 101.333 53.4725 101.333 70.5013Z"
                stroke="#22C55E"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <Link href="/login">
            <button className="bg-[#042656] text-white py-4 w-full rounded-lg">
              Proceed to Login
            </button>
          </Link>
        </div>

        {/* Right: Dashboard Preview */}
        <div className="hidden lg:flex lg:pr-10">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466560/Sign_up_now_nkulhu.png"
            alt="Belyfted dashboard preview"
            width={500}
            height={500}
            className="w-[607px] h-[740px]"
          />
        </div>
      </div>
    </div>
  );
}

export default PasswordResetSuccess;
