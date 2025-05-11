
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const generalFaqs = [
    {
      question: "What is the average cost of dental implants?",
      answer: "On average, patients can expect to pay anywhere from £1,500 to £2,500 for a single tooth implant. The price of a dental implant usually includes the implant post, the abutment, and the crown. It can vary depending on your specific needs, the complexity of your case, and whether any additional procedures like bone grafting are required. At Confidential Clinic, we offer transparent pricing and various financing options to make dental implants more accessible."
    },
    {
      question: "Can you get tooth implants on the NHS?",
      answer: "Dental implants are usually only available on the NHS if there's a medical need, such as mouth cancer resulting in missing teeth. Most implants are done privately. At Confidential Clinic, we work with various insurance providers and offer payment plans to help make your treatment more affordable."
    },
    {
      question: "How long do dental implants last?",
      answer: "With proper care and maintenance, dental implants can last a lifetime. The crown attached to the implant may need replacement after 10-15 years due to normal wear and tear. Regular dental check-ups, good oral hygiene, and avoiding habits like smoking can significantly extend the life of your dental implants."
    },
    {
      question: "Can implants be fitted in one day?",
      answer: "Yes, same-day implants (also known as immediate load dental implants) are possible in many cases. However, not everyone is a candidate for this procedure. A thorough evaluation is needed to determine if you're eligible. At Confidential Clinic, we offer same-day implant services for suitable candidates, allowing you to leave with a temporary restoration on the same day as your implant placement."
    }
  ];

  const proceduralFaqs = [
    {
      question: "Is the dental implant procedure painful?",
      answer: "Most patients report that the discomfort during the implant procedure is less than they expected. We use local anesthesia to ensure you're comfortable during the procedure, and sedation options are available for anxious patients. After the procedure, any discomfort can typically be managed with over-the-counter pain medications. Our patients often tell us they were pleasantly surprised by how painless the process was."
    },
    {
      question: "How long does the entire implant process take?",
      answer: "The entire process typically takes 3-6 months from the initial consultation to the final restoration. This timeline can vary depending on your specific case, particularly if bone grafting is required. The surgical placement of the implant itself usually takes 1-2 hours per implant. After placement, there's a healing period of 3-6 months before the final restoration is attached. For eligible patients, we offer same-day implants which significantly reduce this timeline."
    },
    {
      question: "What if I don't have enough bone for an implant?",
      answer: "If you don't have sufficient jawbone to support an implant, we can perform a bone grafting procedure to build up the bone. This is a common procedure that involves adding bone or bone-like material to your jaw to create a solid foundation for the implant. While this adds some time to the overall treatment process, it significantly improves the long-term success of your implants."
    },
    {
      question: "What are the success rates of dental implants?",
      answer: "Dental implants have a success rate of approximately 95-98%, making them one of the most reliable dental procedures available. Factors that can affect success include the patient's overall health, oral hygiene practices, and whether they smoke. At Confidential Clinic, our success rates exceed the industry average due to our advanced techniques and experienced implant specialists."
    }
  ];

  const careFaqs = [
    {
      question: "How do I care for my dental implants?",
      answer: "Caring for dental implants is similar to caring for your natural teeth. This includes brushing twice a day, flossing daily, and regular dental check-ups. We recommend using a soft-bristled toothbrush and non-abrasive toothpaste. Special floss or interdental brushes may be recommended for cleaning around the implants. Professional cleanings by our hygienist are also important to maintain the health of your implants and surrounding tissues."
    },
    {
      question: "Can I eat normally with dental implants?",
      answer: "Yes, one of the major benefits of dental implants is that they allow you to eat virtually anything you could with natural teeth. Unlike removable dentures, implants are stable and secure, allowing you to bite and chew with confidence. However, we recommend avoiding extremely hard foods that could potentially damage even natural teeth, such as ice or hard candy."
    },
    {
      question: "Will my dental implants look natural?",
      answer: "Absolutely! Our dental implants are designed to look, feel, and function like your natural teeth. We carefully match the color, shape, and size of your restoration to blend seamlessly with your existing teeth. Most people won't be able to tell which tooth is the implant. Our patients often comment that even they forget which tooth was replaced with an implant."
    },
    {
      question: "Can implants fail, and if so, why?",
      answer: "While dental implants have a high success rate, failures can occur. Early failures (within the first few months) are usually due to factors like poor osseointegration (the implant not fusing properly with the bone), infection, or implant movement before healing is complete. Late failures can be caused by peri-implantitis (similar to gum disease), excessive bite forces, or systemic health issues. Smoking significantly increases the risk of implant failure. At Confidential Clinic, we carefully evaluate all risk factors beforehand and provide comprehensive aftercare to minimize the risk of failure."
    }
  ];

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      
      <div className="hero-section min-h-[60vh] flex items-center justify-center pt-16">
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-slide-in">
            Frequently Asked Questions
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white animate-slide-in" style={{ animationDelay: '0.2s' }}>
            Get answers to the most common questions about dental implants and our services.
          </p>
        </div>
      </div>
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">General Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {generalFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`general-${index}`} className="border rounded-lg shadow-sm overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left text-primary font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-6">Procedure Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {proceduralFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`procedural-${index}`} className="border rounded-lg shadow-sm overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left text-primary font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Aftercare Questions</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {careFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`care-${index}`} className="border rounded-lg shadow-sm overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left text-primary font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-16 text-center p-8 bg-gray-50 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Still Have Questions?</h3>
              <p className="text-gray-700 mb-6">
                We understand that dental implants are a significant investment in your health and well-being. 
                If you have any questions that aren't answered here, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/contact" className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-md transition-colors">
                  Contact Us
                </a>
                <a href="tel:+441234567890" className="bg-white border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-md transition-colors">
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection />
      <Footer />
    </div>
  );
};

export default FAQ;
