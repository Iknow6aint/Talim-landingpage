"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const phones = [
  { title: "Daily overview", image: "/images/landing/product/mobile-dashboard-demo.png", width: 853, height: 1844 },
  { title: "My children", image: "/images/landing/product/parent-children-demo.png", width: 853, height: 1844 },
  { title: "Payments", image: "/images/landing/product/parent-payments-demo.png", width: 853, height: 1844 },
  { title: "Grades", image: "/images/landing/product/grades-mobile-demo.png", width: 853, height: 1844 },
  { title: "Leave requests", image: "/images/landing/product/leave-request-demo.png", width: 861, height: 1827 },
] as const;

export default function MobileShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#071b31] px-5 py-24 sm:py-28">
      <div className="absolute -left-24 top-1/4 size-[420px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 size-[400px] rounded-full bg-teal-400/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-[.72fr_1.28fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }}>
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-blue-300">Talim in your pocket</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl">The full school day.<br /><span className="text-blue-400">Wherever you are.</span></h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/55">Parents, learners and staff can move from updates to payments, grades and daily actions without waiting for a desktop.</p>
          <a href="#solutions" className="group mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[.06] px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10">Explore every portal <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" /></a>
        </motion.div>

        <div className="-mx-5 overflow-x-auto px-5 pb-8 pt-6 [scrollbar-width:none] lg:mx-0 lg:overflow-visible lg:px-0">
          <div className="flex min-w-max items-end gap-4 lg:min-w-0 lg:justify-end lg:gap-3 xl:gap-5">
            {phones.map((phone, index) => (
              <motion.figure key={phone.title} initial={{ opacity: 0, y: 48 }} whileInView={{ opacity: 1, y: index % 2 === 0 ? -18 : 18 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: index * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -28, rotate: index % 2 === 0 ? -1 : 1 }} className="group relative w-[190px] shrink-0 lg:w-[17%] lg:min-w-[125px] xl:w-[160px]">
                <div className="overflow-hidden rounded-[26px] border border-white/15 bg-[#06101d] shadow-[0_28px_60px_rgba(0,0,0,.45)] transition-shadow group-hover:shadow-[0_35px_90px_rgba(37,99,235,.25)]">
                  <Image src={phone.image} alt={`${phone.title} on Talim mobile`} width={phone.width} height={phone.height} sizes="200px" className="h-auto w-full" />
                </div>
                <figcaption className="mt-4 text-center text-xs font-bold text-white/60">{phone.title}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
