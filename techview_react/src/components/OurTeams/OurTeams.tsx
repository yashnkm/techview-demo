import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Draggable } from 'gsap/Draggable';
import AnimatedArrowButton from '../UI/AnimatedArrowButton';

gsap.registerPlugin(ScrollTrigger, Draggable);

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  image: string;
  linkedin?: string;
  github?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 'founder-ceo',
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 12+ years in AI and tech innovation.',
    skills: ['AI Strategy', 'Product Vision', 'Team Leadership'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/alexchen',
    github: 'https://github.com/alexchen',
    email: 'alex@techview.ai'
  },
  {
    id: 'cto',
    name: 'Sarah Kim',
    role: 'Chief Technology Officer',
    bio: 'Full-stack architect specializing in scalable systems.',
    skills: ['System Architecture', 'Cloud Computing', 'DevOps'],
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b0e7?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/sarahkim',
    github: 'https://github.com/sarahkim'
  },
  {
    id: 'lead-dev',
    name: 'Michael Torres',
    role: 'Lead Developer',
    bio: 'Expert in React, Node.js, and modern web technologies.',
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    github: 'https://github.com/michaeltorres',
    email: 'michael@techview.ai'
  },
  {
    id: 'ai-engineer',
    name: 'Dr. Emily Watson',
    role: 'AI Research Engineer',
    bio: 'PhD in Machine Learning with focus on NLP and computer vision.',
    skills: ['Machine Learning', 'NLP', 'Computer Vision', 'Python'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    linkedin: 'https://linkedin.com/in/emilywatson',
    github: 'https://github.com/emilywatson'
  }
];


const OurTeams = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current) return;

      // Add scroll trigger animations here if needed
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden debug-outline" style={{backgroundColor: '#efeeef'}}>
      {/* Same background textures as Hero and Results */}
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

      <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-24 lg:py-28 debug-outline-blue">
        <div className="max-w-[9.24xl] mx-auto debug-outline-green" style={{maxWidth: '110.88rem'}}>
          <div className="flex min-h-[41.25rem] debug-outline-yellow">
            
            {/* Left Section - 60% */}
            <div className="w-[60%] pr-4 debug-outline-purple">
              <div className="relative p-8 h-full debug-outline-blue">
                {/* Section Header */}
                <div className="absolute top-6 left-8">
                  <div className="inline-flex items-center space-x-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
                    <span className="text-xl sm:text-2xl font-bold text-black font-familjen">Our Team</span>
                  </div>
                </div>
                
                <div className="w-full pt-16 h-full flex flex-col justify-center debug-outline">
                  <div ref={containerRef} className="space-y-8">
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight font-familjen">
                      Meet the innovators<br />
                      <span className="italic font-normal">behind</span> TechView
                    </h1>
                    
                    {/* Description */}
                    <div className="max-w-lg space-y-4">
                      <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-familjen">
                        Our diverse team combines technical expertise with creative vision to deliver 
                        exceptional results for every project.
                      </p>
                      <p className="text-lg lg:text-xl text-slate-600 leading-relaxed font-familjen">
                        From AI engineers to UX designers, we're united by our passion for innovation 
                        and commitment to excellence.
                      </p>
                    </div>
                    
                    {/* Call to Action */}
                    <div className="flex items-center space-x-4 cursor-pointer group pt-4">
                      <span className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors font-familjen">
                        Join our team
                      </span>
                      <div className="group-hover:scale-110 transition-transform flex items-center">
                        <AnimatedArrowButton arrowDirection="top-right" size="md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - 40% */}
            <div className="w-[40%] pl-4 debug-outline-green">
              <div className="relative p-8 h-full debug-outline-yellow">
                <div className="h-full flex items-center justify-center debug-outline">
                  {/* Right side - clean and empty */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeams;