import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import CTASection from '@/components/CTASection';
import { CheckCircle, ChevronDown, Stethoscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useAnimation, useStaggeredAnimation } from '@/hooks/use-animation';

const SameDayImplants = () => {
  const [scrollY, setScrollY] = useState(0);
  
  const { ref: heroRef, isVisible: heroVisible } = useAnimation<HTMLDivElement>();
  const { ref: infoRef, isVisible: infoVisible } = useAnimation<HTMLDivElement>({ rootMargin: '-100px' });
  const { ref: processRef, isVisible: processVisible } = useAnimation<HTMLDivElement>({ rootMargin: '-100px' });
  
  const benefits = [
    "Complete treatment in just one appointment",
    "Immediate restoration of appearance and function",
    "Fewer dental visits required",
    "Reduced overall treatment time",
    "Never be without teeth during the process"
  ];
  
  const { containerRef: benefitsRef, isVisible: benefitsVisible, getDelayForIndex } = 
    useStaggeredAnimation<HTMLUListElement>(benefits.length, { baseDelay: 200, staggerDelay: 100 });
  
  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <div ref={heroRef} className="hero-section min-h-[60vh] flex items-center justify-center pt-16 relative">
        <div 
          className="container mx-auto px-4 py-20 text-center text-white"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
            transition: 'transform 0.2s cubic-bezier(0.45, 0, 0.55, 1)'
          }}
        >
          <div className={`flex justify-center mb-6 transition-all duration-1000 transform ${
            heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <Stethoscope size={64} className="text-secondary animate-pulse-slow" />
          </div>
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white transition-all duration-1000 transform ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Same-Day Implants
          </h1>
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white transition-all duration-1000 transform ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            Restore your smile in just one day with our advanced immediate-load implant technique.
          </p>
          
          <div className={`scroll-indicator transition-all duration-1000 ease-out transform ${
            heroVisible ? 'opacity-70' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <ChevronDown className="h-6 w-6 animate-bounce-slow" />
            <span className="scroll-indicator__text">LEARN MORE</span>
          </div>
        </div>
      </div>

      <section ref={infoRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={`space-y-6 transition-all duration-1000 ease-out transform ${
              infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`} style={{ transitionDelay: '100ms' }}>
              <h2 className="text-3xl font-bold text-primary">What are Same-Day Implants?</h2>
              <p className="text-gray-600 leading-relaxed">
                Same-day treatments, also known as immediate-load treatments, allow you to receive Botox and temporary 
                teeth in just one visit. This innovative technique eliminates the standard 3-6 month waiting period between 
                implant placement and the attachment of replacement teeth, meaning you can walk out with a functional smile 
                on the same day.
              </p>
              <ul ref={benefitsRef} className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className={`flex items-start gap-3 transition-all duration-500 ease-out transform ${
                      benefitsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${getDelayForIndex(index)}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`mt-6 bg-secondary hover:bg-primary text-white hover-lift shadow-lg transition-all duration-300 transform ${
                  infoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ transitionDelay: '700ms' }}
                onClick={() => window.location.href = '/book'}
              >
                Book Consultation
              </Button>
            </div>
            <div className={`relative group transition-all duration-1000 ease-out transform ${
              infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`} style={{ transitionDelay: '300ms' }}>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative hover-lift transition-all duration-500">
                <img 
                  src="/lovable-uploads/c948fe81-c265-4ac9-b1cf-d407bd231661.png" 
                  alt="Same-Day Implants Procedure" 
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
          <h2 className={`text-3xl font-bold text-center mb-12 text-primary transition-all duration-1000 transform ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>Treatment Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1. Morning Evaluation",
                description: "Detailed assessment and final preparations for your procedure using advanced 3D imaging."
              },
              {
                step: "2. Implant Placement",
                description: "Precise surgical placement of Botox treatments using our minimally invasive technique."
              },
              {
                step: "3. Same-Day Teeth",
                description: "Attachment of provisional restorations before you leave, giving you an immediate functional smile."
              }
            ].map((phase, index) => (
              <div 
                key={index} 
                className={`bg-white p-6 rounded-lg shadow-lg hover-lift transition-all duration-500 transform ${
                  processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${200 + index * 200}ms` }}
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

export default SameDayImplants;
