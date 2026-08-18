import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-20 sm:py-24">
      <div className="max-w-2xl">
        <span className="eyebrow">Questions</span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl">Frequently asked</h2>
      </div>

      <Accordion type="single" collapsible className="mt-10">
        {FAQS.map((item, i) => (
          <AccordionItem
            key={item.question}
            value={`item-${i}`}
            className="border-[color:var(--navy)]/12"
          >
            <AccordionTrigger className="font-serif text-lg text-[color:var(--navy)] no-underline hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[color:var(--navy)]/78 leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
