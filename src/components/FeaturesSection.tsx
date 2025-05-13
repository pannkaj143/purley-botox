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
  const implantServices = [
    {
      title: "Single Tooth Implants",
      description: "Perfect solution for replacing a single missing tooth without affecting adjacent teeth.",
      images: [
        "/implant-services-photos/single_tooth_before.jpg",
        "/implant-services-photos/single_tooth_after.jpg"
      ]
    },
    {
      title: "Multiple Tooth Implants",
      description: "Ideal for replacing several missing teeth with a sturdy and natural-looking solution.",
      images: [
        "/implant-services-photos/multiple_tooth_before.jpg",
        "/implant-services-photos/multiple_tooth_after.jpg"
      ]
    },
    {
      title: "Full Arch Implants",
      description: "Complete restoration for an entire arch of missing teeth with our advanced implant technology.",
      images: [
        "/implant-services-photos/full_arch_before.jpg",
        "/implant-services-photos/full_arch_after.jpg"
      ]
    },
    {
      title: "Implant Supported Dentures",
      description: "Secure and comfortable alternative to traditional removable dentures.",
      images: [
        "/implant-services-photos/implant_supported_denture_before.jpg",
        "/implant-services-photos/implant_supported_denture_after.jpg"
      ]
    },
    {
      title: "Same-Day Implants",
      description: "Get your implant and temporary crown in just one visit with our efficient procedures.",
      images: [
        "/implant-services-photos/same_day_before.jpg",
        "/implant-services-photos/same_day_after.jpg"
      ]
    },
    {
      title: "Bone Grafting", // Corrected title
      description: "Preparatory procedure to build up bone structure for successful implant placement.",
      images: [
        "/implant-services-photos/bone_grafting_before.jpg",
        "/implant-services-photos/bone_grafting_after.jpg" // Corrected path
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
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Wrinkle Reduction Treatments for a Smoother, Youthful Look.
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Looking to soften fine lines and rejuvenate your skin? Our wrinkle reduction treatments are designed to target common areas of facial ageing - including frown lines, crow's feet, and forehead creases for a naturally refreshed appearance.
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Using advanced techniques, our experienced medical team carefully addresses the muscles responsible for dynamic wrinkles, helping to smooth the skin and restore a more youthful expression.
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            This minimally invasive procedure offers visible results that typically last for several months. Many clients choose to repeat the treatment periodically to maintain their revitalised look - all without surgery or downtime.
          </p>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Book a consultation today to find out if this non-surgical anti-ageing solution is right for you.
          </p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Patient Gallery and Treatment Zones</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {implantServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
                {service.title === "Bone Grafting" ? (
                  <img
                    src={service.images[0]} // Displaying the actual 'before' image for Bone Grafting
                    alt={service.title}
                    className="w-full h-64 object-cover mt-4 rounded-lg shadow-md" 
                  />
                ) : (
                  <ServiceImageGallery 
                    beforeImage={service.images[1]} // Actual 'after' image (base, right part of slider)
                    afterImage={service.images[0]}  // Actual 'before' image (clipped, left part of slider)
                    title={service.title} 
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
