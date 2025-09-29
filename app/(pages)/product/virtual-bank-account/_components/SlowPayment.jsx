import Image from "next/image";
import React from "react";
import Button from "../../../../_partials/_components/Button";
import Link from "next/link";

function SlowPayment() {
  return (
    <div className="relative w-full lg:pt-[72px] md:pt-16 sm:pt-12 pt-10 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex md:flex-row  flex-col justify-between items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 md:w-full w-full lg:pr-8 md:pr-0 pr-0    lg:mb-0 md:mb-10 mb-8">
          <h1 className="text-3xl text-center lg:text-left font-extrabold leading-tight mb-6 lg:mb-6 md:mb-5 ">
            <span className="text-[#F39C12]">Tired of Slow</span>
            <span className="text-gray-800">
              , Costly International Payments?
            </span>
          </h1>

          <p className="text-gray-600 text-justify lg:text-left lg:text-base md:text-sm text-sm  mb-8 lg:mb-8 md:mb-6 xl:max-w-[613px] lg:max-w-[500px] md:max-w-full max-w-full mx-auto lg:mx-0 md:mx-auto leading-8">
            Traditional banking can make receiving payments from clients in
            other regions or currencies complicated, slow, and expensive for
            both you and your customers. Our Virtual Accounts cut through this
            complexity, giving you a straightforward way to collect funds
            globally and locally.
          </p>

          <div className="text-center lg:text-left">
            <Link href="/register">
            <Button variant="primary">Open Your Free Virtual Account</Button>
            </Link>
          </div>
        </div>

        {/* Decorative Arrow - Hidden on mobile and md */}
        <div className="lg:block md:hidden hidden absolute left-[45%] lg:left-[37%] xl:-bottom-[2%] bottom-[5%] transform -translate-y-1/2 z-10">
          <svg
            width="166"
            height="134"
            viewBox="0 0 166 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-[120px] lg:h-[100px] md:w-[100px] md:h-[80px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.62242 11.8697C2.24985 12.1941 3.92657 12.9835 5.39775 13.5891C8.70791 14.9516 13.3704 18.2935 17.3759 22.3223C20.4591 25.3614 22.0277 26.1725 23.0227 25.2421C24.3531 24.0197 20.8045 18.9361 15.8944 14.9196C14.4123 13.6975 13.1899 12.6484 13.1574 12.4861C13.0167 11.7831 21.9952 15.0486 26.3155 17.2777C34.9696 21.7332 43.2915 29.0607 50.3237 38.3407C54.8243 44.2462 58.35 50.0585 65.5165 63.1367C68.4594 68.5664 72.5477 75.2224 74.5492 77.9156C80.4454 85.7355 83.8301 88.3135 95.1493 93.7544C96.2744 94.3167 96.3934 94.6304 96.4479 97.7132C96.5674 101.683 98.4058 108.621 100.267 112.017C106.984 124.503 121.852 132.215 141.002 133.22C150.662 133.705 161.645 132.126 164.403 129.887C164.879 129.454 165.171 128.664 165.062 128.123C164.867 127.15 164.467 127.117 160.303 127.951C157.815 128.449 152.85 128.936 149.331 129.022C126.124 129.672 109.203 122.097 102.82 108.194C101.392 104.992 99.5211 96.2053 100.127 95.2966C100.213 95.1668 101.565 95.1774 103.123 95.3719C105.2 95.6312 108.012 95.3496 113.306 94.2903C119.633 93.0239 121.007 92.5802 123.434 90.9695C129.87 86.8691 133.215 81.6995 132.729 76.7414C132.339 73.1069 131.615 71.7332 129.094 69.819C125.438 67.007 122.874 66.5639 116.931 67.7531C112.064 68.7273 111.599 68.9328 108.04 71.67C103.606 75.0887 99.6219 80.7235 97.9662 85.9415C97.3931 87.8562 96.7119 89.5113 96.5496 89.5437C95.6302 89.7278 87.7333 85.4019 85.2843 83.2483C79.2803 78.2625 76.4146 74.0618 67.0842 57.198C55.2816 35.886 47.7491 26.6006 35.0706 18.0568C29.0883 14.0228 24.0256 11.4923 18.0301 9.60549L15.0986 8.72972L18.8087 7.59347C23.211 6.26242 26.8019 3.68752 26.6719 1.91356C26.6068 0.182863 25.0383 0.215516 20.5928 2.17394C18.462 3.05037 13.3782 4.63029 9.253 5.62461C5.12105 6.62029 1.35689 7.76738 0.870178 8.14603C0.437548 8.51387 0.156411 9.35761 0.297119 10.0607C0.437828 10.7638 1.04367 11.5425 1.61701 11.8778L1.62242 11.8697ZM101.698 87.093C103.093 82.8202 107.051 77.5843 110.907 74.6822C116.878 70.2248 124.194 69.9981 127.591 74.0432C128.846 75.5358 128.889 75.7521 128.446 78.3158C127.679 82.9131 123.904 86.5372 117.118 89.1328C114.825 90.0417 111.731 90.8858 110.174 90.9726C106.745 91.265 100.828 90.9305 100.73 90.4437C100.698 90.2815 101.12 88.7346 101.693 87.1012L101.698 87.093Z"
              fill="#042656"
            />
          </svg>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 md:w-full w-full flex  lg:justify-end md:justify-center justify-center">
          <div className="relative">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756395204/Frame_1618870810_punetl.png"
              width={550}
              height={501}
              alt="Person working with global payment systems"
              className="w-full lg:w-[550px] lg:h-[501px] md:w-[400px] md:h-[320px]  h-[280px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlowPayment;
