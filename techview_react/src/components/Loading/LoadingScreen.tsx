import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set(loadingRef.current, {
      clipPath: "polygon(0% 45%, 0% 45%, 0% 55%, 0% 55%)"
    });

    // Phase 1: Expand loading bar horizontally (faster)
    tl.to(loadingRef.current, {
      clipPath: "polygon(0% 45%, 25% 45%, 25% 55%, 0% 55%)",
      duration: 0.8,
      ease: "power2.inOut",
      delay: 0.3
    });

    // Phase 2: Expand to full width with counter (faster)
    tl.to(loadingRef.current, {
      clipPath: "polygon(0% 45%, 100% 45%, 100% 55%, 0% 55%)",
      duration: 1.2,
      ease: "power2.inOut",
      onStart: () => {
        // Animate counter only (no green bar)
        gsap.to(counterRef.current, {
          innerHTML: 100,
          duration: 1.2,
          ease: "power2.inOut",
          snap: { innerHTML: 1 }
        });
      }
    });

    // Phase 3: Full reveal
    tl.to(loadingRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.8,
      ease: "power2.inOut",
      onStart: () => {
        // Hide counter
        gsap.to(counterRef.current, {
          opacity: 0,
          duration: 0.3
        });
      },
      onComplete: () => {
        // Slide up to reveal main content
        gsap.to(loadingRef.current, {
          y: "-100%",
          duration: 0.8,
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
      
      {/* Loading Text and Counter */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        <span className="text-xl sm:text-2xl font-bold text-black">loading</span>
        <span className="text-xl sm:text-2xl font-bold text-black">
          / <span ref={counterRef}>0</span>
        </span>
      </div>

      {/* TechView Logo/Brand */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-8">
        <div className="flex items-center space-x-2">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
          <span className="text-lg sm:text-xl font-bold text-black">TechView</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;