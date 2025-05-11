import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Contact Us | Botox in Purley | Confidential Clinic</title>
        <meta name="description" content="Contact our Botox specialists in Purley. Located at 934 Brighton Rd, Purley CR8 2LN. Call us at 020 8660 8923 to book your consultation." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Confidential Clinic",
              "image": "/lovable-uploads/bcf8abc3-36c7-4874-8e33-6149cc9ba16a.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "934 Brighton Rd",
                "addressLocality": "Purley",
                "postalCode": "CR8 2LN",
                "addressCountry": "GB"
              },
              "telephone": "020 8660 8923",
              "email": "purley@confidentalclinic.com",
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
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.33651677960462",
                "longitude": "-0.12462888421770283"
              },
              "priceRange": "£££",
              "sameAs": [
                "https://www.facebook.com/confidentalclinic",
                "https://www.instagram.com/confidentalclinic"
              ],
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Botox Treatments",
                  "description": "Expert Botox services in Purley"
                }
              }
            }
          `}
        </script>
      </Helmet>
      
      <Navbar />
      
      <div className="hero-section min-h-[60vh] flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-slide-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white animate-slide-in" style={{ animationDelay: '0.2s' }}>
            We're here to answer your questions and help you schedule your appointment.
          </p>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Clinic</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-primary">Purley Office</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-gray-700">934 Brighton Rd, Purley CR8 2LN</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:02086608923" className="text-gray-700 hover:text-primary transition-colors">020 8660 8923</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:purley@confidentalclinic.com" className="text-gray-700 hover:text-primary transition-colors">purley@confidentalclinic.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 mr-4 flex-shrink-0 text-secondary" aria-hidden="true" />
                    <div>
                      <p className="font-medium">Working Hours</p>
                      <p className="text-gray-700">Monday - Friday: 08.30-13.00 | 14.00-17.00</p>
                      <p className="text-gray-700">Saturday: 09.00-13.00</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <iframe
                  title="Confidential Clinic Location in Purley"
                  className="w-full h-full min-h-[400px] rounded-lg shadow-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2491.589145418566!2d-0.12462888421770283!3d51.33651677960462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876075651602d49%3A0xc1d9c376d96b0985!2s934%20Brighton%20Rd%2C%20Purley%20CR8%202LN%2C%20UK!5e0!3m2!1sen!2sus!4v1685264310957!5m2!1sen!2sus"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            
            <div className="text-center p-8 bg-gray-50 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Emergency Care</h3>
              <p className="text-gray-700 mb-4">
                If you're experiencing a dental emergency, please call us immediately at:
              </p>
              <a 
                href="tel:02086608923" 
                className="text-2xl font-bold text-secondary hover:underline"
                aria-label="Call our emergency number"
              >
                020 8660 8923
              </a>
              <p className="mt-4 text-gray-700">
                We strive to accommodate emergency appointments on the same day whenever possible.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
