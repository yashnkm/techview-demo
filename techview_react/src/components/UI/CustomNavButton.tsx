import React from 'react';

interface CustomNavButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

const CustomNavButton: React.FC<CustomNavButtonProps> = ({ direction, onClick, disabled = false }) => {
  const isLeft = direction === 'left';
  
  // Dot matrix pattern for arrows
  const leftArrowDots = [
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0]
  ];
  
  const rightArrowDots = [
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 0, 0, 0]
  ];
  
  const dots = isLeft ? leftArrowDots : rightArrowDots;
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-12 h-12 rounded-sm transition-all duration-300 flex items-center justify-center p-2
        ${disabled 
          ? 'bg-gray-300 cursor-not-allowed' 
          : 'bg-black hover:bg-gray-800'
        }
      `}
    >
      <div className="grid grid-cols-5 gap-[1px]">
        {dots.flat().map((dot, index) => (
          <div
            key={index}
            className={`
              w-[2px] h-[2px] rounded-full
              ${dot === 1 
                ? disabled 
                  ? 'bg-gray-500' 
                  : 'bg-white'
                : 'bg-transparent'
              }
            `}
          />
        ))}
      </div>
    </button>
  );
};

export default CustomNavButton;