const About = () => {
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

      <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-24 lg:py-28">
        <div className="max-w-[9.24xl] mx-auto border-4 border-yellow-500 bg-yellow-50/20" style={{maxWidth: '110.88rem'}}>
          <div className="flex flex-col gap-4 min-h-[41.25rem]">
          
          {/* Top Section */}
          <div className="relative p-4 flex-1 flex flex-col border-4 border-pink-500 bg-pink-50/20">
            <div className="flex items-center justify-center h-full">
              <p className="text-2xl text-slate-600 font-familjen">Top Section - Coming Soon</p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="space-y-6 text-center lg:text-left p-2 flex-1 border-4 border-indigo-500 bg-indigo-50/20">
            <div className="flex items-center justify-center h-full">
              <p className="text-2xl text-slate-600 font-familjen">Bottom Section - Coming Soon</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;