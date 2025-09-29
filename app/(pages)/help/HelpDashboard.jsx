"use client";
import { useRouter } from "next/navigation";
import PaymentIcon from "../../../public/assets/icons/PaymentMethodIcon";
import SecurityIcon from "../../../public/assets/icons/securityIcon";
import CardsIcon from "../../../public/assets/icons/cards";
import SendIcon from "../../../public/assets/icons/sendIcon";
import ReferalIcon from "../../../public/assets/icons/referalIcon";
import InsuranceIcon from "../../../public/assets/icons/insuranceIcon";
import Header from "../../_partials/Header";

// Help categories data structure
const helpCategories = {
  "payment-methods": {
    title: "Payment Methods",
    icon: <PaymentIcon />,
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
    icon: <SecurityIcon />,
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
    icon: <CardsIcon />,
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
    icon: <SendIcon />,
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
    icon: <PaymentIcon />,
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
    icon: <InsuranceIcon />,
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
    icon: <ReferalIcon />,
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
    icon: <PaymentIcon />,
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

// Main dashboard component
const HelpDashboard = () => {
  const router = useRouter();

  const handleViewAll = (categoryId) => {
    router.push(`/help/${categoryId}`);
  };

  const categoryEntries = Object.entries(helpCategories);

  return (
    <>
      <div className="min-h-screen bg-[#F2F0F3] py-6 md:py-12 lg:py-[56px] px-4 md:px-6 lg:px-[39px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categoryEntries.map(([categoryId, category]) => {
              return (
                <div
                  key={categoryId}
                  className="bg-white rounded-lg p-4 md:p-6 flex flex-col"
                >
                  {/* Icon placed above the title */}
                  <div className="flex justify-start mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      {category.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-left mb-3 md:mb-4">
                    {category.title}
                  </h3>

                  <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6 flex-grow">
                    {category.items.map((item, index) => (
                      <p
                        key={index}
                        className="text-sm md:text-base text-[#303032]"
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                  <button
                    onClick={() => handleViewAll(categoryId)}
                    className="flex items-center justify-between w-full text-[#042656] font-semibold transition-colors mt-4 md:mt-8 text-sm md:text-base"
                  >
                    View All
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="md:w-6 md:h-6"
                    >
                      <path
                        d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                        stroke="#042656"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.5 12H20.33"
                        stroke="#042656"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default HelpDashboard;
