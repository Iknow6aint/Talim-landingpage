import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRIVACY_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy and terms — Talim",
  description:
    "What Talim collects, who controls it, how it is secured, and the terms on which the platform is provided to institutions.",
  alternates: { canonical: "/legal" },
};

const sections = [
  {
    id: "collect",
    num: "01",
    title: "What we collect",
    body: "Talim stores the records an institution needs to operate: learner and staff profiles, enrolment and class assignment, attendance, assessment results, fee and payment records, messages sent through the platform, and the technical logs that keep accounts secure.",
    items: [
      "Identity and contact details for staff, guardians and learners",
      "Academic records: attendance, assessments, results and progress",
      "Financial records: invoices, payments, receipts and balances",
      "Usage and security logs tied to each account",
    ],
  },
  {
    id: "controller",
    num: "02",
    title: "Who controls the data",
    body: "The institution is the data controller. Talim is the processor: we hold and process records on the institution's instructions and do not sell, rent or trade them, and we do not use learner data to train advertising or third-party models.",
    items: [],
  },
  {
    id: "use",
    num: "03",
    title: "How it is used",
    body: "Data is used to deliver the platform to the people entitled to see it, to keep accounts secure, and to produce the reports the institution asks for. Access is role-based, so each user sees only what their role permits within their institution.",
    items: [],
  },
  {
    id: "children",
    num: "04",
    title: "Children's data",
    body: "Records about minors are only ever created and managed under the authority of the institution and the guardian relationship it records. Guardians access their own children's records through the Parent portal; no learner record is publicly addressable.",
    items: [],
  },
  {
    id: "security",
    num: "05",
    title: "Security and retention",
    body: "Data is encrypted in transit and at rest, access is authenticated per role, and administrative actions are logged. Records are retained for as long as the institution's agreement and local education record-keeping requirements need, and are exported or deleted on the institution's instruction when that period ends.",
    items: [],
  },
  {
    id: "rights",
    num: "06",
    title: "Your rights",
    body: `Individuals may request access to their records, correction of inaccurate entries, export of their data, or deletion where retention rules allow. Requests are made through the institution, which we support directly. Write to ${PRIVACY_EMAIL} and we will route it.`,
    items: [],
  },
  {
    id: "terms",
    num: "07",
    title: "Terms of service",
    body: "Talim is provided to institutions under a written agreement covering subscription scope, uptime, support, onboarding and data ownership. Institutions retain ownership of their records at all times. Accounts are for named users and may not be shared. Service may be suspended for non-payment or for use that endangers other customers' data. The full agreement, including service levels and the data processing addendum, is issued at contracting and forms the binding terms.",
    items: [],
  },
];

export default function LegalPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <section className="px-7 pb-[30px] pt-[170px]">
          <div className="mx-auto max-w-[1560px]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand" style={{ animation: "tl-rise .7s cubic-bezier(.2,.8,.2,1) both" }}>
              Legal
            </p>
            <h1 className="mt-6 max-w-[1000px] text-[clamp(40px,6.4vw,104px)] leading-[0.92] tracking-[-0.052em]" style={{ animation: "tl-rise .8s cubic-bezier(.2,.9,.25,1) .08s both" }}>
              Privacy policy and terms.
            </h1>
            <p className="mt-[26px] max-w-[660px] text-[19px] leading-[1.6] text-body" style={{ animation: "tl-rise .8s cubic-bezier(.2,.8,.2,1) .16s both" }}>
              Talim holds records about children. These pages set out what we collect, who controls it, and on what terms the platform is provided.
            </p>
            <p className="mt-[26px] inline-flex items-center gap-2.5 rounded-full bg-sand px-[18px] py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[#544F3E]" style={{ animation: "tl-rise .8s cubic-bezier(.2,.8,.2,1) .22s both" }}>
              Draft · Pending legal review · Last updated September 2026
            </p>
          </div>
        </section>

        <section className="px-7 py-10">
          <div className="mx-auto grid max-w-[1560px] items-start gap-11 lg:grid-cols-[260px_minmax(0,1fr)]">
            <nav aria-label="On this page" className="min-w-0 lg:sticky lg:top-[110px]">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">On this page</p>
              <ul className="mt-[18px] flex flex-col items-start gap-[11px] text-base">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a data-foot-link="" href={`#${section.id}`} className="text-ink">
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
              <a data-btn="" href={`mailto:${PRIVACY_EMAIL}`} className="mt-[26px] inline-flex rounded-full bg-ink px-6 py-[15px] text-[15px] font-bold text-white hover:text-white">
                Contact our DPO
              </a>
            </nav>

            <div className="flex min-w-0 flex-col gap-3.5">
              {sections.map((section) => (
                <article key={section.id} id={section.id} data-rise="" className="scroll-mt-[110px] rounded-[26px] bg-white p-6 sm:p-[34px]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">{section.num}</p>
                  <h2 className="mt-3.5 text-[clamp(24px,2.6vw,36px)] leading-[1.1] tracking-[-0.035em]">{section.title}</h2>
                  <p className="mt-[18px] max-w-[720px] text-pretty text-[17px] leading-[1.7] text-body">{section.body}</p>
                  {section.items.length > 0 && (
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[17px] leading-[1.5]">
                          <span className="mt-[9px] size-[7px] shrink-0 rounded-full bg-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
