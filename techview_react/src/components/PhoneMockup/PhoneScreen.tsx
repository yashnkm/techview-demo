import React from 'react';

interface PhoneScreenProps {
  children?: React.ReactNode;
}

const PhoneScreen: React.FC<PhoneScreenProps> = ({ children }) => {
  return (
    <div className="phone-screen w-full h-full relative">
      {/* Status bar */}
      <div className="status-bar absolute top-0 left-0 right-0 z-10 px-6 py-2 flex justify-between items-center text-white text-sm">
        <div className="flex items-center space-x-1">
          <span className="font-medium">9:41</span>
        </div>
        <div className="flex items-center space-x-1">
          {/* Signal bars */}
          <div className="flex space-x-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
          {/* WiFi icon */}
          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l2 2 2-2c-1.1-1.1-2.9-1.1-4 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.86 9.14 5 13z"/>
          </svg>
          {/* Battery */}
          <div className="flex items-center">
            <div className="w-6 h-3 border border-white rounded-sm relative">
              <div className="w-4 h-1 bg-white rounded-sm absolute inset-0 m-auto"></div>
            </div>
            <div className="w-1 h-1 bg-white rounded-r-sm ml-px"></div>
          </div>
        </div>
      </div>
      
      {/* Screen content */}
      <div 
        className="screen-content absolute inset-0 bg-white overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)',
          paddingTop: '52px' // Space for status bar
        }}
      >
        {children || (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-6" style={{ backgroundColor: '#74f5a2' }}>
                <div className="w-full h-full rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">TV</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">TechView</h3>
              <p className="text-base text-gray-600">Click to start the phone</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneScreen;