"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, BellRing, GraduationCap } from "lucide-react";

const signals = [
  { icon: BellRing, label: "Updates delivered", value: "One connected community", className: "left-[4%] top-[17%] -rotate-6" },
  { icon: GraduationCap, label: "Learner context", value: "Ready when it matters", className: "right-[4%] top-[14%] rotate-6" },
  { icon: BarChart3, label: "Institution insight", value: "Clear enough to act", className: "right-[9%] bottom-[11%] -rotate-3" },
] as const;

export default function BoldStatement() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#06182a] px-5 py-24 text-[#d9e6f2] sm:min-h-[860px] sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(37,99,235,.3),transparent_34%),linear-gradient(180deg,#092744_0%,#041525_100%)]" />
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_1px_1px,#5d85ad_1px,transparent_0)] [background-size:30px_30px]" />

      {signals.map(({ icon: Icon, label, value, className }, index) => (
        <motion.div key={label} animate={{ y: [0, index % 2 ? 13 : -13, 0] }} transition={{ duration: 4.5 + index, repeat: Infinity, ease: "easeInOut" }} className={`absolute hidden w-[230px] rounded-2xl border border-blue-300/15 bg-[#0a2138] p-4 text-[#dce7f3] shadow-[0_24px_50px_rgba(0,0,0,.32)] lg:block ${className}`}>
          <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-[#2563eb] text-[#dce7f3]"><Icon size={17} /></span><p className="text-[11px] font-bold uppercase tracking-wider text-[#718ba5]">{label}</p></div>
          <p className="mt-4 font-display text-lg font-extrabold">{value}</p>
        </motion.div>
      ))}

      <div className="relative mx-auto flex min-h-[620px] max-w-[1180px] flex-col items-center justify-center text-center sm:min-h-[680px]">
        <motion.div initial={{ opacity: 0, y: -18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 flex items-center gap-3 rounded-full border border-blue-300/15 bg-[#0a2138] px-5 py-3 text-[#dce7f3] shadow-xl">
          <Image src="/images/landing/brand/talim-mark.png" alt="" width={31} height={31} className="rounded-lg" />
          <span className="font-display text-base font-extrabold">Talim</span>
          <span className="mx-1 h-5 w-px bg-blue-100/15" />
          <span className="text-xs font-semibold text-[#7892ab]">Built for measurable learning</span>
        </motion.div>

        <motion.h2 initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }} className="max-w-[1050px] font-display text-[clamp(3.4rem,8.5vw,8.3rem)] font-extrabold leading-[.86] tracking-[-.065em]">
          Let&apos;s Make Every<br />Learning Moment Count.
        </motion.h2>
        <p className="mt-8 max-w-xl text-base font-medium leading-7 text-[#89a0b8] sm:text-lg">Give every institution the operational clarity to notice progress, respond earlier and help every learner move forward.</p>
        <motion.a href="#product-tour" whileHover={{ y: -4, scale: 1.02 }} whileTap={{ scale: .98 }} className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#2563eb] px-7 py-4 text-sm font-extrabold text-[#eaf2fb] shadow-[0_20px_45px_rgba(0,54,150,.28)]">See Talim in action <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></motion.a>
      </div>
    </section>
  );
}
