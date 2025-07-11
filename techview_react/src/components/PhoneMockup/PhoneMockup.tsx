import React from 'react';
import PhoneFrame from './PhoneFrame';
import PhoneScreen from './PhoneScreen';

interface PhoneMockupProps {
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ className = '' }) => {
  return (
    <div className={`phone-mockup-container ${className}`}>
      {/* iPhone positioning and 3D effects */}
      <div className="relative transform-gpu">
        <PhoneFrame>
          <PhoneScreen />
        </PhoneFrame>
      </div>
    </div>
  );
};

export default PhoneMockup;