"use client";

import { useState } from "react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return <div className="space-y-3">{items.map((item, index) => {
    const open = openIndex === index;
    const answerId = `faq-answer-${index}`;
    return <section className="faq-item" key={item.question}>
      <h3><button aria-controls={answerId} aria-expanded={open} className="faq-summary w-full text-left" onClick={() => setOpenIndex(open ? null : index)} type="button">{item.question}</button></h3>
      <div className="faq-answer" hidden={!open} id={answerId}>{item.answer}</div>
    </section>;
  })}</div>;
}
