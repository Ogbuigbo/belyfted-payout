import Image from "next/image";
import WhatsappIcon from "../../public/assets/icons/whatsappIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#042656] text-[#ACABAD] py-[100px] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[30%_15%_15%_15%_15%] gap-8 mb-8">
          {/* Logo and Social Icons */}
          <div className="space-y-9 ">
            <Link href="/">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1750068917/Logo_4_gjoddu.png"
              alt="Belyfted"
              width={140}
              height={40}
              className="h-8 w-auto"
            />
            </Link>
            <div className="flex space-x-4">
              <a href="#">
                <svg
                  width="24"
                  height="24"
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
              <a href="#">
                <svg
                  width="24"
                  height="24"
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
              <a href="#">
                <svg
                  width="24"
                  height="24"
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

          {/* Products */}
          <div className="">
            <h3 className="text-white font-semibold mb-4 text-sm">Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Funds Transfer
                </a>
              </li>
              <li>
                <a
                  href="/product/payment-link"
                  className="hover:text-white transition-colors"
                >
                  Payment Link
                </a>
              </li>
              <li>
                <a
                  href="/product/virtual-bank-account"
                  className="hover:text-white transition-colors"
                >
                  Virtual Bank Account
                </a>
              </li>
              <li>
                <a href="/product/currency-swapping" className="hover:text-white transition-colors">
                  Currency Swapping
                </a>
              </li>
              <li>
                <a
                  href="/product/checkout"
                  className="hover:text-white transition-colors"
                >
                  Checkout
                </a>
              </li>
              <li>
                <a href="/product/remittance" className="hover:text-white transition-colors">
                  Remittance
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">
              Developers
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/developers" className="hover:text-white transition-colors">
                  API Doc
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">Help</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/faqs" className="hover:text-white transition-colors">
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="flex items-center space-x-2 hover:text-white transition-colors"
                  >
                    <WhatsappIcon />
                    <span>Whatsapp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="pt-[90px]">
          <div className="flex flex-col md:flex-row justify-between text-sm">
            <p className="">© 2024 YodaPay . All Right Reserved</p>
            <div className="flex flex-wrap justify-center items-center mt-4 md:mt-0  gap-6 mb-4">
              <a
                href="#"
                className="hover:text-white transition-colors underline"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors underline"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors underline"
              >
                Fraud and Scams
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors underline"
              >
                Complaint Policy
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center  text-sm mt-[42px]">
            <p className="text-sm leading-relaxed">
              YodaPay Limited is registered by the Financial Conduct Authority
              under the Payment Services Regulations 2017 (PSRs) (FRN 911399),
              Licensed and regulated by HMRC (MSB) 13ML00000190574, Company
              number 11139735 United Kingdom.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
