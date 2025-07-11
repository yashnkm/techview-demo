import AnimatedArrowButton from '../UI/AnimatedArrowButton';
import ScrambleText from '../UI/ScrambleText';
import SimplePhone from '../PhoneMockup/SimplePhone';
import SplitTextReveal from '../UI/SplitTextReveal';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Hero = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide elements initially
    gsap.set([phoneRef.current, dotRef.current, headingRef.current, arrowRef.current], {
      y: 50,
      opacity: 0
    });

    // Animation timeline (20% faster)
    const tl = gsap.timeline({ delay: 5.6 });

    // Dot and heading animation
    tl.to([dotRef.current, headingRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.64, // 0.8 * 0.8
      ease: "power2.out"
    })
    // Phone animation
    .to(phoneRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.96, // 1.2 * 0.8
      ease: "power2.out"
    }, "-=0.64")
    // Arrow animation - same timing as all text (5.2s)
    .to(arrowRef.current, {
      y: 0,
      opacity: 1,
      duration: 0.64,
      ease: "power2.out"
    }, "-=0.64"); // Same time as dot and heading

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden" style={{backgroundColor: '#efeeef'}}>
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


      <div className="w-full px-10 lg:px-12 py-40">
        <div className="grid lg:grid-cols-12 gap-16 items-start min-h-[calc(100vh-200px)] w-full">
          <div className="lg:col-span-6 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 ml-4">
              <div ref={dotRef} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
              <SplitTextReveal 
                className="text-xl font-bold text-black"
                delay={5.6}
                stagger={0.04}
              >
                Intelligent Business Solutions
              </SplitTextReveal>
            </div>

            {/* Main Heading */}
            <h1 ref={headingRef} className="text-6xl lg:text-7xl xl:text-8xl font-bold text-slate-900 leading-[0.9] tracking-tight font-akkurat">
              One partner,<br />
              for all your<br />
              <ScrambleText 
                texts={['tech solutions', 'business needs', 'digital goals', 'growth plans']}
                duration={2500}
                scrambleDuration={0.6}
              /><br />
              <span className="text-slate-600 font-bold">Step into TechView</span>
            </h1>

            {/* Subtext */}
            <div className="pt-4 max-w-2xl">
              <SplitTextReveal 
                className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium"
                delay={5.6}
                stagger={0.08}
              >
                Custom AI solutions and modern web applications designed specifically for your need. We build intelligent business tools that works for you.
              </SplitTextReveal>
            </div>

            {/* CTA */}
            <div className="pt-12 flex items-center space-x-4">
              <SplitTextReveal 
                className="text-xl font-bold text-slate-800"
                delay={5.6}
                stagger={0.04}
              >
                See Our Solutions
              </SplitTextReveal>
              <div ref={arrowRef}>
                <AnimatedArrowButton arrowDirection="down" size="md" />
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="lg:col-span-6 relative flex items-start justify-center mt-4">
            <div ref={phoneRef}>
              <SimplePhone className="scale-125" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;