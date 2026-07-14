"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import PortalModal from "./PortalModal";

export default function CTASection() {
  const [open, setOpen] = useState(false);
  return <>
    <section className="relative overflow-hidden bg-[#2563EB] px-5 py-24 text-center sm:py-28">
      <div className="absolute inset-0 talim-dot-grid opacity-30"/><div className="absolute -left-20 top-0 size-80 rounded-full border border-white/10"/><div className="absolute -right-20 bottom-0 size-96 rounded-full border border-white/10"/>
      <div className="relative mx-auto max-w-4xl"><p className="text-xs font-extrabold uppercase tracking-[.16em] text-white/65">Ready when you are</p><h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl">Your Institution Is Already Generating the Data. Talim Helps You Use It.</h2><p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">Bring operations, communication, finance, and learning insight into one connected platform.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><a href="mailto:support@mytalim.com?subject=Talim%20Demo%20Request" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#003366] px-7 py-4 font-bold text-white transition hover:-translate-y-0.5">Book a Demo <ArrowRight size={17}/></a><button onClick={()=>setOpen(true)} className="rounded-full bg-white px-7 py-4 font-bold text-[#2563EB] transition hover:-translate-y-0.5">Explore the Portals</button></div></div>
    </section>
    <PortalModal isOpen={open} onClose={()=>setOpen(false)}/>
  </>;
}
