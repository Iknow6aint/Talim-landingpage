import { revealRange } from "@/lib/styles";

export default function PlatformPillars() {
  return (
    <section aria-labelledby="pillars-title" className="px-7 pb-[30px] pt-[100px]">
      <div className="mx-auto max-w-[1560px] text-center">
        <p data-rise="" className="text-xs font-bold uppercase tracking-[0.16em] text-brand">What Talim actually is</p>
        <h2 id="pillars-title" data-wipe="" className="mx-auto mt-[22px] max-w-[960px] text-[clamp(34px,5.2vw,86px)] leading-[0.96] tracking-[-0.05em]">
          One platform. Every workflow.
        </h2>
      </div>

      <div className="mx-auto mt-14 flex max-w-[1560px] flex-wrap gap-5">
        <article data-rise="" data-lift="" className="flex min-h-[340px] flex-[1.55_1_min(100%,420px)] flex-col justify-between rounded-[26px] bg-ink p-7 text-cream sm:p-9">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-sky">Operate</p>
          <div>
            <h3 className="text-[clamp(26px,2.7vw,42px)] leading-[1.04] tracking-[-0.035em] text-white">Coordinate the whole school day from one place.</h3>
            <p className="mt-4 max-w-[520px] text-[17px] leading-[1.6] text-[#D5E3F3]">Admissions, classes, attendance, timetable and approvals stay in step, so nothing is entered twice.</p>
          </div>
        </article>

        <article data-rise="" data-lift="" style={revealRange(3, 29)} className="flex min-h-[340px] flex-[1_1_min(100%,420px)] flex-col justify-between rounded-[26px] bg-brand p-7 text-white sm:p-9">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em]">Measure</p>
          <div>
            <p className="font-display text-[clamp(46px,5.6vw,88px)] font-black leading-[0.9] tracking-[-0.05em]">94.3%</p>
            <h3 className="mt-4 text-2xl leading-[1.2]">Fee collection, visible today.</h3>
            <p className="mt-3 text-[17px] leading-[1.55]">Academic, operational and financial patterns while there is still time to respond.</p>
          </div>
        </article>

        <article data-rise="" data-lift="" style={revealRange(6, 32)} className="flex min-h-[300px] flex-[1_1_min(100%,420px)] flex-col justify-between rounded-[26px] bg-sand p-7 sm:p-9">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#544F3E]">Teach</p>
          <div>
            <h3 className="text-[26px] leading-[1.15] tracking-[-0.02em]">Teach, grade, and track progress.</h3>
            <p className="mt-3.5 text-[17px] leading-[1.6] text-[#35404F]">Lesson planning, assessments and results recorded inside the classroom flow.</p>
          </div>
        </article>

        <article data-rise="" data-lift="" style={revealRange(9, 35)} className="flex min-h-[300px] flex-[1.55_1_min(100%,420px)] flex-col justify-between rounded-[26px] bg-pine p-7 text-white sm:p-9">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em]">Connect</p>
          <div>
            <h3 className="text-[26px] leading-[1.15] tracking-[-0.02em]">Four portals, one shared record.</h3>
            <p className="mt-3.5 text-[17px] leading-[1.6]">Announcements, messages, requests and approvals reach the right people.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
