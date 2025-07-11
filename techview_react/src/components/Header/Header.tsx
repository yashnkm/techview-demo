import { useState } from 'react';
import AnimatedArrowButton from '../UI/AnimatedArrowButton';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
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
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Fixed Navigation Card */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-between bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl py-2 shadow-lg min-w-[1104px]">
          {/* Logo - Left side */}
          <div className="flex items-center space-x-3 px-6">
            <div className="w-8 h-8 rounded-lg" style={{backgroundColor: '#74f5a2'}}></div>
            <span className="text-xl font-bold text-slate-800 font-akkurat">TechView</span>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-2 relative">
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#services" className="text-slate-700 hover:text-slate-700 hover:bg-gray-100 font-bold transition-all duration-200 px-5 py-3 rounded-lg flex items-center space-x-1 group font-akkurat">
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
              <a href="#cases" className="text-slate-700 hover:text-slate-700 hover:bg-gray-100 font-bold transition-all duration-200 px-5 py-3 rounded-lg flex items-center space-x-1 group font-akkurat">
                <span>Cases</span>
                <svg className="w-3 h-3 fill-current transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 8">
                  <path d="M6 8L0 0h12L6 8z"/>
                </svg>
              </a>
            </div>
            
            <a href="#about" className="text-slate-700 hover:text-slate-700 hover:bg-gray-100 font-bold transition-all duration-200 px-5 py-3 rounded-lg font-akkurat">About</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-700 hover:bg-gray-100 font-bold transition-all duration-200 px-5 py-3 rounded-lg font-akkurat">Contact</a>
          </nav>

          {/* Text and Square Button - Right side */}
          <div className="hidden lg:flex items-center space-x-3 px-6">
            <span className="text-slate-700 font-bold font-akkurat">Talk with us</span>
            <AnimatedArrowButton arrowDirection="top-right" size="md" />
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
      </header>

      {/* Mega Menu Dropdowns */}
      {activeDropdown && (
        <div 
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ease-out"
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
          style={{ 
            width: '1104px'
          }}
        >
          <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-2xl w-full">
            {activeDropdown === 'services' && (
              <div className="flex flex-col gap-2">
                {/* Top row - 3 cards */}
                <div className="flex gap-2">
                  {/* AI Solutions */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.1s both'}}>
                    <div className="bg-gray-200 p-6 rounded-sm hover:bg-gray-300 hover:shadow-md transition-all duration-300 ease-out relative h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 mb-2 text-base">AI Solutions</h3>
                        <p className="text-sm text-slate-600 leading-tight">Custom AI models and<br />machine learning solutions</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>

                  {/* Web Development */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.2s both'}}>
                    <div className="bg-gray-200 p-6 rounded-sm hover:bg-gray-300 hover:shadow-md transition-all duration-300 ease-out relative h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 mb-2 text-base">Web Development</h3>
                        <p className="text-sm text-slate-600 leading-tight">Modern web applications<br />and responsive designs</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>

                  {/* Business Intelligence */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.3s both'}}>
                    <div className="bg-gray-200 p-6 rounded-sm hover:bg-gray-300 hover:shadow-md transition-all duration-300 ease-out relative h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 mb-2 text-base">Business Intelligence</h3>
                        <p className="text-sm text-slate-600 leading-tight">Data analytics and<br />intelligent reporting tools</p>
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
                    <div className="bg-gray-200 p-6 rounded-sm hover:bg-gray-300 hover:shadow-md transition-all duration-300 ease-out relative h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 mb-2 text-base">Cloud Solutions</h3>
                        <p className="text-sm text-slate-600 leading-tight">Scalable cloud infrastructure<br />and deployment</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Apps */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.5s both'}}>
                    <div className="bg-gray-200 p-6 rounded-sm hover:bg-gray-300 hover:shadow-md transition-all duration-300 ease-out relative h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 mb-2 text-base">Mobile Apps</h3>
                        <p className="text-sm text-slate-600 leading-tight">Native and cross-platform<br />mobile applications</p>
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
                    <div className="bg-gray-200 p-6 rounded-sm hover:bg-gray-300 hover:shadow-md transition-all duration-300 ease-out relative h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 mb-2 text-base">Blog</h3>
                        <p className="text-sm text-slate-600 leading-tight">Insights and updates from<br />our tech journey</p>
                      </div>
                      <div className="absolute bottom-4 right-4 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="sm" />
                      </div>
                    </div>
                  </div>

                  {/* Case Studies */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.2s both'}}>
                    <div className="bg-gray-200 p-6 rounded-sm hover:bg-gray-300 hover:shadow-md transition-all duration-300 ease-out relative h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 mb-2 text-base">Case Studies</h3>
                        <p className="text-sm text-slate-600 leading-tight">Real client success stories<br />and project showcases</p>
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
                    <div className="bg-gray-200 p-6 rounded-sm hover:bg-gray-300 hover:shadow-md transition-all duration-300 ease-out relative h-40 hover:z-10">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 mb-2 text-base">Newsletter</h3>
                        <p className="text-sm text-slate-600 leading-tight">Monthly tech insights<br /><span className="text-slate-500">(Coming Soon)</span></p>
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
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 lg:hidden">
          <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl px-6 py-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 font-medium transition-all duration-200 px-4 py-3 rounded-lg flex items-center space-x-1 group">
                <span>Services</span>
                <svg className="w-3 h-3 fill-current transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 8">
                  <path d="M6 8L0 0h12L6 8z"/>
                </svg>
              </a>
              <a href="#cases" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 font-medium transition-all duration-200 px-4 py-3 rounded-lg flex items-center space-x-1 group">
                <span>Cases</span>
                <svg className="w-3 h-3 fill-current transition-transform duration-200 group-hover:rotate-180" viewBox="0 0 12 8">
                  <path d="M6 8L0 0h12L6 8z"/>
                </svg>
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 font-medium transition-all duration-200 px-4 py-3 rounded-lg">About</a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 hover:scale-105 font-medium transition-all duration-200 px-4 py-3 rounded-lg">Contact</a>
              <div className="flex items-center space-x-3 mt-4">
                <span className="text-slate-800 font-medium">Talk with us</span>
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