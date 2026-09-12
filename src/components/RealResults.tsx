import { revealRange } from "@/lib/styles";

const outcomes = [
  { title: "Less repetitive administration", body: "Connected workflows reduce duplicate entry across classes, attendance, results, and fees.", color: "text-brand" },
  { title: "Clearer stakeholder communication", body: "Announcements and updates reach the right administrators, teachers, parents, and students.", color: "text-pine" },
  { title: "Earlier visibility", body: "Decision-makers can see patterns while there is still time to respond—not after the term closes.", color: "text-ink" },
];

export default function RealResults() {
  return (
    <section aria-labelledby="outcomes-title" className="px-7 pb-10 pt-[90px]">
      <div className="mx-auto grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-11">
        <div>
          <p data-rise="" className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Practical outcomes</p>
          <h2 id="outcomes-title" data-wipe="" className="mt-[22px] text-[clamp(32px,4.4vw,72px)] leading-[0.98] tracking-[-0.048em]">
            Better systems create room for better learning.
          </h2>
        </div>
        <p data-rise="" className="pb-1.5 text-[19px] leading-[1.6] text-body">
          Until customer results are independently approved, we focus on the operational improvements Talim is designed to enable.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[18px]">
        {outcomes.map((outcome, index) => (
          <article key={outcome.title} data-rise="" data-lift="" style={revealRange(index * 4, 26 + index * 4)} className="rounded-[26px] bg-white px-[30px] pb-9 pt-8">
            <p className={`font-display text-[clamp(46px,5.4vw,82px)] font-black leading-[0.9] tracking-[-0.055em] ${outcome.color}`}>
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-[26px] text-2xl leading-[1.2] tracking-[-0.025em]">{outcome.title}</h3>
            <p className="mt-3.5 text-[17px] leading-[1.6] text-body">{outcome.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
