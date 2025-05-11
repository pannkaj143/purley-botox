
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sophie K.",
      location: "Kingston",
      rating: 5,
      text: "I was extremely anxious about getting dental implants, but Dr. Patel and the team at Confidential Clinic were amazing. They explained everything clearly and made sure I was comfortable throughout the process. My implants look and feel just like natural teeth - I couldn't be happier with the results!"
    },
    {
      name: "James B.",
      location: "Surrey",
      rating: 5,
      text: "After years of struggling with dentures, I decided to get implant-supported dentures at Confidential Clinic. It's been life-changing! I can eat all my favorite foods again and smile with confidence. The team was professional, caring, and the results exceeded my expectations."
    },
    {
      name: "Amelia T.",
      location: "Kingston",
      rating: 5,
      text: "I lost my front tooth in an accident and was devastated. Dr. Patel restored my smile with a dental implant that looks completely natural. The care I received was exceptional from start to finish. I highly recommend Confidential Clinic to anyone needing dental implants."
    },
    {
      name: "Robert M.",
      location: "Richmond",
      rating: 5,
      text: "The team at Confidential Clinic made getting dental implants a smooth and painless experience. Dr. Patel is clearly an expert in his field, and the support staff is friendly and efficient. My implants have been perfect for over two years now."
    },
    {
      name: "Patricia D.",
      location: "Surbiton",
      rating: 5,
      text: "I had multiple implants done at Confidential Clinic and couldn't be more pleased with the results. The procedure was much less uncomfortable than I expected, and the aftercare was superb. My new teeth look beautiful and natural."
    },
    {
      name: "Michael L.",
      location: "Kingston",
      rating: 5,
      text: "After researching several implant specialists, I chose Confidential Clinic based on their excellent reviews. I'm so glad I did! The entire process was well-explained, efficiently handled, and the results are fantastic. Worth every penny."
    },
    {
      name: "Sarah J.",
      location: "Twickenham",
      rating: 5,
      text: "I required bone grafting before my implants, which made me very nervous. Dr. Patel was incredibly skilled and reassuring throughout the entire process. Now that everything is complete, I couldn't be happier with my new smile."
    },
    {
      name: "David W.",
      location: "Kingston",
      rating: 5,
      text: "The same-day implant service at Confidential Clinic was perfect for my busy schedule. I walked in with a broken tooth and left with an implant and temporary crown. The final result is fantastic and the whole team was professional and caring."
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <div className="hero-section min-h-[60vh] flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-slide-in">
            Patient Testimonials
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Read what our patients have to say about their dental implant experience at Confidential Clinic.
          </p>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We're proud of the positive feedback we receive from our patients. Here are some of their stories.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-start mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <div className="w-20 h-1 bg-secondary mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Before & After</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1607604760190-ec4e806d0351?q=80&w=500&auto=format&fit=crop" 
                      alt="Before Dental Implant" 
                      className="rounded-lg shadow-md"
                    />
                    <p className="text-center mt-2 font-medium">Before</p>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1601063476524-3e1710bc8bf1?q=80&w=500&auto=format&fit=crop" 
                      alt="After Dental Implant" 
                      className="rounded-lg shadow-md"
                    />
                    <p className="text-center mt-2 font-medium">After</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  "I had been missing my front tooth for years and was too embarrassed to smile. Dr. Patel placed an implant that looks completely natural - now I can't stop smiling!"
                </p>
                <p className="font-medium text-primary mt-2">- Emma S., Kingston</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Full Mouth Reconstruction</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1571748982800-fa51082c2224?q=80&w=500&auto=format&fit=crop" 
                      alt="Before Full Mouth Reconstruction" 
                      className="rounded-lg shadow-md"
                    />
                    <p className="text-center mt-2 font-medium">Before</p>
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=500&auto=format&fit=crop" 
                      alt="After Full Mouth Reconstruction" 
                      className="rounded-lg shadow-md"
                    />
                    <p className="text-center mt-2 font-medium">After</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  "After years of dental problems, I needed a complete solution. The All-on-4 treatment at Confidential Clinic has given me back my quality of life."
                </p>
                <p className="font-medium text-primary mt-2">- Richard T., Surbiton</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                These are just a few examples of the life-changing results we've achieved for our patients. We're committed to providing the same level of exceptional care and outcomes for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default Testimonials;
