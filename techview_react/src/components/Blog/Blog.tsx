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
    <section className="relative overflow-hidden" style={{backgroundColor: '#efeeef'}}>
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

      <div ref={containerRef} className="w-full">
        <div className="max-w-[9.24xl] mx-auto" style={{maxWidth: '110.88rem'}}>
          <div className="flex">
            
            {/* Left Side - Sticky (30% width) */}
            <div 
              ref={leftSideRef}
              className="w-[30%] relative"
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
            <div className="w-[70%] relative">
              {/* Section Header */}
              <div className="sticky top-0 bg-[#efeeef] z-10 pt-8 pb-4 px-8">
                <div className="inline-flex items-center space-x-2 mb-6">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
                  <span className="text-xl sm:text-2xl font-bold text-black">Blogs & Resources</span>
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
                    className="min-h-screen flex flex-col justify-center py-16 px-8"
                  >
                    <div className="w-full h-full bg-white rounded-2xl p-8 shadow-lg border border-gray-200 mx-4 my-4">
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-6">
                        {card.title}
                      </h2>
                      
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-700 mb-12">
                        {card.subtitle}
                      </h3>
                      
                      <div className="space-y-8 text-base lg:text-lg text-slate-700 leading-relaxed">
                        <p className="font-semibold mb-8">{card.content}</p>
                        {card.additionalContent && (
                          <p className="mb-8">{card.additionalContent}</p>
                        )}
                        {card.detailedContent && (
                          <p className="bg-slate-50 p-6 rounded-lg mb-8">{card.detailedContent}</p>
                        )}
                        
                        {/* Tips section */}
                        {card.tips && (
                          <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
                            <h4 className="text-xl font-bold text-slate-900 mb-3">
                              💡 Expert Tips
                            </h4>
                            <p className="text-sm lg:text-base text-slate-700">{card.tips}</p>
                          </div>
                        )}
                        
                        {/* The result section */}
                        <div className="mt-12 pt-8 border-t border-slate-300">
                          <h4 className="text-3xl font-bold text-slate-900 mb-6">
                            Ready to get started?
                          </h4>
                          <div className="flex items-center space-x-4 cursor-pointer group">
                            <span className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                              Read full guide
                            </span>
                            <div className="group-hover:scale-110 transition-transform flex items-center">
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