import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle, MessageCircle } from "lucide-react";

export type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
};

const FAQAccordion = ({ 
  title = "Questions Fréquentes", 
  subtitle,
  items,
  className = ""
}: FAQAccordionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <section className={`section-padding bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden ${className}`}>
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full"></div>
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="badge-accent mb-4 inline-flex">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          <h2 className="section-title text-center">
            {title}
          </h2>
          {subtitle && (
            <p className="section-subtitle text-center mt-3">
              {subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {items.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="rounded-xl border bg-card/80 backdrop-blur-sm px-2 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <AccordionTrigger className="px-4 py-5 text-left hover:no-underline group">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                      <MessageCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors text-base md:text-lg">
                      {item.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 pt-0">
                  <div className="pl-11 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQAccordion;