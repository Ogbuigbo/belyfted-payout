import React from "react";

// Icon components
const CloudDollarIcon = ({ isHovered = false }) => (
  <svg
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M51.9044 62.4983C56.0919 62.5295 60.1232 60.967 63.2169 58.1545C73.4357 49.217 67.9669 31.2795 54.4982 29.592C49.6857 0.404503 7.59194 11.467 17.5607 39.2483"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.7481 40.5328C21.0918 39.6891 19.248 39.2516 17.4043 39.2828C2.8418 40.3141 2.87305 61.5016 17.4043 62.5328"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M49.4375 30.9063C51.0625 30.0938 52.8125 29.6562 54.625 29.625"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M28.8402 59.8791H31.9652V67.1603C31.9652 68.2228 33.309 68.7541 33.9965 67.9416L41.6527 59.2228C42.5902 58.1603 42.184 57.2853 40.7777 57.2853H37.6527V50.0041C37.6527 48.9416 36.309 48.4103 35.6215 49.2228L27.9652 57.9416C27.0277 59.0041 27.434 59.8791 28.8402 59.8791Z"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BulkPayoutIcon = ({ isHovered = false }) => (
  <svg
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M29.6875 42.9648C29.6875 45.9961 32.0313 48.4336 34.9063 48.4336H40.7812C43.2812 48.4336 45.3125 46.3086 45.3125 43.6523C45.3125 40.8086 44.0625 39.7773 42.2188 39.1211L32.8125 35.8398C30.9688 35.1836 29.7188 34.1836 29.7188 31.3086C29.7188 28.6836 31.75 26.5273 34.25 26.5273H40.125C43 26.5273 45.3438 28.9648 45.3438 31.9961"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37.5 23.4375V51.5625"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M68.75 37.5C68.75 54.75 54.75 68.75 37.5 68.75C20.25 68.75 6.25 54.75 6.25 37.5C6.25 20.25 20.25 6.25 37.5 6.25"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M68.75 18.75V6.25H56.25"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M53.125 21.875L68.75 6.25"
      stroke={isHovered ? "#ffffff" : "#292D32"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BalanceIcon = ({ isHovered = false }) => (
  <svg
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M37.5 45.3125C41.8147 45.3125 45.3125 41.8147 45.3125 37.5C45.3125 33.1853 41.8147 29.6875 37.5 29.6875C33.1853 29.6875 29.6875 33.1853 29.6875 37.5C29.6875 41.8147 33.1853 45.3125 37.5 45.3125Z"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M57.8125 29.6875V45.3125"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.625 68.75C22.5286 68.75 28.125 63.1536 28.125 56.25C28.125 49.3464 22.5286 43.75 15.625 43.75C8.72144 43.75 3.125 49.3464 3.125 56.25C3.125 63.1536 8.72144 68.75 15.625 68.75Z"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.4062 52.3438V55.25C16.4062 56.3437 15.8438 57.3749 14.875 57.9374L12.5 59.375"
      stroke={isHovered ? "#ffffff" : "#021734"}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.25 47.5V28.125C6.25 17.1875 12.5 12.5 21.875 12.5H53.125C62.5 12.5 68.75 17.1875 68.75 28.125V46.875C68.75 57.8125 62.5 62.5 53.125 62.5H26.5625"
      stroke={isHovered ? "#ffffff" : "#292D32"}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Values() {
  return (
    <section className="py-16 px-6 lg:px-[45px] bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-[18px] text-center lg:text-left">
            <span className="text-[#BD6B00] font-semibold text-xl md:text-2xl  tracking-wide">
              VALUES
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl lg:text-[40px] font-bold text-center lg:text-left">
                Seamless Payment,
                <br />
                In and Out
              </h2>
            </div>
            <div className="lg:pl-8">
              <p className="text-[#303032] text-lg font-medium text-justify lg:text-left leading-relaxed">
                Manage high volumes effortlessly. Our platform ensures fast,
                secure, and seamless transactions.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ready Card */}
          <div className="group border-[#E4E2E4] border rounded-[20px] p-8 pb-20 hover:bg-primary hover:shadow-lg  hover:rounded-tr-[100px] transition-all duration-300 cursor-pointer">
            <div className="mb-[73px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors duration-300">
                <div className="scale-75">
                  <CloudDollarIcon isHovered={false} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CloudDollarIcon isHovered={true} />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
              Ready
            </h3>
            <p className="text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-300">
              Designed for high-volume transactions. Get started and manage
              payments seamlessly, no matter the scale.
            </p>
          </div>

          {/* Bulk Payouts Card */}
          <div className="group border-[#E4E2E4] border rounded-[20px] p-8 pb-20 hover:bg-primary hover:shadow-lg hover:rounded-tr-[100px] transition-all duration-300 cursor-pointer">
            <div className="mb-[73px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors duration-300">
                <div className="scale-75">
                  <BulkPayoutIcon isHovered={false} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <BulkPayoutIcon isHovered={true} />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
              Bulk Payouts
            </h3>
            <p className="text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-300">
              Easily send multiple payments at once. Simplify mass payouts with
              a fast and secure process.
            </p>
          </div>

          {/* Real time Balance Card */}
          <div className="group border-[#E4E2E4] border rounded-[20px] p-8 pb-20 hover:bg-primary hover:shadow-lg hover:rounded-tr-[100px] transition-all duration-300 cursor-pointer md:col-span-2 lg:col-span-1">
            <div className="mb-[73px]">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:bg-primary transition-colors duration-300">
                <div className="scale-75">
                  <BalanceIcon isHovered={false} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <BalanceIcon isHovered={true} />
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
              Real time Balance
            </h3>
            <p className="text-gray-600 group-hover:text-white leading-relaxed transition-colors duration-300">
              An up-to-the-minute view of your balance and transactions, giving
              you complete financial clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
