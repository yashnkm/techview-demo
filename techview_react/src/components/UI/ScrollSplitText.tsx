import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollSplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  splitBy?: 'chars' | 'words';
  trigger?: string;
  start?: string;
  as?: keyof JSX.IntrinsicElements;
}

const ScrollSplitText = ({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  stagger = 0.05,
  splitBy = 'words',
  trigger,
  start = 'top 80%',
  as: Component = 'span'
}: ScrollSplitTextProps) => {
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

          // Create scroll-triggered animation
          ScrollTrigger.create({
            trigger: trigger || element,
            start: start,
            onEnter: () => {
              gsap.to(splitElements, {
                opacity: 1,
                y: 0,
                duration,
                stagger,
                delay,
                ease: 'power2.out'
              });
            }
          });
        }
      } catch (error) {
        console.error('ScrollSplitText animation error:', error);
        // Fallback: just show the text
        element.textContent = children;
        element.style.opacity = '1';
      }
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [children, delay, duration, stagger, splitBy, trigger, start]);

  return React.createElement(Component, {
    ref: textRef,
    className,
    children
  });
};

export default ScrollSplitText;