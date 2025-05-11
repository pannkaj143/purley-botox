
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Testimonials", path: "/testimonials" },
        { name: "FAQ", path: "/faq" },
        { name: "Contact", path: "/contact" },
        { name: "Book Appointment", path: "/book" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Single Tooth Implants", path: "/services/single-tooth-implant" },
        { name: "Multiple Tooth Implants", path: "/services/multiple-tooth-implants" },
        { name: "Full Arch Implants", path: "/services/full-arch-implants" },
        { name: "Implant Supported Dentures", path: "/services/implant-supported-dentures" },
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
      ]
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-12 text-primary">Sitemap</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {siteStructure.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-semibold text-primary border-b border-gray-200 pb-2">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path}
                        className="text-gray-600 hover:text-secondary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sitemap;
