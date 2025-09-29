import Image from "next/image";
import React from "react";
import Button from "../../../../_partials/_components/Button";
import Link from "next/link";

function VirtualAccountHero() {
  return (
    <div className="lg:h-[993px] flex flex-col lg:pt-[222px] pt-[160px] text-center relative overflow-hidden">
      <div className="relative z-20  px-4 lg:px-0">
        <h1 className="lg:text-4xl text-3xl font-extrabold">
          Get Paid Like a Local, Wherever <br /> Your Business Takes You.
        </h1>
        <p className="mt-5 text-[#474649] font-medium max-w-[670px] mx-auto leading-[32px] tracking-[3%]">
          Open virtual accounts in multiple currencies to receive payments
          globally and locally with ease. Simplify reconciliation and accelerate
          your cash flow.
        </p>
        <div className="mt-5">
          <Link href="/register">
          <Button variant="primary"> Open Your Free Virtual Account</Button>
          </Link>
        </div>
      </div>
      <div className="max-w-[1189px] lg:px-12 xl:px-0 mx-auto mt-[35px] relative">
        {/* Gradient background container around the image */}
        <div
          className="relative z-20 pt-8 px-8 rounded-tr-[13.53px] rounded-tl-[13.53px]"
          style={{
            background:
              "linear-gradient(180deg, #E6E9EE 0%, rgba(243, 156, 18, 0.25) 100%)",
            backdropFilter: "blur(3.38px)",
            WebkitBackdropFilter: "blur(3.38px)",
          }}
        >
          <Image
            src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756393849/Dashboard_2_upbtod.png"
            alt="belyfted-checkout-hero-image"
            width={1189}
            height={1090}
            className="w-full h-auto z-20"
          />
        </div>
      </div>

      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756376689/Frame_1618870051_1_ujxggl.png"
        alt="belyfted-checkout-hero-image"
        width={392}
        height={163}
        className="lg:w-[392px] w-[150px] h-auto absolute top-[15%] lg:top-[18%]  xl:right-0 -right-[10%]"
      />
      <Image
        src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756376633/Frame_1618870050_f1ipua.png"
        alt="belyfted-checkout-hero-image"
        width={392}
        height={163}
        className="lg:w-[392px] w-[150px] h-auto absolute top-[60%] lg:top-[35%] left-0"
      />
    </div>
  );
}

export default VirtualAccountHero;
