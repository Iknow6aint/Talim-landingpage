"use client";

import { motion } from "framer-motion";
import { FileX, Clock, AlertTriangle, Globe, Unlink, BarChart2, Lock, Zap, CheckCircle2, MessageSquare, BookOpen, LineChart } from "lucide-react";

const problems = [
  { icon: FileX, text: "Student records don't travel with learners" },
  { icon: AlertTriangle, text: "Academic credentials can't be independently verified" },
  { icon: BarChart2, text: "Teachers have no data on what's actually working" },
  { icon: Unlink, text: "Schools operate in silos — no cross-institution intelligence" },
  { icon: Clock, text: "Outcomes are tracked by gut feel, not analytics" },
  { icon: Globe, text: "No continuity between primary, secondary, and tertiary education" },
];

const solutions = [
  { icon: Lock, text: "Secure, portable records that follow every learner" },
  { icon: CheckCircle2, text: "Tamper-proof credentials verifiable by any institution" },
  { icon: LineChart, text: "Real-time learning analytics for every teacher and admin" },
  { icon: Globe, text: "Cross-institution data intelligence and benchmarking" },
  { icon: Zap, text: "Outcome tracking powered by real data, not guesswork" },
  { icon: BookOpen, text: "A single academic identity from first class to last degree" },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

const itemRight = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function ProblemStatement() {
  return (
    <section className="relative bg-[#050D1A] dot-grid py-28 overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#003366] blur-[160px] opacity-15 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-[11px] font-semibold text-[#0DCCB4] uppercase tracking-widest mb-4">The Problem</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Education Is Generating the World&apos;s Most Important Data.{" "}
            <span className="gradient-text">Most of It Disappears.</span>
          </h2>
          <p className="text-lg text-white/45 leading-relaxed">
            Institutions worldwide are running on disconnected systems, paper records, and
            lost data. The infrastructure for education hasn&apos;t caught up with the world&apos;s expectations.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Problems */}
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-red-400/80" />
              <p className="text-sm font-semibold text-white/40 uppercase tracking-widest">Without Talim</p>
            </div>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-4"
            >
              {problems.map(({ icon: Icon, text }) => (
                <motion.li key={text} variants={item} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={14} className="text-red-400/70" />
                  </div>
                  <p className="text-[15px] text-white/50 leading-snug">{text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Solutions */}
          <div className="bg-gradient-to-br from-[#003366]/40 to-[#001a33]/60 border border-[#0066CC]/20 rounded-2xl p-8">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#0DCCB4]" />
              <p className="text-sm font-semibold text-[#0DCCB4]/60 uppercase tracking-widest">With Talim</p>
            </div>
            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="space-y-4"
            >
              {solutions.map(({ icon: Icon, text }) => (
                <motion.li key={text} variants={itemRight} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#0DCCB4]/10 border border-[#0DCCB4]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={14} className="text-[#0DCCB4]" />
                  </div>
                  <p className="text-[15px] text-white/75 leading-snug">{text}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 text-lg font-semibold text-white/30"
          style={{ fontFamily: "var(--font-manrope)" }}
        >
          Talim was built to change this —
          <span className="text-white/70"> for every institution, everywhere.</span>
        </motion.p>
      </div>
    </section>
  );
}
