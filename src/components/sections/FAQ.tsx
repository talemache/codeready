import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <div className="grid gap-3 lg:grid-cols-[1fr_2fr] lg:items-start border-b border-[color:var(--navy)]/10 pb-10 mb-12">
        <div>
          <span className="eyebrow">Questions</span>
          <span className="section-rule mt-3" aria-hidden />
          <h2 className="font-serif text-3xl sm:text-4xl leading-tight">Frequently asked</h2>
        </div>
        <p className="copy leading-relaxed lg:max-w-xl lg:mt-1">
          If your question isn't here,{" "}
          <a
            href="#contact"
            className="text-[color:var(--copper-deep)] font-medium hover:underline"
          >
            ask it directly
          </a>
          . I scope every engagement after a short conversation anyway.
        </p>
      </div>

      <Accordion type="single" collapsible className="">
        {FAQS.map((item, i) => (
          <AccordionItem
            key={item.question}
            value={`item-${i}`}
            className="border-[color:var(--navy)]/12"
          >
            <AccordionTrigger className="font-serif text-lg text-[color:var(--navy)] no-underline hover:no-underline text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="copy leading-relaxed max-w-3xl">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
