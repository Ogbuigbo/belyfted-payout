"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function VerifyEmail() {
  const [isResending, setIsResending] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Check if user has a pending verification
    const pendingEmail = sessionStorage.getItem("pendingVerificationEmail");
    if (!pendingEmail) {
      // If no pending verification, redirect to register
      router.push("/register");
      return;
    }
    setEmail(pendingEmail);
  }, [router]);

  const handleResendEmail = async () => {
    setIsResending(true);
    // Add your resend email logic here
    setTimeout(() => {
      setIsResending(false);
    }, 2000);
  };

  // If no email is set yet, don't render the content
  if (!email) {
    return null;
  }

  return (
    <div className="lg:min-h-screen flex items-center justify-center p-2 md:p-4">
      <div className="rounded-3xl w-full grid lg:grid-cols-2 lg:min-h-[600px]">
        {/* Left Section - Verify Email */}
        <div className="flex flex-col justify-center px-4 sm:px-2 lg:px-16 lg:py-12 py-8">
          {/* Logo */}
          <div className="mb-12">
            <Link href="/login">
              <Image
                src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1749466560/Frame_5_1_lzqhla.png"
                alt="logo"
                width={80}
                height={63}
              />
            </Link>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            <div className="text-center">
              {/* Email Icon */}
              <h1 className="text-3xl text-[#042656] mb-6">Verify Email</h1>
              <div className="mx-auto w-20 h-20 rounded-full flex items-center justify-center mb-8">
                <svg
                  width="142"
                  height="141"
                  viewBox="0 0 142 141"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    width="141"
                    height="141"
                    rx="70.5"
                    fill="#E6E9EE"
                  />
                  <path
                    opacity="0.4"
                    d="M83.083 91.5413H58.9163C51.6663 91.5413 46.833 87.9163 46.833 79.458V62.5413C46.833 54.083 51.6663 50.458 58.9163 50.458H83.083C90.333 50.458 95.1663 54.083 95.1663 62.5413V79.458C95.1663 87.9163 90.333 91.5413 83.083 91.5413Z"
                    fill="#042656"
                  />
                  <path
                    d="M71 73.1019C68.97 73.1019 66.9159 72.4736 65.345 71.1928L57.7809 65.1511C57.0075 64.5228 56.8625 63.3869 57.4909 62.6136C58.1192 61.8403 59.255 61.6953 60.0284 62.3236L67.5925 68.3653C69.4292 69.8394 72.5467 69.8394 74.3834 68.3653L81.9475 62.3236C82.7209 61.6953 83.8809 61.8161 84.485 62.6136C85.1134 63.3869 84.9925 64.5469 84.195 65.1511L76.6309 71.1928C75.0842 72.4736 73.03 73.1019 71 73.1019Z"
                    fill="#042656"
                  />
                </svg>
              </div>
            </div>

            <div className="text-center space-y-6">
              <h2 className="text-2xl font-semibold text-[#062755]">
                We have sent you an email
              </h2>

              <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto">
                A verification link has been sent to{" "}
                <span className="font-semibold">{email}</span>. Please check
                your email to verify your account.
              </p>

              <div className="flex items-center justify-center space-x-2 text-lg text-gray-500">
                <span>Didn't receive the email yet?</span>
                <button
                  onClick={handleResendEmail}
                  disabled={isResending}
                  className="text-[#062755] hover:text-blue-700"
                >
                  {isResending ? "Sending..." : "Send Again"}
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href={`mailto:${email}`} className="block">
                <button className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl">
                  Check your mail
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

      {/* Mobile Hero Image */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-600/20 to-transparent pointer-events-none"></div>
    </div>
  );
}
