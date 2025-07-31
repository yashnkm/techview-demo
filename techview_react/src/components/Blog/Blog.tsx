import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedArrowButton from '../UI/AnimatedArrowButton';
import SimplePhone from '../PhoneMockup/SimplePhone';
import ScrollSplitText from '../UI/ScrollSplitText';
import ScrollReveal from '../UI/ScrollReveal';

gsap.registerPlugin(ScrollTrigger);

interface BlogCard {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  additionalContent?: string;
  detailedContent?: string;
  methods?: string[];
  tips?: string;
}

const blogCards: BlogCard[] = [
  {
    id: 'gemini-pro-free',
    title: 'How to Use Gemini Pro for Free',
    subtitle: 'Complete guide to accessing Google\'s most powerful AI without paying',
    content: 'Google has made its advanced Gemini Pro AI accessible for free through multiple channels in 2025. Whether you\'re a student, developer, or casual user, there are several ways to harness this powerful AI technology without spending a dime.',
    additionalContent: 'Gemini 2.5 Pro stands at the forefront of AI models when it comes to complex reasoning tasks, delivering top-tier performance on challenging math and science evaluations. The best part? It integrates deeply with Google products like Gmail, Drive, and Workspace.',
    detailedContent: 'Students in the US, UK, Brazil, Japan, and Indonesia can access Gemini Advanced for free through June 2026 - that\'s up to 15 months of premium AI access! For developers, Google AI Studio provides free API access to build applications. Plus, discover insider tips like enabling Smart Features in Gmail settings to maximize your Gemini experience.',
    methods: [
      '1. Free Student Access - Visit google.com/ai/students with your .edu email',
      '2. Google AI Studio - Free API access for developers at aistudio.google.com',
      '3. Direct Integration - Use Gemini within Gmail, Drive, and Google Workspace',
      '4. Mobile Apps - Download Gemini app for iOS and Android with free tier'
    ],
    tips: 'Pro tip: Always default to the Pro Gemini model for complex tasks, and enable Smart Features in your Gmail settings under General > Smart Features to get the most out of Google Gemini integration.'
  },
  {
    id: 'ai-automation-business',
    title: 'AI for Non-Tech Business Owners',
    subtitle: 'How artificial intelligence transforms businesses without coding knowledge',
    content: 'In 2025, AI automation has become accessible to every business owner, regardless of technical background. No-code platforms have slashed implementation costs by 95% and put sophisticated automation tools in the hands of entrepreneurs who previously couldn\'t afford custom development.',
    additionalContent: 'Real businesses are seeing 30% productivity increases, cutting task completion times from hours to minutes, and saving millions annually. AI agents are becoming digital workers that can double your knowledge workforce without requiring a single line of code.',
    detailedContent: 'Today\'s no-code AI platforms replace complex coding with intuitive visual interfaces. Small business owners can now build intelligent automations for customer service, data management, inventory forecasting, and business process automation. Platforms like Durable AI ($59/month) and PulseAI ($69/month) make enterprise-level automation affordable for any business.',
    tips: 'Start small with one repetitive task in your business - whether it\'s customer inquiries, data entry, or report generation. Modern AI platforms can automate these tasks in minutes, not months. Focus on tasks that consume the most time but require the least human creativity.'
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
      cardsRef.current.forEach((card) => {
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
    <section className="relative overflow-hidden bg-cool-gray dark:bg-dark-bg transition-colors duration-500">
      {/* Background textures */}
      {/* Heavy Random Grain Texture - Light */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blogHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.3 1 1 1 0 0.3 1 1 1 0 0.3 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blogHeavyGrain)' fill='white' opacity='0.4'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Random Grain Overlay */}
      <div className="absolute inset-0 opacity-40 dark:opacity-25 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blogFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.4 1 1 1 0 0.4 1 1 1 0 0.4 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blogFineGrain)' fill='white' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Grain Detail */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blogUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.5 1 1 1 0 0.5 1 1 1 0 0.5 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blogUltraFineGrain)' fill='white' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Dark grain textures for light mode */}
      {/* Heavy Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-25 dark:opacity-0 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blogDarkHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blogDarkHeavyGrain)' fill='black' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-20 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blogDarkFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blogDarkFineGrain)' fill='black' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-15 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='blogDarkUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23blogDarkUltraFineGrain)' fill='black' opacity='0.2'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div ref={containerRef} className="w-full">
        <div className="max-w-[9.24xl] mx-auto" style={{maxWidth: '110.88rem'}}>
          <div className="flex">
            
            {/* Left Side - Sticky (30% width) - Hidden on mobile */}
            <div 
              ref={leftSideRef}
              className="hidden lg:block w-[30%] relative"
              style={{height: 'calc(100% - 200px)'}}
            >
              <div className="sticky top-64 h-screen relative">
                {/* Phone Mockup - No decorative elements */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{top: '50%'}}>
                  <SimplePhone />
                </div>
              </div>
            </div>

            {/* Right Side - Scrollable (70% width on desktop, 100% on mobile) */}
            <div className="w-full lg:w-[70%] relative">
              {/* Section Header */}
              <div className="sticky top-0 z-10 pt-4 sm:pt-8 pb-2 sm:pb-4 px-4 sm:px-8 transition-colors duration-500">
                <div className="p-4 sm:p-6 lg:p-8 mx-0 sm:mx-2 lg:mx-4">
                  <ScrollReveal delay={0} className="inline-flex items-center space-x-2 mb-4 sm:mb-6">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-steel-blue"></div>
                    <ScrollSplitText
                      delay={0.1}
                      duration={0.2}
                      stagger={0.05}
                      splitBy="chars"
                      className="text-xl sm:text-2xl font-bold text-black dark:text-white transition-colors duration-500"
                    >
                      Blogs & Resources
                    </ScrollSplitText>
                  </ScrollReveal>
                </div>
              </div>

              {/* Content Cards */}
              <div className="space-y-0">
                {blogCards.map((card, index) => (
                  <div
                    key={card.id}
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el;
                    }}
                    className="min-h-screen flex flex-col justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-8"
                  >
                    <div className="w-full h-full bg-white dark:bg-black rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg dark:shadow-none border border-gray-200 dark:border-transparent mx-0 sm:mx-2 lg:mx-4 my-2 sm:my-4 transition-colors duration-500">
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-indigo-dye dark:text-ivory-white leading-tight mb-3 sm:mb-4 lg:mb-6 transition-colors duration-500">
                        <ScrollSplitText
                          delay={0}
                          duration={0.4}
                          stagger={0.03}
                          splitBy="words"
                          start="top 85%"
                          as="span"
                        >
                          {card.title}
                        </ScrollSplitText>
                      </h2>
                      
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-normal text-steel-blue dark:text-gray-300 mb-6 sm:mb-8 lg:mb-12 transition-colors duration-500">
                        <ScrollSplitText
                          delay={0}
                          duration={0.3}
                          stagger={0.02}
                          splitBy="words"
                          start="top 85%"
                          as="span"
                        >
                          {card.subtitle}
                        </ScrollSplitText>
                      </h3>
                      
                      <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-sm sm:text-base lg:text-lg text-steel-blue dark:text-gray-300 leading-relaxed transition-colors duration-500">
                        <p className="font-semibold mb-4 sm:mb-6 lg:mb-8">
                          <ScrollSplitText
                            delay={0}
                            duration={0.4}
                            stagger={0.01}
                            splitBy="words"
                            start="top 85%"
                            as="span"
                          >
                            {card.content}
                          </ScrollSplitText>
                        </p>
                        {card.additionalContent && (
                          <p className="mb-4 sm:mb-6 lg:mb-8">
                            <ScrollSplitText
                              delay={0}
                              duration={0.4}
                              stagger={0.01}
                              splitBy="words"
                              start="top 85%"
                              as="span"
                            >
                              {card.additionalContent}
                            </ScrollSplitText>
                          </p>
                        )}
                        {card.detailedContent && (
                          <p className="bg-powder-blue/20 dark:bg-gray-800 p-3 sm:p-4 lg:p-6 rounded-lg mb-4 sm:mb-6 lg:mb-8 transition-colors duration-500">
                            <ScrollSplitText
                              delay={0}
                              duration={0.4}
                              stagger={0.01}
                              splitBy="words"
                              start="top 85%"
                              as="span"
                            >
                              {card.detailedContent}
                            </ScrollSplitText>
                          </p>
                        )}
                        
                        {/* Tips section */}
                        {card.tips && (
                          <ScrollReveal delay={0.3} className="mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 lg:p-6 bg-powder-blue/30 dark:bg-steel-blue/20 border-l-4 border-steel-blue rounded-r-lg transition-colors duration-500">
                            <h4 className="text-lg sm:text-xl font-bold text-indigo-dye dark:text-ivory-white mb-2 sm:mb-3 transition-colors duration-500">
                              <ScrollSplitText
                                delay={0}
                                duration={0.2}
                                stagger={0.04}
                                splitBy="words"
                                start="top 85%"
                                as="span"
                              >
                                💡 Expert Tips
                              </ScrollSplitText>
                            </h4>
                            <p className="text-xs sm:text-sm lg:text-base text-steel-blue dark:text-gray-300 transition-colors duration-500">
                              <ScrollSplitText
                                delay={0}
                                duration={0.4}
                                stagger={0.01}
                                splitBy="words"
                                start="top 85%"
                                as="span"
                              >
                                {card.tips}
                              </ScrollSplitText>
                            </p>
                          </ScrollReveal>
                        )}
                        
                        {/* The result section */}
                        <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-steel-blue/30 dark:border-transparent transition-colors duration-500">
                          <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-indigo-dye dark:text-ivory-white mb-3 sm:mb-4 lg:mb-6 transition-colors duration-500">
                            <ScrollSplitText
                              delay={0}
                              duration={0.2}
                              stagger={0.04}
                              splitBy="words"
                              start="top 85%"
                              as="span"
                            >
                              Ready to get started?
                            </ScrollSplitText>
                          </h4>
                          <div className="flex items-center space-x-3 sm:space-x-4 cursor-pointer group">
                            <ScrollSplitText
                              delay={0}
                              duration={0.2}
                              stagger={0.03}
                              splitBy="words"
                              start="top 85%"
                              className="text-lg sm:text-xl font-bold text-indigo-dye dark:text-gray-200 group-hover:text-steel-blue dark:group-hover:text-ivory-white transition-colors duration-500"
                              as="span"
                            >
                              Read full guide
                            </ScrollSplitText>
                            <div 
                              className="group-hover:scale-110 transition-transform flex items-center opacity-0"
                              style={{
                                animation: 'fadeIn 0.5s ease-out 1.9s forwards'
                              }}
                            >
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