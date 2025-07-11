import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set(loadingRef.current, {
      clipPath: "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)"
    });

    // Phase 1: Expand loading bar horizontally
    tl.to(loadingRef.current, {
      clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
      duration: 1.5,
      ease: "power2.inOut",
      delay: 0.5
    });

    // Phase 2: Expand to full width with counter
    tl.to(loadingRef.current, {
      clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
      duration: 2,
      ease: "power2.inOut",
      onStart: () => {
        // Animate progress bar width
        gsap.to(progressRef.current, {
          width: "100%",
          duration: 2,
          ease: "power2.inOut"
        });

        // Animate counter
        gsap.to(counterRef.current, {
          innerHTML: 100,
          duration: 2,
          ease: "power2.inOut",
          snap: { innerHTML: 1 }
        });
      }
    });

    // Phase 3: Full reveal
    tl.to(loadingRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      ease: "power2.inOut",
      onStart: () => {
        // Hide progress elements
        gsap.to([progressRef.current, counterRef.current], {
          opacity: 0,
          duration: 0.3
        });
      },
      onComplete: () => {
        // Slide up to reveal main content
        gsap.to(loadingRef.current, {
          y: "-100%",
          duration: 1,
          ease: "power2.inOut",
          onComplete: onComplete
        });
      }
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={loadingRef}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ 
        backgroundColor: '#a8a8a8', // 35% darker than #efeeef
        willChange: 'clip-path, transform'
      }}
    >
      {/* Progress Bar */}
      <div 
        ref={progressRef}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 w-0 h-0.5"
        style={{ backgroundColor: '#74f5a2' }}
      />
      
      {/* Loading Text and Counter */}
      <div className="flex items-center space-x-4 font-akkurat">
        <span className="text-2xl font-bold text-black">loading</span>
        <span className="text-2xl font-bold text-black">
          / <span ref={counterRef}>0</span>
        </span>
      </div>

      {/* TechView Logo/Brand */}
      <div className="absolute bottom-8 left-8">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
          <span className="text-xl font-bold text-black font-akkurat">TechView</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;