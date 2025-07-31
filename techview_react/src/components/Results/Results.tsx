import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import AnimatedArrowButton from '../UI/AnimatedArrowButton';
import CustomNavButton from '../UI/CustomNavButton';
import SplitTextReveal from '../UI/SplitTextReveal';
import ScrollReveal from '../UI/ScrollReveal';
import ScrollSplitText from '../UI/ScrollSplitText';

gsap.registerPlugin(Draggable);

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "We saw a 300% increase in efficiency with TechView's AI solutions",
    name: "Sarah Johnson",
    title: "CTO",
    company: "InnovateCorp"
  },
  {
    quote: "TechView transformed our entire business workflow with intelligent automation",
    name: "Michael Chen", 
    title: "Operations Director",
    company: "TechFlow Solutions"
  },
  {
    quote: "The most responsive and innovative development team we've worked with",
    name: "Emily Rodriguez",
    title: "Product Manager",
    company: "StartupLab"
  },
  {
    quote: "Their custom web applications doubled our customer engagement rates",
    name: "David Kim",
    title: "Marketing Head",
    company: "GrowthCo"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="bg-white dark:bg-black p-6 sm:p-10 md:p-16 lg:p-20 rounded-xl shadow-sm dark:shadow-none border border-gray-100 dark:border-transparent min-w-[280px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[1000px] transition-all duration-300 hover:shadow-lg dark:hover:shadow-none hover:scale-[1.02] hover:border-gray-200 dark:hover:border-transparent group cursor-grab">
    <div className="mb-6 sm:mb-10 md:mb-14 lg:mb-16">
      <p className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl text-slate-800 dark:text-white leading-relaxed group-hover:text-slate-900 dark:group-hover:text-gray-200 transition-colors duration-300">
        "<ScrollSplitText
          delay={0.1}
          duration={0.4}
          stagger={0.015}
          splitBy="words"
          start="top 90%"
          as="span"
        >
          {testimonial.quote}
        </ScrollSplitText>"
      </p>
    </div>
    <div className="flex items-center justify-end">
      <div className="text-right">
        <ScrollSplitText
          delay={0.3}
          duration={0.2}
          stagger={0.03}
          splitBy="words"
          start="top 90%"
          className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base lg:text-lg group-hover:text-black dark:group-hover:text-gray-200 transition-colors duration-300"
          as="p"
        >
          {testimonial.name}
        </ScrollSplitText>
        <ScrollSplitText
          delay={0.4}
          duration={0.2}
          stagger={0.01}
          splitBy="words"
          start="top 90%"
          className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm lg:text-base group-hover:text-slate-700 dark:group-hover:text-gray-400 transition-colors duration-300"
          as="p"
        >
          {testimonial.title} - {testimonial.company}
        </ScrollSplitText>
      </div>
    </div>
  </div>
);

