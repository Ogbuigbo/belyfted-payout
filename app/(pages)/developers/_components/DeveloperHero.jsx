import React from "react";

function DeveloperHero() {
  return (
    <div
      className="w-full  md:min-h-[493px] min-h-[400px] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 md:px-6 lg:px-0"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755785337/Frame_1618871003_khnd2l.png')`,
      }}
    >
      <h1 className="font-extrabold text-3xl  lg:text-4xl text-white mt-12 md:mt-16 lg:mt-28 text-center">
        Build with Yodepay API
      </h1>
      <p className="text-[#E4E2E4] mt-3 md:mt-5 text-sm md:text-base text-center">
        Integrate secure and seamless payment solutions into your app, website,
        or platform with just a few lines of code.
      </p>
    </div>
  );
}

export default DeveloperHero;
