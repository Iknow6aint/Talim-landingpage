"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, Activity } from "lucide-react";

function Counter({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const capabilities = [
  {
    icon: Activity,
    title: "Attendance Intelligence",
    body: "Predict absenteeism before it becomes failure. Spot patterns across classes, terms, and years — and intervene early.",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/15",
  },
  {
    icon: TrendingUp,
    title: "Learning Outcomes",
    body: "Track grade trajectories per student, per cohort, per teacher. Know which teaching approaches actually move the needle.",
    color: "text-[#0DCCB4]",
    bg: "bg-[#0DCCB4]/10 border-[#0DCCB4]/15",
  },
  {
    icon: Users,
    title: "Institutional Benchmarks",
    body: "Compare performance across terms, classes, and staff. Set data-backed targets and track improvement over time.",
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/15",
  },
];

function MiniAnalyticsMock() {
  return (
    <div className="bg-[#0D1629] border border-white/[0.07] rounded-2xl p-5 glow-card">
      <div className="flex items-center justify-between mb-5">
        <p className="text-xs font-semibold text-white/40 uppercase tracking-widest">Attendance Insights</p>
        <span className="text-[10px] text-[#0DCCB4] font-semibold">All Classes</span>
      </div>

      {/* Heatmap rows */}
      <div className="space-y-2.5 mb-5">
        {[
          { label: "Grade 10A", weeks: [90,85,92,88,95,78,91,89] },
          { label: "Grade 11B", weeks: [72,68,75,80,70,85,77,82] },
          { label: "Grade 9C",  weeks: [95,98,92,96,94,97,93,96] },
          { label: "Grade 12D", weeks: [60,55,62,58,65,70,63,68] },
        ].map(({ label, weeks }) => (
          <div key={label} className="flex items-center gap-3">
            <p className="text-[11px] text-white/35 w-16 shrink-0">{label}</p>
            <div className="flex gap-1 flex-1">
              {weeks.map((v, i) => {
                const opacity = v >= 90 ? 1 : v >= 80 ? 0.7 : v >= 70 ? 0.45 : 0.2;
                return (
                  <div
                    key={i}
                    className="flex-1 h-5 rounded-sm"
                    style={{ backgroundColor: `rgba(13,204,180,${opacity})` }}
                    title={`${v}%`}
                  />
                );
              })}
            </div>
            <p className="text-[11px] text-white/40 w-8 text-right">{weeks[weeks.length-1]}%</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-1.5">
        <p className="text-[10px] text-white/30">Low</p>
        <div className="flex gap-0.5 flex-1">
          {[0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1].map((o, i) => (
            <div key={i} className="flex-1 h-2 rounded-sm" style={{ backgroundColor: `rgba(13,204,180,${o})` }} />
          ))}
        </div>
        <p className="text-[10px] text-white/30">High</p>
      </div>

      {/* Insight callout */}
      <div className="mt-4 bg-[#0DCCB4]/10 border border-[#0DCCB4]/15 rounded-xl p-3">
        <p className="text-[11px] text-[#0DCCB4] font-semibold mb-0.5">⚡ Insight detected</p>
        <p className="text-[11px] text-white/50">Grade 12D attendance is 22% below school average. Early intervention recommended.</p>
      </div>
    </div>
  );
}

export default function DataDrivenSection() {
  return (
    <section className="relative bg-[#050D1A] dot-grid py-28 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-[#003366] blur-[180px] opacity-12 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-[11px] font-semibold text-[#0DCCB4] uppercase tracking-widest mb-4">Data-Driven Education</p>
          <h2
            className="text-4xl sm:text-[56px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Education Without Data{" "}
            <span className="gradient-text">is Just Activity.</span>
          </h2>
          <p className="text-lg text-white/45 leading-relaxed">
            The world&apos;s best institutions don&apos;t just teach — they measure, iterate, and improve.
            Talim gives every school the same data intelligence that powers the world&apos;s top universities.
          </p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-3 gap-4 sm:gap-6 mb-16"
        >
          {[
            { value: 75, suffix: "%", label: "Faster result processing", color: "text-blue-400" },
            { value: 82, suffix: "%", label: "Fewer manual record errors", color: "text-[#0DCCB4]" },
            { value: 3, suffix: "×", label: "More parent-teacher engagement", color: "text-purple-400" },
          ].map(({ value, suffix, label, color }) => (
            <div key={label} className="text-center">
              <p className={`text-4xl sm:text-5xl font-bold ${color}`} style={{ fontFamily: "var(--font-manrope)" }}>
                <Counter end={value} suffix={suffix} />
              </p>
              <p className="text-sm text-white/35 mt-2 leading-snug">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* Two col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="space-y-5"
          >
            {capabilities.map(({ icon: Icon, title, body, color, bg }) => (
              <div key={title} className="flex gap-4">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${bg}`}>
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-white mb-1.5" style={{ fontFamily: "var(--font-manrope)" }}>
                    {title}
                  </h3>
                  <p className="text-[14px] text-white/45 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}

            <div className="mt-6 pl-1 border-l-2 border-[#0DCCB4]/30">
              <p className="text-[15px] text-white/40 italic pl-4 leading-relaxed">
                &ldquo;Schools that use data-driven practices are{" "}
                <span className="text-white/70 font-semibold">3× more likely</span> to improve
                student outcomes.&rdquo;
              </p>
              <p className="text-[12px] text-white/25 pl-4 mt-2">— World Bank Education Research, 2024</p>
            </div>
          </motion.div>

          {/* Right: mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <MiniAnalyticsMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
