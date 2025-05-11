
import { useState, useEffect, useRef } from 'react';
import { useAnimation, useStaggeredAnimation } from '@/hooks/use-animation';

const DoctorProfile = () => {
  const { ref: sectionRef, isVisible } = useAnimation<HTMLDivElement>({
    threshold: 0.1
  });

  const achievements = [
    "GDC registered",
    "Diploma in Implant Dentistry",
    "Over 1000 successful implant procedures",
    "Dedicated to patient comfort"
  ];
  
  const { containerRef, isVisible: listVisible, getDelayForIndex } = useStaggeredAnimation<HTMLDivElement>(
    achievements.length,
    { baseDelay: 300, staggerDelay: 100 }
  );

  return (
    <section ref={sectionRef} id="doctor-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} flex justify-center`} style={{ animationDelay: '0.2s' }}>
            <img 
              src="/lovable-uploads/34bf2c35-23c5-4777-954c-2c61b1890827.png"
              alt="Dr. Jignesh Patel" 
              className="rounded-lg shadow-xl max-w-full h-auto"
              style={{ maxWidth: "70%" }}
            />
          </div>
          
          <div>
            <h2 className={`text-3xl font-bold mb-3 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>Dr. Jignesh Patel</h2>
            <h3 className={`text-xl text-secondary mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>Implant Surgeon</h3>
            
            <div className={`mb-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <p className="text-gray-700 mb-4">
                Dr. Jignesh Patel is a highly skilled dental implant surgeon with extensive experience in all aspects of dental implantology. 
                His dedication to excellence and patient care has earned him a reputation as one of the leading implant surgeons in the area.
              </p>
              <p className="text-gray-700">
                Having completed advanced training in implant dentistry, Dr. Patel combines technical expertise with a gentle approach, 
                ensuring patients feel comfortable and informed throughout their treatment journey.
              </p>
            </div>
            
            <div ref={containerRef} className="space-y-3">
              <h4 className={`font-semibold mb-2 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>Achievements & Qualifications:</h4>
              <ul className="space-y-2">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className={`flex items-center space-x-2 ${listVisible ? 'animate-fade-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${getDelayForIndex(index)}ms` }}
                  >
                    <span className="h-2 w-2 bg-secondary rounded-full"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
