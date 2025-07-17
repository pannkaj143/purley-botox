
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
      question: "Are facial aesthetic treatments safe?",
      answer: "Yes, facial aesthetic treatments using anti-wrinkle injections have an excellent safety record and a long history of use in medicine. They have been used successfully in adults for various medical conditions over the last 20 years and cosmetically to treat facial wrinkles for about 15 years, becoming one of the most popular and frequently used cosmetic treatments worldwide."
    },
    {
      question: "What is the average cost of facial aesthetic treatments?",
      answer: "On average, patients can expect to pay anywhere from £175 to £400 per treatment area. The price varies depending on the treatment zone, complexity, and the number of areas being treated. We offer free consultations to provide accurate pricing based on your individual needs."
    },
    {
      question: "How long do the results last?",
      answer: "Treatment results typically last 3-4 months before the effects gradually wear off. With repeated treatments, many patients find that the results can last progressively longer as the muscles become trained to relax. Individual results may vary based on factors such as age, skin condition, and lifestyle."
    },
    {
      question: "What should I expect during my first consultation?",
      answer: "During your free consultation, our experienced practitioner will assess your facial anatomy, discuss your aesthetic goals, and create a personalized treatment plan. We'll explain the procedure, discuss expected results, and answer any questions you may have about the treatment process."
    },
    {
      question: "Is there any downtime after treatment?",
      answer: "Facial aesthetic treatments are minimally invasive with little to no downtime. You can typically return to your normal activities immediately after treatment. Some patients may experience minor redness or swelling at injection sites, which usually resolves within a few hours to a day."
    }
  ];

  return (
    <section ref={sectionRef} id="faq-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about facial aesthetic treatments and our services.
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
