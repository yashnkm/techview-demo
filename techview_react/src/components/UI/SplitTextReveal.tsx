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
    const text = element.textContent || '';
    
    // Split text into lines manually (since we don't have SplitText plugin)
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';
    
    // Simple line breaking (approximate)
    words.forEach((word, index) => {
      if (currentLine.length + word.length > 40 && currentLine.length > 0) {
        lines.push(currentLine.trim());
        currentLine = word + ' ';
      } else {
        currentLine += word + ' ';
      }
    });
    if (currentLine.trim()) {
      lines.push(currentLine.trim());
    }

    // Clear original content
    element.innerHTML = '';

    // Create masked lines
    lines.forEach(lineText => {
      const mask = document.createElement('div');
      mask.className = 'overflow-hidden block px-2';
      
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