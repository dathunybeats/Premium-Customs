import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useFadeIn } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in vinyl wraps, window tint, headlight/taillight tint, chrome delete, custom graphics, and paint protection film. Professional installation with premium materials."
  },
  {
    question: "Where are you located and do you take appointments?",
    answer:
      "We operate in Houston, TX at 5335 E 5th St. Unit 523. We work by appointment and recommend booking in advance to secure a slot."
  },
  {
    question: "How long do services take?",
    answer:
      "Timing varies by service and vehicle. Small tint jobs can be done the same day. Full wraps typically take 2–5 days depending on complexity. We’ll give an ETA during booking."
  },
  {
    question: "What films and materials do you use?",
    answer:
      "We use high-quality brands selected for durability and finish. Options include gloss, matte, satin, color-shift, and stealth films. We’ll help you choose the best option for your car and budget."
  },
  {
    question: "How should I care for my wrap or tint?",
    answer:
      "Hand wash only, avoid harsh chemicals/abrasives, and keep the vehicle out of automatic brush washes. Use pH-neutral soaps and microfiber towels. We’ll provide care guidance at pickup."
  },
  {
    question: "Do you offer warranties?",
    answer:
      "Yes. Manufacturer warranties apply to films, and we guarantee installation workmanship. Warranty specifics depend on the product chosen; we’ll outline details on your estimate."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Cash and major credit/debit cards are accepted. Deposits may be required to reserve appointments on larger projects."
  },
  {
    question: "Can you help with design and custom graphics?",
    answer:
      "Absolutely. We can design, print, and install bespoke graphics and decals, from subtle accents to full branding packages."
  }
];

const FAQ = () => {
  const headerRef = useFadeIn(200);
  const accordionRef = useFadeIn(400);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div ref={headerRef} className="text-center mb-16">
            <p className="text-red-500 font-semibold mb-3 tracking-[0.2em] uppercase text-xs">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black tracking-tight">FREQUENTLY ASKED<br />QUESTIONS</h2>
            <p className="text-muted-foreground text-lg">Find answers to common questions about our mobile detailing services</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4" ref={accordionRef}>
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-black hover:text-red-500 transition-colors duration-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
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

export default FAQ;