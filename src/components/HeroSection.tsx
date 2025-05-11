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
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-secondary/90">
        <img 
          src="/lovable-uploads/1b41ce4f-ed8a-4e7c-8630-912613b5bdcf.png" 
          alt="Dental Procedure" 
          className="w-full h-full object-cover mix-blend-overlay opacity-80"
          style={{ objectPosition: 'center 20%' }}
        />
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

      <div className="container mx-auto px-4 py-10 text-center text-white relative z-10 hero-content">
        <div className="max-w-4xl mx-auto">
          <h1 
            className={`text-3xl md:text-5xl lg:text-7xl font-bold mb-4 text-white tracking-tight transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.6)", transitionDelay: '200ms' }}
          >
            Transform Your Smile with{' '}
            <span className="relative inline-block">
              <span className="text-secondary">Dental Implants</span>
              <span className="absolute -top-6 -right-6 animate-pulse-slow">
                <Sparkles className="h-6 w-6 md:h-8 md:w-8 text-secondary" />
              </span>
            </span>
          </h1>

          <h2 
            className={`text-xl md:text-3xl mb-4 text-white font-medium transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)", transitionDelay: '300ms' }}
          >
            Dental Implant in Purley
          </h2>

          <p 
            className={`text-base md:text-2xl max-w-3xl mx-auto mb-8 text-white leading-relaxed transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)", transitionDelay: '400ms' }}
          >
            Discover expert dental implant solutions at Confidential Clinic - where advanced technology meets compassionate care to deliver lasting, beautiful smiles. 
          </p>

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
