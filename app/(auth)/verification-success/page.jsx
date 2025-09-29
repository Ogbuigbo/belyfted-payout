import Image from "next/image";
import Link from "next/link";

export default function VerificationSuccess() {
  return (
    <div className="lg:min-h-screen  flex items-center justify-center p-2 md:p-4">
      <div className="bg-white rounded-3xl  w-full grid lg:grid-cols-2 ">
        {/* Left Section - Success Message */}
        <div className="flex flex-col px-4 sm:px-2 lg:px-16 py-12">
          {/* Logo */}
          <div className="mb-12">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466560/Frame_5_1_lzqhla.png"
              alt="logo"
              width={80}
              height={63}
            />
          </div>

          {/* Main Content */}
          <div className="space-y-8 text-center">
            {/* Success Icon */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Verification Successful!
            </h1>
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-8">
              <svg
                width="141"
                height="141"
                viewBox="0 0 141 141"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="141" height="141" rx="70.5" fill="#D1F2DE" />
                <path
                  d="M84.3763 61.2513L65.8763 79.7513L58.168 72.043M101.335 70.5013C101.335 87.5301 87.5301 101.335 70.5013 101.335C53.4725 101.335 39.668 87.5301 39.668 70.5013C39.668 53.4725 53.4725 39.668 70.5013 39.668C87.5301 39.668 101.335 53.4725 101.335 70.5013Z"
                  stroke="#22C55E"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/login">
                <button className="w-full bg-primary hover:bg-blue-700 cursor-pointer text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
                  Proceed to Login
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section - Hero Image */}
        <div className="hidden lg:block">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative h-full flex items-center justify-center p-8">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466488/Sign_up_now_nkulhu.png"
              alt="Join The Future of Payment"
              width={500}
              height={400}
              className="max-w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-orange-400/20 rounded-full blur-lg"></div>
        </div>
      </div>
    </div>
  );
}
