// src/components/AdComponent.js
import React from 'react';

const AdComponent = () => {
  return (
    <div className="fixed inset-0 flex justify-between items-center z-10">
      {/* Left-side advertisements */}
      <div className="w-1/6 h-screen flex flex-col justify-between p-2">
        <img 
          src="/images/ads-image.jpg"
          alt="Advertisement 1"
          className="w-1/2 h-1/2 object-cover"
        />
        <img 
          src="/images/ads-image.jpg"
          alt="Advertisement 2"
          className="w-1/2 h-1/2 object-cover"
        />
      </div>
    </div>
  );
};

export default AdComponent;
