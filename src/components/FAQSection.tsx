
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
      question: "Is treatment safe?",
      answer: "Botulinum Toxin as a muscle relaxant has an excellent safety record and a long record of use in medicine. It has been used successfully in adults and children in variety medical conditions over the last 20 years. It has been used cosmetically to treat facial wrinkles for about 15 years and has become one of the most popular and frequently used cosmetic treatments."
    },
    {
      question: "What is the average cost?",
      answer: "On average, patients can expect to pay anywhere from £175 to £400. The price varies depending on the zone and difficulty of the treatment."
    },
    {
      question: "How long does treatment last?",
      answer: "Treatment usually lasts few months before the affects wear off but with repeated treatment this can last longer."
    },
    
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
