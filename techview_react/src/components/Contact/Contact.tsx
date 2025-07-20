import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface ServiceOption {
  id: string;
  label: string;
  checked: boolean;
}

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leftCardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [services, setServices] = useState<ServiceOption[]>([
    { id: 'ai-solutions', label: 'AI Solutions', checked: false },
    { id: 'web-development', label: 'Web Development', checked: false },
    { id: 'mobile-apps', label: 'Mobile Apps', checked: false },
    { id: 'cloud-solutions', label: 'Cloud Solutions', checked: false },
    { id: 'business-intelligence', label: 'Business Intelligence', checked: false },
    { id: 'other', label: 'Other', checked: false }
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (serviceId: string) => {
    setServices(prev => prev.map(service => 
      service.id === serviceId 
        ? { ...service, checked: !service.checked }
        : service
    ));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedServices = services.filter(s => s.checked).map(s => s.label);
    console.log('Form submitted:', { ...formData, services: selectedServices });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!badgeRef.current || !headingRef.current || !leftCardsRef.current || !formRef.current) return;

      // Hide elements initially
      gsap.set([badgeRef.current, headingRef.current, leftCardsRef.current, formRef.current], {
        opacity: 0
      });
      
      gsap.set(headingRef.current, {
        y: 30,
        opacity: 0
      });
      
      gsap.set([leftCardsRef.current, formRef.current], {
        y: 20,
        opacity: 0
      });

      // Synchronized animations at 4.2s timing
      const tl = gsap.timeline();
      
      tl.to(badgeRef.current, {
        opacity: 1,
        duration: 0.64,
        ease: "power2.out"
      }, 4.2)
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, 4.3)
      .to(leftCardsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, 4.4)
      .to(formRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, 4.5);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#efeeef] dark:bg-dark-bg transition-colors duration-500">
      {/* TechView signature background textures */}
      {/* Heavy Random Grain Texture - Light */}
      <div className="absolute inset-0 opacity-60 dark:opacity-40 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='contactHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.3 1 1 1 0 0.3 1 1 1 0 0.3 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23contactHeavyGrain)' fill='white' opacity='0.4'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Random Grain Overlay */}
      <div className="absolute inset-0 opacity-40 dark:opacity-25 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='contactFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.4 1 1 1 0 0.4 1 1 1 0 0.4 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23contactFineGrain)' fill='white' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Grain Detail */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='contactUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1 1 1 0 0.5 1 1 1 0 0.5 1 1 1 0 0.5 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23contactUltraFineGrain)' fill='white' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      {/* Dark grain textures for light mode */}
      {/* Heavy Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-25 dark:opacity-0 transition-opacity duration-500" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='contactDarkHeavyGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2.5' numOctaves='8' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23contactDarkHeavyGrain)' fill='black' opacity='0.3'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 200px'
           }}>
      </div>

      {/* Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-20 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 150 150' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='contactDarkFineGrain'%3E%3CfeTurbulence type='turbulence' baseFrequency='3.8' numOctaves='6' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 0 0.15 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23contactDarkFineGrain)' fill='black' opacity='0.25'/%3E%3C/svg%3E")`,
             backgroundSize: '100px 100px'
           }}>
      </div>

      {/* Ultra Fine Dark Grain - Light Mode Only */}
      <div className="absolute inset-0 opacity-15 dark:opacity-0 transition-opacity duration-500"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='contactDarkUltraFineGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='5.2' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 0 0.1 0 0 0 1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23contactDarkUltraFineGrain)' fill='black' opacity='0.2'/%3E%3C/svg%3E")`,
             backgroundSize: '50px 50px'
           }}>
      </div>

      <div ref={containerRef} className="w-full">
        <div className="max-w-[9.24xl] mx-auto" style={{maxWidth: '110.88rem'}}>
          <div className="px-4 sm:px-6 md:px-8 py-16">
            
            {/* Contact Badge */}
            <div ref={badgeRef} className="mb-8">
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
                <span className="text-xl sm:text-2xl font-bold text-black dark:text-white transition-colors duration-500">Contact</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-8 items-stretch">
            
            {/* Left Side - Contact Information Cards */}
            <div ref={leftCardsRef} className="lg:col-span-4 flex flex-col gap-6 h-full">
              
              {/* Chat to us Card */}
              <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-transparent hover:shadow-xl dark:hover:shadow-none transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#74f5a2'}}>
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.54.36 3.04 1.05 4.4L1 22l5.6-2.05C8.96 21.64 10.46 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-slate-800 dark:group-hover:text-gray-200 transition-colors duration-500">Chat to us</h3>
                    <p className="text-base text-slate-600 dark:text-gray-300 mb-3 transition-colors duration-500">Our friendly team is here to help.</p>
                    <a href="mailto:hello@techview.ai" className="text-base text-black dark:text-white font-semibold hover:underline transition-colors duration-500">
                      hello@techview.ai
                    </a>
                  </div>
                </div>
              </div>

              {/* Visit us Card */}
              <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-transparent hover:shadow-xl dark:hover:shadow-none transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#74f5a2'}}>
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-slate-800 dark:group-hover:text-gray-200 transition-colors duration-500">Visit us</h3>
                    <p className="text-base text-slate-600 dark:text-gray-300 mb-3 transition-colors duration-500">Come say hello at our office HQ.</p>
                    <div className="text-base text-black dark:text-white font-semibold transition-colors duration-500">
                      <p>100 Smith Street</p>
                      <p>San Francisco, CA 94102</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call us Card */}
              <div className="bg-white dark:bg-black p-8 rounded-2xl shadow-lg dark:shadow-none border border-gray-100 dark:border-transparent hover:shadow-xl dark:hover:shadow-none transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#74f5a2'}}>
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 group-hover:text-slate-800 dark:group-hover:text-gray-200 transition-colors duration-500">Call us</h3>
                    <p className="text-base text-slate-600 dark:text-gray-300 mb-3 transition-colors duration-500">Mon-Fri from 8am to 5pm.</p>
                    <a href="tel:+15551234567" className="text-base text-black dark:text-white font-semibold hover:underline transition-colors duration-500">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Main Form Area */}
            <div ref={formRef} className="lg:col-span-8 h-full">
              <div className="rounded-2xl p-8 lg:p-12 shadow-xl h-full flex flex-col" style={{backgroundColor: '#74f5a2'}}>
                
                {/* Hero Text */}
                <div className="mb-8">
                  <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight mb-4">
                    Got <span className="italic font-normal">ideas</span>?<br />
                    We've got the skills.<br />
                    <span className="text-black">Let's team up.</span>
                  </h1>
                  <p className="text-lg sm:text-xl text-black leading-relaxed opacity-90">
                    Tell us more about yourself and what you've got in mind.
                  </p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black focus:border-black text-black text-lg placeholder-black placeholder-opacity-70 focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black focus:border-black text-black text-lg placeholder-black placeholder-opacity-70 focus:outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <input
                      type="text"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-black focus:border-black text-black text-lg placeholder-black focus:outline-none transition-colors"
                      placeholder="Tell us a little about the project..."
                    />
                  </div>

                  {/* Service Selection */}
                  <div>
                    <p className="text-lg font-semibold text-black mb-6">How can we help?</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <label key={service.id} className="flex items-center space-x-3 cursor-pointer group">
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked={service.checked}
                              onChange={() => handleServiceChange(service.id)}
                              className="sr-only"
                            />
                            <div className={`w-6 h-6 border-2 border-black rounded-sm flex items-center justify-center transition-all duration-200 ${
                              service.checked ? 'bg-black' : 'bg-transparent'
                            }`}>
                              {service.checked && (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{color: '#74f5a2'}}>
                                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="text-base text-black group-hover:text-slate-800 transition-colors">{service.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="w-full py-4 bg-black text-white font-bold text-lg rounded-lg hover:bg-black dark:hover:bg-black transition-colors duration-200"
                    >
                      Let's get started!
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;