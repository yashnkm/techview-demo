import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const AnimatedButton = ({ children, onClick, className = "" }: AnimatedButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const originalArrowRef = useRef<SVGSVGElement>(null);
  const newArrowRef = useRef<SVGSVGElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (!buttonRef.current || !backgroundRef.current || !originalArrowRef.current || !newArrowRef.current || !textRef.current) return;

    // Set initial states
    gsap.set(backgroundRef.current, {
      scaleX: 0,
      transformOrigin: "bottom left",
      skewX: -15
    });

    gsap.set(newArrowRef.current, {
      x: -80,
      y: 80,
      scale: 0.2,
      opacity: 0
    });

    // Create timeline
    tlRef.current = gsap.timeline({ paused: true });

    // Original arrow exit animation
    tlRef.current.to(originalArrowRef.current, {
      scale: 0.3,
      x: 25,
      y: -25,
      opacity: 0,
      duration: 0.244,
      ease: "power2.in"
    }, 0);

    // Background wipe animation
    tlRef.current.to(backgroundRef.current, {
      scaleX: 1,
      duration: 0.305,
      ease: "power2.out"
    }, 0);

    // Text color change
    tlRef.current.to(textRef.current, {
      color: "#74f5a2",
      duration: 0.183,
      ease: "power2.out"
    }, 0.2);

    // New arrow entrance animation
    tlRef.current.to(newArrowRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.366,
      ease: "back.out(1.7)"
    }, 0.1);

    const button = buttonRef.current;

    const handleMouseEnter = () => {
      tlRef.current?.play();
    };

    const handleMouseLeave = () => {
      tlRef.current?.reverse();
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      tlRef.current?.kill();
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative overflow-hidden bg-black text-white border-2 border-black transition-transform duration-200 hover:scale-105 ${className}`}
    >
      {/* Background wipe overlay - Green color */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-10"
        style={{ backgroundColor: '#74f5a2' }}
      />
      
      {/* Button content */}
      <div className="relative z-20 flex items-center space-x-3">
        <span ref={textRef} className="relative z-30 text-white">{children}</span>
        
        {/* Original arrow - White initially */}
        <svg
          ref={originalArrowRef}
          className="w-4 h-4 relative z-30 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 17L17 7M17 7H7M17 7V17"
          />
        </svg>
        
        {/* New arrow - Green color */}
        <svg
          ref={newArrowRef}
          className="w-4 h-4 absolute top-1/2 left-[calc(100%-2rem)] transform -translate-y-1/2 z-30"
          fill="none"
          stroke="#74f5a2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 17L17 7M17 7H7M17 7V17"
          />
        </svg>
      </div>
    </button>
  );
};

export default AnimatedButton;