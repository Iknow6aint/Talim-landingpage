"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import PortalModal from "./PortalModal";

export default function Hero() {
  const [portalOpen, setPortalOpen] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden bg-[#041525] px-5 pb-20 pt-36 sm:pt-40 lg:min-h-[880px] lg:px-6">
      <div className="absolute inset-0 talim-dot-grid opacity-50" />
      <div className="absolute -right-40 -top-44 size-[620px] rounded-full bg-blue-600/25 blur-[110px]" />
      <div className="relative mx-auto grid max-w-[1400px] items-center gap-14 lg:grid-cols-[.88fr_1.12fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="text-center lg:text-left">
          <p className="mb-7 inline-flex rounded-full border border-blue-400/35 bg-blue-500/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em] text-blue-200">
            Education infrastructure for measurable learning
          </p>
          <h1 className="font-display text-[clamp(3.2rem,6vw,5.3rem)] font-extrabold leading-[1.02] tracking-[-.045em] text-white">
            Run Every Institution.<br />Understand <span className="relative sm:whitespace-nowrap">Every Learner.<span className="absolute -inset-x-3 -inset-y-1 -rotate-2 rounded-[48%] border-2 border-[#2563EB]" /></span>
          </h1>
          <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-white/62 sm:text-lg lg:mx-0">
            Talim connects school operations, academic data, finance, communication, and stakeholder experiences in one intelligent platform—so institutions make better decisions and every learner can succeed.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <button onClick={() => setPortalOpen(true)} className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-7 py-4 font-bold text-white shadow-[0_0_30px_rgba(37,99,235,.4)] transition hover:-translate-y-0.5 hover:bg-[#3471ef]">
              Explore portals <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </button>
            <a href="#product-tour" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-4 font-bold text-white transition hover:border-white/50 hover:bg-white/[.05]">
              <Play size={16} fill="currentColor" /> Watch product tour
            </a>
          </div>
          <p className="mt-6 text-xs font-semibold text-white/35">One connected system for every stakeholder</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .9, delay: .2 }} className="relative mx-auto w-full max-w-[820px] pb-8 pr-[82px] sm:pb-14 sm:pr-24">
          <div className="absolute inset-10 rounded-full bg-blue-600/25 blur-[90px]" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0b1b31] p-1.5 shadow-[0_35px_90px_rgba(0,0,0,.5)] sm:p-2.5">
            <Image src="/images/landing/product/admin-dashboard-demo.png" alt="Talim Demo Academy administration dashboard showing students, staff, fees and school performance" width={1647} height={955} priority sizes="(max-width: 1024px) 95vw, 57vw" className="h-auto w-full rounded-xl" />
          </div>
          <div className="absolute -bottom-3 right-0 w-[24%] min-w-[118px] max-w-[178px] rotate-[1.5deg] overflow-hidden rounded-[22px] border-[5px] border-[#10213a] bg-[#071427] shadow-[0_28px_60px_rgba(0,0,0,.55)] sm:-right-1">
            <Image src="/images/landing/product/mobile-dashboard-demo.png" alt="Talim Demo Academy mobile dashboard" width={853} height={1844} priority sizes="175px" className="h-auto w-full" />
          </div>
          <div className="absolute right-4 top-8 rounded-2xl bg-white px-4 py-3 shadow-2xl sm:right-14">
            <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Fee collection</p><p className="mt-1 font-display text-lg font-extrabold text-[#003366]">94.3%</p><p className="text-[10px] font-bold text-emerald-500">Live overview</p>
          </div>
        </motion.div>
      </div>
      <PortalModal isOpen={portalOpen} onClose={() => setPortalOpen(false)} />
    </section>
  );
}
