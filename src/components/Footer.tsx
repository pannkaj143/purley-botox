import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-primary text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="inline-block mb-4">
              <img 
                src="/images/bddb16ef-30c2-415d-a400-bac83cdec2eb.png" 
                alt="Confidential Clinic Logo"
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
          <p>&copy; {currentYear} Confidential Clinic. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-white mx-2 transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-300 hover:text-white mx-2 transition-colors">Terms of Service</Link>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            Developed by <a href="https://www.karadinfotech.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Karad Infotech Ltd.</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
