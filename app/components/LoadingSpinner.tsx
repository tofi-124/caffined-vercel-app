import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50">
      <div className="h-full bg-[#8B572A] animate-loading-bar"></div>
    </div>
  );
};

export default LoadingSpinner;