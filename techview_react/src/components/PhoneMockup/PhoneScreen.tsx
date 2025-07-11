import React from 'react';

interface PhoneScreenProps {
  children?: React.ReactNode;
}

const PhoneScreen: React.FC<PhoneScreenProps> = ({ children }) => {
  return (
    <div className="phone-screen w-full h-full relative">
      {/* Minimalistic Status bar */}
      <div className="status-bar absolute top-1 left-2 right-2 z-10 px-4 py-2 flex justify-between items-center text-white text-xs">
        <div className="flex items-center">
          <span className="font-light tracking-wide">9:41</span>
        </div>
        <div className="flex items-center space-x-3">
          {/* Minimalistic Signal dots */}
          <div className="flex space-x-0.5 items-center">
            <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
            <div className="w-1 h-1 bg-white rounded-full opacity-90"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          {/* Minimalistic WiFi - simple arc */}
          <div className="relative w-3 h-3">
            <div className="absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-white rounded-full transform -translate-x-1/2"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-1 border border-white border-b-0 rounded-t-full transform -translate-x-1/2"></div>
          </div>
          {/* Minimalistic Battery - simple rectangle */}
          <div className="flex items-center space-x-1">
            <div className="relative">
              <div className="w-4 h-2 border border-white rounded-sm"></div>
              <div className="w-2.5 h-1 bg-white rounded-sm absolute inset-0 m-auto"></div>
              <div className="w-0.5 h-1 bg-white absolute -right-0.5 top-0.5 rounded-r-sm"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Screen content */}
      <div 
        className="screen-content absolute inset-0 overflow-hidden"
        style={{
          background: '#000000',
          paddingTop: '52px' // Space for status bar
        }}
      >
        {children || (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p 
                className="text-green-400 font-mono tracking-wider"
                style={{
                  fontSize: '16px',
                  fontFamily: 'Monaco, "Courier New", Courier, monospace',
                  textShadow: '0 0 10px rgba(34, 197, 94, 0.8)',
                  letterSpacing: '2px',
                  fontWeight: '400'
                }}
              >
                TAP TO START
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneScreen;