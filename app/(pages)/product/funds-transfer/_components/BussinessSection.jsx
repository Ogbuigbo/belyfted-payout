import Image from "next/image";
import Link from "next/link";

const BusinessSection = () => {
    return (
      <section className="px-4 lg:pt-[150px] lg:pb-[50px] relative overflow-hidden">
        {/* Header & left content */}
        <div className="max-w-[1235px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-8">
        <div className="w-full lg:w-auto">
        <h2 className="text-3xl lg:text-[48px] font-bold text-black leading-tight text-center lg:text-left">
        Built for Businesses Like <br className="hidden lg:block" />
        Yours
          </h2>
          <p className="text-[#666666] text-lg font-bold max-w-[570px] mx-auto lg:mx-0 text-center lg:text-left">
          From gig platforms and marketplaces to digital agencies and e-commerce brands—YodePay supports your scale.
          </p>
        </div>

        {/* Right content */}
        <div className="relative w-fit mx-auto lg:w-auto flex justify-center items-center lg:justify-end mt-12 lg:mt-0">
            <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757083674/Rectangle_30433_nfdrxx.png"
            alt="belyfted-checkout-hero-image"
            width={304}
            height={304}
            className="w-[250px] h-[250px] md:w-[304px] md:h-[304px] object-cover relative z-20"
            loading="lazy"
          />
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757083673/Rectangle_30432_mzhpbz.png"
            alt="belyfted-checkout-hero-image"
            width={193}
            height={193}
            className="w-[193px] h-[193px] object-cover absolute lg:top-[-25%] top-[-10%] lg:left-[-20%] left-[-30%] "
            loading="lazy"
          />
           <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757083673/Rectangle_30434_ctsyqa.png"
            alt="belyfted-checkout-hero-image"
            width={193}
            height={193}
            className="w-[193px] h-[193px] object-cover absolute lg:bottom-[-25%] bottom-[-10%] lg:right-[-20%] right-[-30%] "
            loading="lazy"
          />

        </div>
        </div>

        {/* CTA Section */}

        <div className="w-full mt-16 md:mt-32 lg:mt-[184px] lg:mb-[44px] my-[50px] bg-primary max-w-[1235px] mx-auto py-8 md:py-12 lg:py-[52px] px-6 md:px-12 lg:px-[78px] rounded-[20px] text-white flex flex-col lg:flex-row justify-between relative overflow-hidden">
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
        className="absolute top-[20%] hidden lg:block -left-[15%] w-[278px] h-[278px] z-30 rounded-full"
        style={{
          background: "#FEDF00",
          filter: "blur(100px)",
        }}
      />
      </section>
    );
  };
  
  export default BusinessSection;