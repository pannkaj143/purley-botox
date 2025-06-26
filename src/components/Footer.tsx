import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import PolicyDialog from './PolicyDialog';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const privacyPolicyContent = (
    <div>
      <h2 className="text-lg font-semibold mb-4">Privacy Policy</h2>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <p className="mb-4">At Confidental Clinic, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information.</p>
      <h3 className="text-md font-semibold mb-2">Information We Collect</h3>
      <p className="mb-4">We collect information that you provide directly to us, including:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Name and contact information</li>
        <li>Medical and dental history</li>
        <li>Appointment preferences</li>
        <li>Payment information</li>
      </ul>
      <h3 className="text-md font-semibold mb-2">How We Use Your Information</h3>
      <p className="mb-4">We use the information we collect to:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Provide dental services</li>
        <li>Communicate about appointments</li>
        <li>Process payments</li>
        <li>Improve our services</li>
      </ul>
      <h3 className="text-md font-semibold mb-2">Data Protection</h3>
      <p>We implement appropriate security measures to protect your personal information.</p>
    </div>
  );

  const termsContent = (
    <div>
      <h2 className="text-lg font-semibold mb-4">Terms of Service</h2>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
      <h3 className="text-md font-semibold mb-2">1. Acceptance of Terms</h3>
      <p className="mb-4">By accessing and using our services, you agree to these terms and conditions.</p>
      <h3 className="text-md font-semibold mb-2">2. Dental Services</h3>
      <p className="mb-4">We provide dental services subject to professional assessment and suitability.</p>
      <h3 className="text-md font-semibold mb-2">3. Appointments</h3>
      <p className="mb-4">Please provide 24 hours notice for cancellations. Late cancellations may incur a fee.</p>
      <h3 className="text-md font-semibold mb-2">4. Payment Terms</h3>
      <p className="mb-4">Payment is required at the time of service unless alternative arrangements have been made.</p>
      <h3 className="text-md font-semibold mb-2">5. Liability</h3>
      <p>We strive to provide the best possible care but cannot guarantee specific outcomes.</p>
    </div>
  );
  
  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="inline-block mb-4">
              <img 
                src="/images/bddb16ef-30c2-415d-a400-bac83cdec2eb.png" 
                alt="Confidental Clinic Logo"
                className="h-16"
              />
            </div>
            <p className="text-gray-300 mt-4">
              Providing exceptional dental implant services and transforming smiles in Purley.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-secondary pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('about-section')} className="text-gray-300 hover:text-white transition-colors" aria-label="Go to About section">About</button></li>
              <li><button onClick={() => scrollToSection('services-section')} className="text-gray-300 hover:text-white transition-colors" aria-label="Go to Services section">Services</button></li>
              <li><button onClick={() => scrollToSection('doctor-section')} className="text-gray-300 hover:text-white transition-colors" aria-label="Go to Doctor section">Doctor</button></li>
              <li><button onClick={() => scrollToSection('testimonials-section')} className="text-gray-300 hover:text-white transition-colors" aria-label="Go to Testimonials section">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('faq-section')} className="text-gray-300 hover:text-white transition-colors" aria-label="Go to FAQ section">FAQ</button></li>
              <li><button onClick={() => scrollToSection('contact-section')} className="text-gray-300 hover:text-white transition-colors" aria-label="Go to Contact section">Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-secondary pb-2">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-secondary" aria-hidden="true" />
                <a href="tel:02086608923" className="hover:text-secondary transition-colors">020 8660 8923</a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-secondary" aria-hidden="true" />
                <a href="mailto:purley@confidentalclinic.com" className="hover:text-secondary transition-colors">purley@confidentalclinic.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-secondary" aria-hidden="true" />
                <address className="not-italic">934 Brighton Rd, Purley CR8 2LN</address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-300">
            <p>
            &copy; {currentYear}{' '}
            <a
              href="https://confidentalclinic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline transition-colors"
            >
              Confidental Clinic
            </a>. All rights reserved.
            </p>
          <div className="mt-2">
            <button onClick={() => setShowPrivacyPolicy(true)} className="text-gray-300 hover:text-white mx-2 transition-colors">Privacy Policy</button>
            <button onClick={() => setShowTerms(true)} className="text-gray-300 hover:text-white mx-2 transition-colors">Terms of Service</button>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            Developed by <a href="https://www.karadinfotech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Karad Infotech Ltd.</a>
          </div>
        </div>
      </div>

      <PolicyDialog
        isOpen={showPrivacyPolicy}
        onClose={() => setShowPrivacyPolicy(false)}
        title="Privacy Policy"
        content={privacyPolicyContent}
      />

      <PolicyDialog
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
        content={termsContent}
      />
    </footer>
  );
};

export default Footer;
