import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronDown } from 'lucide-react';
import { useAnimation, useParallax } from '@/hooks/use-animation';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useParallax(0.2);
  
  // Create particles for background effect
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 5 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 1 + 0.5,
    delay: Math.random() * 5,
  }));
  
  useEffect(() => {
    setIsVisible(true);
    
    // Improved smooth parallax effect on scroll
    const handleScroll = () => {
      if (heroRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const translateY = scrollPosition * 0.3;
          const opacity = 1 - (scrollPosition * 0.002);
          
          const content = heroRef.current.querySelector('.hero-content') as HTMLElement;
          if (content) {
            content.style.transform = `translateY(${translateY}px)`;
            content.style.opacity = Math.max(opacity, 0).toString();
          }
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={heroRef} 
      className="hero-section min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        // Ensures the hero section covers the full viewport height including iOS notch
        height: '100vh',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero_background.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-90"
          style={{ objectPosition: '60% 50%' }}
        />
        {/* Gradient: light on left, transparent in center, theme color on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-transparent to-primary/90"></div>
      </div>

      {/* Animated particles with smoother animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particles">
          {particles.map(particle => (
            <div
              key={particle.id}
              className="particle"
              style={{
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animation: `float ${5 + particle.speed}s infinite cubic-bezier(0.45, 0, 0.55, 1)`,
                animationDelay: `${particle.delay}s`,
                opacity: 0.7
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 text-center relative z-10 hero-content">
        <div className="max-w-4xl mx-auto">
          <h1 
            className={`text-3xl md:text-5xl lg:text-7xl font-extrabold mb-4 tracking-tight transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ color: '#1b255a', textShadow: "2px 2px 8px rgba(255,255,255,0.95)", letterSpacing: '-0.02em', transitionDelay: '200ms', fontFamily: 'Poppins, Inter, Arial, sans-serif' }}
          >
            Transform Your Look with{' '}
            <span className="relative inline-block align-middle">
              <span className="inline-block px-3 py-1 rounded-lg bg-white/80 text-primary font-black shadow-lg border border-primary/20 animate-pulse">
                Facial Aesthetic
              </span>
              <span className="absolute -top-6 -right-6 animate-bounce">
                <Sparkles className="h-7 w-7 md:h-9 md:w-9 text-secondary drop-shadow-lg" />
              </span>
            </span>
          </h1>

          <h2
            className={`text-lg md:text-2xl mb-4 font-semibold transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ color: '#33c3f0', textShadow: "1px 1px 6px rgba(255,255,255,0.8)", transitionDelay: '300ms', fontFamily: 'Poppins, Inter, Arial, sans-serif' }}
          >
            Treatments in Purley
          </h2>

          <p
            className={`text-base md:text-xl max-w-3xl mx-auto mb-8 font-medium leading-relaxed transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ color: '#283479', textShadow: "1px 1px 6px rgba(255,255,255,0.7)", transitionDelay: '400ms', fontFamily: 'Inter, Arial, sans-serif' }}
          >
            Discover expert solutions at Confidential Clinic – quick and non-invasive injectable treatments which smooth wrinkles, rebalance facial features and create a younger, more refreshed look.
          </p>

          {/* Key benefits */}
          <div className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 mb-6 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`} style={{ transitionDelay: '500ms' }}>
            <span className="backdrop-blur-md bg-white/40 rounded-full px-4 py-2 text-sm md:text-base font-semibold shadow text-primary border border-primary/10" style={{ WebkitBackdropFilter: 'blur(8px)' }}>
              Dentist-led treatment
            </span>
            <span className="backdrop-blur-md bg-white/40 rounded-full px-4 py-2 text-sm md:text-base font-semibold shadow text-primary border border-primary/10" style={{ WebkitBackdropFilter: 'blur(8px)' }}>
              Minimal Downtime
            </span>
            <span className="backdrop-blur-md bg-white/40 rounded-full px-4 py-2 text-sm md:text-base font-semibold shadow text-primary border border-primary/10" style={{ WebkitBackdropFilter: 'blur(8px)' }}>
              Non-invasive
            </span>
          </div>

          <div
            className={`space-y-4 md:space-x-6 md:space-y-0 transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ transitionDelay: '600ms' }}
            >
            <a href="https://umzx.sfd.co:300" target="_blank" rel="noopener noreferrer">
              <Button
                onClick={() => {
                  const contactSection = document.getElementById('contact-section');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-primary hover:bg-secondary hover:text-white text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-lg transition-all duration-500 transform hover-lift shadow-lg"
              >
                Book Free Consultation
              </Button>
            </a>
            <Button
              onClick={() => {
                const serviceSection = document.getElementById('services-section');
                serviceSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-sm md:text-lg px-6 md:px-8 py-4 md:py-6 rounded-lg transition-all duration-500 transform hover-lift"
            >
              View Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator with improved animation */}
      <div className={`scroll-indicator transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-70 translate-y-0' : 'opacity-0 translate-y-10'
      }`} style={{ transitionDelay: '1200ms' }}>
        <ChevronDown className="h-4 w-4 md:h-6 md:w-6 animate-bounce-slow" />
        <span className="scroll-indicator__text text-xs md:text-sm">SCROLL DOWN</span>
      </div>
    </div>
  );
};

export default HeroSection;
