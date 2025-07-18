import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import AnimatedArrowButton from '../UI/AnimatedArrowButton';
import CustomNavButton from '../UI/CustomNavButton';

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
  <div className="bg-white p-20 rounded-xl shadow-sm border border-gray-100 min-w-[900px] lg:min-w-[1200px] transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-gray-200 group cursor-grab">
    <div className="mb-16">
      <p className="text-3xl lg:text-4xl text-slate-800 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
        "{testimonial.quote}"
      </p>
    </div>
    <div className="flex items-center justify-end">
      <div className="text-right">
        <p className="font-semibold text-slate-900 text-lg group-hover:text-black transition-colors duration-300">{testimonial.name}</p>
        <p className="text-slate-600 text-base group-hover:text-slate-700 transition-colors duration-300">{testimonial.title} - {testimonial.company}</p>
      </div>
    </div>
  </div>
);

const Results = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const cardWidth = 1240; // Card width + gap
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

  useEffect(() => {
    updatePosition(currentIndex);
  }, [currentIndex, isDragging]);

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
  }, [currentIndex, maxScroll, cardWidth]);

  return (
    <section className="relative overflow-hidden" style={{backgroundColor: '#efeeef'}}>
      {/* Same background textures as Hero */}
      <div className="absolute inset-0" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`,
             backgroundSize: '180px 180px'
           }}>
      </div>
      <div className="absolute inset-0 opacity-15"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.95' numOctaves='6' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.05'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.05) 0%, transparent 50%)`,
             backgroundSize: '400px 400px, 300px 300px, 200px 200px'
           }}>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-24 lg:py-28">
        <div className="max-w-[9.24xl] mx-auto" style={{maxWidth: '110.88rem'}}>
          <div className="flex flex-col gap-4 min-h-[41.25rem]">
          
          {/* Top Section - Hero Content */}
          <div className="relative p-8 flex-1 flex items-center">
            {/* Results Badge */}
            <div className="absolute top-6 left-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
                <span className="text-xl sm:text-2xl font-bold text-black">Results</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-center pt-8">
              <div className="lg:col-span-6">
                <h2 className="text-[3.6rem] sm:text-[4.1rem] md:text-[4.6rem] lg:text-[5.6rem] font-bold text-slate-900 leading-[1.1] tracking-tight">
                  Driven by an<br />
                  <span className="italic font-normal">innovation</span> mindset
                </h2>
              </div>
              <div className="lg:col-span-6 flex flex-col">
                <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed mb-6 font-medium tracking-normal">
                  We are a team of creative problem-solvers who love a good challenge and are focused on making a real difference for you. We find better ways to get you results. Your goals become our goals, and we'll be just as excited to see you succeed.
                </p>
                <div className="flex items-center space-x-4 cursor-pointer group">
                  <span className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                    Explore our work
                  </span>
                  <div className="group-hover:scale-110 transition-transform flex items-center">
                    <AnimatedArrowButton arrowDirection="top-right" size="md" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Testimonial Carousel */}
          <div className="relative p-8 flex-1 overflow-hidden">
            <div className="flex items-center justify-end mb-8">
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
            </div>
            
            <div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
              <div 
                ref={carouselRef}
                className="flex space-x-5"
                style={{ width: `${testimonials.length * 1240}px` }}
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