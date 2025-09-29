"use client";

import { useRouter, useParams } from "next/navigation";
import React from "react";
import PaymentIcon from "../../../../public/assets/icons/PaymentMethodIcon";
import SecurityIcon from "../../../../public/assets/icons/securityIcon";
import CardsIcon from "../../../../public/assets/icons/cards";
import SendIcon from "../../../../public/assets/icons/sendIcon";
import ReferalIcon from "../../../../public/assets/icons/referalIcon";
import InsuranceIcon from "../../../../public/assets/icons/insuranceIcon";

// ArrowRight component (you can replace this with your own icon)
const ArrowRight = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`md:w-8 md:h-8 ${className}`}
  >
    <path
      d="M19.2383 7.90625L27.3316 15.9996L19.2383 24.0929"
      stroke="#042656"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.66797 16H27.108"
      stroke="#042656"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Help categories data structure (moved from HelpDashboard)
const helpCategories = {
  "payment-methods": {
    title: "Payment Methods",
    icon: PaymentIcon,
    items: [
      "Updating your account",
      "How to change your belyfted password",
      "Updating from individual to Business account",
    ],
    process: [
      "Updating your account",
      "Verifying your identity",
      "Loading account details",
      "Connecting to server",
      "Fetching latest updates",
      "Saving changes",
      "Syncing data",
      "Confirmation successful",
    ],
  },
  "security-and-frauds": {
    title: "Security and Frauds",
    icon: SecurityIcon,
    items: [
      "Updating your account",
      "How to change your belyfted password",
      "Updating from individual to Business account",
    ],
    process: [
      "Security verification",
      "Identity confirmation",
      "Fraud detection scan",
      "Account validation",
      "Security updates",
      "Changes applied",
      "Data synchronization",
      "Security confirmation",
    ],
  },
  cards: {
    title: "Cards",
    icon: CardsIcon,
    items: [
      "Updating your account",
      "How to change your belyfted password",
      "Updating from individual to Business account",
    ],
    process: [
      "Card verification",
      "Account linking",
      "Card details validation",
      "Server connection",
      "Latest card updates",
      "Information saved",
      "Card sync complete",
      "Setup successful",
    ],
  },
  transfer: {
    title: "Transfer",
    icon: SendIcon,
    items: [
      "Updating your account",
      "How to change your belyfted password",
      "Updating from individual to Business account",
    ],
    process: [
      "Transfer initiation",
      "Identity verification",
      "Account details check",
      "Connection established",
      "Transfer processing",
      "Transaction saved",
      "Data synchronization",
      "Transfer completed",
    ],
  },
  account: {
    title: "Account",
    icon: PaymentIcon,
    items: [
      "Updating your account",
      "How to change your belyfted password",
      "Updating from individual to Business account",
    ],
    process: [
      "Account access",
      "Identity confirmation",
      "Profile data loading",
      "Server connection",
      "Account updates",
      "Changes saved",
      "Profile synchronization",
      "Update confirmed",
    ],
  },
  insurance: {
    title: "Insurance",
    icon: InsuranceIcon,
    items: [
      "Updating your account",
      "How to change your belyfted password",
      "Updating from individual to Business account",
    ],
    process: [
      "Insurance setup",
      "Policy verification",
      "Coverage details",
      "System connection",
      "Policy updates",
      "Information stored",
      "Data synchronization",
      "Coverage activated",
    ],
  },
  referrals: {
    title: "Referrals",
    icon: ReferalIcon,
    items: [
      "Updating your account",
      "How to change your belyfted password",
      "Updating from individual to Business account",
    ],
    process: [
      "Referral setup",
      "Account verification",
      "Referral code generation",
      "Network connection",
      "Referral activation",
      "Settings saved",
      "System synchronization",
      "Referral active",
    ],
  },
  "virtual-account": {
    title: "Virtual Account",
    icon: PaymentIcon,
    items: [
      "Updating your account",
      "How to change your belyfted password",
      "Updating from individual to Business account",
    ],
    process: [
      "Virtual account setup",
      "Digital verification",
      "Account configuration",
      "Virtual server connection",
      "Account provisioning",
      "Virtual data saved",
      "Cloud synchronization",
      "Virtual account ready",
    ],
  },
};

const CategoryDetail = () => {
  const router = useRouter();
  const params = useParams();
  const categoryId = params.categoryId;

  const category = helpCategories[categoryId];

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
            Category Not Found
          </h2>
          <button
            onClick={() => router.push("/help")}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm md:text-base"
          >
            Back to Help Dashboard
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = category.icon;

  return (
    <div className="min-h-screen bg-[#F2F0F3]">
      {/* Breadcrumb */}
      <div className="px-4 md:px-6 lg:px-[33px] pt-6 md:pt-8 lg:pt-[33px] pb-8 md:pb-10 lg:pb-[47px]">
        <div className="mx-auto">
          <div className="flex items-center text-[#525255] text-sm md:text-base">
            <button
              onClick={() => router.push("/help")}
              className="hover:text-blue-600 transition-colors underline cursor-pointer"
            >
              Help
            </button>
            <span className="mx-1.5 md:mx-2">›</span>
            <span className="text-gray-900 underline">{category.title}</span>
          </div>
        </div>
      </div>

      {/* Process Flow */}
      <div className="mx-auto px-4 md:px-6 lg:px-[33px]">
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3 md:gap-4">
            {category.process.map((step, index) => (
              <div
                key={index}
                className="flex items-center py-3 md:py-4 px-4 md:px-5 bg-white rounded-[10px] border-gray-100 last:border-b-0"
              >
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-gray-900 text-lg md:text-xl lg:text-2xl font-medium pr-4">
                    {step}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetail;
