import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface SplitTextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

const SplitTextReveal = ({ 
  children, 
  className = '', 
  delay = 0, 
  stagger = 0.15, 
  duration = 0.7 
}: SplitTextRevealProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const element = textRef.current;
    const text = element.innerHTML || '';
    
    // Split text by manual line breaks first
    const manualLines = text.split('<br />');
    const lines: string[] = [];
    
    // Process each manual line
    manualLines.forEach(line => {
      const cleanLine = line.trim();
      if (cleanLine) {
        lines.push(cleanLine);
      }
    });

    // Clear original content
    element.innerHTML = '';

    // Create masked lines
    lines.forEach(lineText => {
      const mask = document.createElement('div');
      mask.className = 'overflow-hidden block';
      
      const inner = document.createElement('div');
      inner.className = 'line-inner';
      inner.textContent = lineText;
      
      mask.appendChild(inner);
      element.appendChild(mask);
    });

    // Set initial state
    gsap.set(element.querySelectorAll('.line-inner'), {
      y: 50,
      opacity: 0
    });

    // Animate in
    const tl = gsap.timeline({ delay });
    tl.to(element.querySelectorAll('.line-inner'), {
      y: 0,
      opacity: 1,
      duration,
      ease: "power3.out",
      stagger
    });

    return () => {
      tl.kill();
    };
  }, [delay, stagger, duration]);

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

export default SplitTextReveal;