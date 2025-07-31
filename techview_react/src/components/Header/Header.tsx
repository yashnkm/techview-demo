import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import AnimatedArrowButton from '../UI/AnimatedArrowButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<number | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Removed header animation - show immediately

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    
    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      animateOut();
    }, 300); // 300ms delay before hiding
    setHoverTimeout(timeout);
  };

  const handleMegaMenuEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleMegaMenuLeave = () => {
    animateOut();
  };

  const animateIn = () => {
    if (megaMenuRef.current) {
      // Kill any existing timeline
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      
      // Set initial state
      gsap.set(megaMenuRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95
      });
      
      // Create new timeline
      timelineRef.current = gsap.timeline();
      
      // Animate in
      timelineRef.current.to(megaMenuRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const animateOut = () => {
    if (megaMenuRef.current) {
      // Kill any existing timeline
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      
      // Create new timeline
      timelineRef.current = gsap.timeline({
        onComplete: () => {
          setActiveDropdown(null);
        }
      });
      
      // Animate out
      timelineRef.current.to(megaMenuRef.current, {
        opacity: 0,
        y: 20,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in"
      });
    }
  };

  // Trigger animation when mega menu becomes visible
  useEffect(() => {
    if (activeDropdown && megaMenuRef.current) {
      animateIn();
    }
  }, [activeDropdown]);

  // Cleanup timeline on unmount
  useEffect(() => {
    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <>
      {/* Fixed Navigation Card */}
      <header ref={headerRef} className="fixed top-4 sm:top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-gray-200 dark:border-transparent rounded-xl py-2 shadow-lg dark:shadow-none w-[95%] max-w-[1104px] min-w-[320px] transition-colors duration-500">
          {/* Logo - Left side */}
          <div className="flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-steel-blue"></div>
            <span className="text-lg sm:text-xl font-bold text-indigo-dye dark:text-ivory-white transition-colors duration-500">TechView</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center space-x-2 relative">
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#services" className="text-indigo-dye dark:text-gray-300 hover:text-steel-blue dark:hover:text-ivory-white hover:bg-cool-gray dark:hover:bg-transparent font-bold transition-all duration-200 px-5 py-3 rounded-lg flex items-center space-x-1 group">
                <span>Services</span>
                <svg className="w-3 h-3 fill-current transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 8">
                  <path d="M6 8L0 0h12L6 8z"/>
                </svg>
              </a>
            </div>
            
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('cases')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#cases" className="text-indigo-dye dark:text-gray-300 hover:text-steel-blue dark:hover:text-ivory-white hover:bg-cool-gray dark:hover:bg-transparent font-bold transition-all duration-200 px-5 py-3 rounded-lg flex items-center space-x-1 group">
                <span>Cases</span>
                <svg className="w-3 h-3 fill-current transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 8">
                  <path d="M6 8L0 0h12L6 8z"/>
                </svg>
              </a>
            </div>
            
            <a href="#about" className="text-indigo-dye dark:text-gray-300 hover:text-steel-blue dark:hover:text-ivory-white hover:bg-cool-gray dark:hover:bg-transparent font-bold transition-all duration-200 px-5 py-3 rounded-lg">About</a>
            <a href="#contact" className="text-indigo-dye dark:text-gray-300 hover:text-steel-blue dark:hover:text-ivory-white hover:bg-cool-gray dark:hover:bg-transparent font-bold transition-all duration-200 px-5 py-3 rounded-lg">Contact</a>
          </nav>

          {/* Text and Square Button - Right side */}
          <div className="hidden md:flex items-center space-x-2 sm:space-x-3 px-3 sm:px-6">
            <span className="text-indigo-dye dark:text-gray-300 font-bold text-sm sm:text-base transition-colors duration-500">Talk with us</span>
            <AnimatedArrowButton arrowDirection="top-right" size="md" />
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 pr-3 sm:pr-6"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
      </header>

      {/* Mega Menu Dropdowns */}
      {activeDropdown && (
        <div 
          ref={megaMenuRef}
          className="fixed top-28 left-1/2 transform -translate-x-1/2 z-40 w-[95%] max-w-[1104px] md:w-[800px] lg:w-[1104px]"
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        >
          <div className="bg-white/95 dark:bg-black/95 backdrop-blur-sm border border-gray-200 dark:border-transparent rounded-2xl p-4 md:p-6 lg:p-8 shadow-2xl dark:shadow-none w-full transition-colors duration-500">
            {activeDropdown === 'services' && (
              <div className="flex flex-col gap-2">
                {/* Top row - 3 cards */}
                <div className="flex flex-col md:flex-row gap-2">
                  {/* AI Solutions */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.1s both'}}>
                    <div className="bg-gray-200 dark:bg-gray-800 p-4 md:p-6 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-out relative h-32 md:h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-indigo-dye dark:text-ivory-white mb-2 text-base transition-colors duration-500">AI Solutions</h3>
                        <p className="text-sm text-steel-blue dark:text-gray-300 leading-tight transition-colors duration-500">Custom AI models and<br />machine learning solutions</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>

                  {/* Web Development */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.2s both'}}>
                    <div className="bg-gray-200 dark:bg-gray-800 p-4 md:p-6 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-out relative h-32 md:h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-indigo-dye dark:text-ivory-white mb-2 text-base transition-colors duration-500">Web Development</h3>
                        <p className="text-sm text-steel-blue dark:text-gray-300 leading-tight transition-colors duration-500">Modern web applications<br />and responsive designs</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>

                  {/* Business Intelligence */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.3s both'}}>
                    <div className="bg-gray-200 dark:bg-gray-800 p-4 md:p-6 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-out relative h-32 md:h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-indigo-dye dark:text-ivory-white mb-2 text-base transition-colors duration-500">Business Intelligence</h3>
                        <p className="text-sm text-steel-blue dark:text-gray-300 leading-tight transition-colors duration-500">Data analytics and<br />intelligent reporting tools</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom row - 2 cards */}
                <div className="flex gap-2">
                  {/* Cloud Solutions */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.4s both'}}>
                    <div className="bg-gray-200 dark:bg-gray-800 p-4 md:p-6 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-out relative h-32 md:h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-indigo-dye dark:text-ivory-white mb-2 text-base transition-colors duration-500">Cloud Solutions</h3>
                        <p className="text-sm text-steel-blue dark:text-gray-300 leading-tight transition-colors duration-500">Scalable cloud infrastructure<br />and deployment</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Apps */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.5s both'}}>
                    <div className="bg-gray-200 dark:bg-gray-800 p-4 md:p-6 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-out relative h-32 md:h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-indigo-dye dark:text-ivory-white mb-2 text-base transition-colors duration-500">Mobile Apps</h3>
                        <p className="text-sm text-steel-blue dark:text-gray-300 leading-tight transition-colors duration-500">Native and cross-platform<br />mobile applications</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'cases' && (
              <div className="flex flex-col gap-2">
                {/* Top row - 2 cards */}
                <div className="flex gap-2">
                  {/* Blog */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.1s both'}}>
                    <div className="bg-gray-200 dark:bg-gray-800 p-4 md:p-6 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-out relative h-32 md:h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-indigo-dye dark:text-ivory-white mb-2 text-base transition-colors duration-500">Blog</h3>
                        <p className="text-sm text-steel-blue dark:text-gray-300 leading-tight transition-colors duration-500">Insights and updates from<br />our tech journey</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>

                  {/* Case Studies */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.2s both'}}>
                    <div className="bg-gray-200 dark:bg-gray-800 p-4 md:p-6 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-out relative h-32 md:h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-indigo-dye dark:text-ivory-white mb-2 text-base transition-colors duration-500">Case Studies</h3>
                        <p className="text-sm text-steel-blue dark:text-gray-300 leading-tight transition-colors duration-500">Real client success stories<br />and project showcases</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom row - 1 card full width */}
                <div className="flex gap-2">
                  {/* Newsletter */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.05] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.3s both'}}>
                    <div className="bg-gray-200 dark:bg-gray-800 p-4 md:p-6 rounded-sm hover:bg-gray-300 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 ease-out relative h-32 md:h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-indigo-dye dark:text-ivory-white mb-2 text-base transition-colors duration-500">Newsletter</h3>
                        <p className="text-sm text-steel-blue dark:text-gray-300 leading-tight transition-colors duration-500">Monthly tech insights<br /><span className="text-slate-500">(Coming Soon)</span></p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 sm:top-20 left-1/2 transform -translate-x-1/2 z-40 md:hidden w-[90%] max-w-sm">
          <div className="bg-white/90 dark:bg-black/90 backdrop-blur-sm border border-gray-200 dark:border-transparent rounded-2xl px-4 sm:px-6 py-4 shadow-lg dark:shadow-none transition-colors duration-500">
            <nav className="flex flex-col space-y-2">
              {/* Services Dropdown */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'services' ? null : 'services')}
                  className="w-full text-indigo-dye dark:text-gray-300 hover:text-steel-blue dark:hover:text-ivory-white hover:bg-cool-gray dark:hover:bg-transparent font-medium transition-all duration-200 px-4 py-3 rounded-lg flex items-center justify-between"
                >
                  <span>Services</span>
                  <svg className={`w-3 h-3 fill-current transition-transform duration-200 ${mobileDropdown === 'services' ? 'rotate-180' : ''}`} viewBox="0 0 12 8">
                    <path d="M6 8L0 0h12L6 8z"/>
                  </svg>
                </button>
                {mobileDropdown === 'services' && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="#ai-solutions" className="block text-sm text-steel-blue dark:text-gray-400 hover:text-indigo-dye dark:hover:text-ivory-white px-4 py-2 rounded transition-colors duration-500">AI Solutions</a>
                    <a href="#web-development" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded transition-colors duration-500">Web Development</a>
                    <a href="#business-intelligence" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded transition-colors duration-500">Business Intelligence</a>
                  </div>
                )}
              </div>

              {/* Cases Dropdown */}
              <div>
                <button 
                  onClick={() => setMobileDropdown(mobileDropdown === 'cases' ? null : 'cases')}
                  className="w-full text-indigo-dye dark:text-gray-300 hover:text-steel-blue dark:hover:text-ivory-white hover:bg-cool-gray dark:hover:bg-transparent font-medium transition-all duration-200 px-4 py-3 rounded-lg flex items-center justify-between"
                >
                  <span>Cases</span>
                  <svg className={`w-3 h-3 fill-current transition-transform duration-200 ${mobileDropdown === 'cases' ? 'rotate-180' : ''}`} viewBox="0 0 12 8">
                    <path d="M6 8L0 0h12L6 8z"/>
                  </svg>
                </button>
                {mobileDropdown === 'cases' && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a href="#case-1" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded transition-colors duration-500">E-commerce Platform</a>
                    <a href="#case-2" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded transition-colors duration-500">Healthcare System</a>
                    <a href="#case-3" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-4 py-2 rounded transition-colors duration-500">Finance Dashboard</a>
                  </div>
                )}
              </div>

              <a href="#about" className="text-indigo-dye dark:text-gray-300 hover:text-steel-blue dark:hover:text-ivory-white hover:bg-cool-gray dark:hover:bg-transparent font-medium transition-all duration-200 px-4 py-3 rounded-lg">About</a>
              <a href="#contact" className="text-indigo-dye dark:text-gray-300 hover:text-steel-blue dark:hover:text-ivory-white hover:bg-cool-gray dark:hover:bg-transparent font-medium transition-all duration-200 px-4 py-3 rounded-lg">Contact</a>
              
              <div className="flex items-center space-x-3 mt-4 px-4 py-3">
                <span className="text-indigo-dye dark:text-gray-300 font-medium transition-colors duration-500">Talk with us</span>
                <AnimatedArrowButton arrowDirection="top-right" size="md" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;