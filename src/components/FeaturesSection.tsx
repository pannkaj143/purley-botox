import { useState, useEffect, useRef } from 'react';
import { Check, Phone, User, Stethoscope, ChevronRight, ChevronLeft } from 'lucide-react'; // Chevron icons can be reused for the slider handle
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAnimation } from '@/hooks/use-animation';

interface ServiceImageGalleryProps {
  beforeImage: string;
  afterImage: string;
  title: string;
}

const ServiceImageGallery: React.FC<ServiceImageGalleryProps> = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // Percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    // Only start dragging if the click is directly on the container or the intended handle area
    // For simplicity, we allow dragging by clicking anywhere on the component for now.
    setIsDragging(true);
    // Prevent text selection during drag
    event.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    let newPosition = (x / rect.width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition)); // Clamp between 0 and 100
    setSliderPosition(newPosition);
  };

  if (!beforeImage || !afterImage) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-64 overflow-hidden cursor-ew-resize select-none group mt-4 rounded-lg shadow-md"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={(e) => { // Basic touch support
        setIsDragging(true);
        e.preventDefault();
      }}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={(e) => {
        if (!isDragging || !containerRef.current || !e.touches[0]) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.touches[0].clientX - rect.left;
        let newPosition = (x / rect.width) * 100;
        newPosition = Math.max(0, Math.min(100, newPosition));
        setSliderPosition(newPosition);
      }}
    >
      {/* Before Image */}
      <img
        src={beforeImage}
        alt={`${title} - Before`}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        draggable="false"
      />

      {/* After Image Container (clipped) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden pointer-events-none"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={afterImage}
          alt={`${title} - After`}
          className="block h-full object-cover pointer-events-none"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          draggable="false"
        />
      </div>

      {/* Slider Handle Line & Visual Cue */}
      <div
        className="absolute top-0 bottom-0 w-1.5 bg-white opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none z-10"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 group-hover:bg-white shadow-xl flex items-center justify-center transition-all">
          <ChevronLeft size={20} className="text-primary opacity-70 -mr-1" />
          <ChevronRight size={20} className="text-primary opacity-70 -ml-1" />
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  const botoxServices = [
    {
      title: "Forehead Lines",
      description: "Smoothing out horizontal lines across the forehead.",
      images: [
        "/treatments-images/forehead_lines_before.jpg",
        "/treatments-images/forehead_lines_after.jpg"
      ]
    },
    {
      title: "Glabellar Lines (Frown Lines)",
      description: "These are the vertical lines between the eyebrows, often called \"frown lines\".",
      images: [
        "/treatments-images/glabellar_lines_before.jpg",
        "/treatments-images/glabellar_lines_after.jpg"
      ]
    },
    {
      title: "Crow's Feet",
      description: "These are the lines that radiate out from the corners of the eyes when you smile or squint.",
      images: [
        "/treatments-images/crows-feet_before.jpg",
        "/treatments-images/crows-feet_after.jpg"
      ]
    },
    {
      title: "Bunny Lines",
      description: "Smoothing out lines on the sides of the nose.",
      images: ["/treatments-images/bunny_lines.jpg"] // Single image
    },
    {
      title: "Smoker's Lines",
      description: "Vertical lines around the mouth, often caused by repetitive puckering or smoking.",
      images: [
        "/treatments-images/smokers_lines_before.jpg",
        "/treatments-images/smokers_lines_after.jpg"
      ]
    }
  ];

  const { ref: sectionRef, isVisible } = useAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <>
      {/* Services Introduction Section */}
      <section ref={sectionRef} id="services-section" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facial Aesthetic Services</h2>
            <div className="w-20 h-1 bg-secondary mx-auto mb-8"></div>
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl font-medium text-primary mb-8">
                Wrinkle Reduction Treatments for a Smoother, Youthful Look
              </p>
              <p className="mb-6">
                Looking to soften fine lines and rejuvenate your skin? Our wrinkle reduction treatments are designed to target common areas of facial ageing — including frown lines, crow's feet, and forehead creases — for a naturally refreshed appearance.
              </p>
              <p className="mb-6">
                Using advanced techniques, our experienced team carefully addresses the muscles responsible for dynamic wrinkles, helping to smooth the skin and restore a more youthful expression.
              </p>
              <p className="mb-8">
                This minimally invasive procedure offers visible results that typically last for several months. Many clients choose to repeat the treatment periodically to maintain their revitalised look — all without surgery or downtime.
              </p>
              <p className="mb-8">
                This treatment can also been effective for managing chronic pain and has also been widely used to treat migraines. Clinical studies and patient experiences suggest that it can provide significant relief from migraine symptoms, with effects lasting for up to six months in many cases.
              </p>
              <div className="mt-10 pb-4 text-center">
                <p className="mb-6 text-lg">
                  Book a consultation today
                  {' '}to find out if this non-surgical anti-ageing solution is right for you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                  <a
                    href="tel:+442086603308"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-primary hover:bg-secondary hover:text-primary transition-colors"
                  >
                    <Phone className="mr-2 h-5 w-5" /> Call Us
                  </a>
                  <a
                    href="#contact-section"
                    onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.getElementById('contact-section');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-primary bg-secondary hover:bg-yellow-500 hover:text-white transition-colors"
                  >
                    <User className="mr-2 h-5 w-5" /> Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migraine Relief Section */}
      <section className="py-12 md:py-20 bg-gray-50" id="migraine-relief">
        <div className="container mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image left on desktop, top on mobile */}
            <div className="flex justify-center order-1 md:order-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img
                src="/images/Relief-Beyond-Wrinkles.png"
                alt="Relief Beyond Wrinkles - Migraine Treatment"
                className="rounded-lg shadow-xl max-w-full h-auto border-4 border-white"
                style={{ maxWidth: '70%' }}
              />
            </div>
            {/* Text content */}
            <div className="text-center md:text-left flex flex-col items-center md:items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-3xl font-bold mb-4 text-primary">Relief Beyond Wrinkles: The Therapeutic Power of Botulinum Toxin Type A for Migraines</h2>
              <p className="text-gray-700 mb-6 max-w-xl">
                For individuals living with <span className="font-semibold text-primary">chronic migraines</span>—defined as experiencing headaches on 15 or more days per month—Botulinum Toxin Type A offers more than cosmetic benefits. This neuromodulating treatment has emerged as a powerful tool in the fight against debilitating headache disorders.
              </p>
              <ul className="space-y-2 mb-6 w-full max-w-xl text-left list-disc pl-6">
                <li>Works preventatively by blocking pain-associated neurotransmitters when injected into specific areas of the head and neck.</li>
                <li>Reduces the frequency, intensity, and duration of migraine days over time.</li>
                <li>Clinical studies show up to a <span className="font-semibold text-primary">50% reduction</span> in headache days for many individuals with repeated treatments (every 12 weeks).</li>
                <li>Especially effective for high-frequency migraines, with benefits increasing over successive cycles.</li>
                <li>Minimally invasive: sessions last ~20 minutes with a series of small injections; side effects are generally mild and localized.</li>
                <li>Often covered by insurance for those who meet criteria for chronic migraine.</li>
              </ul>
              <p className="text-base text-gray-700 mb-4 max-w-xl">
                In the evolving landscape of migraine management, Botulinum Toxin Type A stands out as a scientifically backed, patient-approved solution—offering not just fewer headaches, but a renewed sense of control and quality of life.
              </p>
              <p className="text-sm text-gray-500 font-medium max-w-xl">Please note this treatment is available only via referral and is not suitable for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Gallery and Treatment Zones Section */}
      <section className="py-20 bg-white" id="treatment-zones">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Patient Gallery and Treatment Zones</h3>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our treatment zones and see the transformative results we can achieve with our expert Botox treatments.
            </p>
          </div>

          {/* Main content area with flexbox layout */}
          <div className="max-w-7xl mx-auto">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {botoxServices.slice(0, 3).map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <h4 className="text-xl font-semibold mb-3 text-primary">{service.title}</h4>
                  <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                  {service.images.length > 1 ? (
                    <ServiceImageGallery 
                      beforeImage={service.images[0]}
                      afterImage={service.images[1]}
                      title={service.title} 
                    />
                  ) : (
                    <img 
                      src={service.images[0]} 
                      alt={service.title} 
                      className="w-full h-64 object-cover rounded-lg shadow-md mt-4"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Second row - 2 cards centered */}
            <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
              {botoxServices.slice(3).map((service, index) => (
                <div 
                  key={index + 3}
                  className="w-full md:w-1/3 bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col mb-6 md:mb-0"
                >
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-primary">{service.title}</h4>
                  <p className="text-gray-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base">{service.description}</p>
                  {service.images.length > 1 ? (
                    <ServiceImageGallery 
                      beforeImage={service.images[0]}
                      afterImage={service.images[1]}
                      title={service.title} 
                    />
                  ) : (
                    <img 
                      src={service.images[0]} 
                      alt={service.title} 
                      className="w-full h-44 sm:h-64 object-cover rounded-lg shadow-md mt-3 sm:mt-4"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Our Other Services button */}
          <div className="text-center mt-8">
            <a
              href="https://confidentalclinic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-lg text-white bg-primary hover:bg-secondary transition-colors"
            >
              <Stethoscope className="mr-2 h-5 w-5" /> Our Other Services
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Rejuvenate Your Appearance?
            </h2>
            <p className="text-lg mb-8">
              Contact us today to schedule your consultation and learn more about our facial aesthetic services.
            </p>
            <a
              href="tel:+442086603308"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-lg text-primary bg-white hover:bg-gray-100 transition-colors"
            >
              <Phone className="mr-2 h-6 w-6" /> Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
