import AnimatedArrowButton from '../UI/AnimatedArrowButton';
import ScrollSplitText from '../UI/ScrollSplitText';
import ScrollReveal from '../UI/ScrollReveal';

interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  links: {
    instagram?: string;
    github?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=400&auto=format&fit=crop',
    links: {
      instagram: '#',
      github: '#',
      linkedin: '#'
    }
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    links: {
      instagram: '#',
      github: '#',
      linkedin: '#'
    }
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'Product Manager',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    links: {
      instagram: '#',
      github: '#',
      linkedin: '#'
    }
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'Backend Engineer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    links: {
      instagram: '#',
      github: '#',
      linkedin: '#'
    }
  }
];

const OurTeams = () => {


  return (
    <section className="relative overflow-hidden bg-[#efeeef] dark:bg-dark-bg transition-colors duration-500">
      {/* Same background textures as Hero and Results */}
      {/* Heavy Random Grain Texture - Light */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='teamsHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.3 1 1 1 0 0.3 1 1 1 0 0.3 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23teamsHeavyGrain)' fill='white' opacity='0.4'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Random Grain Overlay */}
      <div className="absolute inset-0 opacity-40 dark:opacity-25 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='teamsFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.4 1 1 1 0 0.4 1 1 1 0 0.4 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23teamsFineGrain)' fill='white' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Grain Detail */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='teamsUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.5 1 1 1 0 0.5 1 1 1 0 0.5 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23teamsUltraFineGrain)' fill='white' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Dark grain textures for light mode */}
      {/* Heavy Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-25 dark:opacity-0 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='teamsDarkHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23teamsDarkHeavyGrain)' fill='black' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-20 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='teamsDarkFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23teamsDarkFineGrain)' fill='black' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-15 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='teamsDarkUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23teamsDarkUltraFineGrain)' fill='black' opacity='0.2'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-24 lg:py-32">
        <div className="max-w-[9.24xl] mx-auto" style={{maxWidth: '110.88rem'}}>
          
          {/* Header Section */}
          <div className="text-center mb-16 lg:mb-24">
            {/* Section Badge */}
            <ScrollReveal delay={0} className="mb-6">
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
                <ScrollSplitText
                  delay={0.1}
                  duration={0.1}
                  stagger={0.03}
                  splitBy="chars"
                  className="text-xl sm:text-2xl font-bold text-black dark:text-white transition-colors duration-500"
                >
                  Our Team
                </ScrollSplitText>
              </div>
            </ScrollReveal>
            
            {/* Main Heading */}
            <h1 className="text-[3.2rem] sm:text-[3.6rem] md:text-[4.2rem] lg:text-[5.4rem] font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8 transition-colors duration-500">
              <ScrollSplitText
                delay={0.2}
                duration={0.25}
                stagger={0.03}
                splitBy="words"
                as="span"
              >
                Meet the innovators
              </ScrollSplitText>
              <br />
              <ScrollSplitText
                delay={0.3}
                duration={0.25}
                stagger={0.03}
                splitBy="words"
                className="italic font-normal"
                as="span"
              >
                behind
              </ScrollSplitText>{" "}
              <ScrollSplitText
                delay={0.4}
                duration={0.25}
                stagger={0.03}
                splitBy="words"
                as="span"
              >
                TechView
              </ScrollSplitText>
            </h1>
            
            {/* Description */}
            <div className="max-w-4xl mx-auto space-y-4 mb-8">
              <p className="text-base sm:text-lg lg:text-xl text-black dark:text-gray-300 leading-relaxed font-medium tracking-normal transition-colors duration-500">
                <ScrollSplitText
                  delay={0.5}
                  duration={0.3}
                  stagger={0.01}
                  splitBy="words"
                  as="span"
                >
                  Our diverse team combines technical expertise with creative vision to deliver exceptional results for every project.
                </ScrollSplitText>
              </p>
            </div>
            
            {/* Call to Action */}
            <div className="flex items-center justify-center space-x-4 cursor-pointer group">
              <ScrollSplitText
                delay={0.7}
                duration={0.15}
                stagger={0.02}
                splitBy="words"
                className="text-lg sm:text-xl font-bold text-slate-800 dark:text-gray-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-500"
                as="span"
              >
                Join our team
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

          {/* Team Cards Grid */}
          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto lg:max-w-6xl lg:grid-cols-4 lg:gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal 
                key={member.id}
                delay={index * 0.1}
                y={60}
                duration={0.6}
                className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg dark:shadow-none hover:shadow-xl dark:hover:shadow-none transition-all duration-300 hover:scale-105"
              >
                {/* Card Image */}
                <div className="relative w-full h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-lg mb-1">
                      <ScrollSplitText
                        delay={0.2}
                        duration={0.2}
                        stagger={0.03}
                        splitBy="words"
                        start="top 90%"
                        as="span"
                      >
                        {member.name}
                      </ScrollSplitText>
                    </h3>
                    <p className="text-sm opacity-90 mb-3">
                      <ScrollSplitText
                        delay={0.3}
                        duration={0.2}
                        stagger={0.015}
                        splitBy="words"
                        start="top 90%"
                        as="span"
                      >
                        {member.title}
                      </ScrollSplitText>
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex space-x-3">
                      {member.links.instagram && (
                        <a href={member.links.instagram} className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                        </a>
                      )}
                      {member.links.github && (
                        <a href={member.links.github} className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                      {member.links.linkedin && (
                        <a href={member.links.linkedin} className="text-white hover:text-gray-300 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurTeams;