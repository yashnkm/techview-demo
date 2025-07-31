import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  trigger?: string;
  start?: string;
  as?: keyof JSX.IntrinsicElements;
}

const ScrollReveal = ({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  y = 50,
  trigger,
  start = 'top 80%',
  as: Component = 'div'
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: y
    });

    // Create scroll-triggered animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: trigger || element,
      start: start,
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out'
        });
      }
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [delay, duration, y, trigger, start]);

  return React.createElement(Component, {
    ref: elementRef,
    className,
    children
  });
};

export default ScrollReveal;