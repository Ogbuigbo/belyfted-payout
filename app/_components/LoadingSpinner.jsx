import React from 'react';
import Image from 'next/image';

function LoadingSpinner({ 
  size = 'medium', 
  showText = true, 
  text = 'Loading...',
  className = '' 
}) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
    xl: 'text-xl'
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
      {/* Logo with spinning animation */}
      <div className="relative">
        {/* Background circle with gradient */}
        <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-r from-[#042656] to-[#BD6B00] p-1 animate-spin`}>
          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
            <Image
              src="https://res.cloudinary.com/dpkn1ppzj/image/upload/v1750068917/Logo_4_gjoddu.png"
              alt="Belyfted"
              width={size === 'small' ? 20 : size === 'medium' ? 28 : size === 'large' ? 36 : 44}
              height={size === 'small' ? 20 : size === 'medium' ? 28 : size === 'large' ? 36 : 44}
              className="animate-pulse"
            />
          </div>
        </div>
        
        {/* Outer ring animation */}
        <div className={`absolute inset-0 ${sizeClasses[size]} rounded-full border-2 border-transparent border-t-[#BD6B00] border-r-[#042656] animate-spin`} style={{ animationDuration: '1.5s' }}></div>
      </div>

      {/* Loading text */}
      {showText && (
        <div className="text-center">
          <p className={`${textSizeClasses[size]} font-medium text-[#042656] animate-pulse`}>
            {text}
          </p>
          {/* Animated dots */}
          <div className="flex justify-center gap-1 mt-2">
            <div className="w-1 h-1 bg-[#BD6B00] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-1 h-1 bg-[#BD6B00] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-1 h-1 bg-[#BD6B00] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoadingSpinner;




