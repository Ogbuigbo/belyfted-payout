import Image from 'next/image'
import React from 'react'
import Button from '../../../../_partials/_components/Button'
import Link from 'next/link'

function RemittanceHero() {
  return (
    <div className="lg:h-[993px] flex flex-col lg:pt-[222px] pt-[160px] bg-[#FBFBFB] text-center relative overflow-hidden">
      <h1 className="lg:text-[64px] lg:leading-[100%] text-3xl font-extrabold relative z-20">
      Seamless Remittances  <br className="hidden md:flex" /> with YodePay
      </h1>
      <h2 className='py-2 px-[14px] border-[#FFFFFF26] text-[#042656] bg-[#0627551F] w-fit mx-auto mt-7 rounded-[50px]'>
      Seamless Remittances with YodePay 
      </h2>
      <p className="mt-5 text-[#474649] font-medium max-w-[744px]  mx-auto px-2 lg:px-0">
      Whether you’re supporting family abroad or paying international service providers, YodePay makes remittances simple and cost-effective. Enjoy competitive rates, transparent fees, and lightning-fast delivery—every time.
      </p>
      <div className="mt-5">
        <Link href="/register">
        <Button variant="primary"> Get Started </Button>
        </Link>
      </div>
      <div className="max-w-[1189px] lg:px-12 xl:px-0 mx-auto mt-[35px] relative">
        {/* Gradient background container around the image */}
        
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756977352/Frame_1618870805_nn3ml2.png"
            alt="belyfted-checkout-hero-image"
            width={1189}
            height={1090}
            className="w-full h-auto z-20"
          />
      </div>

      <div
        className="absolute top-[30%] -left-[10px] w-[243px] h-[243px] rounded-full"
        style={{
          background: "#FFB23F",
          filter: "blur(200px)",
        }}
      />

    </div>
  )
}

export default RemittanceHero