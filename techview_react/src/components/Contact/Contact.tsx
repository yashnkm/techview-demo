import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative min-h-screen overflow-hidden border-4 border-red-500" style={{backgroundColor: '#efeeef'}}>
      {/* Background textures - same as other sections */}
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

      <div className="absolute inset-0 flex items-center justify-center border-4 border-blue-500">
        <div className="w-full px-4 sm:px-6 md:px-8 py-12 sm:py-24 lg:py-28">
        <div className="max-w-[9.24xl] mx-auto border-4 border-green-500" style={{maxWidth: '110.88rem'}}>
          <div className="relative min-h-[41.25rem] flex flex-col items-center justify-center">
            
            {/* Contact Badge - Centered */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
              <div className="inline-flex items-center space-x-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full" style={{ backgroundColor: '#74f5a2' }}></div>
                <span className="text-xl sm:text-2xl font-bold text-black font-familjen">Contact Us</span>
              </div>
            </div>

            {/* Main Content - Centered */}
            <div className="w-full max-w-4xl mx-auto text-center space-y-12 mt-16">
              
              {/* Heading */}
              <div className="space-y-2">
                <h1 className="text-[3.15rem] sm:text-[3.75rem] md:text-[4.38rem] lg:text-[6.3rem] font-bold text-slate-900 leading-[0.9] tracking-tight font-familjen">
                  Let's create something<br />
                  together
                </h1>
              </div>

              {/* Main Form Card */}
              <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl p-12 lg:p-16 shadow-lg border border-white/20 max-w-2xl mx-auto min-h-[600px]">
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-base font-medium text-slate-700 mb-3 font-familjen">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-200 font-familjen text-base"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-base font-medium text-slate-700 mb-3 font-familjen">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-200 font-familjen text-base"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  {/* Phone and Company Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-base font-medium text-slate-700 mb-3 font-familjen">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-200 font-familjen text-base"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-base font-medium text-slate-700 mb-3 font-familjen">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-200 font-familjen text-base"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>


                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-base font-medium text-slate-700 mb-3 font-familjen">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition-all duration-200 resize-none font-familjen text-base"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full px-8 py-5 rounded-lg font-semibold text-slate-800 font-familjen transition-all duration-200 hover:bg-green-500 hover:text-white text-lg"
                      style={{backgroundColor: '#74f5a2'}}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Floating Contact Info Cards - Bigger and Cleaner */}
            <div className="absolute top-24 left-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#74f5a2'}}>
                  <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-800 font-familjen">Email</p>
                  <p className="text-base text-slate-600 font-familjen">hello@techview.ai</p>
                </div>
              </div>
            </div>

            <div className="absolute top-24 right-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#74f5a2'}}>
                  <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-800 font-familjen">Phone</p>
                  <p className="text-base text-slate-600 font-familjen">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 left-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#74f5a2'}}>
                  <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-800 font-familjen">Office</p>
                  <p className="text-base text-slate-600 font-familjen">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-24 right-12 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30 hover:scale-105 transition-transform duration-200">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#74f5a2'}}>
                  <svg className="w-8 h-8 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-800 font-familjen">Response</p>
                  <p className="text-base text-slate-600 font-familjen">Within 24 hours</p>
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

export default Contact;