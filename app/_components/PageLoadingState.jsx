import React from 'react';
import LoadingSpinner from './LoadingSpinner';

function PageLoadingState({ 
  title = 'Loading...', 
  description = 'Please wait while we fetch your data',
  className = '' 
}) {
  return (
    <div className={`flex flex-col items-center justify-center min-h-[400px] bg-white rounded-xl ${className}`}>
      <LoadingSpinner 
        size="large" 
        showText={false}
        className="mb-6"
      />
      
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-[#042656]">
          {title}
        </h3>
        <p className="text-sm text-[#8E98A8] max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default PageLoadingState;




