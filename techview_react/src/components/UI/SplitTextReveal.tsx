import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface SplitTextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  splitBy?: 'chars' | 'words';
  as?: keyof JSX.IntrinsicElements;
}

const SplitTextReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  stagger = 0.05,
  splitBy = 'words',
  as: Component = 'span'
}: SplitTextRevealProps) => {
  const textRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    
    // Always show the text first
    element.style.opacity = '1';
    element.textContent = children;

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      try {
        let splitElements: HTMLElement[] = [];

        if (splitBy === 'words') {
          const words = children.split(' ');
          element.innerHTML = words
            .map(word => `<span style="display: inline-block;">${word}</span>`)
            .join(' ');
          splitElements = Array.from(element.querySelectorAll('span'));
        } else {
          const chars = children.split('');
          element.innerHTML = chars
            .map(char => `<span style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
            .join('');
          splitElements = Array.from(element.querySelectorAll('span'));
        }

        if (splitElements.length > 0) {
          // Set initial state
          gsap.set(splitElements, { 
            opacity: 0, 
            y: 20 
          });

          // Animate in
          gsap.to(splitElements, {
            opacity: 1,
            y: 0,
            duration,
            stagger,
            delay,
            ease: 'power2.out'
          });
        }
      } catch (error) {
        console.error('Animation error:', error);
        // Fallback: just show the text
        element.textContent = children;
        element.style.opacity = '1';
      }
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [children, delay, duration, stagger, splitBy]);

  return React.createElement(Component, {
    ref: textRef,
    className,
    children
  });
};

export default SplitTextReveal;