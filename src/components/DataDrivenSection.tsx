"use client";

import { useState } from "react";

const datasets = {
  Academic: { stats: [["92.1%","Attendance rate"],["82.6%","Average score"],["24","Needs attention"],["12","Active classes"]], bars: [40,55,48,70,62,80,75,90,68,85,95,88] },
  Operational: { stats: [["1,248","Active students"],["86","Staff accounts"],["8","Campuses"],["64","Courses"]], bars: [65,60,72,58,80,76,62,70,85,90,78,82] },
  Financial: { stats: [["94.3%","Collection rate"],["4","Payment channels"],["2h","Reconciliation"],["18","Fee categories"]], bars: [30,45,38,52,48,60,55,68,72,65,80,76] },
} as const;

type Dataset = keyof typeof datasets;

export default function DataDrivenSection() {
  const [active, setActive] = useState<Dataset>("Academic");
  const data = datasets[active];
  return <section id="analytics" className="relative overflow-hidden bg-[#041525] px-5 py-24 sm:py-28">
    <div className="absolute inset-0 talim-dot-grid opacity-25" />
    <div className="relative mx-auto max-w-[1160px] text-center">
      <p className="text-xs font-extrabold uppercase tracking-[.16em] text-blue-300">Data that drives excellence</p>
      <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">See what is changing before the term ends.</h2>
      <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/50">Identify patterns in learning, operations, and finance early enough to take meaningful action.</p>
      <div className="mt-9 flex justify-center gap-2">{(Object.keys(datasets) as Dataset[]).map(label => <button key={label} onClick={() => setActive(label)} className={`rounded-full border px-4 py-2.5 text-xs font-bold transition sm:px-6 ${active === label ? "border-[#2563EB] bg-[#2563EB] text-white" : "border-white/15 text-white/50 hover:border-white/30"}`}>{label}</button>)}</div>
      <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[.035] p-5 text-left sm:p-9">
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">{data.stats.map(([value,label]) => <div key={label}><p className="font-display text-2xl font-extrabold text-white sm:text-3xl">{value}</p><p className="mt-1 text-xs font-semibold text-white/35">{label}</p></div>)}</div>
        <div className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_.65fr]">
          <div className="flex h-56 items-end gap-2 rounded-2xl bg-white/[.025] p-5">{data.bars.map((height,index)=><span key={index} className="flex-1 rounded-t bg-gradient-to-t from-[#174d9b] to-[#3B82F6] transition-[height] duration-500" style={{height:`${height}%`}} />)}</div>
          <div className="rounded-2xl bg-white/[.025] p-5"><p className="text-[11px] font-bold uppercase tracking-wider text-white/35">Activity map</p><div className="mt-5 grid grid-cols-7 gap-2">{Array.from({length:35},(_,index)=><span key={index} className="aspect-square rounded-md bg-blue-500" style={{opacity:.18 + ((index*37)%72)/100}} />)}</div><p className="mt-5 text-xs leading-5 text-white/35">Illustrative demo data—not customer-wide statistics.</p></div>
        </div>
      </div>
    </div>
  </section>;
}
