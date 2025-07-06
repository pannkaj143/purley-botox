import { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import { useAnimation } from '@/hooks/use-animation';

const AboutClinic = () => {
  const { ref: sectionRef, isVisible } = useAnimation<HTMLDivElement>({ threshold: 0.1 });

  const benefits = [
    "Highly recommended aesthetic clinicians ensuring excellent patient satisfaction",
    "Are you looking to roll back the signs of ageing and achieve younger looking skin?",
    "Free consultation available"
  ];

  return (
    <section ref={sectionRef} id="about-section" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} flex justify-center`} style={{ animationDelay: '0.2s' }}>
            <img
              src="/images/about_us.png"
              alt="About Us"
              className="rounded-lg shadow-xl max-w-full h-auto"
              style={{ maxWidth: "70%" }}
            />
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} text-center md:text-left flex flex-col items-center md:items-start`} style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold mb-4">WELCOME TO CONFIDENTAL CLINIC</h2>
            <p className="text-gray-700 mb-6 max-w-xl">
              Highly specialized and personalised to ensure that all aspects of 
              care are provided with patience, knowledge and attention to 
              detail in order to maintain optimal health, resulting in happy 
              and satisfied patients.
            </p>
            <div className="space-y-4 mt-8 w-full max-w-xl">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start justify-center md:justify-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-secondary" />
                  </div>
                  <p className="ml-3 text-gray-700 text-left md:text-left">{benefit}</p>
                </div>
              ))}
            </div>
            <button 
              className="w-full sm:w-auto bg-primary text-white hover:bg-secondary hover:text-primary text-base px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg transition-all duration-300 mt-8"
              onClick={() => {
                const contactSection = document.getElementById('contact-section');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutClinic;
