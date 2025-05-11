
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <div className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-primary">Terms of Service</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">1. Acceptance of Terms</h2>
              <p className="text-gray-600 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms and 
                provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">2. Services</h2>
              <p className="text-gray-600 mb-4">
                We provide dental implant and related services. All services are subject to availability 
                and professional assessment.
              </p>
            </section>

            {/* Additional sections... */}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
