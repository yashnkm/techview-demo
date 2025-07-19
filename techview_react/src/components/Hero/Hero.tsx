import AnimatedArrowButton from '../UI/AnimatedArrowButton';
import SimplePhone from '../PhoneMockup/SimplePhone';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { scrollManager } from '../../utils/scrollSmoother';

const Hero = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const handleSolutionsClick = () => {
    scrollManager.scrollTo('#solutions');
  };

  useEffect(() => {
    // Hide elements initially
    gsap.set([phoneRef.current, dotRef.current, headingRef.current, subtextRef.current, ctaRef.current], {
      opacity: 0
    });
    
    gsap.set(phoneRef.current, {
      scale: 0.8,
      opacity: 0
    });
    
    gsap.set(headingRef.current, {
      y: 30,
      opacity: 0
    });
    
    gsap.set(subtextRef.current, {
      y: 30,
      opacity: 0
    });

    // All animations at 4.2s - synchronized (faster loading)
    const tl = gsap.timeline();
    
    tl.to(dotRef.current, {
      opacity: 1,
      duration: 0.64,
      ease: "power2.out"
    }, 4.2)
    .to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 4.3)
    .to(subtextRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out"
    }, 4.4)
    .to(phoneRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.96,
      ease: "power2.out"
    }, 4.2)
    // CTA (text + arrow) simple fade-in animation
    .to(ctaRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, 4.2); // Same exact timing as SplitText delay

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative overflow-hidden" style={{backgroundColor: '#efeeef'}}>
      {/* Grainy Texture Background */}
      <div className="absolute inset-0" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
             backgroundSize: '180px 180px'
           }}>
      </div>

      {/* Additional Fine Grain */}
      <div className="absolute inset-0 opacity-15"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.95' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.05'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Paper-like Texture */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.05) 0%, transparent 50%)`,
             backgroundSize: '400px 400px, 300px 300px, 200px 200px'
           }}>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-24 lg:py-32">
        <div className="max-w-[9.24xl] mx-auto" style={{maxWidth: '110.88rem'}}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-0 items-center min-h-[50rem]">
          <div className="lg:col-span-8 text-center lg:text-left pt-16 h-full">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 justify-center lg:justify-start mb-6">
              <div ref={dotRef} className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
              <span className="text-xl sm:text-2xl font-bold text-black">
                Intelligent Business Solutions
              </span>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 ref={headingRef} className="text-[3.2rem] sm:text-[3.6rem] md:text-[4.2rem] lg:text-[5.4rem] font-bold text-black leading-[1.1] tracking-tight">
                {/* Mobile & Tablet - Static text */}
                <span className="lg:hidden">
                  One partner,<br />
                  for all your <span className="italic font-normal">Tech Solutions</span><br />
                  <span className="text-black font-bold">Step into TechView</span>
                </span>
                
                {/* Desktop - Static text */}
                <span className="hidden lg:block">
                  One partner,<br />
                  for all your <span className="italic font-normal">Tech Solutions</span><br />
                  <span className="text-black font-bold">Step into TechView</span>
                </span>
              </h1>
            </div>

            {/* Subtext */}
            <div className="mt-16 w-full">
              <div ref={subtextRef} className="w-full space-y-2">
                <p className="text-xl sm:text-2xl lg:text-3xl text-black leading-[1.6] font-normal">
                  We build, automate and engineer personalized tech solutions
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl text-black leading-[1.6] font-normal">
                  that help you and your business
                </p>
                <p className="text-xl sm:text-2xl lg:text-3xl text-black leading-[1.6] font-normal">
                  to gain a competitive edge.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div 
              ref={ctaRef}
              className="mt-16 flex items-center justify-center lg:justify-start space-x-4 cursor-pointer group"
              onClick={handleSolutionsClick}
            >
              <span className="text-xl sm:text-2xl font-bold text-black transition-colors">
                See Our Solutions
              </span>
              <div className="group-hover:scale-110 transition-transform flex items-center">
                <AnimatedArrowButton arrowDirection="down" size="md" />
              </div>
            </div>
          </div>

          {/* Phone - Hidden on mobile/tablet */}
          <div className="hidden lg:flex lg:col-span-4 relative items-center justify-end pr-48 h-full">
            <div ref={phoneRef}>
              <SimplePhone className="scale-110" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;