import React from "react";
import Image from "next/image";

function EffortlessPayout() {
  return (
    <div className="bg-[#021734] py-16 px-6  lg:px-[80px]">
      <div className="">
        {/* Header Section */}
        <div className=" mb-[40px]">
          <h1 className="text-3xl  lg:text-[40px] font-bold text-white mb-4 text-center lg:text-left">
            Effortless Payout Management
          </h1>
          <p className="text-xl text-[#F4F4F4] text-center lg:text-left ">
            Your all-in-one solution for seamless financial transactions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Create Payment Links Card */}

          <div className="border-[0.5px] border-white p-2 rounded-lg">
            <div className="bg-[#DAE9FD] rounded-lg p-8  border-white/20">
              <div className="">
                <h2 className="text-2xl font-bold  mb-3 lg:text-left text-center">
                  Create Payment Links
                </h2>
                <p className="text-[#737373] text-sm leading-relaxed lg:text-left text-justify">
                  Generate and share payment links to receive funds instantly.
                  Ideal for one-off payments, invoices, or subscriptions.
                </p>
              </div>

              {/* Mock Payment Form */}
              <div className="">
                <Image
                  src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1757143738/Frame_1618869805_yky11x.png"
                  width={469}
                  height={624}
                  alt="beyfted -donations"
                  className="h-auto w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Transfer Funds and Virtual Bank Account */}
          <div className="space-y-8">
            {/* Transfer Funds Card */}
            <div className="border-[0.5px] border-white p-2 rounded-lg">
              <div className="bg-[#DAE9FD] rounded-lg py-6 lg:pr-7  md:pr-0 border-white/20">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
                  <div className="max-w-[310px]">
                    <Image
                      src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756228652/Frame_1618869801_uk4v1w.png"
                      width={310}
                      height={384}
                      alt="beyfted-donations"
                      className="h-auto w-full "
                      loading="lazy"
                    />
                  </div>

                  <div className="md:max-w-[216px] px-6 lg:px-0 md:pl-0">
                    <h2 className="text-2xl font-bold  mb-3 text-center lg:text-left ">Transfer Funds</h2>
                    <p className="text-[#737373] text-sm leading-relaxed text-justify lg:text-left">
                      Send money securely to bank accounts and mobile wallets.
                      Our system supports fast domestic and international
                      transfers.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual Bank Account Card */}
            <div className="border-[0.5px] border-white p-2 rounded-lg">
              <div className="bg-[#DAE9FD] rounded-lg pr-3 lg:py-[39px] py-[20px] border-white/20">
                <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
                  <div className="">
                    <Image
                      src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1756232987/Setup_a_Bank_Account_optimized_n2rxkh.png"
                      width={302}
                      height={235}
                      alt="beyfted-donations"
                      className="h-auto w-full "
                      loading="lazy"
                    />
                  </div>

                  <div className="md:max-w-[216px] px-6 lg:px-0 md:pl-0">
                    <h2 className="text-2xl font-bold  mb-3 text-center lg:text-left ">
                      Virtual Bank Account
                    </h2>
                    <p className="text-[#737373] text-sm leading-relaxed text-justify lg:text-left">
                      Accept payments easily with a dedicated virtual account.
                      It simplifies collections and helps you track all
                      transactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EffortlessPayout;
