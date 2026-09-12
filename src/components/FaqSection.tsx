"use client";

import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

const faqs = [
  ["Which institutions can use Talim?", "Talim supports primary and secondary schools, colleges, vocational institutes, training academies, and multi-campus school networks."],
  ["Can we migrate our existing records?", "Yes. The onboarding process can include structured migration of student, staff, class, and academic records from your existing system."],
  ["What does onboarding involve?", "Onboarding is planned around your institution and can include configuration, data preparation, role setup, and guided staff training."],
  ["Do parents and students receive accounts?", "Yes. Each stakeholder can access a dedicated portal designed around the information and actions relevant to their role."],
  ["Can Talim support multiple campuses?", "Yes. Talim is designed to connect operations and reporting across both single-campus and multi-campus institutions."],
  ["How is access to institutional data controlled?", "Access is role-based, so users see the tools and records permitted for their responsibilities within the institution."],
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" aria-labelledby="faq-title" className="px-7 pb-10 pt-[100px]">
      <div className="mx-auto grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-[52px]">
        <div className="min-w-0">
          <p data-rise="" className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Frequently asked questions</p>
          <h2 id="faq-title" data-wipe="" className="mt-[22px] text-[clamp(32px,4.2vw,62px)] leading-[0.98] tracking-[-0.05em]">
            A smooth transition starts with clear answers.
          </h2>
          <p data-rise="" className="mt-6 text-lg leading-[1.6] text-body">
            Every institution is different. These answers cover the most common questions before onboarding begins.
          </p>
          <a data-btn="" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Question about Talim")}`} className="mt-[30px] inline-flex rounded-full bg-ink px-[34px] py-[19px] text-[17px] font-bold text-white hover:text-white">
            Ask another question
          </a>
        </div>

        <div className="flex min-w-0 flex-col gap-2.5">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div key={question} className={`rounded-[20px] transition-colors duration-200 ${isOpen ? "bg-white" : "bg-white/55"}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={isOpen ? `faq-answer-${index}` : undefined}
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
                  <p id={`faq-answer-${index}`} className="-mt-2.5 max-w-[640px] px-[22px] pb-6 text-[17px] leading-[1.6] text-body sm:px-[26px]" style={{ animation: "tl-fade .4s cubic-bezier(.2,.8,.2,1) both" }}>
                    {answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
