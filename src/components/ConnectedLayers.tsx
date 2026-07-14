"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart3, BookOpen, MessageSquare, Settings2 } from "lucide-react";
import { useEffect, useState } from "react";

const layers = [
  { title: "Operate", heading: "Streamline school operations", icon: Settings2, body: "Coordinate classes, enrolment, schedules and approvals from one calm command centre.", bullets: ["Admissions and student management", "Attendance, timetable and approvals", "Staff and role management"], image: "/images/landing/product/classes-demo.png", width: 1697, height: 927, metric: "1 workspace", metricCopy: "for daily operations" },
  { title: "Teach", heading: "Give teachers time back", icon: BookOpen, body: "Move smoothly from curriculum planning to assessment, grading and results publishing.", bullets: ["Curriculum and resources", "Assessments and grading", "Results publishing"], image: "/images/landing/product/assessment-demo.png", width: 1705, height: 922, metric: "4 workflows", metricCopy: "connected end to end" },
  { title: "Connect", heading: "Keep the community in sync", icon: MessageSquare, body: "Publish the right update to parents, students and teachers—and see how it lands.", bullets: ["School-wide announcements", "Audience-specific communication", "Read and engagement signals"], image: "/images/landing/product/announcements-demo.png", width: 1704, height: 923, metric: "3 audiences", metricCopy: "reached from one update" },
  { title: "Measure", heading: "Turn activity into insight", icon: BarChart3, body: "See attendance, academics, finance and participation together before small gaps grow.", bullets: ["Attendance trends", "Academic performance", "Fee and engagement analytics"], image: "/images/landing/product/attendance-demo.png", width: 1552, height: 1013, metric: "One view", metricCopy: "of institutional health" },
] as const;

