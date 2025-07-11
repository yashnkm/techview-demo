import AnimatedArrowButton from '../UI/AnimatedArrowButton';
import ScrambleText from '../UI/ScrambleText';
import PhoneMockup from '../PhoneMockup/PhoneMockup';
import { useRef } from 'react';

const Hero = () => {
  const rightSideRef = useRef<HTMLDivElement>(null);

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

      {/* Background decorative elements - Green shapes removed */}
      <div className="absolute inset-0 pointer-events-none">
      </div>

      <div className="w-full px-10 lg:px-12 py-32">
        <div className="grid lg:grid-cols-12 gap-16 items-start min-h-[calc(100vh-200px)] w-full">
          {/* Left Content - Takes up more space like original */}
          <div className="lg:col-span-6 space-y-6">
            {/* Badge - Simple text with dot */}
            <div className="inline-flex items-center space-x-2 ml-4">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
              <span className="text-xl font-bold text-black">
                Intelligent Business Solutions
              </span>
            </div>

            {/* Main Heading - New structure with scramble text */}
            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-extrabold text-slate-900 leading-[0.9] tracking-tight" style={{fontFamily: "'Space Grotesk', sans-serif", fontWeight: '900'}}>
              One partner,<br />
              for all your<br />
              <ScrambleText 
                texts={['tech solutions', 'business needs', 'digital goals', 'growth plans']}
                duration={2500}
                scrambleDuration={0.6}
              /><br />
              <span className="text-slate-600 font-extrabold" style={{fontWeight: '900'}}>Step into TechView</span>
            </h1>

            {/* Subtext - Positioned lower like original */}
            <div className="pt-4 max-w-2xl">
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed font-light">
                Custom AI solutions and modern web applications designed specifically for your need. We build intelligent business tools that works for you.
              </p>
            </div>

            {/* CTA Section */}
            <div className="pt-12 flex items-center space-x-4">
              {/* Text */}
              <span className="text-xl font-semibold text-slate-800">See Our Solutions</span>
              
              {/* Standardized Animated Arrow Button */}
              <AnimatedArrowButton arrowDirection="down" size="md" />
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="lg:col-span-6 relative flex items-start justify-center mt-20" ref={rightSideRef}>
            <PhoneMockup className="scale-125" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;