
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
    <section ref={sectionRef} id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'} flex justify-center`} style={{ animationDelay: '0.2s' }}>
            <img
              src="/lovable-uploads/5910ed43-26b1-4700-b2f8-5e1e6fe63012.png"
              alt="Happy Dental Patient"
              className="rounded-lg shadow-xl max-w-full h-auto"
              style={{ maxWidth: "70%" }}
            />
          </div>
          
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h2 className="text-3xl font-bold mb-4">WELCOME TO CONFIDENTIAL CLINIC</h2>
            <p className="text-gray-700 mb-6">
              Highly specialized and personalised to ensure that all aspects of 
              care are provided with patience, knowledge and attention to 
              detail in order to maintain optimal health, resulting in happy 
              and satisfied patients.
            </p>
            
            <div className="space-y-4 mt-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-secondary" />
                  </div>
                  <p className="ml-3 text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
            
            <button 
              className="mt-8 bg-primary hover:bg-secondary text-white font-medium px-6 py-3 rounded-md transition-colors"
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
