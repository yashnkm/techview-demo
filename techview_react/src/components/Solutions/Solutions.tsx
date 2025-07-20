import { useState } from 'react';
import AnimatedArrowButton from '../UI/AnimatedArrowButton'

// Service images data
const serviceImages = {
  'ai-solutions': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop', // AI/Robot
  'web-development': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop', // Code on screen
  'business-intelligence': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', // Data analytics
  'cloud-solutions': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop', // Cloud/Server
  'mobile-apps': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop', // Mobile phones
  'default': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop' // Default tech image
};

// Service descriptions from navigation megamenu
const serviceDescriptions = {
  'ai-solutions': 'Custom AI models and machine learning solutions',
  'web-development': 'Modern web applications and responsive designs', 
  'business-intelligence': 'Data analytics and intelligent reporting tools',
  'cloud-solutions': 'Scalable cloud infrastructure and deployment',
  'mobile-apps': 'Native and cross-platform mobile applications'
};

const Solutions = () => {
  const [currentImage, setCurrentImage] = useState(serviceImages.default);
  return (
    <section className="relative overflow-hidden bg-[#efeeef] dark:bg-dark-bg transition-colors duration-500">
      {/* Heavy Random Grain Texture - Light */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='solutionsHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.3 1 1 1 0 0.3 1 1 1 0 0.3 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23solutionsHeavyGrain)' fill='white' opacity='0.4'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Random Grain Overlay */}
      <div className="absolute inset-0 opacity-40 dark:opacity-25 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='solutionsFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.4 1 1 1 0 0.4 1 1 1 0 0.4 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23solutionsFineGrain)' fill='white' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Grain Detail */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='solutionsUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.5 1 1 1 0 0.5 1 1 1 0 0.5 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23solutionsUltraFineGrain)' fill='white' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Dark grain textures for light mode */}
      {/* Heavy Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-25 dark:opacity-0 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='solutionsDarkHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23solutionsDarkHeavyGrain)' fill='black' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-20 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='solutionsDarkFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23solutionsDarkFineGrain)' fill='black' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-15 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='solutionsDarkUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23solutionsDarkUltraFineGrain)' fill='black' opacity='0.2'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-24 lg:py-28">
        <div className="max-w-[9.24xl] mx-auto" style={{maxWidth: '110.88rem'}}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-2 items-center min-h-[41.25rem]">
          
          {/* Left Side - Professional Image - Hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-5 relative p-4 h-full flex-col mr-1">
            {/* Our Services Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
                <span className="text-xl sm:text-2xl font-bold text-black dark:text-white transition-colors duration-500">Our Services</span>
              </div>
            </div>
            
            <div className="relative flex-1">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
                {/* Dynamic service image */}
                <img 
                  src={currentImage} 
                  alt="Service illustration"
                  className="w-full h-full object-cover transition-all duration-700 ease-out transform hover:scale-105"
                  style={{
                    transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-out',
                  }}
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-700"></div>
              </div>
              
              {/* TechView overlay */}
              <div className="absolute top-[1.5rem] left-[1.5rem] bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold text-slate-800 text-xl">TechView</span>
              </div>
            </div>
          </div>

          {/* Services Content - Full width on mobile, partial on desktop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left p-2">
            
            {/* Mobile Our Services Badge */}
            <div className="lg:hidden mb-6">
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
                <span className="text-xl sm:text-2xl font-bold text-black dark:text-white transition-colors duration-500">Our Services</span>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-slate-900 dark:text-white leading-[0.85] tracking-tight transition-colors duration-500">
              Comprehensive<br />
              Tech Solutions<br />
              <span className="text-slate-600 dark:text-gray-300 font-bold transition-colors duration-500">for Modern Business</span>
            </h1>


            {/* Services Grid - Mobile optimized: equal height cards stacked vertically */}
            <div className="pt-[2rem]">
              <div className="flex flex-col gap-3 md:gap-1">
                {/* Mobile: All cards stacked vertically with equal height */}
                {/* Desktop: Top row - 3 cards */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-1">
                  {/* AI Solutions */}
                  <div 
                    className="group/card cursor-pointer w-full md:flex-1 md:hover:flex-[1.35] transition-all duration-300 ease-out" 
                    style={{animation: 'slideInUp 0.4s ease-out 0.1s both'}}
                    onMouseEnter={() => setCurrentImage(serviceImages['ai-solutions'])}
                    onMouseLeave={() => setCurrentImage(serviceImages.default)}
                  >
                    <div className="bg-white dark:bg-black p-6 md:p-8 lg:p-10 rounded-sm hover:bg-gray-50 dark:hover:bg-black hover:shadow-md dark:hover:shadow-none transition-all duration-300 ease-out relative h-32 md:h-48 lg:h-56 hover:z-10 border border-gray-100 dark:border-transparent">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 dark:text-white text-lg md:text-lg lg:text-xl transition-colors duration-500">AI Solutions</h3>
                        <p className="text-sm text-slate-600 dark:text-gray-300 mt-2 md:hidden transition-colors duration-500">Custom AI models and machine learning solutions</p>
                      </div>
                      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
                      </div>
                      {/* Hover text overlay - Desktop only */}
                      <div className="hidden md:block absolute bottom-4 left-6 md:bottom-6 md:left-8 lg:left-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-out">
                        <p className="text-sm font-bold text-slate-600 dark:text-gray-300 max-w-[200px]">
                          {serviceDescriptions['ai-solutions']}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Web Development */}
                  <div 
                    className="group/card cursor-pointer w-full md:flex-1 md:hover:flex-[1.35] transition-all duration-300 ease-out" 
                    style={{animation: 'slideInUp 0.4s ease-out 0.2s both'}}
                    onMouseEnter={() => setCurrentImage(serviceImages['web-development'])}
                    onMouseLeave={() => setCurrentImage(serviceImages.default)}
                  >
                    <div className="bg-white dark:bg-black p-6 md:p-8 lg:p-10 rounded-sm hover:bg-gray-50 dark:hover:bg-black hover:shadow-md dark:hover:shadow-none transition-all duration-300 ease-out relative h-32 md:h-48 lg:h-56 hover:z-10 border border-gray-100 dark:border-transparent">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 dark:text-white text-lg md:text-lg lg:text-xl transition-colors duration-500">Web Development</h3>
                        <p className="text-sm text-slate-600 dark:text-gray-300 mt-2 md:hidden transition-colors duration-500">Modern web applications and responsive designs</p>
                      </div>
                      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
                      </div>
                      {/* Hover text overlay - Desktop only */}
                      <div className="hidden md:block absolute bottom-4 left-6 md:bottom-6 md:left-8 lg:left-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-out">
                        <p className="text-sm font-bold text-slate-600 dark:text-gray-300 max-w-[200px]">
                          {serviceDescriptions['web-development']}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business Intelligence */}
                  <div 
                    className="group/card cursor-pointer w-full md:flex-1 md:hover:flex-[1.35] transition-all duration-300 ease-out" 
                    style={{animation: 'slideInUp 0.4s ease-out 0.3s both'}}
                    onMouseEnter={() => setCurrentImage(serviceImages['business-intelligence'])}
                    onMouseLeave={() => setCurrentImage(serviceImages.default)}
                  >
                    <div className="bg-white dark:bg-black p-6 md:p-8 lg:p-10 rounded-sm hover:bg-gray-50 dark:hover:bg-black hover:shadow-md dark:hover:shadow-none transition-all duration-300 ease-out relative h-32 md:h-48 lg:h-56 hover:z-10 border border-gray-100 dark:border-transparent">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 dark:text-white text-lg md:text-lg lg:text-xl transition-colors duration-500">
                          <span className="md:hidden">Business Intelligence</span>
                          <span className="hidden md:inline">Business<br />Intelligence</span>
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-gray-300 mt-2 md:hidden transition-colors duration-500">Data analytics and intelligent reporting tools</p>
                      </div>
                      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
                      </div>
                      {/* Hover text overlay - Desktop only */}
                      <div className="hidden md:block absolute bottom-4 left-6 md:bottom-6 md:left-8 lg:left-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-out">
                        <p className="text-sm font-bold text-slate-600 dark:text-gray-300 max-w-[200px]">
                          {serviceDescriptions['business-intelligence']}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile: Continue vertical stack | Desktop: Bottom row - 2 cards */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-1">
                  {/* Cloud Solutions */}
                  <div 
                    className="group/card cursor-pointer w-full md:flex-1 md:hover:flex-[1.35] transition-all duration-300 ease-out" 
                    style={{animation: 'slideInUp 0.4s ease-out 0.4s both'}}
                    onMouseEnter={() => setCurrentImage(serviceImages['cloud-solutions'])}
                    onMouseLeave={() => setCurrentImage(serviceImages.default)}
                  >
                    <div className="bg-white dark:bg-black p-6 md:p-8 lg:p-10 rounded-sm hover:bg-gray-50 dark:hover:bg-black hover:shadow-md dark:hover:shadow-none transition-all duration-300 ease-out relative h-32 md:h-48 lg:h-56 hover:z-10 border border-gray-100 dark:border-transparent">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 dark:text-white text-lg md:text-lg lg:text-xl transition-colors duration-500">Cloud Solutions</h3>
                        <p className="text-sm text-slate-600 dark:text-gray-300 mt-2 md:hidden transition-colors duration-500">Scalable cloud infrastructure and deployment</p>
                      </div>
                      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
                      </div>
                      {/* Hover text overlay - Desktop only */}
                      <div className="hidden md:block absolute bottom-4 left-6 md:bottom-6 md:left-8 lg:left-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-out">
                        <p className="text-sm font-bold text-slate-600 dark:text-gray-300 max-w-[200px]">
                          {serviceDescriptions['cloud-solutions']}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Apps */}
                  <div 
                    className="group/card cursor-pointer w-full md:flex-1 md:hover:flex-[1.35] transition-all duration-300 ease-out" 
                    style={{animation: 'slideInUp 0.4s ease-out 0.5s both'}}
                    onMouseEnter={() => setCurrentImage(serviceImages['mobile-apps'])}
                    onMouseLeave={() => setCurrentImage(serviceImages.default)}
                  >
                    <div className="bg-white dark:bg-black p-6 md:p-8 lg:p-10 rounded-sm hover:bg-gray-50 dark:hover:bg-black hover:shadow-md dark:hover:shadow-none transition-all duration-300 ease-out relative h-32 md:h-48 lg:h-56 hover:z-10 border border-gray-100 dark:border-transparent">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 dark:text-white text-lg md:text-lg lg:text-xl transition-colors duration-500">Mobile Apps</h3>
                        <p className="text-sm text-slate-600 dark:text-gray-300 mt-2 md:hidden transition-colors duration-500">Native and cross-platform mobile applications</p>
                      </div>
                      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
                      </div>
                      {/* Hover text overlay - Desktop only */}
                      <div className="hidden md:block absolute bottom-4 left-6 md:bottom-6 md:left-8 lg:left-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 ease-out">
                        <p className="text-sm font-bold text-slate-600 dark:text-gray-300 max-w-[200px]">
                          {serviceDescriptions['mobile-apps']}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;