export default function ConnectedLayers() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const goTo = (index: number) => {
    if (index === active) return;
    setDirection(index > active || (active === layers.length - 1 && index === 0) ? 1 : -1);
    setActive(index);
  };
  const next = () => { setDirection(1); setActive((value) => (value + 1) % layers.length); };
  const previous = () => { setDirection(-1); setActive((value) => (value - 1 + layers.length) % layers.length); };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const before = (active - 1 + layers.length) % layers.length;
  const after = (active + 1) % layers.length;
  const layer = layers[active];
  const Icon = layer.icon;

  return (
    <section id="platform" className="relative overflow-hidden bg-[#020b15] px-5 py-24 sm:py-28">
      <div className="absolute inset-0 talim-dot-grid opacity-20" />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#6ca7ff]">How Talim works</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl">One Platform.<br />Four Connected Layers.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/50">Follow the flow from daily operations to better decisions. Use the controls—or your arrow keys—to explore.</p>
        </div>

        <div className="relative mx-auto mt-10 grid max-w-[680px] grid-cols-4">
          <span className="absolute left-[12.5%] right-[12.5%] top-[21px] h-px bg-white/15" />
          {layers.map((item, index) => <button key={item.title} onClick={() => goTo(index)} aria-pressed={active === index} className="relative z-10 flex flex-col items-center gap-2.5 px-1">
            <span className={`grid size-11 place-items-center rounded-full border-2 text-sm font-extrabold transition-all duration-300 ${active === index ? "scale-110 border-[#3b82f6] bg-[#2563eb] text-white shadow-[0_0_24px_rgba(37,99,235,.7)]" : "border-white/20 bg-[#020b15] text-white/45 hover:border-white/45"}`}>{index + 1}</span>
            <span className={`text-xs font-bold transition sm:text-sm ${active === index ? "text-white" : "text-white/35"}`}>{item.title}</span>
          </button>)}
        </div>

        <div className="relative mx-auto mt-12 min-h-[610px] max-w-[1180px] lg:min-h-[650px]" aria-live="polite">
          {[before, after].map((index, position) => {
            const item = layers[index];
            return <button key={`${item.title}-${position}`} onClick={position === 0 ? previous : next} className={`absolute top-14 hidden h-[500px] w-[42%] overflow-hidden rounded-[30px] border border-blue-200/10 bg-[#091420] p-4 opacity-30 shadow-2xl transition duration-500 hover:opacity-50 lg:block ${position === 0 ? "-left-[20%] -rotate-6" : "-right-[20%] rotate-6"}`} aria-label={`Show ${item.title}`}>
              <Image src={item.image} alt="" width={item.width} height={item.height} className="h-full w-full rounded-2xl object-contain" />
              <span className="absolute inset-0 bg-[#020b15]/65" />
              <span className="absolute bottom-8 left-8 font-display text-2xl font-extrabold text-white">{item.title}</span>
            </button>;
          })}

          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.article key={layer.title} custom={direction} variants={{ enter: (way: number) => ({ opacity: 0, x: way > 0 ? 90 : -90, scale: .965, rotateY: way > 0 ? -3 : 3 }), center: { opacity: 1, x: 0, scale: 1, rotateY: 0 }, exit: (way: number) => ({ opacity: 0, x: way > 0 ? -90 : 90, scale: .975, rotateY: way > 0 ? 3 : -3 }) }} initial="enter" animate="center" exit="exit" transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 mx-auto w-full max-w-[1000px] overflow-hidden rounded-[30px] border border-blue-400/25 bg-[#0a1624] shadow-[0_35px_100px_rgba(0,0,0,.55)]">
              <div className="grid gap-0 lg:grid-cols-[.82fr_1.18fr]">
                <div className="flex min-h-[320px] flex-col p-7 text-left sm:p-10">
                  <span className="grid size-12 place-items-center rounded-2xl border border-blue-400/25 bg-blue-500/15 text-blue-300"><Icon size={22} /></span>
                  <p className="mt-6 text-xs font-extrabold uppercase tracking-[.18em] text-blue-300">{String(active + 1).padStart(2, "0")} / {layer.title}</p>
                  <h3 className="mt-3 font-display text-3xl font-extrabold leading-tight text-white">{layer.heading}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/55">{layer.body}</p>
                  <div className="mt-6 space-y-2.5">{layer.bullets.map((item) => <p key={item} className="flex items-center gap-3 text-sm text-white/70"><span className="size-1.5 rounded-full bg-[#3b82f6] shadow-[0_0_8px_#3b82f6]" />{item}</p>)}</div>
                  <div className="mt-auto pt-8"><p className="font-display text-2xl font-extrabold text-white">{layer.metric}</p><p className="mt-1 text-xs text-white/35">{layer.metricCopy}</p></div>
                </div>
                <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#06111f] p-3 sm:p-5 lg:min-h-[520px]">
                  <Image src={layer.image} alt={`${layer.heading} in Talim`} width={layer.width} height={layer.height} sizes="(max-width:1024px) 100vw, 590px" className="h-full max-h-[490px] w-full rounded-2xl object-contain" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a1624]/35 via-transparent to-transparent" />
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <button onClick={previous} className="absolute bottom-0 left-[calc(50%-62px)] z-20 grid size-12 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-white/[.06] text-white transition hover:scale-105 hover:bg-white/15 lg:bottom-7 lg:left-4 lg:translate-x-0" aria-label="Previous Talim layer"><ArrowLeft size={19} /></button>
          <button onClick={next} className="absolute bottom-0 left-[calc(50%+62px)] z-20 grid size-12 -translate-x-1/2 place-items-center rounded-full bg-[#2563eb] text-white shadow-[0_0_24px_rgba(37,99,235,.45)] transition hover:scale-105 lg:bottom-7 lg:left-auto lg:right-4 lg:translate-x-0" aria-label="Next Talim layer"><ArrowRight size={19} /></button>
        </div>
        <div className="mt-5 flex items-center justify-center gap-2" aria-label={`Layer ${active + 1} of ${layers.length}`}>
          {layers.map((item, index) => <button key={item.title} onClick={() => goTo(index)} aria-label={`Show ${item.title}`} aria-current={active === index ? "true" : undefined} className={`h-2 rounded-full transition-all duration-300 ${active === index ? "w-9 bg-[#3b82f6] shadow-[0_0_14px_rgba(59,130,246,.6)]" : "w-2 bg-[#38516b] hover:bg-[#66819d]"}`} />)}
        </div>
      </div>
    </section>
  );
}
