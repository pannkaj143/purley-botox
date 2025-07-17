import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AboutClinic from '@/components/AboutClinic';
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
    "@type": "MedicalBusiness",
    "name": "Confidental Clinic",
    "alternateName": "Confidental Clinic Purley",
    "description": "Premium facial aesthetics and anti-wrinkle treatments in Purley. Expert cosmetic procedures with natural-looking results and minimal downtime.",
    "image": [
      "/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png",
      "/images/about_us.png",
      "/images/hero_background.jpg"
    ],
    "logo": "/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png",
    "url": "https://yourwebsite.com",
    "telephone": "020 8660 8923",
    "email": "info@confidentalclinic.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "934 Brighton Rd",
      "addressLocality": "Purley",
      "postalCode": "CR8 2LN",
      "addressRegion": "Surrey",
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
    "specialty": "Facial Aesthetics and Anti-Wrinkle Treatments",
    "medicalSpecialty": "Cosmetic Medicine",
    "serviceArea": {
      "@type": "Place",
      "name": "Purley, Banstead, Kenley, Caterham, Surrey"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Facial Aesthetic Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Anti-Wrinkle Treatments",
            "description": "Non-invasive wrinkle reduction treatments for forehead lines, crow's feet, and frown lines"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Facial Rejuvenation",
            "description": "Comprehensive facial aesthetic treatments for a more youthful appearance"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/confidentalclinic",
      "https://www.instagram.com/confidentalclinic"
    ]
  };

  // FAQ Structured Data for rich snippets
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Are facial aesthetic treatments safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, facial aesthetic treatments using anti-wrinkle injections have an excellent safety record and a long history of use in medicine. They have been used successfully in adults for various medical conditions over the last 20 years and cosmetically to treat facial wrinkles for about 15 years."
        }
      },
      {
        "@type": "Question",
        "name": "What is the average cost of facial aesthetic treatments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On average, patients can expect to pay anywhere from £175 to £400 per treatment area. The price varies depending on the treatment zone, complexity, and the number of areas being treated."
        }
      },
      {
        "@type": "Question",
        "name": "How long do the results last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Treatment results typically last 3-4 months before the effects gradually wear off. With repeated treatments, many patients find that the results can last progressively longer."
        }
      },
      {
        "@type": "Question",
        "name": "Is there any downtime after treatment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Facial aesthetic treatments are minimally invasive with little to no downtime. You can typically return to your normal activities immediately after treatment."
        }
      }
    ]
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
        <title>Facial Aesthetics in Purley, Banstead, Kenley and Caterham | Expert Anti-Wrinkle Treatments | Confidental Clinic</title>
        <meta name="description" content="Premium facial aesthetics and anti-wrinkle treatments in Purley. Transform your look with our expert cosmetic procedures at Confidental Clinic. Natural-looking results with minimal downtime." />
        <meta name="keywords" content="facial aesthetics Purley, anti-wrinkle treatments, cosmetic procedures Purley, Confidental Clinic, wrinkle reduction, facial rejuvenation, non-invasive treatments, aesthetic medicine Purley" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        
        {/* Additional SEO meta tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Confidental Clinic" />
        <meta name="geo.region" content="GB-SRY" />
        <meta name="geo.placename" content="Purley, Surrey" />
        <meta name="geo.position" content="51.33651677960462;-0.12462888421770283" />
        <meta name="ICBM" content="51.33651677960462, -0.12462888421770283" />
        
        {/* Open Graph tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Facial Aesthetics in Purley | Expert Anti-Wrinkle Treatments | Confidental Clinic" />
        <meta property="og:description" content="Premium facial aesthetics and anti-wrinkle treatments in Purley. Transform your look with our expert cosmetic procedures." />
        <meta property="og:image" content="/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:site_name" content="Confidental Clinic" />
        <meta property="og:locale" content="en_GB" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Facial Aesthetics in Purley | Expert Anti-Wrinkle Treatments" />
        <meta name="twitter:description" content="Premium facial aesthetics and anti-wrinkle treatments in Purley. Transform your look with our expert cosmetic procedures." />
        <meta name="twitter:image" content="/images/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://yourwebsite.com" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
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
