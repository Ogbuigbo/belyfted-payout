import React from "react";

function HelpHero() {
  return (
    <div
      className="w-full  md:min-h-[493px] min-h-[400px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 md:px-6 lg:px-0"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755785337/Frame_1618871003_khnd2l.png')`,
      }}
    >
      <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mt-12 md:mt-16 lg:mt-20 text-center">
        How can we help you today?
      </h1>
      <p className="text-[#E4E2E4] mt-3 md:mt-5 text-sm md:text-base text-center">
        Type your question below and we'll help you out
      </p>
      <div className="bg-[#FFFFFF57] border-[#FFFFFF69] flex items-center gap-3 md:gap-5 justify-center rounded-[10px] py-3 mt-4 md:mt-5 px-4 md:px-6 w-full max-w-[738px] mx-auto">
        <svg
          width="20"
          height="21"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:w-6 md:h-6 flex-shrink-0"
        >
          <path
            d="M11 20.5C15.9706 20.5 20 16.4706 20 11.5C20 6.52944 15.9706 2.5 11 2.5C6.02944 2.5 2 6.52944 2 11.5C2 16.4706 6.02944 20.5 11 20.5Z"
            stroke="#F2F2F7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.9285 21.1888C19.4585 22.7888 20.6685 22.9488 21.5985 21.5488C22.4485 20.2688 21.8885 19.2188 20.3485 19.2188C19.2085 19.2088 18.5685 20.0988 18.9285 21.1888Z"
            stroke="#F2F2F7"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <input
          type="text"
          className="bg-transparent border-none w-full placeholder:!text-[#FFFFFF] text-white outline-none text-sm md:text-base"
          placeholder="Search help articles"
        />
      </div>
    </div>
  );
}

export default HelpHero;
