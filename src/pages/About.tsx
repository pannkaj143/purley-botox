
import Navbar from '@/components/Navbar';
import DoctorProfile from '@/components/DoctorProfile';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <div className="hero-section min-h-[60vh] flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-slide-in">
            About Our Clinic
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Learn more about our expertise in dental implants and our commitment to patient care.
          </p>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <p className="text-gray-700 mb-6">
              Confidential Clinic was established with a vision to provide exceptional dental care with a focus on patient comfort and satisfaction. Our journey began over two decades ago, and since then, we have been committed to transforming smiles and improving the oral health of our patients in Kingston and beyond.
            </p>
            <p className="text-gray-700 mb-6">
              Our clinic specializes in dental implants, offering a comprehensive range of solutions for missing teeth. We believe that everyone deserves a beautiful, functional smile, and our team works tirelessly to make this a reality for our patients.
            </p>
            <p className="text-gray-700 mb-6">
              We pride ourselves on staying at the forefront of dental technology and techniques, ensuring that our patients receive the most advanced and effective treatments available. Our commitment to continuing education and professional development means that we are always enhancing our skills and knowledge to better serve our patients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-primary text-4xl font-bold mb-2">25+</div>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-primary text-4xl font-bold mb-2">5,000+</div>
              <p className="text-gray-700">Satisfied Patients</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="text-primary text-4xl font-bold mb-2">3,000+</div>
              <p className="text-gray-700">Successful Implants</p>
            </div>
          </div>
        </div>
      </section>
      
      <DoctorProfile />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in all aspects of our practice, from patient care to clinical outcomes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Compassion</h3>
              <p className="text-gray-700">
                We treat our patients with kindness, understanding, and respect, acknowledging their unique needs and concerns.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Innovation</h3>
              <p className="text-gray-700">
                We embrace new technologies and techniques that enhance patient care and treatment outcomes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-primary">Integrity</h3>
              <p className="text-gray-700">
                We operate with honesty and transparency, building trust with our patients and the community.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Care?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Schedule a consultation with our team and learn how we can help you achieve your dream smile.
          </p>
          <Button className="bg-white text-primary hover:bg-gray-200 text-lg px-8 py-3">
            Book Appointment
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
