"use client";

import { Fragment, useCallback, useEffect, useState, type CSSProperties } from "react";
import VideoModal from "./VideoModal";
import { PRODUCT_VIDEO_ID } from "@/lib/site";
import { gridLines } from "@/lib/styles";

const rise = (delay: number, duration = 0.75): CSSProperties => ({
  animation: `tl-rise ${duration}s cubic-bezier(.2,.9,.25,1) ${delay}s both`,
});

const feeBars = [
  ["46%", "#C9D9F4"],
  ["58%", "#C9D9F4"],
  ["41%", "#C9D9F4"],
  ["70%", "#1F6BFF"],
  ["62%", "#C9D9F4"],
  ["88%", "#1F6BFF"],
  ["74%", "#C9D9F4"],
  ["96%", "#0F766E"],
] as const;

function useCountUp(duration = 1400) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(1 - Math.pow(1 - t, 3));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration]);

  return progress;
}

export default function Hero() {
  const k = useCountUp();
  const [videoOpen, setVideoOpen] = useState(false);
  const closeVideo = useCallback(() => setVideoOpen(false), []);

  const stats = [
    ["Students", Math.round(1248 * k).toLocaleString("en-US")],
    ["Staff", String(Math.round(86 * k))],
    ["Classes", String(Math.round(12 * k))],
  ];

  return (
    <section id="home" className="relative overflow-x-clip px-7 pb-10 pt-[152px]">
      <svg viewBox="0 0 200 120" aria-hidden="true" className="absolute -left-[26px] top-[30%] z-0 w-[130px] opacity-50" style={{ animation: "tl-float 10s ease-in-out infinite" }}>
        <path d="M12 96 C40 20, 80 18, 96 62 C110 100, 150 96, 168 44 C176 20, 190 26, 194 40" fill="none" stroke="#1F6BFF" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1400" style={{ animation: "tl-draw 2.4s ease-out both" }} />
      </svg>
      <svg viewBox="0 0 160 160" aria-hidden="true" className="absolute -right-[22px] top-[20%] z-0 w-[120px] opacity-45" style={{ animation: "tl-float2 12s ease-in-out infinite" }}>
        <path d="M80 14 C120 14, 148 44, 148 82 C148 122, 116 148, 78 148 C40 148, 14 118, 16 80 C18 44, 44 18, 78 16" fill="none" stroke="#0F766E" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="1400" style={{ animation: "tl-draw 2.8s ease-out both" }} />
      </svg>

      <div className="relative z-[2] mx-auto max-w-[1560px]">
        <p className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.16em] text-brand" style={rise(0, 0.8)}>
          <span className="inline-block size-[7px] shrink-0 rounded-full bg-brand" />
          Education infrastructure for measurable learning
        </p>

        <h1 className="mt-[30px] text-[clamp(38px,7.4vw,130px)] leading-[0.94] tracking-[-0.052em] text-ink">
          <span className="block">
            {["Run", "Every", "Institution."].map((word, index) => (
              <Fragment key={word}>
                <span className="inline-block" style={rise(0.05 + index * 0.05)}>{word}</span>{" "}
              </Fragment>
            ))}
          </span>
          <span className="block">
            <span className="inline-block" style={rise(0.2)}>Understand</span>{" "}
            <span className="relative inline-block pb-[0.1em] leading-[1.12]" style={rise(0.25)}>
              Every Learner.
              <span data-underline="" className="absolute inset-x-0 bottom-0 block h-[0.075em] origin-left bg-brand" />
            </span>
          </span>
        </h1>

        <div className="mt-[52px] grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-12">
          <div className="min-w-0" style={rise(0.4, 0.8)}>
            <p className="max-w-[640px] text-pretty text-[clamp(17px,1.3vw,21px)] leading-[1.6] text-body">
              Talim connects school operations, academic data, finance, communication, and stakeholder experiences in one intelligent platform—so institutions make better decisions and every learner can succeed.
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <a data-btn="" href="#solutions" className="inline-flex items-center gap-2.5 rounded-full bg-brand px-[34px] py-[21px] text-[17px] font-bold text-white hover:text-white">
                Explore portals <span aria-hidden="true">→</span>
              </a>
              <button data-btn="" type="button" onClick={() => setVideoOpen(true)} className="inline-flex cursor-pointer items-center gap-3 rounded-full bg-white px-[34px] py-[21px] text-[17px] font-bold text-ink shadow-[0_1px_3px_rgba(11,37,69,0.1)]">
                <span aria-hidden="true" className="inline-flex size-[26px] items-center justify-center rounded-full bg-ink text-[11px] text-white">▶</span>
                Watch product tour
              </button>
            </div>
            <p className="mt-[30px] font-hand text-[27px] text-body">one connected system for every stakeholder</p>
          </div>

          <div className="relative min-w-0" style={rise(0.5, 0.9)}>
            <div className="relative overflow-hidden rounded-[26px] bg-brand p-4 sm:p-[26px]">
              <div aria-hidden="true" className="absolute inset-0" style={gridLines(0.09, 34)} />
              <div className="relative rounded-[18px] bg-white p-4 sm:p-[22px]">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-label">Talim Demo Academy</p>
                  <p className="flex items-center gap-[7px] text-xs font-bold text-pine">
                    <span className="inline-block size-[7px] rounded-full bg-pine" style={{ animation: "tl-float 2.4s ease-in-out infinite" }} />
                    Live
                  </p>
                </div>
                <div className="mt-[18px] grid grid-cols-3 gap-2.5">
                  {stats.map(([label, value]) => (
                    <div key={label} className="min-w-0 rounded-xl bg-mist p-3 sm:p-3.5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-label">{label}</p>
                      <p className="mt-[5px] font-display text-[clamp(16px,4.8vw,21px)] font-black tabular-nums">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3.5 rounded-[14px] bg-mist p-[18px]">
                  <div className="flex items-baseline justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-label">Fee collection</p>
                    <p className="text-[13px] font-bold text-pine">+2.4%</p>
                  </div>
                  <div className="mt-3 flex h-[86px] items-end gap-[7px]">
                    {feeBars.map(([height, color], index) => (
                      <div key={index} data-bar="" className="flex-1 rounded-t-[5px]" style={{ height, background: color }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-[22px] -left-[18px] rounded-[18px] bg-white px-5 py-4 shadow-[0_12px_34px_rgba(11,37,69,0.16)]" style={{ animation: "tl-float2 9s ease-in-out infinite" }}>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-label">Fee collection</p>
              <p className="font-display text-[30px] font-black leading-[1.1] tracking-[-0.03em] tabular-nums">{(94.3 * k).toFixed(1)}%</p>
              <p className="font-hand text-[21px] text-body">live overview</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-[1560px] border-t border-ink/10 pt-[30px]">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.18em] text-label">
          Connected school data &nbsp;·&nbsp; Role-based access &nbsp;·&nbsp; Secure infrastructure &nbsp;·&nbsp; Guided onboarding
        </p>
      </div>

      {videoOpen && <VideoModal videoId={PRODUCT_VIDEO_ID} onClose={closeVideo} />}
    </section>
  );
}
