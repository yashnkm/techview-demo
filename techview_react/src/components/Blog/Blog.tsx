import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedArrowButton from '../UI/AnimatedArrowButton';
import SimplePhone from '../PhoneMockup/SimplePhone';

gsap.registerPlugin(ScrollTrigger);

interface BlogCard {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  additionalContent?: string;
}

const blogCards: BlogCard[] = [
  {
    id: 'demand-gen',
    title: 'Demand Gen',
    subtitle: 'Become famous in your niche and build demand',
    content: 'B2B buyers buy differently. You cannot "force" a need. But as soon as a need arises, you want to be the first one your prospect thinks of.',
    additionalContent: 'That is why you want your brand to be top-of-mind in your niche category. So when a need arises, the ideal client thinks of you. We call this Niche Famous™ at TechView.'
  },
  {
    id: 'demand-capture',
    title: 'Demand Capture',
    subtitle: 'Turn active demand into pipeline',
    content: 'B2B buyers will research solutions themselves when they are ready to buy. And when that moment comes, you want to capture that active need.',
    additionalContent: 'That is why you need to understand how your prospect searches and what touchpoints and information will persuade them to buy from you.'
  }
];

const Blog = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !leftSideRef.current) return;

      // Pin the left side while scrolling through cards
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftSideRef.current,
        pinSpacing: false,
      });

      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        gsap.fromTo(card,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden debug-outline" style={{backgroundColor: '#efeeef'}}>
      {/* Background textures */}
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

      <div ref={containerRef} className="w-full debug-outline-blue">
        <div className="max-w-[9.24xl] mx-auto debug-outline-green" style={{maxWidth: '110.88rem'}}>
          <div className="flex debug-outline-yellow">
            
            {/* Left Side - Sticky (30% width) */}
            <div 
              ref={leftSideRef}
              className="w-[30%] relative debug-outline-purple"
            >
              <div className="sticky top-0 h-screen flex items-center justify-center p-8">
                <div className="relative">
                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -left-10 w-20 h-20 bg-green-200 rounded-lg opacity-60"></div>
                  <div className="absolute -bottom-8 -right-8 w-14 h-14 bg-green-300 rounded-lg opacity-40"></div>
                  <div className="absolute top-24 -left-12 w-10 h-10 bg-green-400 rounded-lg opacity-50"></div>
                  <div className="absolute bottom-16 -right-12 w-16 h-16 bg-green-200 rounded-lg opacity-30"></div>
                  <div className="absolute top-1/2 -left-8 w-8 h-8 bg-green-300 rounded-lg opacity-45"></div>
                  
                  {/* Phone Mockup */}
                  <div className="relative z-10 transform scale-110">
                    <SimplePhone />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Scrollable (70% width) */}
            <div className="w-[70%] relative debug-outline">
              {/* Section Header */}
              <div className="sticky top-0 bg-[#efeeef] z-10 pt-8 pb-4 px-8 debug-outline-blue">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
                  <span className="text-xl sm:text-2xl font-bold text-black font-familjen">Our Approach</span>
                </div>
              </div>

              {/* Content Cards */}
              <div className="space-y-0 debug-outline-green">
                {blogCards.map((card, index) => (
                  <div
                    key={card.id}
                    ref={(el) => el && (cardsRef.current[index] = el)}
                    className="min-h-screen flex flex-col justify-center py-16 px-8 debug-outline-yellow"
                  >
                    <div className="max-w-3xl">
                      <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6 font-familjen">
                        {card.title}
                      </h2>
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal italic text-slate-700 mb-8 font-familjen">
                        {card.subtitle}
                      </h3>
                      
                      <div className="space-y-6 text-lg lg:text-xl text-slate-700 leading-relaxed font-familjen">
                        <p className="font-semibold">{card.content}</p>
                        {card.additionalContent && (
                          <p>{card.additionalContent}</p>
                        )}
                        
                        {/* The result section */}
                        <div className="mt-12 pt-8 border-t border-slate-300">
                          <h4 className="text-3xl font-bold text-slate-900 mb-6 font-familjen">
                            The result?
                          </h4>
                          <div className="flex items-center space-x-4 cursor-pointer group">
                            <span className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors font-familjen">
                              Discover more
                            </span>
                            <div className="group-hover:scale-110 transition-transform">
                              <AnimatedArrowButton arrowDirection="top-right" size="md" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;