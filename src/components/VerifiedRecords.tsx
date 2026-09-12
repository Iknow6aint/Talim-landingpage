import BrandMark from "./BrandMark";
import { WAITLIST_HREF } from "@/lib/site";

const promises = [
  "Cryptographically signed academic records",
  "Verifiable by employers and institutions worldwide",
  "Designed to make unauthorized changes detectable",
  "Built toward portable credential verification",
];

const grades = [
  ["Mathematics", "A1"],
  ["English Language", "A2"],
  ["Physics", "B2"],
  ["Chemistry", "B3"],
];

export default function VerifiedRecords() {
  return (
    <section id="verified-records" aria-labelledby="records-title" className="px-7 pb-10 pt-[100px]">
      <div className="mx-auto grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-[52px]">
        <div className="min-w-0">
          <p data-rise="" className="text-xs font-bold uppercase tracking-[0.16em] text-pine">Verified records</p>
          <h2 id="records-title" data-wipe="" className="mt-[22px] text-[clamp(32px,4.4vw,68px)] leading-[0.98] tracking-[-0.05em]">
            Your Degree Should Be as Verifiable as{" "}
            <span className="inline-block rounded-[14px] bg-pine px-[0.2em] pb-[0.1em] pt-[0.02em] text-white">Your Passport.</span>
          </h2>
          <p data-rise="" className="mt-[26px] text-lg leading-[1.65] text-body">
            We&apos;re exploring a future where academic milestones can be securely issued and independently checked by authorized employers, universities, and institutions.
          </p>
          <p data-rise="" className="mt-[18px] text-lg leading-[1.65] text-body">
            The goal is a portable academic record that learners can carry across institutions while issuers retain clear control over authenticity and access.
          </p>
          <ul data-rise="" className="mt-[30px] flex flex-col gap-3">
            {promises.map((promise) => (
              <li key={promise} className="flex items-center gap-[13px] text-[17px]">
                <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-full bg-pine text-xs font-bold text-white">✓</span>
                {promise}
              </li>
            ))}
          </ul>
          <a data-btn="" href={WAITLIST_HREF} className="mt-[34px] inline-flex items-center gap-2.5 rounded-full bg-ink px-9 py-5 text-[17px] font-bold text-white hover:text-white">
            Join the Waitlist <span aria-hidden="true">→</span>
          </a>
        </div>

        <div data-rise="" className="relative min-w-0">
          <p className="absolute -right-1.5 -top-[22px] z-[2] rounded-full bg-pine px-5 py-[11px] text-sm font-bold text-white shadow-[0_10px_26px_rgba(15,118,110,0.28)]" style={{ animation: "tl-float2 8s ease-in-out infinite" }}>
            Verifiable globally
          </p>
          <div data-lift="" className="rounded-[26px] bg-white p-5 shadow-[0_18px_50px_rgba(11,37,69,0.12)] sm:p-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[11px]">
                <BrandMark size={32} />
                <span className="font-display text-xl font-black tracking-[-0.03em]">Talim</span>
              </div>
              <span className="rounded-full bg-[#E3F3F0] px-3.5 py-1.5 text-[13px] font-bold text-pine">Verified</span>
            </div>
            <div className="mt-[22px] rounded-[18px] bg-mist p-[22px]">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">Academic certificate</p>
              <p className="mt-[9px] font-display text-2xl font-black leading-[1.18] tracking-[-0.028em]">West African Senior School Certificate</p>
              <p className="mt-[9px] font-hand text-[22px] text-body">Issued: June 2024</p>
            </div>
            <dl className="mt-5 flex flex-col gap-3">
              {grades.map(([subject, grade]) => (
                <div key={subject} className="flex items-center justify-between text-[17px]">
                  <dt>{subject}</dt>
                  <dd className="rounded-lg bg-mist px-3 py-[3px] font-bold">{grade}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-[22px] flex items-end justify-between border-t border-ink/10 pt-[18px]">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">Record hash</p>
                <p className="mt-[5px] font-mono text-sm">a3f9c2...8e4d1b</p>
              </div>
              <p className="text-sm font-bold text-pine">Authentic</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
