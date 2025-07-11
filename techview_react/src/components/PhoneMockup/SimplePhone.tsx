import React, { useState, useEffect } from 'react';
import darkmodeImage from '../../assets/darkmode.JPG';

interface SimplePhoneProps {
  className?: string;
}

const SimplePhone: React.FC<SimplePhoneProps> = ({ className = '' }) => {
  const [animationState, setAnimationState] = useState<'locked' | 'wiping' | 'apps_appearing' | 'unlocked'>('locked');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleScreenClick = () => {
    if (animationState === 'locked') {
      setAnimationState('wiping');
      setTimeout(() => {
        setAnimationState('apps_appearing');
        setTimeout(() => {
          setAnimationState('unlocked');
        }, 800);
      }, 1000);
    } else if (animationState === 'unlocked') {
      // Allow re-locking by clicking again
      setAnimationState('locked');
    }
  };

  return (
    <div className={`phone-container ${className}`}>
      {/* iPhone outer frame */}
      <div className="relative">
        <div 
          className={`phone-body bg-gray-900 rounded-[3rem] p-2 shadow-2xl transition-all duration-300 ${
            animationState === 'unlocked' ? 'animate-pulse' : ''
          }`}
          style={{
            width: '308px',
            height: '615px',
            background: 'linear-gradient(145deg, #1f2937 0%, #111827 100%)',
            boxShadow: `
              0 25px 50px -12px rgba(0, 0, 0, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
              ${animationState === 'wiping' ? ', 0 0 30px rgba(116, 245, 162, 0.3)' : ''}
            `,
            animation: animationState === 'wiping' ? 'phoneGlow 1s ease-in-out' : 'none'
          }}
        >
          {/* Screen container */}
          <div 
            className="phone-screen bg-black rounded-[2.5rem] overflow-hidden relative"
            style={{
              width: '100%',
              height: '100%',
              background: '#000000'
            }}
          >
            {/* Dynamic Island */}
            <div 
              className="absolute top-3 left-1/2 transform -translate-x-1/2 bg-black rounded-full z-50"
              style={{
                width: '100px',
                height: '23px',
                background: '#000000'
              }}
            />
            
            {/* Status bar */}
            <div className="absolute top-1 left-2 right-2 z-40 px-4 py-2 flex justify-between items-center text-white text-xs">
              <span className="font-light tracking-wide">9:41</span>
              <div className="flex items-center space-x-3">
                <div className="flex space-x-0.5 items-center">
                  <div className="w-1 h-1 bg-white rounded-full opacity-80"></div>
                  <div className="w-1 h-1 bg-white rounded-full opacity-90"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
                <div className="relative w-3 h-3">
                  <div className="absolute bottom-0 left-1/2 w-0.5 h-0.5 bg-white rounded-full transform -translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-1/2 w-2 h-1 border border-white border-b-0 rounded-t-full transform -translate-x-1/2"></div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="relative">
                    <div className="w-4 h-2 border border-white rounded-sm"></div>
                    <div className="w-2.5 h-1 bg-white rounded-sm absolute inset-0 m-auto"></div>
                    <div className="w-0.5 h-1 bg-white absolute -right-0.5 top-0.5 rounded-r-sm"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Screen content area */}
            <div className="absolute inset-0" style={{ paddingTop: '52px' }}>
              
              {/* Base black background */}
              <div className="absolute inset-0 bg-black"></div>
              
              {/* Lock Screen */}
              <div 
                className={`absolute inset-0 cursor-pointer flex flex-col items-center justify-center z-10 transition-all duration-500 ${
                  animationState === 'locked' ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={handleScreenClick}
              >
                <div className="flex flex-col items-center space-y-8">
                  {/* Real-Time Display */}
                  <div className="text-white text-center">
                    <div className="text-5xl font-light tracking-wide">{formatTime(currentTime)}</div>
                    <div className="text-sm font-light opacity-80 mt-1">{formatDate(currentTime)}</div>
                  </div>
                  
                  {/* Unlock Instruction */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 border-2 border-green-400 rounded-full flex items-center justify-center animate-pulse">
                      <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <p className="text-green-400 font-bold animate-pulse tracking-wide" style={{
                      textShadow: '0 0 10px rgba(34, 197, 94, 0.8)'
                    }}>
                      TAP TO UNLOCK
                    </p>
                  </div>
                </div>
              </div>

              {/* Tech background wipe layer */}
              <div 
                className="absolute inset-0 z-20 transition-transform duration-1000 ease-out tech-background"
                style={{
                  transform: animationState === 'locked' ? 'translateY(100%)' : 'translateY(0%)',
                  backgroundImage: `url(${darkmodeImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 circuit-pattern bg-black bg-opacity-60"></div>
                {/* Unlocked Screen Content */}
                <div 
                  className={`flex flex-col h-full p-6 justify-between transition-all duration-300 ${
                    animationState === 'apps_appearing' || animationState === 'unlocked' ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ paddingTop: '60px', paddingBottom: '40px' }}
                >
                  <div className="grid grid-cols-4 gap-4 max-w-xs mx-auto">
                    
                    {/* TechView App (Featured) */}
                    <div 
                      className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                        animationState === 'apps_appearing' || animationState === 'unlocked' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: '100ms' }}
                    >
                      <div 
                        className="w-14 h-14 rounded-[22%] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform cursor-pointer relative overflow-hidden"
                        style={{
                          boxShadow: animationState === 'unlocked' ? '0 0 20px rgba(116, 245, 162, 0.5), 0 8px 25px rgba(0, 0, 0, 0.4)' : '0 8px 25px rgba(0, 0, 0, 0.4)',
                          animation: animationState === 'unlocked' ? 'appIconBounce 2s ease-in-out infinite' : 'none'
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-transparent rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[22%]"></div>
                        <span className="text-white font-bold text-lg drop-shadow-lg relative z-10">TV</span>
                        {animationState === 'unlocked' && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        )}
                      </div>
                      <span className="text-white text-xs font-medium">TechView</span>
                    </div>

                    {/* Chat App */}
                    <div 
                      className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                        animationState === 'apps_appearing' || animationState === 'unlocked' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: '200ms' }}
                    >
                      <div className="w-14 h-14 rounded-[22%] flex items-center justify-center shadow-2xl hover:scale-105 transition-transform cursor-pointer relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-transparent rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[22%]"></div>
                        <svg className="w-8 h-8 text-white drop-shadow-lg relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">Chat</span>
                    </div>

                    {/* Phone App */}
                    <div 
                      className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                        animationState === 'apps_appearing' || animationState === 'unlocked' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: '300ms' }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">Phone</span>
                    </div>

                    {/* Settings App */}
                    <div 
                      className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                        animationState === 'apps_appearing' || animationState === 'unlocked' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: '400ms' }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer relative">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">Settings</span>
                    </div>

                    {/* Calendar App */}
                    <div 
                      className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                        animationState === 'apps_appearing' || animationState === 'unlocked' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: '500ms' }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">Calendar</span>
                    </div>

                    {/* Photos App */}
                    <div 
                      className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                        animationState === 'apps_appearing' || animationState === 'unlocked' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: '600ms' }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">Photos</span>
                    </div>

                    {/* Mail App */}
                    <div 
                      className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                        animationState === 'apps_appearing' || animationState === 'unlocked' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: '700ms' }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer relative">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-white text-xs font-bold">3</span>
                        </div>
                      </div>
                      <span className="text-white text-xs font-medium">Mail</span>
                    </div>

                    {/* Notes App */}
                    <div 
                      className={`flex flex-col items-center space-y-2 transition-all duration-500 ${
                        animationState === 'apps_appearing' || animationState === 'unlocked' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                      }`}
                      style={{ transitionDelay: '800ms' }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform cursor-pointer">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                      </div>
                      <span className="text-white text-xs font-medium">Notes</span>
                    </div>

                  </div>
                  
                  {/* Bottom dock area with frequently used apps */}
                  <div 
                    className={`flex justify-center transition-all duration-700 ${
                      animationState === 'unlocked' ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: '900ms' }}
                  >
                    <div className="flex space-x-3 bg-black bg-opacity-20 backdrop-blur-md rounded-3xl px-5 py-4 border border-white border-opacity-10">
                      {/* iOS 18 Phone Icon */}
                      <div className="w-14 h-14 rounded-[22%] flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-transparent rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[22%]"></div>
                        <svg className="w-8 h-8 text-white drop-shadow-lg relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M15.5 1h-8A2.5 2.5 0 005 3.5v17A2.5 2.5 0 007.5 23h8a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0015.5 1zM11.5 22c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/>
                        </svg>
                      </div>

                      {/* iOS 18 LinkedIn Icon */}
                      <div className="w-14 h-14 rounded-[22%] flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-transparent rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[22%]"></div>
                        <svg className="w-8 h-8 text-white drop-shadow-lg relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </div>

                      {/* iOS 18 Instagram Icon */}
                      <div className="w-14 h-14 rounded-[22%] flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 via-red-500 to-orange-400 rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-transparent rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[22%]"></div>
                        <svg className="w-8 h-8 text-white drop-shadow-lg relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3"/>
                        </svg>
                      </div>

                      {/* iOS 18 Mail Icon */}
                      <div className="w-14 h-14 rounded-[22%] flex items-center justify-center shadow-2xl hover:scale-105 transition-all duration-200 cursor-pointer relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/10 to-transparent rounded-[22%]"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-[22%]"></div>
                        <svg className="w-8 h-8 text-white drop-shadow-lg relative z-10" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <path d="m22 6-10 7L2 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Side buttons */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div 
            className="absolute -left-1 bg-gray-700 rounded-r-sm"
            style={{ top: '120px', width: '3px', height: '35px' }}
          />
          <div 
            className="absolute -left-1 bg-gray-700 rounded-r-sm"
            style={{ top: '170px', width: '3px', height: '35px' }}
          />
          <div 
            className="absolute -right-1 bg-gray-700 rounded-l-sm"
            style={{ top: '140px', width: '3px', height: '60px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default SimplePhone;