import Image from 'next/image'
import React from 'react'

function FaqHero() {
  return (
    <div className="h-[345px] bg-[#FBFBFB]  flex flex-col justify-center items-center text-center  relative overflow-hidden px-2 lg:px-0">
    <h1 className="lg:text-[64px] md:text-[40px] text-3xl font-extrabold leading-tight relative z-20 mt-16  ">
    FAQS
    </h1>
 
    <Image
      src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756819512/Vector_4_gwycju.png"
      width={303}
      height={467}
      alt="hero"
      className="absolute top-10 md:-left-5 -left-[200px]"
    />
    <Image
      src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756819513/Vector_3_c7igjc.png"
      width={303}
      height={467}
      alt="hero"
      className="absolute top-10 md:-right-5 -right-[200px]"
    />

  </div>
  )
}

export default FaqHero