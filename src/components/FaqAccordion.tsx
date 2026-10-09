"use client";

import { useState, type ReactNode } from "react";

export type FaqItem = { question: string; answer: ReactNode };

type FaqAccordionProps = {
  items: FaqItem[];
  /** Prefix for the answer ids, so two accordions can share a page. */
  idPrefix: string;
  /** Index open on first render; -1 starts with every answer closed. */
  defaultOpen?: number;
};

/**
 * Single-open question and answer list used by the homepage FAQ and the support page.
 *
 * @param props - The questions, an id prefix and the initially open index.
 * @returns The accordion.
 */
export default function FaqAccordion({ items, idPrefix, defaultOpen = 0 }: FaqAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="flex min-w-0 flex-col gap-2.5">
      {items.map(({ question, answer }, index) => {
        const isOpen = open === index;
        const answerId = `${idPrefix}-answer-${index}`;
        return (
          <div key={question} className={`rounded-[20px] transition-colors duration-200 ${isOpen ? "bg-white" : "bg-white/55"}`}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={isOpen ? answerId : undefined}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex w-full cursor-pointer items-start justify-between gap-5 px-[22px] py-6 text-left text-xl tracking-[-0.022em] sm:px-[26px]"
              >
                {question}
                <span aria-hidden="true" className="text-2xl font-normal leading-none text-brand transition-transform duration-300" style={{ transform: isOpen ? "rotate(135deg)" : "none" }}>
                  +
                </span>
              </button>
            </h3>
            {isOpen && (
              <div id={answerId} className="-mt-2.5 max-w-[640px] px-[22px] pb-6 text-[17px] leading-[1.6] text-body sm:px-[26px]" style={{ animation: "tl-fade .4s cubic-bezier(.2,.8,.2,1) both" }}>
                {answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
