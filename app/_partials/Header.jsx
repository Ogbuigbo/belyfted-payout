"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import FundTransferIcon from "./_icons/fundTransferIcon";
import PaymentLinkIcon from "./_icons/paymentLink";
import CheckoutIcon from "./_icons/checkoutIcon";
import RemittanceIcon from "./_icons/remittanceIcon";
import VirtualIcon from "./_icons/virtualIcon";
import SwapIcon from "./_icons/swapIcon";
import AboutIcon from "./_icons/aboutIcon";
import ContactIcon from "./_icons/contactIcon";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const pathname = usePathname();
  const productDropdownRef = useRef(null);
  const productButtonRef = useRef(null);
  const companyDropdownRef = useRef(null);
  const companyButtonRef = useRef(null);

  // Check if we're on the home page
  const isHomePage = pathname === "/" || pathname === "/home";
  // Check if we're on the help page or any help subpage
  const isHelpPage = pathname === "/help" || pathname.startsWith("/help/");
  const isDeveloperPage = pathname === "/developers" || pathname.startsWith("/developers/");
  const isCurrencySwappingPage = pathname === "/product/currency-swapping" || pathname.startsWith("/product/currency-swapping/");
  const isBlogPage = pathname === "/blog" || pathname.startsWith("/blog/");
  const isFaqsPage = pathname === "/faqs" || pathname.startsWith("/faqs/");
  const isAboutPage = pathname === "/about" || pathname.startsWith("/about/");
  const isContactPage = pathname === "/contact" || pathname.startsWith("/contact/");
  
  // Check if we're on any product page
  const isProductPage = pathname.startsWith("/product/");

  // Define colors based on page
  const textColor =
    isHomePage || isHelpPage || isDeveloperPage || isCurrencySwappingPage
      ? "text-white"
      : "text-[#303032]";
  const hoverColor =
    isHomePage || isHelpPage || isDeveloperPage || isCurrencySwappingPage
      ? "hover:text-orange-300"
      : "hover:text-orange-500";

  const logoSrc =
    isHomePage || isHelpPage || isDeveloperPage || isCurrencySwappingPage
      ? "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1750068917/Logo_4_gjoddu.png"
      : "https://res.cloudinary.com/dpkn1ppzj/image/upload/v1755697808/Logo_5_xiiwpb.png";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
    setIsCompanyDropdownOpen(false);
  };

  const toggleCompanyDropdown = () => {
    setIsCompanyDropdownOpen(!isCompanyDropdownOpen);
    setIsProductDropdownOpen(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Product dropdown
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(event.target) &&
        productButtonRef.current &&
        !productButtonRef.current.contains(event.target)
      ) {
        setIsProductDropdownOpen(false);
      }

      // Company dropdown
      if (
        companyDropdownRef.current &&
        !companyDropdownRef.current.contains(event.target) &&
        companyButtonRef.current &&
        !companyButtonRef.current.contains(event.target)
      ) {
        setIsCompanyDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const productMenuItems = [
    {
      icon: <FundTransferIcon />,
      title: "Funds Transfer",
      href: "/product/funds-transfer",
    },
    {
      icon: <PaymentLinkIcon />,
      title: "Payment Link",
      href: "/product/payment-link",
    },
    {
      icon: <CheckoutIcon />,
      title: "Checkout",
      href: "/product/checkout",
    },
    {
      icon: <RemittanceIcon />,
      title: "Remittance",
      href: "/product/remittance",
    },
    {
      icon: <VirtualIcon />,
      title: "Virtual Bank Account",
      href: "/product/virtual-bank-account",
    },
    {
      icon: <SwapIcon />,
      title: "Currency Swapping",
      href: "/product/currency-swapping",
    },
  ];

  const companyMenuItems = [
    {
      icon: <AboutIcon />,
      title: "About Us",
      href: "/about",
      description: "Learn more about our mission and values",
    },
    {
      icon: <ContactIcon />,
      title: "Contact Us",
      href: "/contact",
      description: "Get in touch with our team",
    },
  ];

  // Split product menu items: first 4 in left column, last 2 in right column with What's New
  const leftColumnItems = productMenuItems.slice(0, 4);
  const rightColumnItems = productMenuItems.slice(4, 6);

  // Mobile menu state
  const [isMobileProductOpen, setIsMobileProductOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);

  return (
    <header
      className={`absolute top-0 left-0 right-0 z-50 w-full font-montserrat ${isHelpPage || isDeveloperPage || isCurrencySwappingPage ? "bg-[#FFFFFF0D] mt-4 max-w-[1380px] mx-auto" : ""}`}
    >
      <nav
        className={`flex items-center justify-between px-6 lg:px-12  ${isHelpPage || isDeveloperPage || isCurrencySwappingPage ? "py-6" : "py-[26px] lg:py-[76px]"} `}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={logoSrc}
              alt="Belyfted"
              width={117}
              height={39}
              className="h-auto w-full"
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Product Dropdown */}
          <div className="relative group">
            <button
              ref={productButtonRef}
              onClick={toggleProductDropdown}
              onMouseEnter={() => {
                setIsProductDropdownOpen(true);
                setIsCompanyDropdownOpen(false);
              }}
              className={`flex items-center ${textColor} ${hoverColor} transition-colors duration-200 font-medium ${
                isProductPage ? "text-orange-500" : ""
              }`}
            >
              Product
              <svg
                className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  isProductDropdownOpen
                    ? "rotate-180"
                    : "group-hover:rotate-180"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Product Dropdown Menu */}
            {isProductDropdownOpen && (
              <div
                ref={productDropdownRef}
                onMouseEnter={() => {
                  setIsProductDropdownOpen(true);
                  setIsCompanyDropdownOpen(false);
                }}
                onMouseLeave={() => setIsProductDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 border bg-white border-white rounded-[18px] p-[1px] overflow-hidden z-50"
              >
                <div className="p-2 bg-gray-400 rounded-[18px] w-[654px] shadow-2xl">
                  <div className="grid grid-cols-2">
                    {/* Left Column - First 4 Product Features */}
                    <div className="">
                      {leftColumnItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className={`flex items-center p-3 rounded-xl hover:bg-gray-50 w-[200px] transition-all duration-200 group ${
                            pathname === item.href ? "bg-orange-50" : ""
                          }`}
                          onClick={() => setIsProductDropdownOpen(false)}
                        >
                          <div className="flex items-center justify-center w-[30px] h-[30px] border border-[#C8C6C9] rounded-lg mr-4">
                            {item.icon}
                          </div>
                          <span className="text-[#303032] font-semibold text-sm transition-colors duration-200">
                            {item.title}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Right Column - Last 2 Product Features + What's New */}
                    <div className="space-y-3">
                      {/* Last 2 Product Features */}
                      {rightColumnItems.map((item, index) => (
                        <Link
                          key={index + 4}
                          href={item.href}
                          className={`flex items-center p-3 rounded-xl hover:bg-gray-50 w-[230px] transition-all duration-200 group ${
                            pathname === item.href ? "bg-orange-50" : ""
                          }`}
                          onClick={() => setIsProductDropdownOpen(false)}
                        >
                          <div className="flex items-center justify-center w-[30px] h-[30px] border border-[#C8C6C9] rounded-lg mr-4">
                            {item.icon}
                          </div>
                          <span className="text-[#303032] text-sm font-semibold transition-colors duration-200">
                            {item.title}
                          </span>
                        </Link>
                      ))}

                      {/* What's New Section */}
                      <div className="border border-[#E4E2E4] bg-[#FBF8FB] rounded-xl p-4 mt-4">
                        <div className="">
                          <h3 className="text-[#042656] font-medium text-xs mb-[10px]">
                            What's New
                          </h3>
                          <h4 className="text-[#303032] text-sm font-semibold mb-2">
                            Product Update
                          </h4>
                          <p className="text-[#525255] text-xs leading-relaxed">
                            Bonus point feature now live
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div className="relative group">
            <button
              ref={companyButtonRef}
              onClick={toggleCompanyDropdown}
              onMouseEnter={() => {
                setIsCompanyDropdownOpen(true);
                setIsProductDropdownOpen(false);
              }}
              className={`flex items-center ${textColor} ${hoverColor} transition-colors duration-200 font-medium ${
                isAboutPage || isContactPage ? "text-orange-500" : ""
              }`}
            >
              Company
              <svg
                className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                  isCompanyDropdownOpen
                    ? "rotate-180"
                    : "group-hover:rotate-180"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Company Dropdown Menu */}
            {isCompanyDropdownOpen && (
              <div
                ref={companyDropdownRef}
                onMouseEnter={() => {
                  setIsCompanyDropdownOpen(true);
                  setIsProductDropdownOpen(false);
                }}
                onMouseLeave={() => setIsCompanyDropdownOpen(false)}
                className="absolute top-full left-0 mt-2 border bg-white border-white rounded-[18px] p-[1px] overflow-hidden z-50"
              >
                <div className=" bg-gray-400 rounded-[18px] w-[380px] shadow-2xl">
                  <div className="flex justify-between p-1 items-center">
                    {/* Company Menu Items in a row */}
                    <div className="flex flex-col">
                      {companyMenuItems.map((item, index) => (
                        <Link
                          key={index}
                          href={item.href}
                          className={`flex items-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 group ${
                            pathname === item.href ? "bg-orange-50" : ""
                          }`}
                          onClick={() => setIsCompanyDropdownOpen(false)}
                        >
                          <div className="flex items-center justify-center w-[30px] h-[30px] border border-[#C8C6C9] rounded-lg mr-4">
                            {item.icon}
                          </div>
                          <h3 className="text-[#303032] font-semibold text-sm mb-1">
                            {item.title}
                          </h3>
                        </Link>
                      ))}
                    </div>

                    {/* Trust Section - full width below the links */}
                    <div className="border border-[#E4E2E4] flex justify-center items-center bg-[#FBF8FB] h-[125px] rounded-tr-2xl rounded-br-2xl p-2">
                      <div className="flex flex-col ">
                        <div className="text-2xl font-bold text-[#303032] mb-[17.5px] flex gap-6">
                          15,000+
                          <svg
                            width="32"
                            height="33"
                            viewBox="0 0 32 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              y="0.5"
                              width="32"
                              height="32"
                              rx="16"
                              fill="#E6E9EE"
                            />
                            <path
                              d="M14.9934 9.98312L11.6668 11.2365C10.9001 11.5231 10.2734 12.4298 10.2734 13.2431V18.1965C10.2734 18.9831 10.7934 20.0165 11.4268 20.4898L14.2934 22.6298C15.2334 23.3365 16.7801 23.3365 17.7201 22.6298L20.5868 20.4898C21.2201 20.0165 21.7401 18.9831 21.7401 18.1965V13.2431C21.7401 12.4231 21.1134 11.5165 20.3468 11.2298L17.0201 9.98312C16.4534 9.77646 15.5468 9.77646 14.9934 9.98312Z"
                              stroke="#042656"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M14.0352 16.4105L15.1085 17.4839L17.9752 14.6172"
                              stroke="#042656"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <p className="text-[#525255] text-xs">
                          Businesses Trust Us
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/developers"
            className={`${textColor} ${hoverColor} transition-colors duration-200 font-medium ${
              isDeveloperPage ? "text-orange-500" : ""
            }`}
          >
            Developers
          </Link>
          <Link
            href="/blog"
            className={`${textColor} ${hoverColor} transition-colors duration-200 font-medium ${
              isBlogPage ? "text-orange-500" : ""
            }`}
          >
            Blog
          </Link>
          <Link
            href="/faqs"
            className={`${textColor} ${hoverColor} transition-colors duration-200 font-medium ${
              isFaqsPage ? "text-orange-500" : ""
            }`}
          >
            FAQs
          </Link>
        </div>

        {/* Auth Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/login"
            className={`${textColor} ${hoverColor} transition-colors duration-200 font-medium`}
          >
            Login
          </Link>
          <Link
            href="/register"
            className={`bg-[#F39C12] hover:bg-orange-600 ${isHomePage || isHelpPage || isDeveloperPage || isCurrencySwappingPage ? "text-white" : "text-primary"}   px-8 py-4 rounded-lg font-semibold transition-colors duration-200  hover:shadow-xl transform hover:-translate-y-0.5`}
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden ${textColor} ${hoverColor} transition-colors duration-200 p-2 rounded-lg hover:bg-white/10`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-white to-gray-50 shadow-2xl border-t border-orange-100 backdrop-blur-sm">
          <div className="px-6 py-8 space-y-6">
            {/* Navigation Links - Mobile */}
            <div className="space-y-4">
              <div className="border-b border-orange-100 pb-4">
                <button 
                  className={`flex items-center justify-between w-full transition-all duration-300 py-3 px-4 rounded-lg hover:bg-orange-50 group ${
                    isProductPage 
                      ? "text-orange-500 bg-orange-50" 
                      : "text-gray-800 hover:text-orange-500"
                  }`}
                  onClick={() => setIsMobileProductOpen(!isMobileProductOpen)}
                >
                  <span className="font-semibold text-lg">Product</span>
                  <svg
                    className={`h-5 w-5 transform transition-transform duration-300 ${
                      isMobileProductOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {/* Mobile Product Dropdown Items */}
                {isMobileProductOpen && (
                  <div className="mt-3 ml-4 space-y-3">
                    {productMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center py-2 px-3 rounded-lg hover:bg-orange-50 transition-all duration-200 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="mr-3">
                          {item.icon}
                        </div>
                        <span className="text-gray-700 font-medium text-sm group-hover:text-orange-500 transition-colors duration-200">
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="border-b border-orange-100 pb-4">
                <button 
                  className={`flex items-center justify-between w-full transition-all duration-300 py-3 px-4 rounded-lg hover:bg-orange-50 group ${
                    isAboutPage || isContactPage 
                      ? "text-orange-500 bg-orange-50" 
                      : "text-gray-800 hover:text-orange-500"
                  }`}
                  onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                >
                  <span className="font-semibold text-lg">Company</span>
                  <svg
                    className={`h-5 w-5 transform transition-transform duration-300 ${
                      isMobileCompanyOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {/* Mobile Company Dropdown Items */}
                {isMobileCompanyOpen && (
                  <div className="mt-3 ml-4 space-y-3">
                    {companyMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center py-2 px-3 rounded-lg hover:bg-orange-50 transition-all duration-200 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className=" mr-3">
                          {item.icon}
                        </div>
                        <span className="text-gray-700 font-medium text-sm group-hover:text-orange-500 transition-colors duration-200">
                          {item.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/developers"
                className={`block transition-all duration-300 py-3 px-4 rounded-lg hover:bg-orange-50 font-medium ${
                  isDeveloperPage 
                    ? "text-orange-500 bg-orange-50" 
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Developers
              </Link>
              <Link
                href="/blog"
                className={`block transition-all duration-300 py-3 px-4 rounded-lg hover:bg-orange-50 font-medium ${
                  isBlogPage 
                    ? "text-orange-500 bg-orange-50" 
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/faqs"
                className={`block transition-all duration-300 py-3 px-4 rounded-lg hover:bg-orange-50 font-medium ${
                  isFaqsPage 
                    ? "text-orange-500 bg-orange-50" 
                    : "text-gray-700 hover:text-orange-500"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQs
              </Link>
            </div>

            {/* Auth Buttons - Mobile */}
            <div className="pt-6 border-t border-orange-100 space-y-4">
              <Link
                href="/login"
                className="block text-gray-700 hover:text-orange-500 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-orange-50 font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block bg-gradient-to-r from-[#F39C12] to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
