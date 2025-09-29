import Image from 'next/image'
import React from 'react'
import Button from '../../../../_partials/_components/Button'
import Link from 'next/link'

const FundsHero = () => {
  return (
    <div
    className="w-full   flex flex-col lg:pt-[202px] text-center pt-[160px] bg-[#F9FCD4] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 md:px-6 xl:px-0 overflow-hidden"
    style={{
      backgroundImage: `url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757059987/Grid_layers_-_v1_ehvc9f.png')`,
    }}
  >
      <h2 className='py-2 px-[14px] border-[#FFFFFF26] text-[#042656] bg-[#0627551F] w-fit mx-auto mb-4 text-xs md:text-sm rounded-[50px]'>
      Seamless Payouts, Anywhere. Anytime.
      </h2>
    <h1 className="lg:text-[64px] lg:leading-[100%] text-3xl font-extrabold relative z-20 px-4 ">
    Instant, Reliable Fund <br className="hidden md:flex" /> <span className='text-[#042656]'> Transfers</span> 
      </h1>
    
      <p className="mt-5 font-medium max-w-[744px]  mx-auto px-2 lg:px-0">
      Whether you're paying freelancers, partners, or vendors, YodePay makes transferring funds fast, secure, and effortless. Empower your business with a smarter way to send money.
      </p>
      <div className="mt-5">
        <Link href="/register">
        <Button variant="primary"> Get Started </Button>
        </Link>
      </div>
      <div className="max-w-[1189px] lg:px-12 xl:px-0 mx-auto mt-[75px] relative">
        {/* Gradient background container around the image */}
        
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757060403/Dashboard_spq9j0.png"
            alt="belyfted-checkout-hero-image"
            width={1189}
            height={1090}
            className="w-full h-auto z-20 relative"
          />

<Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757060556/Frame_1618870013_1_ttxemx.png"
            alt="belyfted-checkout-hero-image"
            width={1189}
            height={1090}
            className="w-full h-auto absolute -top-[5%] lg:top-[-6%] -right-[3%]"
          />
          </div>
     
  </div>
  )
}

export default FundsHero