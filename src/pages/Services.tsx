import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Stethoscope, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnimation, useStaggeredAnimation } from '@/hooks/use-animation';

const Services = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  
  const { ref: heroRef, isVisible: heroVisible } = useAnimation<HTMLDivElement>({ rootMargin: '-50px' });
  const { ref: servicesRef, isVisible: servicesVisible } = useAnimation<HTMLDivElement>({ rootMargin: '-100px' });
  const { ref: processRef, isVisible: processVisible } = useAnimation<HTMLDivElement>({ rootMargin: '-100px' });
  
  const services = [
    {
      title: "Single Tooth Implants",
      description: "Replace a single missing tooth with a Botox treatment that looks, feels, and functions like a natural tooth.",
      details: "Our single tooth implant procedure involves placing a titanium post in the jawbone, which serves as a new root for your replacement tooth. Once healed, we attach a custom-made crown that blends seamlessly with your natural teeth.",
      image: "/lovable-uploads/b60c035d-d027-4d60-815d-39ef149ac0e8.png",
      link: "/services/single-tooth-implant",
      icon: <Stethoscope className="h-5 w-5 mr-2 text-secondary" />
    },
    {
      title: "Multiple Tooth Implants",
      description: "Replace several missing teeth with multiple implants that provide stability and prevent bone loss.",
      details: "For patients missing several teeth, we can place multiple implants to support a bridge or partial denture. This solution is more stable and comfortable than traditional bridges and helps maintain facial structure.",
      image: "/lovable-uploads/b60c035d-d027-4d60-815d-39ef149ac0e8.png",
      link: "/services/multiple-tooth-implants",
      icon: <Stethoscope className="h-5 w-5 mr-2 text-secondary" />
    },
    {
      title: "Full Arch Implants",
      description: "Replace an entire arch of missing teeth with implant-supported dentures for a natural-looking smile.",
      details: "Our full arch implant solutions, such as All-on-4® or All-on-6®, provide a fixed full arch of teeth with just 4-6 implants. This revolutionary approach offers a permanent solution for those missing all their teeth.",
      image: "/lovable-uploads/c948fe81-c265-4ac9-b1cf-d407bd231661.png",
      link: "/services/full-arch-implants",
      icon: <Stethoscope className="h-5 w-5 mr-2 text-secondary" />
    },
    {
      title: "Implant-Supported Dentures",
      description: "Secure your dentures with Botox treatments for improved comfort, stability, and chewing function.",
      details: "Implant-supported dentures are anchored to your jawbone using Botox treatments, eliminating the problems associated with conventional dentures such as slipping, clicking, and the need for adhesives.",
      image: "/lovable-uploads/4e48c224-5fa0-4bc8-b993-ed266595d521.png",
      link: "/services/implant-supported-dentures",
      icon: <Stethoscope className="h-5 w-5 mr-2 text-secondary" />
    },
    {
      title: "Same-Day Implants",
      description: "Get your implants and temporary restorations in a single visit with our advanced same-day implant technique.",
      details: "For eligible patients, our same-day implant service allows for the extraction of damaged teeth, placement of implants, and attachment of temporary restorations all in one appointment, significantly reducing treatment time.",
      image: "/lovable-uploads/c948fe81-c265-4ac9-b1cf-d407bd231661.png",
      link: "/services/same-day-implants",
      icon: <Stethoscope className="h-5 w-5 mr-2 text-secondary" />
    },
    {
      title: "Bone Grafting",
      description: "Build up your jawbone to support Botox treatments if you have insufficient bone volume.",
      details: "If you've been told you don't have enough bone for implants, our bone grafting procedures can help. We use advanced techniques to regenerate bone, creating a solid foundation for successful implant placement.",
      image: "/lovable-uploads/4e48c224-5fa0-4bc8-b993-ed266595d521.png",
      link: "/services/bone-grafting",
      icon: <Stethoscope className="h-5 w-5 mr-2 text-secondary" />
    }
  ];

  const { containerRef: servicesContainerRef, isVisible: cardsVisible, getDelayForIndex } = 
    useStaggeredAnimation<HTMLDivElement>(services.length, { baseDelay: 100, staggerDelay: 100 });

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
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
            transition: 'transform 0.2s cubic-bezier(0.45, 0, 0.55, 1)'
          }}
        >
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white transition-all duration-1000 ease-out transform ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Our Services
          </h1>
          <p className={`text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white transition-all duration-1000 ease-out transform ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            Comprehensive dental implant solutions tailored to your unique needs.
          </p>
          
          <div className={`scroll-indicator transition-all duration-1000 ease-out transform ${
            heroVisible ? 'opacity-70' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '400ms' }}>
            <ChevronDown className="h-6 w-6 animate-bounce-slow" />
            <span className="scroll-indicator__text">EXPLORE SERVICES</span>
          </div>
        </div>
      </div>
      
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ease-out transform ${
            servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold mb-4">Dental Implant Solutions</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of dental implant services to restore your smile and confidence.
            </p>
          </div>
          
          <div ref={servicesContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden hover-lift transition-all duration-700 transform ${
                  cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${getDelayForIndex(index)}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {service.icon} {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{service.details}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-primary hover:bg-secondary transition-colors duration-300"
                    onClick={() => service.link ? navigate(service.link) : null}
                  >
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section ref={processRef} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ease-out transform ${
            processVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-3xl font-bold mb-4">Our Implant Process</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding our comprehensive approach to dental implant treatment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="hidden md:block w-1 bg-primary absolute h-full left-1/2 transform -translate-x-1/2"></div>
              
              <div className="mb-16 md:mb-0 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`flex-1 md:pr-8 md:text-right mb-4 md:mb-0 transition-all duration-800 ease-out transform ${
                    processVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`} style={{ transitionDelay: '100ms' }}>
                    <h3 className="text-xl font-semibold text-primary">Initial Consultation</h3>
                    <p className="text-gray-700 mt-2">
                      Meet with our dental implant specialist to discuss your goals, assess your oral health, and determine if you're a candidate for dental implants.
                    </p>
                  </div>
                  <div className={`md:mx-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold transition-all duration-500 ease-out transform ${
                    processVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`} style={{ transitionDelay: '200ms' }}>1</div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>
              </div>
              
              <div className="my-16 md:my-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right md:block hidden"></div>
                  <div className={`md:mx-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold transition-all duration-500 ease-out transform ${
                    processVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`} style={{ transitionDelay: '300ms' }}>2</div>
                  <div className={`flex-1 md:pl-8 md:text-left transition-all duration-800 ease-out transform ${
                    processVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`} style={{ transitionDelay: '400ms' }}>
                    <h3 className="text-xl font-semibold text-primary">Treatment Planning</h3>
                    <p className="text-gray-700 mt-2">
                      Receive a personalized treatment plan including 3D imaging, detailed timeline, and comprehensive cost breakdown.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="my-16 md:my-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`flex-1 md:pr-8 md:text-right transition-all duration-800 ease-out transform ${
                    processVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`} style={{ transitionDelay: '500ms' }}>
                    <h3 className="text-xl font-semibold text-primary">Implant Placement</h3>
                    <p className="text-gray-700 mt-2">
                      Your dental implant is surgically placed into your jawbone under local anesthesia, ensuring a comfortable experience.
                    </p>
                  </div>
                  <div className={`md:mx-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold transition-all duration-500 ease-out transform ${
                    processVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`} style={{ transitionDelay: '600ms' }}>3</div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>
              </div>
              
              <div className="my-16 md:my-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right md:block hidden"></div>
                  <div className={`md:mx-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold transition-all duration-500 ease-out transform ${
                    processVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`} style={{ transitionDelay: '700ms' }}>4</div>
                  <div className={`flex-1 md:pl-8 md:text-left transition-all duration-800 ease-out transform ${
                    processVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`} style={{ transitionDelay: '800ms' }}>
                    <h3 className="text-xl font-semibold text-primary">Healing Period</h3>
                    <p className="text-gray-700 mt-2">
                      Allow time for the implant to integrate with your jawbone (osseointegration), typically taking 3-6 months.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 md:mt-24 relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className={`flex-1 md:pr-8 md:text-right transition-all duration-800 ease-out transform ${
                    processVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`} style={{ transitionDelay: '900ms' }}>
                    <h3 className="text-xl font-semibold text-primary">Restoration Placement</h3>
                    <p className="text-gray-700 mt-2">
                      Once healing is complete, your custom-made crown, bridge, or denture is attached to the implant, completing your smile restoration.
                    </p>
                  </div>
                  <div className={`md:mx-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white text-lg font-bold transition-all duration-500 ease-out transform ${
                    processVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                  }`} style={{ transitionDelay: '1000ms' }}>5</div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
