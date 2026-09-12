"use client";

import { useState } from "react";
import { gridLines } from "@/lib/styles";

const tabs = [
  { label: "Academic", metrics: [["92.1%", "attendance rate"], ["82.6%", "average score"], ["24", "needs attention"], ["12", "active classes"]] },
  { label: "Operational", metrics: [["1,248", "active students"], ["86", "staff accounts"], ["8", "campuses"], ["64", "courses"]] },
  { label: "Financial", metrics: [["94.3%", "fee collection"], ["₦8.45M", "wallet balance"], ["₦6.20M", "revenue this month"], ["1.3%", "overdue"]] },
];

const bars = [
  ["46%", "#C9D9F4"],
  ["62%", "#C9D9F4"],
  ["38%", "#C9D9F4"],
  ["71%", "#1F6BFF"],
  ["54%", "#C9D9F4"],
  ["80%", "#1F6BFF"],
  ["66%", "#C9D9F4"],
  ["92%", "#0F766E"],
  ["74%", "#C9D9F4"],
  ["86%", "#1F6BFF"],
] as const;

export default function DataDrivenSection() {
  const [active, setActive] = useState(2);

  return (
    <section id="analytics" aria-labelledby="analytics-title" className="px-7 pb-10 pt-[70px]">
      <div data-rise="" className="relative mx-auto max-w-[1560px] overflow-hidden rounded-[32px] bg-brand p-5 sm:p-12">
        <div aria-hidden="true" className="absolute inset-0" style={gridLines(0.08, 44)} />
        <div className="relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-10">
          <div className="min-w-0 rounded-3xl bg-white p-4 sm:p-7">
            <div className="flex flex-nowrap gap-2 overflow-x-auto [scrollbar-width:none]">
              {tabs.map((tab, index) => (
                <button
                  key={tab.label}
                  type="button"
                  data-btn=""
                  aria-pressed={active === index}
                  onClick={() => setActive(index)}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-[22px] py-[11px] text-sm font-bold ${active === index ? "bg-ink text-white" : "bg-mist text-ink"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div key={active} className="mt-6 grid grid-cols-2 gap-3" style={{ animation: "tl-fade .4s cubic-bezier(.2,.8,.2,1) both" }}>
              {tabs[active].metrics.map(([value, label]) => (
                <div key={label} className="min-w-0 rounded-2xl bg-mist p-3.5 sm:p-[18px]">
                  <p className="font-display text-[clamp(22px,6vw,30px)] font-black tracking-[-0.035em]">{value}</p>
                  <p className="mt-0.5 font-hand text-[21px] leading-tight text-body">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-3.5 flex h-[180px] items-end gap-2 rounded-2xl bg-mist p-[22px]">
              {bars.map(([height, color], index) => (
                <div key={index} data-bar="" className="flex-1 rounded-t-md" style={{ height, background: color }} />
              ))}
            </div>
            <p className="mt-4 text-sm text-muted">Illustrative demo data—not customer-wide statistics.</p>
          </div>

          <div className="min-w-0 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.16em]">Data that drives excellence</p>
            <h2 id="analytics-title" className="mt-[22px] text-[clamp(32px,4.2vw,64px)] leading-[0.98] tracking-[-0.05em]">
              See what is changing before the term ends.
            </h2>
            <p className="mt-[22px] text-[19px] leading-[1.6]">Identify patterns in learning, operations, and finance early enough to take meaningful action.</p>
            <a data-btn="" href="#product-tour" className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-[34px] py-[19px] text-[17px] font-bold text-ink hover:text-ink">
              See it in the tour <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
