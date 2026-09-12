import { Fragment } from "react";

const capabilities = ["School Operations", "Academic Intelligence", "Connected Communication", "Financial Operations", "Parent Engagement", "Verified Records"];

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div aria-hidden={hidden || undefined} className="flex items-center gap-10 whitespace-nowrap pr-10 font-display text-[clamp(30px,4.2vw,68px)] font-black tracking-[-0.04em] text-white">
      {capabilities.map((capability, index) => (
        <Fragment key={capability}>
          <span className={index % 2 ? "text-sand" : undefined}>{capability}</span>
          <span aria-hidden="true" className={index % 2 ? undefined : "text-sand"}>·</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function CapabilityMarquee() {
  return (
    <div className="mt-[70px] overflow-hidden bg-brand py-[26px]">
      <div className="flex w-max" style={{ animation: "tl-marquee 40s linear infinite" }}>
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
    </div>
  );
}
