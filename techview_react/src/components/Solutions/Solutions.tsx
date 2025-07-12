import AnimatedArrowButton from '../UI/AnimatedArrowButton'

const Solutions = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{backgroundColor: '#efeeef'}}>
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

      <div className="w-full py-20 sm:py-32 lg:py-40">
        <div className="relative w-full min-h-[calc(100vh-200px)] -mt-[10vh]">
          
          {/* Our Services Badge - Fixed position top left */}
          <div className="absolute top-0 left-4 sm:left-6 md:left-8 lg:left-12">
            <div className="inline-flex items-center space-x-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
              <span className="text-lg sm:text-xl font-bold text-black font-akkurat">Our Services</span>
            </div>
          </div>

          {/* Left Side - Professional Image */}
          <div className="absolute left-0 top-16 lg:top-12">
            <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-12">
              <div className="w-72 h-80 lg:w-80 lg:h-96 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl overflow-hidden shadow-xl">
                {/* Placeholder for professional image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-slate-600">
                    <div className="w-16 h-16 mx-auto mb-4 bg-slate-400 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p className="font-medium">Professional Image</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </div>
              
              {/* TechView overlay */}
              <div className="absolute top-6 left-10 sm:left-12 md:left-14 lg:left-18 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                <span className="font-bold text-slate-800 text-xl font-akkurat">TechView</span>
              </div>
            </div>
          </div>

          {/* Right Side - Services Content starting from center */}
          <div className="ml-[45vw] lg:ml-[40vw] pr-4 sm:pr-6 md:pr-8 lg:pr-12 space-y-6 text-left">

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[0.85] tracking-tight font-akkurat">
              Comprehensive<br />
              Tech Solutions<br />
              <span className="text-slate-600 font-bold">for Modern Business</span>
            </h1>

            {/* Description */}
            <div className="pt-4 max-w-2xl">
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 leading-relaxed font-medium">
                From AI-powered applications to scalable cloud infrastructure, we deliver cutting-edge technology solutions tailored to accelerate your business growth.
              </p>
            </div>

            {/* Services Grid - Bigger megamenu without outer border */}
            <div className="pt-8">
              <div className="flex flex-col gap-1">
                {/* Top row - 3 cards */}
                <div className="flex flex-col md:flex-row gap-1">
                  {/* AI Solutions */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.1s both'}}>
                    <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300 ease-out relative h-40 md:h-48 lg:h-56 hover:z-10 border border-gray-100">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 text-lg md:text-xl lg:text-2xl">AI Solutions</h3>
                      </div>
                      <div className="absolute bottom-6 right-6 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
                      </div>
                    </div>
                  </div>

                  {/* Web Development */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.2s both'}}>
                    <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300 ease-out relative h-40 md:h-48 lg:h-56 hover:z-10 border border-gray-100">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 text-lg md:text-xl lg:text-2xl">Web Development</h3>
                      </div>
                      <div className="absolute bottom-6 right-6 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
                      </div>
                    </div>
                  </div>

                  {/* Business Intelligence */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out">
                    <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300 ease-out relative h-40 md:h-48 lg:h-56 hover:z-10 border border-gray-100">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 text-lg md:text-xl lg:text-2xl">Business<br />Intelligence</h3>
                      </div>
                      <div className="absolute bottom-6 right-6 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom row - 2 cards */}
                <div className="flex gap-1">
                  {/* Cloud Solutions */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.4s both'}}>
                    <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300 ease-out relative h-40 md:h-48 lg:h-56 hover:z-10 border border-gray-100">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 text-lg md:text-xl lg:text-2xl">Cloud Solutions</h3>
                      </div>
                      <div className="absolute bottom-6 right-6 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Apps */}
                  <div className="group/card cursor-pointer flex-1 hover:flex-[1.2] transition-all duration-300 ease-out" style={{animation: 'slideInUp 0.4s ease-out 0.5s both'}}>
                    <div className="bg-white p-6 md:p-8 lg:p-10 rounded-xl hover:bg-gray-50 hover:shadow-md transition-all duration-300 ease-out relative h-40 md:h-48 lg:h-56 hover:z-10 border border-gray-100">
                      <div className="pr-8">
                        <h3 className="font-bold text-slate-800 text-lg md:text-xl lg:text-2xl">Mobile Apps</h3>
                      </div>
                      <div className="absolute bottom-6 right-6 group-hover/card:scale-110 transition-transform duration-300">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
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