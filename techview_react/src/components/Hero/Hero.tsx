import AnimatedArrowButton from '../UI/AnimatedArrowButton';
import SimplePhone from '../PhoneMockup/SimplePhone';
import SplitTextReveal from '../UI/SplitTextReveal';
import { scrollManager } from '../../utils/scrollSmoother';

const Hero = () => {
  const handleSolutionsClick = () => {
    scrollManager.scrollTo('#solutions');
  };

  return (
    <section className="relative overflow-hidden bg-cool-gray dark:bg-dark-bg transition-colors duration-500">
      {/* Heavy Random Grain Texture - Light */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='heavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.3 1 1 1 0 0.3 1 1 1 0 0.3 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23heavyGrain)' fill='white' opacity='0.4'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Random Grain Overlay */}
      <div className="absolute inset-0 opacity-40 dark:opacity-25 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='fineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.4 1 1 1 0 0.4 1 1 1 0 0.4 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23fineGrain)' fill='white' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Grain Detail */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='ultraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.5 1 1 1 0 0.5 1 1 1 0 0.5 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23ultraFineGrain)' fill='white' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Dark grain textures for light mode */}
      {/* Heavy Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-25 dark:opacity-0 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='heroDarkHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23heroDarkHeavyGrain)' fill='black' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-20 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='heroDarkFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23heroDarkFineGrain)' fill='black' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-15 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='heroDarkUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23heroDarkUltraFineGrain)' fill='black' opacity='0.2'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-24 lg:py-32">
        <div className="max-w-[9.24xl] mx-auto" style={{maxWidth: '110.88rem'}}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-0 items-center min-h-[50rem]">
          <div className="lg:col-span-8 text-center lg:text-left pt-16 h-full">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 justify-center lg:justify-start mb-6">
              <div 
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full opacity-0 animate-fadeIn" 
                style={{ 
                  backgroundColor: '#4682B4', // Steel Blue
                  animation: 'fadeIn 0.5s ease-out forwards'
                }}
              ></div>
              <SplitTextReveal
                delay={0.1}
                duration={0.3}
                stagger={0.02}
                splitBy="chars"
                className="text-xl sm:text-2xl font-bold text-black dark:text-white transition-colors duration-500"
              >
                Intelligent Business Solutions
              </SplitTextReveal>
            </div>

            {/* Main Heading */}
            <div className="mb-8">
              <h1 className="text-[3.2rem] sm:text-[3.6rem] md:text-[4.2rem] lg:text-[5.4rem] font-bold text-indigo-dye dark:text-ivory-white leading-[1.1] tracking-tight transition-colors duration-500">
                <SplitTextReveal
                  delay={0.1}
                  duration={0.4}
                  stagger={0.05}
                  splitBy="words"
                  as="span"
                >
                  One partner,
                </SplitTextReveal>
                <br />
                <SplitTextReveal
                  delay={0.2}
                  duration={0.4}
                  stagger={0.05}
                  splitBy="words"
                  as="span"
                >
                  for all your Tech Solutions
                </SplitTextReveal>
                <br />
                <SplitTextReveal
                  delay={0.3}
                  duration={0.4}
                  stagger={0.05}
                  splitBy="words"
                  as="span"
                >
                  Step into TechView
                </SplitTextReveal>
              </h1>
            </div>

            {/* Subtext */}
            <div className="mt-16 w-full">
              <div className="w-full space-y-1">
                <p className="text-lg sm:text-xl lg:text-2xl text-black dark:text-gray-300 leading-[1.4] font-bold transition-colors duration-500">
                  <SplitTextReveal
                    delay={0.5}
                    duration={0.3}
                    stagger={0.02}
                    splitBy="words"
                    as="span"
                  >
                    We build, automate and engineer
                  </SplitTextReveal>
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-black dark:text-gray-300 leading-[1.4] font-bold transition-colors duration-500">
                  <SplitTextReveal
                    delay={0.6}
                    duration={0.3}
                    stagger={0.02}
                    splitBy="words"
                    as="span"
                  >
                    personalized tech solutions that help
                  </SplitTextReveal>
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-black dark:text-gray-300 leading-[1.4] font-bold transition-colors duration-500">
                  <SplitTextReveal
                    delay={0.7}
                    duration={0.3}
                    stagger={0.02}
                    splitBy="words"
                    as="span"
                  >
                    you and your business gain a competitive edge.
                  </SplitTextReveal>
                </p>
              </div>
            </div>

            {/* CTA */}
            <div 
              className="mt-16 flex items-center justify-center lg:justify-start space-x-4 cursor-pointer group"
              onClick={handleSolutionsClick}
            >
              <span className="text-xl sm:text-2xl font-bold text-black dark:text-white transition-colors duration-500">
                <SplitTextReveal
                  delay={0.9}
                  duration={0.4}
                  stagger={0.05}
                  splitBy="words"
                  as="span"
                >
                  See Our Solutions
                </SplitTextReveal>
              </span>
              <div 
                className="group-hover:scale-110 transition-transform flex items-center opacity-0"
                style={{
                  animation: 'fadeIn 0.5s ease-out 1.1s forwards'
                }}
              >
                <AnimatedArrowButton arrowDirection="down" size="md" />
              </div>
            </div>
          </div>

          {/* Phone - Hidden on mobile/tablet */}
          <div className="hidden lg:flex lg:col-span-4 relative items-center justify-end pr-48 h-full">
            <div>
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