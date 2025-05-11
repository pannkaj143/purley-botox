
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Smile?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Book your consultation today and take the first step towards a confident smile with our expert dental implant solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-primary hover:bg-gray-200 text-lg px-8 py-6">
            Book Appointment
          </Button>
          <Button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary transition-colors text-lg px-8 py-6">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
