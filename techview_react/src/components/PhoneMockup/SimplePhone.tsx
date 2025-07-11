import React, { useState } from 'react';

interface SimplePhoneProps {
  className?: string;
}

const SimplePhone: React.FC<SimplePhoneProps> = ({ className = '' }) => {
  const [animationState, setAnimationState] = useState<'locked' | 'wiping' | 'unlocked'>('locked');

  const handleScreenClick = () => {
    if (animationState === 'locked') {
      setAnimationState('wiping');
      setTimeout(() => {
        setAnimationState('unlocked');
      }, 1200);
    }
  };

  return (
    <div className={`phone-container ${className}`}>
      {/* iPhone outer frame */}
      <div className="relative">
        <div 
          className="phone-body bg-gray-900 rounded-[3rem] p-2 shadow-2xl"
          style={{
            width: '308px',
            height: '615px',
            background: 'linear-gradient(145deg, #1f2937 0%, #111827 100%)',
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `
          }}
        >
          {/* Screen container */}
          <div 
            className="phone-screen bg-black rounded-[2.5rem] overflow-hidden relative"
            style={{
              width: '100%',
              height: '100%',
              background: '#000000'
            }}
          >
            {/* Dynamic Island */}
            <div 
              className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black rounded-full z-30"
              style={{
                width: '100px',
                height: '18px',
                background: '#000000'
              }}
            />
            
            {/* Status bar */}
            <div className="absolute top-1 left-2 right-2 z-20 px-4 py-2 flex justify-between items-center text-white text-xs">
              <span className="font-light tracking-wide">9:41</span>
              <div className="flex items-center space-x-3">
                <div className="flex space-x-0.5 items-center">
                  <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-90"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <div className="relative w-3 h-3">
                  <div className="absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-white rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-2 h-1 border border-white border-b-0 rounded-t-full transform -translate-x-1/2"></div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="relative">
                    <div className="w-4 h-2 border border-white rounded-sm"></div>
                    <div className="w-2.5 h-1 bg-white rounded-sm absolute inset-0 m-auto"></div>
                    <div className="w-0.5 h-1 bg-white absolute -right-0.5 top-0.5 rounded-r-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Screen content area */}
            <div className="absolute inset-0" style={{ paddingTop: '52px' }}>
              
              {/* Base black background */}
              <div className="absolute inset-0 bg-black"></div>
              
              {/* Lock Screen */}
              <div 
                className={`absolute inset-0 cursor-pointer flex items-center justify-center z-10 transition-opacity duration-300 ${
                  animationState === 'locked' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={handleScreenClick}
              >
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

              {/* Green wipe layer - always present */}
              <div 
                className="absolute inset-0 z-20 transition-transform duration-1000 ease-out"
                style={{
                  background: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #059669 100%)',
                  transform: animationState === 'locked' ? 'translateY(100%)' : 'translateY(0%)'
                }}
              >
                {/* Unlocked Screen Content */}
                <div 
                  className={`flex flex-col h-full p-6 justify-center transition-opacity duration-500 ${
                    animationState === 'unlocked' ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-3 gap-6 max-w-xs mx-auto">
                    
                    {/* Chat App */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-white bg-opacity-25 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white border-opacity-40 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">Chat</span>
                    </div>

                    {/* Phone App */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-white bg-opacity-25 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white border-opacity-40 shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">Phone</span>
                    </div>

                    {/* Medical App */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 h-16 bg-white bg-opacity-25 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white border-opacity-40 shadow-lg relative">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 8h-2V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/>
                        </svg>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                          <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/>
                          </svg>
                        </div>
                      </div>
                      <span className="text-white text-xs font-medium">Medical</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div 
            className="absolute -left-1 bg-gray-700 rounded-r-sm"
            style={{ top: '120px', width: '3px', height: '35px' }}
          />
          <div 
            className="absolute -left-1 bg-gray-700 rounded-r-sm"
            style={{ top: '170px', width: '3px', height: '35px' }}
          />
          <div 
            className="absolute -right-1 bg-gray-700 rounded-l-sm"
            style={{ top: '140px', width: '3px', height: '60px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SimplePhone;