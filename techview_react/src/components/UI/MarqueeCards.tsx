import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { gsap } from 'gsap';

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
  },
  {
    id: '5',
    name: 'Lisa Zhang',
    title: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?q=80&w=400&auto=format&fit=crop',
    links: {
      instagram: '#',
      github: '#',
      linkedin: '#'
    }
  }
];

// Duplicate the array to create seamless loop
const extendedTeamMembers = [...teamMembers, ...teamMembers, ...teamMembers];

interface MarqueeCardsProps {
  className?: string;
}

export interface MarqueeCardsRef {
  handleLeftClick: () => void;
  handleRightClick: () => void;
}

const MarqueeCards = forwardRef<MarqueeCardsRef, MarqueeCardsProps>(({ className = '' }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused] = useState(false);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;

    const cardWidth = 320; // 300px card + 20px margin
    const totalWidth = teamMembers.length * cardWidth;

    // Create infinite marquee animation
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(marqueeRef.current, {
      x: -totalWidth,
      duration: 20,
      ease: 'none'
    });

    animationRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!animationRef.current) return;

    if (isPaused || isCardHovered) {
      animationRef.current.pause();
    } else {
      animationRef.current.timeScale(1).play();
    }
  }, [isPaused, isCardHovered]);

  const handleLeftClick = () => {
    if (!animationRef.current) return;
    // Move fast backward for 1 second
    animationRef.current.timeScale(-3);
    setTimeout(() => {
      if (animationRef.current && !isPaused && !isCardHovered) {
        animationRef.current.timeScale(1);
      }
    }, 1000);
  };

  const handleRightClick = () => {
    if (!animationRef.current) return;
    // Move fast forward for 1 second
    animationRef.current.timeScale(3);
    setTimeout(() => {
      if (animationRef.current && !isPaused && !isCardHovered) {
        animationRef.current.timeScale(1);
      }
    }, 1000);
  };

  const handleCardMouseEnter = (cardId: string) => {
    setIsCardHovered(true);
    setHoveredCardId(cardId);
  };

  const handleCardMouseLeave = () => {
    setIsCardHovered(false);
    setHoveredCardId(null);
  };

  // Expose the click handlers to parent component
  useImperativeHandle(ref, () => ({
    handleLeftClick,
    handleRightClick
  }));

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div 
        ref={containerRef}
        className="relative h-full flex items-center"
      >
        <div 
          ref={marqueeRef}
          className="flex space-x-5"
          style={{ willChange: 'transform' }}
        >
          {extendedTeamMembers.map((member, index) => {
            const cardId = `${member.id}-${index}`;
            const isHovered = hoveredCardId === cardId;
            
            return (
              <div
                key={cardId}
                className="relative w-[300px] h-[400px] flex-shrink-0 overflow-hidden rounded-2xl"
                style={{
                  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)'
                }}
                onMouseEnter={() => handleCardMouseEnter(cardId)}
                onMouseLeave={handleCardMouseLeave}
              >
                {/* Card Image */}
                <div className="relative w-full h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Content Overlay - Initially hidden, slides up on hover */}
                  <div 
                    className="absolute bottom-0 w-full h-[160px] flex flex-col justify-center items-center z-10"
                    style={{
                      backdropFilter: 'blur(15px)',
                      boxShadow: '0 -10px 10px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '15px',
                      transform: isHovered ? 'translateY(0)' : 'translateY(100%)',
                      transition: 'transform 0.5s ease-out',
                      transitionDelay: isHovered ? '0s' : '0.65s'
                    }}
                  >
                    {/* Text Content */}
                    <div className="text-center mb-4">
                      <h3 
                        className="text-white font-medium text-lg uppercase tracking-wider leading-tight"
                        style={{
                          letterSpacing: '2px',
                          margin: '20px 0 15px',
                          lineHeight: '1.1em',
                          opacity: isHovered ? 1 : 0,
                          transform: isHovered ? 'translateY(0)' : 'translateY(-20px)',
                          transition: 'all 0.5s ease-out',
                          transitionDelay: isHovered ? '0s' : '0.6s'
                        }}
                      >
                        {member.name}
                        <br />
                        <span style={{ fontSize: '12px', fontWeight: 300, textTransform: 'initial' }}>
                          {member.title}
                        </span>
                      </h3>
                    </div>

                    {/* Social Links */}
                    <ul className="flex space-x-5 relative bottom-2">
                      {member.links.instagram && (
                        <li 
                          style={{
                            listStyle: 'none',
                            margin: '0 10px',
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'all 0.5s ease-out',
                            transitionDelay: isHovered ? '0.2s' : '0.2s'
                          }}
                        >
                          <a href={member.links.instagram} className="text-white text-2xl hover:text-gray-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                          </a>
                        </li>
                      )}
                      {member.links.github && (
                        <li 
                          style={{
                            listStyle: 'none',
                            margin: '0 10px',
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'all 0.5s ease-out',
                            transitionDelay: isHovered ? '0.4s' : '0.4s'
                          }}
                        >
                          <a href={member.links.github} className="text-white text-2xl hover:text-gray-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                          </a>
                        </li>
                      )}
                      {member.links.linkedin && (
                        <li 
                          style={{
                            listStyle: 'none',
                            margin: '0 10px',
                            opacity: isHovered ? 1 : 0,
                            transform: isHovered ? 'translateY(0)' : 'translateY(40px)',
                            transition: 'all 0.5s ease-out',
                            transitionDelay: isHovered ? '0.6s' : '0.6s'
                          }}
                        >
                          <a href={member.links.linkedin} className="text-white text-2xl hover:text-gray-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

MarqueeCards.displayName = 'MarqueeCards';

export default MarqueeCards;
