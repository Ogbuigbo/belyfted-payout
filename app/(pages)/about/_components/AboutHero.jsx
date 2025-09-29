import React from "react";
import Button from "../../../_partials/_components/Button";
import Image from "next/image";

function AboutHero() {
  return (
    <div
      className="lg:h-[850px] h-[650px] pt-[100px] px-3 lg:pt-0 lg:px-0  flex flex-col text-center justify-center items-center relative overflow-x-hidden bg-center bg-no-repeat w-full"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756459153/Rectangle_30426_1_optimized_a00bbg.png')",
        backdropFilter: "blur(3.38px)",
        WebkitBackdropFilter: "blur(3.38px)",
      }}
    >
      <div className="relative z-20">
        <h1 className="lg:text-5xl text-3xl leading-[100%] font-extrabold">
          Your Global Partner for Seamless <br /> Payments, Empowering
          Businesses <br /> to Grow Without Borders
        </h1>
        <p className="mt-5 text-[#474649] font-medium max-w-[905px] text-lg mx-auto leading-[32px] tracking-[3%]">
          We provide reliable and accessible payment infrastructure, enabling
          businesses to accept payments, manage payouts, and scale across
          borders.
        </p>
      </div>
      <div className="max-w-[491px] mx-auto absolute lg:top-[20%] md:right-[20%] right-[2%] lg:right-[30%]">
        {/* Gradient background container around the image */}
        <div className="">
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756657495/Vector_2_cubppp.png"
            alt="belyfted-checkout-hero-image"
            width={491}
            height={609}
            className="h-auto w-[370px] lg:w-full"
          />
        </div>
      </div>

      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756376689/Frame_1618870051_1_ujxggl.png"
        alt="belyfted-checkout-hero-image"
        width={392}
        height={163}
        className="lg:w-[392px] w-[150px] md:w-[250px] h-auto absolute top-[15%] lg:top-[20%]  xl:right-0 -right-[10%]"
      />
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756376633/Frame_1618870050_f1ipua.png"
        alt="belyfted-checkout-hero-image"
        width={392}
        height={163}
        className="lg:w-[392px] w-[150px]  md:w-[250px] h-auto absolute top-[60%] lg:top-[40%] left-0"
      />
    </div>
  );
}

export default AboutHero;
