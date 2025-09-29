import React from 'react';

const WalletIcon = () => (
  <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.5 75C14.45 75 5.5 83.95 5.5 95C5.5 98.75 6.55001 102.3 8.40001 105.3C11.85 111.1 18.2 115 25.5 115C32.8 115 39.15 111.1 42.6 105.3C44.45 102.3 45.5 98.75 45.5 95C45.5 83.95 36.55 75 25.5 75ZM35.35 93.3499L24.7 103.2C24 103.85 23.05 104.2 22.15 104.2C21.2 104.2 20.25 103.85 19.5 103.1L14.55 98.15C13.1 96.7 13.1 94.3 14.55 92.85C16 91.4 18.4 91.4 19.85 92.85L22.25 95.2499L30.25 87.85C31.75 86.45 34.15 86.5499 35.55 88.0499C36.95 89.5499 36.85 91.9499 35.35 93.3499Z" fill="#042656"/>
    <path d="M89.2492 35.2498C88.0492 35.0498 86.7992 34.9999 85.4992 34.9999H35.4992C34.0992 34.9999 32.7492 35.0999 31.4492 35.2999C32.1492 33.8999 33.1492 32.6 34.3492 31.4L50.5992 15.1C57.4492 8.3 68.5492 8.3 75.3992 15.1L84.1492 23.9498C87.3492 27.0998 89.0492 31.0998 89.2492 35.2498Z" fill="#042656"/>
    <path opacity="0.4" d="M110.5 60V85C110.5 100 100.5 110 85.5 110H38.65C40.2 108.7 41.55 107.1 42.6 105.3C44.45 102.3 45.5 98.75 45.5 95C45.5 83.95 36.55 75 25.5 75C19.5 75 14.15 77.6499 10.5 81.7999V60C10.5 46.4 18.7 36.9 31.45 35.3C32.75 35.1 34.1 35 35.5 35H85.5C86.8 35 88.05 35.0499 89.25 35.2499C102.15 36.7499 110.5 46.3 110.5 60Z" fill="#042656"/>
    <path d="M110.5 62.5H95.5C90 62.5 85.5 67 85.5 72.5C85.5 78 90 82.5 95.5 82.5H110.5" fill="#042656"/>
  </svg>
);

export default function SuccessModal({ isOpen = true, onClose, amount = 450 }) {
  if (!isOpen) return null;

  const handleProceed = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header with close button */}
        <div className="relative px-6 pt-6">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="px-8 pb-8 text-center">
          {/* Title */}
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Balance Funded
          </h2>

          {/* Icon */}
          <div className="flex justify-center mb-8">
            <WalletIcon />
          </div>

          {/* Success message */}
          <p className="text-gray-700 text-lg mb-8">
            Your account was funded with <span className="font-semibold">${amount}</span>
          </p>

          {/* Proceed button */}
          <button
            onClick={handleProceed}
            className="w-full bg-[[#042656]] hover:bg-blue-800 text-white font-medium py-4 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}