const Results = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Responsive card widths
  const getCardWidth = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 300; // Mobile: 280px card + 20px gap
      if (width < 768) return 420; // SM: 400px card + 20px gap
      if (width < 1024) return 620; // MD: 600px card + 20px gap
      return 1020; // LG+: 1000px card + 20px gap
    }
    return 1020; // Default for SSR
  };

  const [cardWidth, setCardWidth] = useState(getCardWidth());
  const maxScroll = (testimonials.length - 1) * cardWidth;

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const updatePosition = (index: number) => {
    if (carouselRef.current) {
      gsap.to(carouselRef.current, {
        x: -(index * cardWidth),
        duration: isDragging ? 0 : 0.6,
        ease: "power2.out"
      });
    }
  };

  // Handle window resize for responsive card widths
  useEffect(() => {
    const handleResize = () => {
      setCardWidth(getCardWidth());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    updatePosition(currentIndex);
  }, [currentIndex, isDragging, cardWidth]);

  useEffect(() => {
    if (!carouselRef.current || !containerRef.current) return;

    let startX = 0;
    let startIndex = currentIndex;

    const draggable = Draggable.create(carouselRef.current, {
      type: "x",
      trigger: containerRef.current,
      bounds: { minX: -maxScroll, maxX: 0 },
      inertia: true,
      onDragStart: function() {
        setIsDragging(true);
        startX = this.x;
        startIndex = currentIndex;
      },
      onDrag: function() {
        // Live dragging - no snapping during drag
      },
      onDragEnd: function() {
        setIsDragging(false);
        const dragDistance = this.x - startX;
        const threshold = cardWidth * 0.2; // 20% of card width to trigger slide

        let newIndex = startIndex;
        
        if (dragDistance < -threshold && currentIndex < testimonials.length - 1) {
          newIndex = currentIndex + 1;
        } else if (dragDistance > threshold && currentIndex > 0) {
          newIndex = currentIndex - 1;
        }
        
        setCurrentIndex(newIndex);
      }
    });

    return () => {
      if (draggable[0]) {
        draggable[0].kill();
      }
    };
  }, [currentIndex, cardWidth, maxScroll]);

  return (
    <section className="relative overflow-hidden bg-[#efeeef] dark:bg-dark-bg transition-colors duration-500">
      {/* Same background textures as Hero */}
      {/* Heavy Random Grain Texture - Light */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='resultsHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.3 1 1 1 0 0.3 1 1 1 0 0.3 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23resultsHeavyGrain)' fill='white' opacity='0.4'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Random Grain Overlay */}
      <div className="absolute inset-0 opacity-40 dark:opacity-25 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='resultsFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.4 1 1 1 0 0.4 1 1 1 0 0.4 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23resultsFineGrain)' fill='white' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Grain Detail */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='resultsUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.5 1 1 1 0 0.5 1 1 1 0 0.5 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23resultsUltraFineGrain)' fill='white' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Dark grain textures for light mode */}
      {/* Heavy Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-25 dark:opacity-0 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='resultsDarkHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23resultsDarkHeavyGrain)' fill='black' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-20 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='resultsDarkFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23resultsDarkFineGrain)' fill='black' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-15 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='resultsDarkUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23resultsDarkUltraFineGrain)' fill='black' opacity='0.2'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-24 lg:py-28">
        <div className="max-w-[9.24xl] mx-auto" style={{maxWidth: '110.88rem'}}>
          <div className="flex flex-col gap-4 min-h-[41.25rem]">
          
          {/* Top Section - Hero Content */}
          <div className="relative p-8 flex-1 flex items-center">
            {/* Results Badge */}
            <ScrollReveal delay={0} className="absolute top-6 left-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
                <ScrollSplitText
                  delay={0.1}
                  duration={0.15}
                  stagger={0.05}
                  splitBy="chars"
                  className="text-xl sm:text-2xl font-bold text-black dark:text-white transition-colors duration-500"
                >
                  Results
                </ScrollSplitText>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center pt-8">
              <div className="lg:col-span-6">
                <h2 className="text-[3.2rem] sm:text-[3.6rem] md:text-[4.2rem] lg:text-[5.4rem] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight transition-colors duration-500">
                  <ScrollSplitText
                    delay={0.2}
                    duration={0.3}
                    stagger={0.04}
                    splitBy="words"
                    as="span"
                  >
                    Driven by an
                  </ScrollSplitText>
                  <br />
                  <ScrollSplitText
                    delay={0.3}
                    duration={0.3}
                    stagger={0.04}
                    splitBy="words"
                    className="italic font-normal"
                    as="span"
                  >
                    innovation
                  </ScrollSplitText>{" "}
                  <ScrollSplitText
                    delay={0.4}
                    duration={0.3}
                    stagger={0.04}
                    splitBy="words"
                    as="span"
                  >
                    mindset
                  </ScrollSplitText>
                </h2>
              </div>
              <div className="lg:col-span-6 flex flex-col">
                <p className="text-base sm:text-lg lg:text-xl text-black dark:text-gray-300 leading-relaxed mb-6 font-medium tracking-normal transition-colors duration-500">
                  <ScrollSplitText
                    delay={0.5}
                    duration={0.4}
                    stagger={0.01}
                    splitBy="words"
                    as="span"
                  >
                    We are a team of creative problem-solvers who love a good challenge and are focused on making a real difference for you. We find better ways to get you results. Your goals become our goals, and we'll be just as excited to see you succeed.
                  </ScrollSplitText>
                </p>
                <div className="flex items-center space-x-4 cursor-pointer group">
                  <ScrollSplitText
                    delay={0.7}
                    duration={0.2}
                    stagger={0.03}
                    splitBy="words"
                    className="text-xl font-bold text-slate-800 dark:text-gray-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500"
                    as="span"
                  >
                    Explore our work
                  </ScrollSplitText>
                  <div 
                    className="group-hover:scale-110 transition-transform flex items-center opacity-0"
                    style={{
                      animation: 'fadeIn 0.5s ease-out 0.9s forwards'
                    }}
                  >
                    <AnimatedArrowButton arrowDirection="top-right" size="md" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Testimonial Carousel */}
          <div className="relative p-8 flex-1 overflow-hidden">
            <ScrollReveal delay={0.2} className="flex items-center justify-end mb-8">
              <div className="flex space-x-2">
                <CustomNavButton
                  direction="left"
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                />
                <CustomNavButton
                  direction="right"
                  onClick={nextSlide}
                  disabled={currentIndex === testimonials.length - 1}
                />
              </div>
            </ScrollReveal>
            
            <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
              <div 
                ref={carouselRef}
                className="flex space-x-3 sm:space-x-4 md:space-x-5"
                style={{ width: `${testimonials.length * cardWidth}px` }}
              >
                {testimonials.map((testimonial, index) => (
                  <TestimonialCard key={index} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;