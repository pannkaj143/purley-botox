import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import { CheckCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { useAnimation } from '@/hooks/use-animation';

const SingleToothImplant = () => {
  const [scrollY, setScrollY] = useState(0);
  
  const { ref: heroRef, isVisible: heroVisible } = useAnimation<HTMLDivElement>();
  const { ref: infoRef, isVisible: infoVisible } = useAnimation<HTMLDivElement>();
  const { ref: processRef, isVisible: processVisible } = useAnimation<HTMLDivElement>();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <div ref={heroRef} className="hero-section min-h-[60vh] flex items-center justify-center pt-16 relative">
        <div 
          className="container mx-auto px-4 py-20 text-center text-white"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="flex justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary animate-pulse-slow">
              <path d="M12 6v12"></path>
              <path d="M8 10a6.01 6.01 0 0 1 11.27 2.974c.273 2.838-.463 5.94-2.27 6.926-1 .545-2 .545-3 0-1.807-.986-2.543-4.088-2.27-6.926"></path>
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-slide-in">
            Single Tooth Implant
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Replace a missing tooth with a permanent, natural-looking solution.
          </p>
          
          <div className="scroll-indicator">
            <ChevronDown className="h-6 w-6 scroll-indicator__icon" />
            <span className="scroll-indicator__text">LEARN MORE</span>
          </div>
        </div>
      </div>

      <section ref={infoRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 ${infoVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-bold text-primary">What is a Single Tooth Implant?</h2>
              <p className="text-gray-600 leading-relaxed">
                A single tooth implant is a permanent solution for replacing a missing tooth. It consists 
                of a titanium post surgically placed in your jawbone, which acts as an artificial tooth 
                root, and a custom-made crown that matches your natural teeth.
              </p>
              <ul className="space-y-4">
                {[
                  "Looks and functions like a natural tooth",
                  "Preserves jawbone health",
                  "Prevents shifting of adjacent teeth",
                  "Long-lasting solution",
                  "No impact on neighboring teeth"
                ].map((benefit, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start gap-3 ${infoVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`mt-6 bg-secondary hover:bg-primary text-white hover-lift shadow-lg ${infoVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: '0.7s' }}
                onClick={() => window.location.href = '/book'}
              >
                Book Consultation
              </Button>
            </div>
            <div className={`relative group ${infoVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative hover-lift">
                <img 
                  src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?q=80&w=1000&auto=format&fit=crop" 
                  alt="Single Tooth Implant Procedure" 
                  className="rounded-lg shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold text-center mb-12 text-primary ${processVisible ? 'animate-slide-in' : 'opacity-0'}`}>Treatment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1. Consultation",
                description: "Comprehensive examination and treatment planning using 3D imaging technology."
              },
              {
                step: "2. Implant Placement",
                description: "Surgical placement of the titanium implant under local anesthesia."
              },
              {
                step: "3. Crown Attachment",
                description: "Custom-made crown attachment after healing period (3-6 months)."
              }
            ].map((phase, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-lg hover-lift transition-all ${processVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{phase.step}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default SingleToothImplant;
