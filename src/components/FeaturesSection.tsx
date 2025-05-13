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
        "/placeholder-before.jpg", // Placeholder, to be updated by user
        "/placeholder-after.jpg"  // Placeholder, to be updated by user
      ]
    },
    {
      title: "Glabellar Lines (Frown Lines)",
      description: "These are the vertical lines between the eyebrows, often called \"frown lines\".",
      images: [
        "/placeholder-before.jpg", // Placeholder, to be updated by user
        "/placeholder-after.jpg"  // Placeholder, to be updated by user
      ]
    },
    {
      title: "Crow's Feet",
      description: "These are the lines that radiate out from the corners of the eyes when you smile or squint.",
      images: [
        "/placeholder-before.jpg", // Placeholder, to be updated by user
        "/placeholder-after.jpg"  // Placeholder, to be updated by user
      ]
    },
    {
      title: "Bunny Lines",
      description: "Smoothing out lines on the sides of the nose.",
      images: [
        "/placeholder-before.jpg", // Placeholder, to be updated by user
        "/placeholder-after.jpg"  // Placeholder, to be updated by user
      ]
    },
    {
      title: "Smoker's Lines",
      description: "Vertical lines around the mouth, often caused by repetitive puckering or smoking.",
      images: [
        "/placeholder-before.jpg", // Placeholder, to be updated by user
        "/placeholder-after.jpg"  // Placeholder, to be updated by user
      ]
    }
  ];

  const { ref: sectionRef, isVisible } = useAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section ref={sectionRef} id="services-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facial Aesthetic Services</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Wrinkle Reduction Treatments for a Smoother, Youthful Look.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Looking to soften fine lines and rejuvenate your skin? Our wrinkle reduction treatments are designed to target common areas of facial ageing — including frown lines, crow’s feet, and forehead creases — for a naturally refreshed appearance.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Using advanced techniques, our experienced team carefully addresses the muscles responsible for dynamic wrinkles, helping to smooth the skin and restore a more youthful expression.
          </p>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            This minimally invasive procedure offers visible results that typically last for several months. Many clients choose to repeat the treatment periodically to maintain their revitalised look — all without surgery or downtime.
          </p>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            <a
              href="#contact-section"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact-section');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-primary hover:text-secondary font-semibold underline transition-colors"
            >
              Book a consultation today
            </a>
            {' '}to find out if this non-surgical anti-ageing solution is right for you.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Patient Gallery and Treatment Zones</h3>
          {/* Flexbox container for responsive columns and centered last row */}
          <div className="flex flex-wrap justify-center -mx-3 mt-8">
            {botoxServices.map((service, index) => (
              <div 
                key={index} 
                // Adjust width for columns and add padding for gutters
                className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-6"
              >
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all h-full flex flex-col">
                  <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                  {/* flex-grow will make description take available space, pushing gallery to bottom */}
                  <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                  <ServiceImageGallery 
                    beforeImage={service.images[0]} // Placeholder - user to update
                    afterImage={service.images[1]}  // Placeholder - user to update
                    title={service.title} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
