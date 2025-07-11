import React from 'react';

interface AnimatedArrowButtonProps {
  arrowDirection?: 'down' | 'top-right';
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const AnimatedArrowButton: React.FC<AnimatedArrowButtonProps> = ({
  arrowDirection = 'down',
  onClick,
  className = '',
  size = 'md'
}) => {
  // Size configurations
  const sizeConfig = {
    sm: {
      button: 'w-8 h-8',
      arrow: 'w-3 h-3'
    },
    md: {
      button: 'w-10 h-10',
      arrow: 'w-4 h-4'
    },
    lg: {
      button: 'w-12 h-12',
      arrow: 'w-5 h-5'
    }
  };

  // Arrow configurations
  const arrowConfig = {
    down: {
      path: "M19 14l-7 7m0 0l-7-7m7 7V3",
      originalExit: "group-hover:translate-y-6",
      newEntrance: "-translate-y-20 group-hover:translate-y-0"
    },
    'top-right': {
      path: "M7 17L17 7M17 7H7M17 7V17",
      originalExit: "group-hover:translate-x-6 group-hover:-translate-y-6",
      newEntrance: "-translate-x-20 translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0"
    }
  };

  const currentSize = sizeConfig[size];
  const currentArrow = arrowConfig[arrowDirection];

  return (
    <button 
      className={`${currentSize.button} rounded-lg relative overflow-hidden group ${className}`}
      style={{backgroundColor: '#74f5a2'}}
      onClick={onClick}
    >
      {/* Black wipe overlay */}
      <div className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-[244ms] ease-in-out group-hover:scale-x-100"></div>
      
      {/* Arrow container */}
      <div className={`relative ${currentSize.arrow} mx-auto my-auto`}>
        {/* Original arrow - exits based on direction */}
        <svg 
          className={`${currentSize.arrow} absolute inset-0 z-10 transition-all duration-[244ms] ease-in-out group-hover:scale-[0.3] ${currentArrow.originalExit} group-hover:opacity-0 text-slate-800`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={currentArrow.path} />
        </svg>
        
        {/* New arrow - enters based on direction */}
        <svg 
          className={`${currentSize.arrow} absolute inset-0 z-10 text-white transition-all duration-[244ms] ease-in-out scale-[0.2] ${currentArrow.newEntrance} opacity-0 group-hover:scale-100 group-hover:opacity-100`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          style={{transitionDelay: '49ms'}}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d={currentArrow.path} />
        </svg>
      </div>
    </button>
  );
};

export default AnimatedArrowButton;