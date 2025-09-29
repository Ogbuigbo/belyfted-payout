import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Upload Your Payout List',
      description: 'Easily upload CSV files or connect via API for automated transfers.'
    },
    {
      number: '2',
      title: 'Choose Payment Method',
      description: 'Select the most convenient option for your recipients.'
    },
    {
      number: '3',
      title: 'Review & Send',
      description: 'Confirm details, hit "Send," and we\'ll handle the rest'
    }
  ];

  return (
    <section className="py-[91px] bg-white px-4">
    <div className="max-w-[1235px] mx-auto">
      <h2 className="text-xl md:text-2xl font-semibold  text-center text-[#BD6B00] mb-[18px]">STEPS</h2>
      <p className="lg:text-5xl text-3xl font-bold text-center mb-12">How It Works</p>
      
      <div className="flex flex-col md:flex-row relative items-center gap-0 md:gap-0">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center max-w-xs">
        <div className="w-20 h-20 md:w-[120px] md:h-[120px] border-[3px] border-dashed border-black rounded-full flex items-center justify-center mb-4 md:mb-5">
                      <span className="text-xl md:text-2xl font-bold text-black">
                        {steps[0].number}
                      </span>
                    </div>
          <h3 className=" font-semibold mb-2">Upload Your Payout List</h3>
          <p className="t text-gray-600">Easily upload CSV files or connect via API for automated transfers.</p>
        </div>
        
        {/* Arrow SVG */}
        <div className="rotate-90 md:rotate-0 my-4 md:my-0">
        <svg width="40" height="16" className="md:w-[80px] lg:w-[150px] xl:w-[294px] md:h-[16px] h-[56px] w-[56px] md:mb-[100px]" viewBox="0 0 294 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M293.707 8.70713C294.098 8.31661 294.098 7.68344 293.707 7.29292L287.343 0.928957C286.953 0.538433 286.319 0.538433 285.929 0.928957C285.538 1.31948 285.538 1.95265 285.929 2.34317L291.586 8.00003L285.929 13.6569C285.538 14.0474 285.538 14.6806 285.929 15.0711C286.319 15.4616 286.953 15.4616 287.343 15.0711L293.707 8.70713ZM0 8L-8.74228e-08 9L293 9.00003L293 8.00003L293 7.00003L8.74228e-08 7L0 8Z" fill="black"/>
</svg>
        </div>
        
        {/* Step 2 */}
        <div className="flex flex-col items-center text-center max-w-xs">
        <div className="w-20 h-20 md:w-[120px] md:h-[120px] border-[3px] border-dashed border-black rounded-full flex items-center justify-center mb-4 md:mb-5">
                      <span className="text-xl md:text-2xl font-bold text-black">
                        {steps[1].number}
                      </span>
                    </div>
          <h3 className="font-semibold mb-2">Choose Payment Method</h3>
          <p className="text-gray-600">Select the most convenient option for your recipients.</p>
        </div>
        
        {/* Arrow SVG */}
        <div className="rotate-90 md:rotate-0 my-4 md:my-0">
        <svg width="40" height="16" className="md:w-[80px] lg:w-[150px] xl:w-[294px] md:h-[16px] md:mb-[100px] h-[56px] w-[56px]" viewBox="0 0 294 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M293.707 8.70713C294.098 8.31661 294.098 7.68344 293.707 7.29292L287.343 0.928957C286.953 0.538433 286.319 0.538433 285.929 0.928957C285.538 1.31948 285.538 1.95265 285.929 2.34317L291.586 8.00003L285.929 13.6569C285.538 14.0474 285.538 14.6806 285.929 15.0711C286.319 15.4616 286.953 15.4616 287.343 15.0711L293.707 8.70713ZM0 8L-8.74228e-08 9L293 9.00003L293 8.00003L293 7.00003L8.74228e-08 7L0 8Z" fill="black"/>
</svg>
        </div>
        
        {/* Step 3 */}
        <div className="flex flex-col items-center text-center max-w-xs">
        <div className="w-20 h-20 md:w-[120px] md:h-[120px] border-[3px] border-dashed border-black rounded-full flex items-center justify-center mb-4 md:mb-5">
                      <span className="text-xl md:text-2xl font-bold text-black">
                        {steps[2].number}
                      </span>
                    </div>
          <h3 className=" font-semibold mb-2">Review & Send</h3>
          <p className=" text-gray-600">Confirm details, hit "Send," and we'll handle the rest</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default HowItWorksSection;