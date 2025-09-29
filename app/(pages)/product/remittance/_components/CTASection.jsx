import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CTASection = () => { 
    return (
        <div className='pt-[89px] flex flex-col px-4 lg:px-12 w-full  max-w-[1235px] mx-auto relative'>
            <h2 className="text-3xl lg:text-5xl font-bold text-black">
            Built for Every User
        </h2>

            {/* Features Grid */}
      <div className="mt-[18px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {/* Expats & Immigrants */}
        <div className="px-[19px] py-[21px]  hover:shadow-md border border-gray-200 rounded-3xl bg-white">
          <div className="mb-5">
            {/* SVG Icon placeholder */}
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11.1666 8.94188L24.6966 4.42688C30.7716 2.40188 34.0716 5.71688 32.0616 11.7919L27.5466 25.3219C24.5166 34.4269 19.5366 34.4269 16.5066 25.3219L15.1716 21.3019L11.1516 19.9669C2.06156 16.9519 2.06156 11.9869 11.1666 8.94188Z" fill="#BD6B00"/>
<path d="M18.6797 17.4448L24.3947 11.7148L18.6797 17.4448Z" fill="#292D32"/>
<path d="M18.6798 18.57C18.3948 18.57 18.1098 18.465 17.8848 18.24C17.4498 17.805 17.4498 17.085 17.8848 16.65L23.5848 10.92C24.0198 10.485 24.7398 10.485 25.1748 10.92C25.6098 11.355 25.6098 12.075 25.1748 12.51L19.4748 18.24C19.2498 18.45 18.9648 18.57 18.6798 18.57Z" fill="#BD6B00"/>
</svg>

          </div>
          <h3 className="text-[24px] font-semibold text-[#303032] mb-[10px]">
          Expats & Immigrants
          </h3>
          <p className="">
          Support family back home with confidence and low costs.
          </p>
        </div>

        {/* Freelancers & Contractor */}
        <div className="px-[19px] py-[21px] border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow">
          <div className="mb-5">
            {/* SVG Icon placeholder */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12.8386 5.01172V26.5067C12.3286 26.5217 11.8186 26.6417 11.4436 26.8667L7.91859 28.8767C5.45859 30.2867 3.43359 29.1167 3.43359 26.2667V11.6717C3.43359 10.7267 4.10859 9.55672 4.94859 9.07672L11.4436 5.35672C11.8186 5.14672 12.3286 5.02672 12.8386 5.01172Z" fill="#042656"/>
<path d="M23.5948 9.49442V30.9894C23.0698 31.0044 22.5598 30.9144 22.1548 30.7194L14.2798 26.7744C13.8748 26.5794 13.3648 26.4894 12.8398 26.5044V5.00942C13.3648 4.99442 13.8748 5.08442 14.2798 5.27942L22.1548 9.22442C22.5598 9.41942 23.0698 9.50942 23.5948 9.49442Z" fill="#F39C12"/>
<path opacity="0.4" d="M32.9988 9.7351V24.3301C32.9988 25.2751 32.3238 26.4451 31.4838 26.9251L24.9888 30.6451C24.6138 30.8551 24.1037 30.9751 23.5938 30.9901V9.4951C24.1037 9.4801 24.6138 9.3601 24.9888 9.1351L28.5138 7.1251C30.9738 5.7151 32.9988 6.8851 32.9988 9.7351Z" fill="#042656"/>
</svg>

          </div>
          <h3 className="text-[24px] font-semibold text-[#303032] mb-[10px]">
          Freelancers & Contractor
          </h3>
          <p className="">
          Pay yourself or your subcontractors in local currency without the hassle.
          </p>
        </div>

        {/* Wide Coverage */}
        <div className="px-[19px] py-[21px]   border border-gray-200 rounded-3xl bg-white hover:shadow-md transition-shadow">
          <div className="mb-5">
            {/* SVG Icon placeholder */}
            <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M33.5 28.5V33H3.5V28.5C3.5 27.675 4.175 27 5 27H32C32.825 27 33.5 27.675 33.5 28.5Z" fill="#042656" stroke="#042656" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.6" d="M12.5 16.5H6.5V27H12.5V16.5Z" fill="#042656"/>
<path opacity="0.4" d="M18.5 16.5H12.5V27H18.5V16.5Z" fill="#042656"/>
<path opacity="0.6" d="M24.5 16.5H18.5V27H24.5V16.5Z" fill="#042656"/>
<path opacity="0.4" d="M30.5 16.5H24.5V27H30.5V16.5Z" fill="#042656"/>
<path d="M35 34.125H2C1.385 34.125 0.875 33.615 0.875 33C0.875 32.385 1.385 31.875 2 31.875H35C35.615 31.875 36.125 32.385 36.125 33C36.125 33.615 35.615 34.125 35 34.125Z" fill="#042656"/>
<path d="M32.555 8.62668L19.055 3.22672C18.755 3.10672 18.245 3.10672 17.945 3.22672L4.44501 8.62668C3.92001 8.83668 3.5 9.45167 3.5 10.0217V15.0017C3.5 15.8267 4.175 16.5017 5 16.5017H32C32.825 16.5017 33.5 15.8267 33.5 15.0017V10.0217C33.5 9.45167 33.08 8.83668 32.555 8.62668ZM18.5 12.7517C17.255 12.7517 16.25 11.7467 16.25 10.5017C16.25 9.25668 17.255 8.25168 18.5 8.25168C19.745 8.25168 20.75 9.25668 20.75 10.5017C20.75 11.7467 19.745 12.7517 18.5 12.7517Z" fill="#F39C12"/>
</svg>

          </div>
          <h3 className="text-[24px] font-semibold text-[#303032] mb-[10px]">
          Small Businesses
          </h3>
          <p className="">
          Streamline vendor payments across borders and reduce overhead.
          </p>
        </div>
      </div>


      <div className="w-full mt-16 md:mt-32 lg:my-[84px] my-[50px] bg-primary max-w-[1235px] mx-auto py-8 md:py-12 lg:py-[52px] px-6 md:px-12 lg:px-[78px] rounded-[20px] text-white flex flex-col lg:flex-row justify-between relative overflow-hidden">
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start max-w-full lg:max-w-[754px] z-10 relative">
          <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left">
            Ready to get Started
          </h1>
          <p className="max-w-[560px] text-[#F2F0F3] mt-4 md:mt-6 lg:mt-[23px] leading-relaxed text-justify lg:text-left">
          Manages a large amount  platform makes transactions fast, secure, and seamless.  Unlock scalable payment for your business in Africa.
          </p>

          <Link href="/register">
          <button className="bg-[#F39C12] hover:bg-orange-600 text-primary px-4 md:px-6 lg:px-3 py-3 md:py-4 rounded-lg mt-6 md:mt-8 lg:mt-[23px] font-semibold text-sm md:text-base transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex gap-2 items-center group">
            Get Started
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 md:w-5 md:h-5 lg:w-[21px] lg:h-[20px]"
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

        {/* Image positioned differently for mobile vs desktop */}
        <div className="mt-8 lg:mt-0  justify-center hidden lg:flex lg:justify-end lg:absolute lg:bottom-0 lg:right-0">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756984606/Visual_oa4qyk.png"
            width={588}
            height={457}
            className="w-64 h-48 md:w-80 md:h-60 lg:w-[400px] lg:h-[300px] object-cover"
            alt="yodepay-ring"
            loading="lazy"
          />
        </div>
      </div>

      <div
        className="absolute top-[20%] -left-[20%] w-[278px] h-[278px] z-30 rounded-full"
        style={{
          background: "#FEDF00",
          filter: "blur(200px)",
        }}
      />
      
    </div>

    )
}

export default CTASection