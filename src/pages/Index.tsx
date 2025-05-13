import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutClinic from '@/components/AboutClinic';
import DoctorProfile from '@/components/DoctorProfile';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

const Index = () => {
  // Structured data for the dental clinic
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness", // Changed from Dentist to MedicalBusiness for broader applicability
    "name": "Confidential Clinic",
    "image": "/lovable-uploads/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png",
    "url": "https://yourwebsite.com",
    "telephone": "020 8660 8923",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "934 Brighton Rd",
      "addressLocality": "Purley",
      "postalCode": "CR8 2LN",
      "addressRegion": "London",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.33651677960462",
      "longitude": "-0.12462888421770283"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:30",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "13:00"
      }
    ],
    "priceRange": "£££",
    "specialty": "Botox Treatments" // Changed from Dental Implants to Botox Treatments
  };

  // Fix for iOS notch/status bar
  useEffect(() => {
    // Add viewport meta tag to handle iOS notch properly
    const meta = document.createElement('meta');
    meta.name = 'viewport';
    meta.content = 'width=device-width, initial-scale=1, viewport-fit=cover';
    document.getElementsByTagName('head')[0].appendChild(meta);
    
    // Add CSS to handle safe areas
    const style = document.createElement('style');
    style.innerHTML = `
      body {
        padding-top: env(safe-area-inset-top);
        padding-bottom: env(safe-area-inset-bottom);
        padding-left: env(safe-area-inset-left);
        padding-right: env(safe-area-inset-right);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Botox in Purley, Banstead, Kenley and Caterham | Expert Botox Specialists | Confidential Clinic</title>
        <meta name="description" content="Specialist Botox solutions in Purley. Transform your look with our expert Botox services at Confidential Clinic, 934 Brighton Rd, Purley." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <style>{`
          /* Ensure the page fills the iPhone screen including notch area */
          html, body {
            height: 100%;
            width: 100%;
            padding: 0;
            margin: 0;
            overflow-x: hidden;
          }
        `}</style>
      </Helmet>
      
      <Navbar />
      <HeroSection />
      <AboutClinic />
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
