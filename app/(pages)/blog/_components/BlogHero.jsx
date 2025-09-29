import Image from "next/image";
import React from "react";

function BlogHero() {
  return (
    <div className="h-[570px] md:h-[700px] bg-[#FBFBFB]  flex flex-col justify-center items-center text-center  relative overflow-hidden px-2 lg:px-0">
      <h1 className="lg:text-[64px] md:text-[40px] text-3xl font-extrabold leading-tight relative z-20 mt-12 lg:mt-0  ">
        Discover Our latest <br className="md:block hidden " /> News
      </h1>
      <div
        className="absolute -bottom-20 -left-[10px] w-[243px] h-[243px] rounded-full"
        style={{
          background: "#FFB23F",
          filter: "blur(200px)",
        }}
      />
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

      <div className="mt-7">
        <p className="text-xl max-w-[974px] relative z-20">
          At YodePay, we’re more than just a payments platform—we’re your
          partner in navigating the world of digital finance. Our blog brings
          you actionable insights, expert tips, industry trends, and platform
          updates to help you stay ahead.
        </p>

        <div className="mt-6 flex gap-5 justify-center items-center">
          <input
            type="text"
            placeholder="Search Blog"
            className="border outline-none border-[#E4E2E4] text-sm rounded-[10px] py-2 pl-2 pr-6"
          />
          <button className="bg-[#042656] p-2 rounded-[10px] text-sm text-white">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogHero;
