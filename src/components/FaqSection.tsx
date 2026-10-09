import FaqAccordion, { type FaqItem } from "./FaqAccordion";
import { CONTACT_EMAIL } from "@/lib/site";

const faqs: FaqItem[] = [
  { question: "Which institutions can use Talim?", answer: "Talim supports primary and secondary schools, colleges, vocational institutes, training academies, and multi-campus school networks." },
  { question: "Can we migrate our existing records?", answer: "Yes. The onboarding process can include structured migration of student, staff, class, and academic records from your existing system." },
  { question: "What does onboarding involve?", answer: "Onboarding is planned around your institution and can include configuration, data preparation, role setup, and guided staff training." },
  { question: "Do parents and students receive accounts?", answer: "Yes. Each stakeholder can access a dedicated portal designed around the information and actions relevant to their role." },
  { question: "Can Talim support multiple campuses?", answer: "Yes. Talim is designed to connect operations and reporting across both single-campus and multi-campus institutions." },
  { question: "How is access to institutional data controlled?", answer: "Access is role-based, so users see the tools and records permitted for their responsibilities within the institution." },
];

/**
 * Homepage FAQ band: heading and contact button beside the shared accordion.
 *
 * @returns The FAQ section.
 */
export default function FaqSection() {
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

        <FaqAccordion items={faqs} idPrefix="faq" />
      </div>
    </section>
  );
}
