import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children }) => {
  return (
    <div className="phone-frame">
      {/* iPhone outer frame with realistic styling */}
      <div className="relative">
        {/* iPhone body */}
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
          {/* Screen bezel */}
          <div 
            className="phone-screen-bezel bg-black rounded-[2.5rem] overflow-hidden relative"
            style={{
              width: '100%',
              height: '100%',
              background: '#000000'
            }}
          >
            {/* Thin Dynamic Island */}
            <div 
              className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black rounded-full z-20"
              style={{
                width: '100px',
                height: '18px',
                background: '#000000'
              }}
            />
            
            {/* Screen content area */}
            <div className="phone-screen-content h-full w-full relative">
              {children}
            </div>
          </div>
        </div>

        {/* iPhone Side buttons */}
        <div className="phone-buttons absolute top-0 left-0 w-full h-full pointer-events-none">
          {/* Volume buttons */}
          <div 
            className="absolute -left-1 bg-gray-700 rounded-r-sm"
            style={{
              top: '120px',
              width: '3px',
              height: '35px'
            }}
          />
          <div 
            className="absolute -left-1 bg-gray-700 rounded-r-sm"
            style={{
              top: '170px',
              width: '3px',
              height: '35px'
            }}
          />
          
          {/* Power button */}
          <div 
            className="absolute -right-1 bg-gray-700 rounded-l-sm"
            style={{
              top: '140px',
              width: '3px',
              height: '60px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame;