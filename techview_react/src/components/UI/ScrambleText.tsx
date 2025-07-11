import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface ScrambleTextProps {
  texts: string[];
  className?: string;
  duration?: number;
  scrambleDuration?: number;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  texts,
  className = '',
  duration = 3000,
  scrambleDuration = 0.8
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrambleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  const scrambleText = (finalText: string) => {
    if (!textRef.current) return;

    const element = textRef.current;
    const originalText = element.textContent || '';
    const maxLength = Math.max(originalText.length, finalText.length);
    
    let iteration = 0;
    
    const interval = setInterval(() => {
      element.textContent = finalText
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return finalText[index];
          }
          return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        })
        .join('');
      
      if (iteration >= finalText.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);

    // Cleanup after scramble duration
    setTimeout(() => {
      clearInterval(interval);
      element.textContent = finalText;
    }, scrambleDuration * 1000);
  };

  useEffect(() => {
    if (texts.length === 0) return;

    // Initial text
    if (textRef.current) {
      textRef.current.textContent = texts[0];
    }

    // Start continuous cycling
    const cycleInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, duration);

    return () => {
      clearInterval(cycleInterval);
    };
  }, [texts, duration]);

  useEffect(() => {
    scrambleText(texts[currentIndex]);
  }, [currentIndex]);

  return (
    <span ref={textRef} className={className}>
      {texts[0]}
    </span>
  );
};

export default ScrambleText;