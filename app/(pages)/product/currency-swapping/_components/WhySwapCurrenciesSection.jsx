import React from 'react';

const WhySwapCurrenciesSection = () => {
  return (
    <div className='relative overflow-x-hidden z-30 w-full'>
    <div className="max-w-[1235px] mx-auto px-6 py-16 bg-white">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-0">
        {/* Left Column - Header */}
        <div className="max-w-[400px] text-center lg:text-left">
          <div className="text-[#BD6B00] text-2xl font-semibold tracking-wide uppercase mb-[18px]">
            FEATURES
          </div>
          <h2 className="text-3xl lg:text-[48px] font-bold text-black leading-tight">
            Why Swap{" "}<br className="hidden lg:block" />
            Currencies with{" "}<br className='hidden lg:block' />
            YodePay ?
          </h2>
        </div>

        {/* Right Column - Features */}
        <div className="max-w-[600px] lg:mt-[50px] flex flex-col md:flex-row md:items-center gap-4 lg:gap-[17px]">
          {/* First Section - Multi-Currency Support and Real-Time Exchange Rates */}
          <div className="flex flex-col gap-4">
            {/* Multi-Currency Support */}
            <div className="bg-[#F9F9F9] rounded-2xl p-4 border border-[#0627553B] flex items-start gap-4">
                <div className='w-[2px] h-[33px] bg-[#1FCFF1] rounded-full flex-shrink-0'></div>
                <div className='flex flex-col gap-2'>
                <h3 className="text-lg font-medium text-black mb-[10px]">
                Multi-Currency Support
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                Swap between major global currencies and local options—all within one platform.
              </p>
              </div>
            </div>

            {/* Real-Time Exchange Rates */}
            <div className="bg-[#F9F9F9] rounded-2xl p-4 border border-[#0627553B] flex items-start gap-4">
                <div className='w-[2px] h-[33px] bg-[#BD6B00] rounded-full flex-shrink-0'></div>
                <div className='flex flex-col gap-2'>
              <h3 className="text-lg font-medium text-black mb-[10px]">
                Real-Time Exchange Rates
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                Access live market rates so you always get the most competitive conversion value.
              </p>
              </div>
            </div>
          </div>

          {/* Second Section - Transparent Pricing and Fast Processing */}
          <div className="flex flex-col gap-4 lg:mt-[100px] z-30 relative">
             {/* Transparent Pricing */}
             <div className="bg-[#F9F9F9] rounded-2xl p-4 border border-[#0627553B] flex items-start gap-4">
                <div className='w-[2px] h-[33px] bg-[#D52B1E] rounded-full flex-shrink-0'></div>
                <div className='flex flex-col gap-2'>
              <h3 className="text-lg font-medium text-black mb-[10px]">
                Transparent Pricing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                No hidden charges or surprise fees. What you see is what you <br className="hidden lg:block" /> pay.
              </p>
              </div>
            </div>

            {/* Fast Processing */}
            <div className="bg-[#F9F9F9] rounded-2xl p-4 pb-8 border border-[#0627553B] flex items-start gap-4">
                <div className='w-[2px] h-[33px] bg-[#042656] rounded-full flex-shrink-0'></div>
                <div className='flex flex-col gap-2'>
              <h3 className="text-lg font-medium text-black mb-[10px]">
                Fast Processing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                Convert and transfer funds in minutes, not days.
              </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        className="absolute top-0 -right-[10%] w-[278px] h-[278px]  rounded-full"
        style={{
          background: "#65A3FA",
          filter: "blur(200px)",
        }}
      />
    </div>
  );
};

export default WhySwapCurrenciesSection;