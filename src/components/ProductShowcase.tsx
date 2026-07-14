"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const views = [
  { name: "Admin Dashboard", copy: "Institutional overview", image: "/images/landing/product/admin-dashboard-demo.png", width: 1647, height: 955, mobile: false },
  { name: "Student Management", copy: "Classes and enrolment", image: "/images/landing/product/classes-demo.png", width: 1697, height: 927, mobile: false },
  { name: "Attendance", copy: "Real-time tracking", image: "/images/landing/product/attendance-demo.png", width: 1552, height: 1013, mobile: false },
  { name: "Timetable", copy: "Scheduling made simple", image: "/images/landing/product/timetable-demo.png", width: 1633, height: 963, mobile: false },
  { name: "Payments", copy: "Fee collection", image: "/images/landing/product/fees-demo.png", width: 1702, height: 924, mobile: false },
  { name: "Announcements", copy: "Community communication", image: "/images/landing/product/announcements-demo.png", width: 1704, height: 923, mobile: false },
  { name: "Assessments", copy: "Teaching workflows", image: "/images/landing/product/assessment-demo.png", width: 1705, height: 922, mobile: false },
  { name: "Teacher Portal", copy: "Teacher command centre", image: "/images/landing/product/teacher-dashboard-demo.png", width: 1701, height: 925, mobile: false },
  { name: "Student Portal", copy: "Learner progress", image: "/images/landing/product/student-dashboard-demo.png", width: 1703, height: 923, mobile: false },
  { name: "Mobile Operations", copy: "Workflows on the go", image: "/images/landing/product/mobile-dashboard-demo.png", width: 853, height: 1844, mobile: true },
  { name: "My Children", copy: "Parent overview", image: "/images/landing/product/parent-children-demo.png", width: 853, height: 1844, mobile: true },
  { name: "Mobile Payments", copy: "Fees and receipts", image: "/images/landing/product/parent-payments-demo.png", width: 853, height: 1844, mobile: true },
  { name: "Mobile Grades", copy: "Learner performance", image: "/images/landing/product/grades-mobile-demo.png", width: 853, height: 1844, mobile: true },
  { name: "Leave Requests", copy: "Approvals and timeline", image: "/images/landing/product/leave-request-demo.png", width: 861, height: 1827, mobile: true },
] as const;

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", "-92.5%"]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setActive(Math.min(views.length - 1, Math.round(latest * (views.length - 1))));
  });

  useEffect(() => {
    if (!playing) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setPlaying(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [playing]);

  const jumpTo = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const available = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: section.offsetTop + (index / (views.length - 1)) * available, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <section ref={sectionRef} id="product-tour" className="relative h-[590vh] bg-[#041525] motion-reduce:h-auto">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-[#041525] px-4 pt-24 sm:px-5 sm:pt-24 motion-reduce:relative motion-reduce:h-auto motion-reduce:py-24">
        <div className="absolute inset-0 talim-dot-grid opacity-25" />
        <div className="absolute left-1/2 top-1/3 size-[520px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[130px]" />

        <div className="relative mx-auto flex h-full max-w-[1500px] flex-col text-center">
          <div className="shrink-0">
            <div className="flex items-end justify-between gap-5 text-left">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#6ca7ff]">See Talim in action</p>
                <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.04] tracking-tight text-[#e4edf7] sm:text-5xl">One platform. Every workflow.</h2>
              </div>
              <button onClick={() => setPlaying(true)} className="hidden shrink-0 items-center gap-2 rounded-full bg-[#2563eb] px-5 py-3 text-sm font-bold text-[#eaf2fb] shadow-[0_0_28px_rgba(37,99,235,.35)] transition hover:-translate-y-0.5 sm:inline-flex"><Play size={15} fill="currentColor" /> Product tour</button>
            </div>
            <div className="mt-5 h-px overflow-hidden bg-white/10"><motion.div style={{ width: progressWidth }} className="h-full bg-gradient-to-r from-[#2563eb] to-[#38bdf8]" /></div>
          </div>

          <div className="relative mt-5 flex min-h-0 flex-1 items-center motion-reduce:overflow-x-auto motion-reduce:[scrollbar-width:none]">
            <motion.div style={{ x: reduceMotion ? 0 : trackX }} className="flex w-max items-center gap-[4vw] pl-[7vw] pr-[7vw] motion-reduce:snap-x motion-reduce:snap-mandatory">
              {views.map((view, index) => (
                <article key={view.name} className={`relative flex h-[58vh] min-h-[390px] w-[86vw] shrink-0 snap-center flex-col overflow-hidden rounded-[26px] border bg-[#07182b] p-3 shadow-[0_30px_90px_rgba(0,0,0,.45)] transition-opacity duration-500 sm:h-[60vh] sm:min-h-[430px] sm:w-[78vw] sm:rounded-[30px] sm:p-4 ${active === index ? "border-blue-400/35 opacity-100" : "border-white/8 opacity-48"}`}>
                  <div className="flex items-center justify-between gap-4 px-2 pb-3 text-left sm:px-3">
                    <div><p className="font-display text-base font-extrabold text-[#dce7f3] sm:text-lg">{view.name}</p><p className="mt-0.5 text-xs text-[#89a0b8]">{view.copy}</p></div>
                    <span className="font-mono text-xs text-[#63809e]">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[18px] bg-[#030b15] p-2 sm:p-3">
                    <Image src={view.image} alt={`${view.name}: ${view.copy}`} width={view.width} height={view.height} sizes="(max-width: 640px) 86vw, 78vw" className={view.mobile ? "h-full w-auto rounded-[18px] object-contain" : "h-full w-full rounded-[14px] object-contain"} />
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          <div className="relative flex shrink-0 items-center justify-between gap-4 pb-5 pt-4">
            <p className="hidden text-left text-xs text-[#63809e] sm:block">Scroll to move through the platform</p>
            <div className="mx-auto flex items-center gap-1.5" aria-label={`Screenshot ${active + 1} of ${views.length}`}>
              {views.map((view, index) => <button key={view.name} onClick={() => jumpTo(index)} aria-label={`Go to ${view.name}`} aria-current={active === index ? "true" : undefined} className={`h-1.5 rounded-full transition-all duration-300 ${active === index ? "w-7 bg-[#3b82f6]" : "w-1.5 bg-[#46617d] hover:bg-[#7591ad]"}`} />)}
            </div>
            <p className="hidden text-right font-mono text-xs text-[#89a0b8] sm:block">{String(active + 1).padStart(2, "0")} / {views.length}</p>
          </div>
        </div>
      </div>

      {playing && <div className="fixed inset-0 z-[80] grid place-items-center bg-[#01070d]/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Talim product tour" onMouseDown={(event) => event.target === event.currentTarget && setPlaying(false)}><div className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl border border-blue-300/15 bg-[#020810] shadow-2xl"><button onClick={() => setPlaying(false)} className="absolute right-3 top-3 z-10 grid size-10 place-items-center rounded-full bg-[#07182b]/90 text-[#dce7f3]" aria-label="Close video"><X size={18} /></button><iframe src="https://www.youtube-nocookie.com/embed/rmejrs_kzT8?autoplay=1&rel=0" title="Talim product tour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="size-full" /></div></div>}
    </section>
  );
}
