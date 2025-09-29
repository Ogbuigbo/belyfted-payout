import Image from "next/image";
import React from "react";

function PaymentMethod() {
  return (
    <div className="relative w-full py-[98px] z-50 overflow-hidden px-6 lg:px-12 xl:px-0">
        <h1 className="text-3xl lg:text-4xl text-[#303032] text-center lg:mb-16 mb-10 font-bold">
            Available Payment Methods
          </h1>
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756384514/Frame_1618870050_dp6eqr.png"
        width={433}
        height={392}
        alt="beylted-ocheckout-icon"
        className="absolute -right-[3%] -top-[10%] hidden lg:flex"
        loading="lazy"
      />
      <div className=" max-w-[1036px] flex flex-col md:flex-row gap-9 items-center mx-auto relative z-40">
        <div className="bg-[#042656] rounded-3xl md:w-[500px] relative">
          <div className="py-[11.5px] px-4 flex items-center gap-2 bg-[#8A5CF5] w-fit absolute top-[10%] left-[37%] text-white text-sm font-semibold rounded-lg" style={{boxShadow: '0px 4px 4px 0px #00000040'}}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 8.56907C2 7.37289 2.48238 6.63982 3.48063 6.08428L7.58987 3.79744C9.7431 2.59915 10.8197 2 12 2C13.1803 2 14.2569 2.59915 16.4101 3.79744L20.5194 6.08428C21.5176 6.63982 22 7.3729 22 8.56907C22 8.89343 22 9.05561 21.9646 9.18894C21.7785 9.88945 21.1437 10 20.5307 10H3.46928C2.85627 10 2.22152 9.88944 2.03542 9.18894C2 9.05561 2 8.89343 2 8.56907Z"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M11.9961 7H12.0051"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 10V18.5M8 10V18.5"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M16 10V18.5M20 10V18.5"
                stroke="white"
                stroke-width="1.5"
              />
              <path
                d="M19 18.5H5C3.34315 18.5 2 19.8431 2 21.5C2 21.7761 2.22386 22 2.5 22H21.5C21.7761 22 22 21.7761 22 21.5C22 19.8431 20.6569 18.5 19 18.5Z"
                stroke="white"
                stroke-width="1.5"
              />
            </svg>
            Bank Transfers
          </div>
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756381616/image_68_sex5ap.png"
            width={409}
            height={409}
            alt="beylfted-payment-methods"
            loading="lazy"
          />
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756381965/Vector_2_gyyk0t.png"
            width={50}
            height={58}
            alt="beylfted-logo"
            className="absolute top-[30%] left-[38%]"
            loading="lazy"
          />
        </div>
        <div className="py-[11.5px] pl-[22px] pr-[70px] flex items-center gap-2 bg-[#0088FF] w-fit absolute bottom-[75%]  left-[5%] sm:left-[20%] sm:bottom-[65%] md:bottom-[30%] md:left-[6%]  text-white text-sm font-semibold rounded-lg shadow-xl backdrop-blur-sm" style={{boxShadow: '0px 4px 4px 0px #00000040'}}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19H12.01"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5 2H10.5C8.14298 2 6.96447 2 6.23223 2.73223C5.5 3.46447 5.5 4.64298 5.5 7V17C5.5 19.357 5.5 20.5355 6.23223 21.2678C6.96447 22 8.14298 22 10.5 22H13.5C15.857 22 17.0355 22 17.7678 21.2678C18.5 20.5355 18.5 19.357 18.5 17V7C18.5 4.64298 18.5 3.46447 17.7678 2.73223C17.0355 2 15.857 2 13.5 2Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Mobile Money
        </div>

        <div className="shadow-lg py-6 px-[34px] bg-white rounded-3xl relative z-40">
        
          <div className="flex border border-[#C8C6C9] rounded-2xl mt-4 p-4 relative">
            <div className="relative z-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8.56907C2 7.37289 2.48238 6.63982 3.48063 6.08428L7.58987 3.79744C9.7431 2.59915 10.8197 2 12 2C13.1803 2 14.2569 2.59915 16.4101 3.79744L20.5194 6.08428C21.5176 6.63982 22 7.3729 22 8.56907C22 8.89343 22 9.05561 21.9646 9.18894C21.7785 9.88945 21.1437 10 20.5307 10H3.46928C2.85627 10 2.22152 9.88944 2.03542 9.18894C2 9.05561 2 8.89343 2 8.56907Z"
                  stroke="black"
                  stroke-width="1.5"
                />
                <path
                  d="M11.9961 7H12.0051"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 10V18.5M8 10V18.5"
                  stroke="black"
                  stroke-width="1.5"
                />
                <path
                  d="M16 10V18.5M20 10V18.5"
                  stroke="black"
                  stroke-width="1.5"
                />
                <path
                  d="M19 18.5H5C3.34315 18.5 2 19.8431 2 21.5C2 21.7761 2.22386 22 2.5 22H21.5C21.7761 22 22 21.7761 22 21.5C22 19.8431 20.6569 18.5 19 18.5Z"
                  stroke="black"
                  stroke-width="1.5"
                />
              </svg>
              <h3 className="text-sm font-semibold mt-3 text-[#303032]">
                Bank Transfers
              </h3>
              <p className="text-sm font-medium text-[#5E5E60] mt-3 max-w-[397px]">
                Accept payments via bank transfers, catering to customers who
                prefer this method.
              </p>
            </div>
            <div className="absolute right-0 bottom-0">
              <svg
                width="145"
                height="145"
                viewBox="0 0 145 145"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1904 59.7569C15.4871 53.2658 17.6738 49.0041 22.7642 45.4025L43.7188 30.5768C54.6989 22.8082 60.1889 18.9239 66.5939 18.2299C72.9989 17.536 79.1934 20.1543 91.5824 25.391L115.226 35.3846C120.97 37.8124 124.019 41.5069 124.722 47.998C124.913 49.7582 125.008 50.6383 124.894 51.3826C124.296 55.2934 120.916 56.2665 117.59 56.6269L25.0048 66.6581C21.6783 67.0185 18.1688 66.7918 16.747 63.0999C16.4764 62.3972 16.3811 61.5171 16.1904 59.7569Z"
                  stroke="#FBF8FB"
                  stroke-width="8.1875"
                />
                <path
                  d="M69.5117 45.375L69.5609 45.3697"
                  stroke="#FBF8FB"
                  stroke-width="10.9167"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M27.8848 66.3516L32.8823 112.477M49.5911 63.9998L54.5886 110.126"
                  stroke="#FBF8FB"
                  stroke-width="8.1875"
                />
                <path
                  d="M93.0039 59.2969L98.0014 105.423M114.71 56.9451L119.708 103.071"
                  stroke="#FBF8FB"
                  stroke-width="8.1875"
                />
                <path
                  d="M114.281 103.661L38.309 111.892C29.318 112.867 22.819 120.945 23.7931 129.936C23.9555 131.434 25.3019 132.518 26.8004 132.355L129.905 121.184C131.404 121.022 132.487 119.675 132.325 118.177C131.35 109.186 123.272 102.687 114.281 103.661Z"
                  stroke="#FBF8FB"
                  stroke-width="8.1875"
                />
              </svg>
            </div>
          </div>

          <div className="flex border border-[#C8C6C9] rounded-2xl mt-4 p-4 relative">
            <div className="relative z-10">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 19H12.01"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 2H10.5C8.14298 2 6.96447 2 6.23223 2.73223C5.5 3.46447 5.5 4.64298 5.5 7V17C5.5 19.357 5.5 20.5355 6.23223 21.2678C6.96447 22 8.14298 22 10.5 22H13.5C15.857 22 17.0355 22 17.7678 21.2678C18.5 20.5355 18.5 19.357 18.5 17V7C18.5 4.64298 18.5 3.46447 17.7678 2.73223C17.0355 2 15.857 2 13.5 2Z"
                  stroke="black"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <h3 className="text-sm font-semibold mt-3 text-[#303032]">
                Bank Transfers
              </h3>
              <p className="text-sm font-medium text-[#5E5E60] mt-3 max-w-[397px]">
                Accept payments via bank transfers, catering to customers who
                prefer this method.
              </p>
            </div>
            <div className="absolute right-0 -top-2">
              <svg
                width="159"
                height="159"
                viewBox="0 0 159 159"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.1758 116.555L70.2287 116.568"
                  stroke="#FBF8FB"
                  stroke-width="10.9167"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M100.696 28.5547L84.8132 24.5703C72.3345 21.4399 66.0951 19.8747 61.2459 22.7788C56.3968 25.683 54.8316 31.9224 51.7012 44.4011L38.4199 97.344C35.2895 109.823 33.7243 116.062 36.6283 120.911C39.5325 125.76 45.7719 127.326 58.2507 130.456L74.1335 134.44C86.6122 137.571 92.8515 139.136 97.7009 136.232C102.55 133.328 104.115 127.088 107.246 114.61L120.527 61.6668C123.657 49.1881 125.223 42.9487 122.319 38.0995C119.414 33.2503 113.175 31.6851 100.696 28.5547Z"
                  stroke="#FBF8FB"
                  stroke-width="8.1875"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
