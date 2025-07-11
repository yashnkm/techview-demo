import React from 'react';

interface OptimizedAnimatedArrowButtonProps {
  arrowDirection?: 'top-right' | 'down';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const OptimizedAnimatedArrowButton: React.FC<OptimizedAnimatedArrowButtonProps> = ({
  arrowDirection = 'top-right',
  size = 'md',
  onClick,
  className = '',
  children
}) => {
  const sizeClasses = {
    sm: 'px-3 py-2',
    md: 'px-4 py-3',
    lg: 'px-6 py-4'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const getArrowPath = () => {
    if (arrowDirection === 'down') {
      return "M19 14l-7 7m0 0l-7-7m7 7V3";
    }
    return "M7 17L17 7M17 7H7M17 7V17";
  };

  // For buttons with text (like "Talk with us"), show the full animated button
  if (children) {
    return (
      <button
        onClick={onClick}
        className={`relative overflow-hidden bg-black text-white border-2 border-black transition-transform duration-200 hover:scale-105 group ${sizeClasses[size]} ${className}`}
      >
        {/* Background wipe overlay - exact same green color */}
        <div 
          className="absolute inset-0 z-10 origin-bottom-left transition-transform duration-300 ease-out transform scale-x-0 skew-x-[-15deg] group-hover:scale-x-100 group-hover:skew-x-0"
          style={{ backgroundColor: '#74f5a2' }}
        />
        
        {/* Button content */}
        <div className="relative z-20 flex items-center space-x-3">
          <span className="relative z-30 text-white transition-colors duration-200 group-hover:text-green-400">
            {children}
          </span>
          
          {/* Original arrow - disappears on hover */}
          <svg
            className={`${iconSizes[size]} relative z-30 text-white transition-all duration-244 ease-in group-hover:scale-[0.3] group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={getArrowPath()} />
          </svg>
          
          {/* New arrow - appears on hover with bounce */}
          <svg
            className={`${iconSizes[size]} absolute top-1/2 right-4 transform -translate-y-1/2 z-30 transition-all duration-366 ease-out scale-[0.2] -translate-x-20 translate-y-20 opacity-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100`}
            fill="none"
            stroke="#74f5a2"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ 
              transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)' // back.out(1.7) equivalent
            }}
          >
            <path d={getArrowPath()} />
          </svg>
        </div>
      </button>
    );
  }

  // For icon-only buttons, show the simple square design
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 bg-black border-2 border-black rounded-lg relative overflow-hidden group transition-all duration-200 hover:scale-105 ${className}`}
    >
      {/* Background wipe overlay */}
      <div 
        className="absolute inset-0 z-10 origin-bottom-left transition-transform duration-300 ease-out transform scale-x-0 skew-x-[-15deg] group-hover:scale-x-100 group-hover:skew-x-0"
        style={{ backgroundColor: '#74f5a2' }}
      />
      
      {/* Arrow icon */}
      <div className="relative z-20 flex items-center justify-center h-full">
        {/* Original arrow */}
        <svg
          className={`${iconSizes[size]} text-white transition-all duration-244 ease-in group-hover:scale-[0.3] group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:opacity-0`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={getArrowPath()} />
        </svg>
        
        {/* New arrow */}
        <svg
          className={`${iconSizes[size]} absolute inset-0 m-auto transition-all duration-366 ease-out scale-[0.2] -translate-x-20 translate-y-20 opacity-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100`}
          fill="none"
          stroke="#74f5a2"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ 
            transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
          }}
        >
          <path d={getArrowPath()} />
        </svg>
      </div>
    </button>
  );
};

export default OptimizedAnimatedArrowButton;