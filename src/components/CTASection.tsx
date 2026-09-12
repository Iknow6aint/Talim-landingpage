import BrandMark from "./BrandMark";
import { DEMO_HREF } from "@/lib/site";
import { gridLines } from "@/lib/styles";

export default function CTASection() {
  return (
    <section aria-labelledby="cta-title" className="px-7 pb-[90px] pt-[70px]">
      <div data-rise="" className="relative mx-auto max-w-[1560px] overflow-hidden rounded-[34px] bg-ink px-6 py-[clamp(54px,7vw,96px)] text-center sm:px-11">
        <div aria-hidden="true" className="absolute inset-0" style={gridLines(0.05, 46)} />
        <svg viewBox="0 0 140 100" aria-hidden="true" className="absolute left-[5%] top-[16%] w-[100px] opacity-45" style={{ animation: "tl-float 11s ease-in-out infinite" }}>
          <path d="M8 78 C34 24, 62 88, 88 40 C104 12, 126 34, 132 58" fill="none" stroke="#6FA3FF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <svg viewBox="0 0 120 120" aria-hidden="true" className="absolute bottom-[14%] right-[6%] w-[92px] opacity-40" style={{ animation: "tl-float2 13s ease-in-out infinite" }}>
          <path d="M60 12 C90 12, 110 36, 108 64 C106 94, 82 110, 56 108 C30 106, 12 84, 14 58 C16 34, 36 14, 58 14" fill="none" stroke="#6FA3FF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>

        <div className="relative">
          <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-2.5">
            <BrandMark size={24} />
            <span className="font-display text-base font-black text-white">Talim</span>
            <span className="hidden font-hand text-[21px] text-[#C9DCF8] sm:inline">built for measurable learning</span>
          </div>
          <h2 id="cta-title" className="mx-auto mt-[34px] max-w-[1100px] text-[clamp(40px,7vw,120px)] leading-[0.92] tracking-[-0.055em] text-white">
            Let&apos;s Make Every Learning Moment Count.
          </h2>
          <p className="mx-auto mt-7 max-w-[720px] text-[19px] leading-[1.6] text-[#C9DCF8]">
            Give every institution the operational clarity to notice progress, respond earlier and help every learner move forward.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3.5">
            <a data-btn="" href="#product-tour" className="inline-flex items-center gap-2.5 rounded-full bg-brand px-[38px] py-[21px] text-lg font-bold text-white hover:text-white">
              See Talim in action <span aria-hidden="true">↗</span>
            </a>
            <a data-btn="" href={DEMO_HREF} className="inline-flex items-center rounded-full bg-white/12 px-[38px] py-[21px] text-lg font-bold text-white hover:text-white">
              Book a demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
