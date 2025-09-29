"use client";

import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div id="contact-form" className="py-8 md:py-12 lg:py-[80px] px-4 md:px-8 lg:px-[131px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center">
          {/* Left Side - Form */}
          <div className="bg-[#F4F4F4] px-4 md:px-6 py-6 md:py-8 rounded-2xl">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              Can't find what you're looking for?
            </h2>
            <p className="text-[#212121] mb-6 md:mb-8 text-sm">
              Tell us about it by filling the form below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm text-[#212121] font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm text-[#212121] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm text-[#212121] font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder=""
                />
              </div>

              <div>
                <label className="block text-sm text-[#212121] font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder=""
                />
              </div>
              {/* 
              <button
                type="submit"
                className="w-full bg-[#042656] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#031b3d] transition-colors"
              >
                Send Message
              </button> */}
            </form>
          </div>

          {/* Right Side - Contact Details */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              Contact Details
            </h3>
            <p className="text-[#474649] font-medium mb-6 md:mb-8">
              Connect with us at our office, by email, or on WhatsApp.
            </p>

            <div className="space-y-4 md:space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-lg border">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    className="md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9989 13.4314C13.722 13.4314 15.1189 12.0345 15.1189 10.3114C15.1189 8.58828 13.722 7.19141 11.9989 7.19141C10.2758 7.19141 8.87891 8.58828 8.87891 10.3114C8.87891 12.0345 10.2758 13.4314 11.9989 13.4314Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.62166 8.49C5.59166 -0.169998 18.4217 -0.159997 20.3817 8.5C21.5317 13.58 18.3717 17.88 15.6017 20.54C13.5917 22.48 10.4117 22.48 8.39166 20.54C5.63166 17.88 2.47166 13.57 3.62166 8.49Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm md:text-base text-[#333333] mb-1">
                    Address:{" "}
                    <span className="text-[#737373] text-xs font-normal block md:inline">
                      (Assistance hours: Monday - Friday 6 am to 8 pm EST)
                    </span>
                  </h4>
                  <p className="text-[#707070] text-sm md:text-base">
                    44 Whalebone lane south, dagenham, RM8 1 BB
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-lg border">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    width="18"
                    height="15"
                    className="md:w-[22px] md:h-[18px]"
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="1"
                      width="20"
                      height="16"
                      rx="5"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5 6L9.8 9.6C10.5111 10.1333 11.4889 10.1333 12.2 9.6L17 6"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm md:text-base text-[#333333] mb-2">
                    Email
                  </h4>
                  <a
                    href="mailto:help@belyfted.com"
                    className="text-[#1D57A8] text-sm md:text-base break-all"
                  >
                    help@belyfted.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 bg-white rounded-lg border">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    className="md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.9 20.6C8.4 21.5 10.2 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 13.8 2.5 15.5 3.3 17L2.44044 20.306C2.24572 21.0549 2.93892 21.7317 3.68299 21.5191L6.9 20.6Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.5 14.8485C16.5 15.0105 16.4639 15.177 16.3873 15.339C16.3107 15.501 16.2116 15.654 16.0809 15.798C15.86 16.041 15.6167 16.2165 15.3418 16.329C15.0714 16.4415 14.7784 16.5 14.4629 16.5C14.0033 16.5 13.512 16.392 12.9937 16.1715C12.4755 15.951 11.9572 15.654 11.4434 15.2805C10.9251 14.9025 10.4339 14.484 9.9652 14.0205C9.501 13.5525 9.08187 13.062 8.70781 12.549C8.33826 12.036 8.04081 11.523 7.82449 11.0145C7.60816 10.5015 7.5 10.011 7.5 9.543C7.5 9.237 7.55408 8.9445 7.66224 8.6745C7.77041 8.4 7.94166 8.148 8.18052 7.923C8.46895 7.6395 8.78443 7.5 9.11793 7.5C9.24412 7.5 9.37031 7.527 9.48297 7.581C9.60015 7.635 9.70381 7.716 9.78493 7.833L10.8305 9.3045C10.9116 9.417 10.9702 9.5205 11.0108 9.6195C11.0513 9.714 11.0739 9.8085 11.0739 9.894C11.0739 10.002 11.0423 10.11 10.9792 10.2135C10.9206 10.317 10.835 10.425 10.7268 10.533L10.3843 10.8885C10.3348 10.938 10.3122 10.9965 10.3122 11.0685C10.3122 11.1045 10.3167 11.136 10.3257 11.172C10.3393 11.208 10.3528 11.235 10.3618 11.262C10.4429 11.4105 10.5826 11.604 10.7809 11.838C10.9837 12.072 11.2 12.3105 11.4344 12.549C11.6778 12.7875 11.9121 13.008 12.151 13.2105C12.3853 13.4085 12.5791 13.5435 12.7323 13.6245C12.7549 13.6335 12.7819 13.647 12.8135 13.6605C12.8495 13.674 12.8856 13.6785 12.9261 13.6785C13.0028 13.6785 13.0613 13.6515 13.1109 13.602L13.4534 13.2645C13.5661 13.152 13.6743 13.0665 13.7779 13.0125C13.8816 12.9495 13.9852 12.918 14.0979 12.918C14.1835 12.918 14.2737 12.936 14.3728 12.9765C14.472 13.017 14.5756 13.0755 14.6883 13.152L16.18 14.2095C16.2972 14.2905 16.3783 14.385 16.4279 14.4975C16.473 14.61 16.5 14.7225 16.5 14.8485Z"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm md:text-base text-[#333333] mb-2">
                    Whatsapp
                  </h4>
                  <a
                    href="#"
                    className="text-[#1D57A8] text-sm md:text-base underline cursor-pointer"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 md:mt-8 flex w-full items-center justify-between">
              <h4 className="text-sm md:text-base text-[#262626]">
                Social Media:
              </h4>
              <div className="flex space-x-3 md:space-x-4">
                <a href="#" className="flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    className="md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 2.25H7.5C6.10807 2.25149 4.77358 2.80509 3.78933 3.78933C2.80509 4.77358 2.25149 6.10807 2.25 7.5V16.5C2.25149 17.8919 2.80509 19.2264 3.78933 20.2107C4.77358 21.1949 6.10807 21.7485 7.5 21.75H16.5C17.8919 21.7485 19.2264 21.1949 20.2107 20.2107C21.1949 19.2264 21.7485 17.8919 21.75 16.5V7.5C21.7485 6.10807 21.1949 4.77358 20.2107 3.78933C19.2264 2.80509 17.8919 2.25149 16.5 2.25ZM12 16.5C11.11 16.5 10.24 16.2361 9.49993 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49993C16.2361 10.24 16.5 11.11 16.5 12C16.4988 13.1931 16.0243 14.337 15.1806 15.1806C14.337 16.0243 13.1931 16.4988 12 16.5ZM17.625 7.5C17.4025 7.5 17.185 7.43402 17 7.3104C16.815 7.18679 16.6708 7.01109 16.5856 6.80552C16.5005 6.59995 16.4782 6.37375 16.5216 6.15552C16.565 5.93729 16.6722 5.73684 16.8295 5.5795C16.9868 5.42217 17.1873 5.31502 17.4055 5.27162C17.6238 5.22821 17.85 5.25049 18.0555 5.33564C18.2611 5.42078 18.4368 5.56498 18.5604 5.74998C18.684 5.93499 18.75 6.1525 18.75 6.375C18.75 6.67337 18.6315 6.95952 18.4205 7.1705C18.2095 7.38147 17.9234 7.5 17.625 7.5ZM15 12C15 12.5933 14.8241 13.1734 14.4944 13.6667C14.1648 14.1601 13.6962 14.5446 13.1481 14.7716C12.5999 14.9987 11.9967 15.0581 11.4147 14.9424C10.8328 14.8266 10.2982 14.5409 9.87868 14.1213C9.45912 13.7018 9.1734 13.1672 9.05764 12.5853C8.94189 12.0033 9.0013 11.4001 9.22836 10.8519C9.45542 10.3038 9.83994 9.83524 10.3333 9.50559C10.8266 9.17595 11.4067 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
                      fill="#F39C12"
                    />
                  </svg>
                </a>
                <a href="#" className="flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    className="md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 7C4 5.343 5.343 4 7 4H17C18.657 4 20 5.343 20 7V17C20 18.657 18.657 20 17 20H7C5.343 20 4 18.657 4 17V7ZM8.85 17.393V10.169H6.434V17.393H8.85ZM7.642 9.182C8.484 9.182 9.009 8.628 9.009 7.934C8.993 7.225 8.484 6.686 7.658 6.686C6.831 6.686 6.291 7.225 6.291 7.934C6.291 8.628 6.815 9.182 7.626 9.182H7.642ZM12.604 17.393V13.359C12.604 13.143 12.62 12.928 12.683 12.773C12.858 12.342 13.256 11.895 13.923 11.895C14.798 11.895 15.148 12.557 15.148 13.529V17.393H17.564V13.251C17.564 11.032 16.372 9.999 14.782 9.999C13.5 9.999 12.925 10.699 12.604 11.192V10.169H10.187C10.219 10.844 10.188 17.352 10.187 17.394L12.604 17.393Z"
                      fill="#F39C12"
                    />
                  </svg>
                </a>
                <a href="#" className="flex-shrink-0">
                  <svg
                    width="20"
                    height="20"
                    className="md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6391 5H19.0931L13.7331 10.93L20.0391 19H15.1011L11.2341 14.106L6.80906 19H4.35406L10.0881 12.657L4.03906 5H9.10106L12.5971 9.474L16.6391 5Z"
                      fill="#F39C12"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
