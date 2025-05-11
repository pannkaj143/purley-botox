
import { useRef } from 'react';
import { useAnimation } from '@/hooks/use-animation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { ref: sectionRef, isVisible } = useAnimation<HTMLDivElement>({
    threshold: 0.1
  });

  const faqs = [
    {
      question: "What is the average cost of dental implants?",
      answer: "On average, patients can expect to pay anywhere from £1,000 to £3,800 for a single tooth implant. The price of a dental implant usually includes the implant post, abutment, and crown. Additional costs may involve initial consultations, x-rays, and possible bone grafting, if necessary."
    },
    {
      question: "Can you get tooth implants on the NHS?",
      answer: "Implants are usually only available privately. They’re sometimes available on the NHS for patients whose face and teeth have been damaged, such as people who have had mouth cancer or an accident that’s knocked a tooth out."
    },
    {
      question: "How long do dental implants last?",
      answer: "With brushing, flossing and regular dental visits, implants can last a lifetime. The restoration part of your dental implant will need replacing at some point. Most crowns and bridges last around 15 years and most dentures last at least seven years, but this timeline varies."
    },
    {
      question: "Can implants be fitted in one day?",
      answer: "Many dentists offer same-day dental implants using advanced techniques to place and, almost immediately, load the implants. This procedure relies on the implants being placed so that they cannot move throughout the healing process."
    }
  ];

  return (
    <section ref={sectionRef} id="faq-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about dental implants and our services.
          </p>
        </div>

        <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg shadow-sm overflow-hidden">
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
      </div>
    </section>
  );
};

export default FAQSection;
