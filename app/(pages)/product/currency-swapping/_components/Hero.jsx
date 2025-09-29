import React from 'react'
import Button from '../../../../_partials/_components/Button'
import Image from 'next/image'
import Link from 'next/link'

function Hero() {
  return (
    <div
    className="w-full   flex flex-col lg:pt-[222px] text-center pt-[160px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 md:px-6 xl:px-0"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756995201/24716b77611d516471ea51e2d564ce1da541c948_ftzmkj.jpg')`,
    }}
  >
    <h1 className="lg:text-[64px] lg:leading-[100%] text-3xl text-white font-extrabold relative z-20 px-4 ">
    Effortless Currency Swapping <br className="hidden md:flex" /> with YodePay
      </h1>

      <p className="mt-5 text-white font-medium max-w-[744px]  mx-auto px-2 lg:px-0">
      Say goodbye to costly conversion rates and hidden fees. With YodePay, currency swapping is fast, transparent, and built to support your global transactions.
      </p>
      <div className="mt-5">
        <Link href="/register"> 
        <Button variant="primary"> Get Started </Button>
        </Link>
      </div>
      <div className="max-w-[1189px] lg:px-12 xl:px-0 mx-auto mt-[35px] relative">
        {/* Gradient background container around the image */}
        <div
          className="relative z-20 pt-6 px-6 rounded-tr-[13.53px] rounded-tl-[13.53px]"
          style={{
            background:
              "linear-gradient(180deg, #FFFFFF26 0%, rgba(243, 156, 18, 0.25) 100%)",
            backdropFilter: "blur(3.38px)",
            WebkitBackdropFilter: "blur(3.38px)",
          }}
        >
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756995721/Swap_Funds_rbe7pc.png"
            alt="belyfted-checkout-hero-image"
            width={1189}
            height={1090}
            className="w-full h-auto z-20"
          />
          </div>
      </div>
  </div>
  )
}

export default Hero