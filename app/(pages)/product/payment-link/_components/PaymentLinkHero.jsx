import React from "react";
import Button from "../../../../_partials/_components/Button";
import Image from "next/image";
import Link from "next/link";

function PaymentLinkHero() {
  return (
    <div
      className=" flex flex-col lg:pt-[222px] pt-[160px] text-center relative overflow-x-hidden bg-center bg-no-repeat "
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756459153/Rectangle_30426_1_optimized_a00bbg.png')",
        backdropFilter: "blur(3.38px)",
        WebkitBackdropFilter: "blur(3.38px)",
      }}
    >
      <div className="relative z-20">
        <h1 className="lg:text-4xl text-3xl font-extrabold">
          Collect Payments Instantly, <br /> Shareable Anywhere.
        </h1>
        <p className="mt-5 text-[#474649] font-medium max-w-[670px] mx-auto px-2 lg:px-0 leading-[32px] tracking-[3%]">
          Generate simple, secure payment links in seconds perfect for
          freelancers, social sellers, and businesses accepting payments without
          a website.
        </p>
        <div className="mt-5">
          <Link href="/register">
          <Button variant="primary">Create Your Free Payment Link</Button>
          </Link>
        </div>
      </div>
      <div className="max-w-[870px] mx-auto mt-[70px] md:px-8 px-4 lg:px-0  relative z-30">
        {/* Gradient background container around the image */}
        <div className="">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756476831/image_54_2_v89a7o.png"
            alt="belyfted-checkout-hero-image"
            width={870}
            height={745}
            className="w-full h-auto z-20"
          />
        </div>
      </div>

      <div className="bg-white w-full lg:h-[225px] h-[150px] absolute bottom-0"></div>

      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756376689/Frame_1618870051_1_ujxggl.png"
        alt="belyfted-checkout-hero-image"
        width={392}
        height={163}
        className="lg:w-[392px] w-[150px] h-auto absolute top-[15%] lg:top-[10%]  xl:right-0 -right-[10%]"
      />
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756376633/Frame_1618870050_f1ipua.png"
        alt="belyfted-checkout-hero-image"
        width={392}
        height={163}
        className="lg:w-[392px] w-[150px] h-auto absolute top-[60%] lg:top-[30%] left-0"
      />
    </div>
  );
}

export default PaymentLinkHero;
