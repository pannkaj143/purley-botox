import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import ClinicLogo from './ClinicLogo';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <ClinicLogo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('about-section')} className="font-medium transition-colors text-primary hover:text-secondary">About</button>
            <button onClick={() => scrollToSection('services-section')} className="font-medium transition-colors text-primary hover:text-secondary">Services</button>
            <button onClick={() => scrollToSection('doctor-section')} className="font-medium transition-colors text-primary hover:text-secondary">Doctor</button>
            <button onClick={() => scrollToSection('testimonials-section')} className="font-medium transition-colors text-primary hover:text-secondary">Testimonials</button>
            <button onClick={() => scrollToSection('faq-section')} className="font-medium transition-colors text-primary hover:text-secondary">FAQ</button>
            
            <div className="flex-grow"></div>
            
            {/* Social Media Icons on Desktop (right aligned) */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/confidentalclinicgroup" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={20} className="text-primary hover:text-secondary transition-colors" />
              </a>
              <a href="https://www.instagram.com/confidentalclinic_group/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={20} className="text-primary hover:text-secondary transition-colors" />
              </a>
              
            </div>
            
            <a href="https://umzx.sfd.co:300" target="_blank" rel="noopener noreferrer">
              <Button 
                onClick={() => scrollToSection('contact-section')}
                className="bg-secondary hover:bg-primary text-white transition-colors"
              >
                Book Online Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <div className="flex space-x-3 mr-4">
              <a href="https://www.facebook.com/confidentalclinicgroup" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={18} className="text-primary hover:text-secondary transition-colors" />
              </a>
              <a href="https://www.instagram.com/confidentalclinic_group/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={18} className="text-primary hover:text-secondary transition-colors" />
              </a>
              
            </div>
            
            <button
              ref={mobileMenuButtonRef}
              className="text-primary"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={mobileMenuRef}
            className="md:hidden bg-white shadow-lg absolute left-0 right-0 top-full animate-fade-in"
            role="menu"
            aria-orientation="vertical"
          >
            <div className="flex flex-col space-y-4 p-4">
              <button role="menuitem" onClick={() => scrollToSection('about-section')} className="text-primary hover:text-secondary font-medium transition-colors text-left">About</button>
              <button role="menuitem" onClick={() => scrollToSection('services-section')} className="text-primary hover:text-secondary font-medium transition-colors text-left">Services</button>
              <button role="menuitem" onClick={() => scrollToSection('doctor-section')} className="text-primary hover:text-secondary font-medium transition-colors text-left">Doctor</button>
              <button role="menuitem" onClick={() => scrollToSection('testimonials-section')} className="text-primary hover:text-secondary font-medium transition-colors text-left">Testimonials</button>
              <button role="menuitem" onClick={() => scrollToSection('faq-section')} className="text-primary hover:text-secondary font-medium transition-colors text-left">FAQ</button>
              <a href="https://umzx.sfd.co:300" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button
                  role="menuitem"
                  onClick={() => scrollToSection('contact-section')}
                  className="bg-secondary hover:bg-primary text-white transition-colors w-full"
                >
                  Book Online Now
                </Button>
              </a>
              <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                <ClinicLogo className="h-8" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
