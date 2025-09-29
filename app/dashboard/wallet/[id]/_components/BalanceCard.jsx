import { useState } from 'react';
import { getCurrencySymbol, safeFormatAmount } from '../../../../lib/currencyUtils';

// Balance Card Component
const BalanceCard = ({ balance, lockedBalance, balanceId, currency = 'USD' }) => {
  return (
    <div className="bg-[#042656] rounded-[15px] px-4 py-3 text-white relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <img src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1758820900/Frame_1618869784_sngopi.svg" alt="wallet" className="w-[19px] h-[19px]" />
      </div>
      
      <div className="mb-3">
        <p className="text-white text-sm mb-1">Available balance</p>
        <div className="flex items-baseline border-b border-[#6D819D] pb-2">
          <span className="text-sm">{getCurrencySymbol(currency)}</span>
          <span className="text-[28px] font-semibold">{safeFormatAmount(balance)}</span>
        </div>
      </div>

      
      <div className="mb-3 border-b border-[#6D819D] pb-[13px]">
        <p className="text-white text-sm">
          Locked Balance: <span className="font-bold">{getCurrencySymbol(currency)}{safeFormatAmount(lockedBalance)}</span>
        </p>
      </div>
      
      <div className="flex items-center justify-between">
        <p className="text-white text-sm">
          Balance ID: <span className="font-bold">{balanceId}</span>
        </p>
        <div>
        <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.84961 7.14881C3.84961 5.55864 3.84961 4.76356 4.34136 4.26947C4.83369 3.77539 5.62528 3.77539 7.20961 3.77539H8.88961C10.4734 3.77539 11.2655 3.77539 11.7573 4.26947C12.2496 4.76356 12.2496 5.55864 12.2496 7.14881V9.96047C12.2496 11.5506 12.2496 12.3457 11.7573 12.8398C11.2655 13.3339 10.4734 13.3339 8.88961 13.3339H7.20961C5.62528 13.3339 4.83369 13.3339 4.34136 12.8398C3.84903 12.3457 3.84961 11.5506 3.84961 9.96047V7.14881Z" fill="white"/>
<path opacity="0.5" d="M2.43367 2.34968C1.75 3.03277 1.75 4.13293 1.75 6.33268V7.49935C1.75 9.6991 1.75 10.7993 2.43367 11.4823C2.79358 11.8428 3.26958 12.0132 3.962 12.0937C3.85 11.6037 3.85 10.9293 3.85 9.95868V7.1476C3.85 5.55743 3.85 4.76235 4.34175 4.26827C4.83408 3.77418 5.62567 3.77418 7.21 3.77418H8.89C9.85367 3.77418 10.5233 3.77418 11.0122 3.88502C10.9317 3.1891 10.7613 2.71135 10.3997 2.34968C9.71658 1.66602 8.61642 1.66602 6.41667 1.66602C4.21692 1.66602 3.11675 1.66602 2.43367 2.34968Z" fill="white"/>
</svg>

        </div>
      </div>

      <div className='absolute bottom-0 left-0'>
      <svg width="140" height="154" viewBox="0 0 140 154" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2649_49132)">
<path d="M-62.7629 64.5576L56.8387 219.02L74.1656 207.225L-30.5946 40.0006L-62.7629 64.5576Z" fill="#98A6BA"/>
</g>
<defs>
<filter id="filter0_f_2649_49132" x="-127.909" y="-25.1454" width="267.22" height="309.31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="32.5727" result="effect1_foregroundBlur_2649_49132"/>
</filter>
</defs>
</svg>

      </div>

      <div className='absolute top-0 right-0'>
      <svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_f_2649_49130)">
<path d="M65.2371 -26.4424L184.839 128.02L202.166 116.225L97.4054 -50.9994L65.2371 -26.4424Z" fill="#EB960E" fill-opacity="0.7"/>
</g>
<defs>
<filter id="filter0_f_2649_49130" x="0.0909424" y="-116.145" width="267.22" height="309.31" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="32.5727" result="effect1_foregroundBlur_2649_49130"/>
</filter>
</defs>
</svg>


      </div>
    </div>
  );
};

export default BalanceCard;