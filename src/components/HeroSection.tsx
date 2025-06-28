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
      className="hero-section min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-white"
      style={{
        height: '100vh',
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)'
      }}
    >
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-10 relative z-20 flex flex-col md:flex-row items-center md:items-stretch md:justify-between gap-8 h-full">
        {/* Content left */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left h-full md:pr-8 mb-8 md:mb-0">
          <div className="max-w-xl w-full">
            <h1 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight text-primary leading-tight">
              Transform Your Look with
              <span className="block mt-2 text-secondary font-black text-2xl xs:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">
                Facial Aesthetic
              </span>
            </h1>
            <h2 className="text-base xs:text-lg md:text-2xl mb-2 sm:mb-4 font-semibold text-secondary">
              Treatments in Purley
            </h2>
            <p className="text-sm xs:text-base md:text-lg mb-6 sm:mb-8 text-gray-700 leading-relaxed">
              Discover expert solutions at Confidential Clinic – quick and non-invasive injectable treatments which smooth wrinkles, rebalance facial features and create a younger, more refreshed look.
            </p>
            <ul className="list-none pl-0 text-xs xs:text-sm md:text-base text-primary space-y-2 mb-4 sm:mb-6 text-center sm:text-left">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Dentist-led treatment
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Minimal Downtime
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                Non-invasive
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full items-center justify-center sm:justify-start">
              <a href="#contact-section" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-primary text-white hover:bg-secondary hover:text-primary text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all duration-300">
                  Book Free Consultation
                </Button>
              </a>
              <Button
                onClick={() => {
                  const serviceSection = document.getElementById('services-section');
                  serviceSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all duration-300"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
        {/* Image right */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative">
          <div
            className="hidden sm:flex relative w-full max-w-[340px] xs:max-w-[400px] h-48 xs:h-64 md:w-full md:max-w-[480px] md:h-[480px] items-center justify-center group"
          >
            <img
              src="/images/hero_background.jpg"
              alt="Facial Aesthetic Result"
              className="w-full h-full object-cover rounded-2xl shadow-xl border-4 border-white"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-l from-primary/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
      {/* Scroll indicator with improved animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <ChevronDown className="h-6 w-6 text-primary animate-bounce-slow" />
        <span className="scroll-indicator__text text-xs md:text-sm text-primary mt-1">SCROLL DOWN</span>
      </div>
    </div>
  );
};

// Improved layout for mobile
export const WhyChooseUsSection = () => (
  <section className="container mx-auto px-4 py-8 sm:py-10 bg-gray-50">
    <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-6 items-center">
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left mt-6 sm:mt-0">
        <h3 className="text-xl font-bold text-primary mb-4">Why Choose Us?</h3>
        <p className="text-sm text-gray-700 leading-relaxed max-w-md">
          Our treatments are designed to provide natural-looking results with minimal downtime. Led by experienced professionals, we ensure your comfort and satisfaction.
        </p>
      </div>
      <div className="flex items-center justify-center w-full">
        <img
          src="/images/about_us.png"
          alt="About Us"
          className="w-4/5 max-w-[300px] rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  </section>
);

export default HeroSection;
