import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PaymentTransferSection() {
  return (
    <div className=" py-[64px] -mb-[80px] bg-[#F5F5F5] pl-6 md:pl-8">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Pay With Section */}
          <div className="md:p-8 pr-6 flex flex-col justify-center items-center md:justify-start md:items-start">
            <h2 className="text-3xl font-bold text-center md:text-left text-gray-900 mb-6">
              Ideal for Businesses Like Yours
            </h2>

            <p className="text-[#303032] font-medium mb-6 text-justify md:text-left">
              Our Payment Links are designed for speed, simplicity, and
              reliability. We offer competitive transaction fees, dedicated
              support, and a user-friendly interface that makes getting paid
              easier than ever before. Focus on your business, we'll handle the
              payments.
            </p>
            <Link href="/register">
            <button className="bg-[#F39C12] py-4 px-10 rounded-lg text-sm font-semibold">
              Get Paid
            </button>
            </Link>
          </div>

          {/* Right Side - Payment Details Image */}
          <div className="w-full">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756579506/Frame_1618870804_dnthhz.png"
              alt="Payment transfer details showing bank transfer information for Belyfted Limited"
              width={682}
              height={642}
              className="w-full h-auto "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
