"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, TrendingUp, Users, BookOpen, CheckCircle2 } from "lucide-react";
import PortalModal from "./PortalModal";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.5 }}
      className="relative w-full max-w-[520px] mx-auto lg:mx-0"
    >
      <div className="absolute inset-0 blur-3xl opacity-25 bg-gradient-to-br from-blue-500 via-[#003366] to-[#0DCCB4] rounded-3xl scale-105 pointer-events-none" />
      <div className="relative bg-[#0D1629] border border-white/[0.08] rounded-2xl p-5 shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] text-white/35 uppercase tracking-widest font-semibold">Academic Overview</p>
            <p className="text-white font-semibold text-sm mt-0.5">Term 2 — 2025/26</p>
          </div>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0DCCB4]/10 border border-[#0DCCB4]/20 text-[#0DCCB4] text-[10px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0DCCB4] animate-pulse" />
            Live Data
          </span>
        </div>

        {/* KPI chips */}
        <div className="grid grid-cols-3 gap-2.5 mb-4">
          {[
            { icon: Users, label: "Students", value: "1,248", delta: "+12%", color: "text-blue-300", bg: "bg-blue-500/10" },
            { icon: TrendingUp, label: "Avg. Grade", value: "78.4%", delta: "+5.2%", color: "text-[#0DCCB4]", bg: "bg-[#0DCCB4]/10" },
            { icon: BookOpen, label: "Courses", value: "64", delta: "Active", color: "text-purple-400", bg: "bg-purple-500/10" },
          ].map(({ icon: Icon, label, value, delta, color, bg }) => (
            <div key={label} className="bg-white/[0.04] rounded-xl p-3 border border-white/[0.05]">
              <div className={`w-6 h-6 rounded-lg ${bg} flex items-center justify-center mb-2`}>
                <Icon size={12} className={color} />
              </div>
              <p className={`text-sm font-bold ${color}`}>{value}</p>
              <p className="text-[10px] text-white/35 mt-0.5">{label}</p>
              <p className="text-[10px] text-[#0DCCB4] font-medium">{delta}</p>
            </div>
          ))}
        </div>

        {/* Grade chart */}
        <div className="bg-white/[0.03] rounded-xl p-3.5 border border-white/[0.05] mb-3.5">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[10px] font-semibold text-white/50">Grade Trend — Last 6 Terms</p>
            <p className="text-[10px] text-[#0DCCB4] font-semibold">↑ 8.3%</p>
          </div>
          <svg viewBox="0 0 260 56" className="w-full h-10" preserveAspectRatio="none">
            <defs>
              <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#0066CC" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0DCCB4" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0DCCB4" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#0DCCB4" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[36, 42, 38, 48, 44, 52].map((h, i) => (
              <rect key={i} x={i * 44 + 2} y={56 - h} width={32} height={h} rx="3" fill="url(#barGrad)" />
            ))}
            <path d="M19,20 L63,14 L107,18 L151,8 L195,12 L239,4 L239,56 L19,56 Z" fill="url(#areaGrad)" />
            <polyline points="19,20 63,14 107,18 151,8 195,12 239,4" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {[[19,20],[63,14],[107,18],[151,8],[195,12],[239,4]].map(([x,y],i) => (
              <circle key={i} cx={x} cy={y} r="2.5" fill="#0DCCB4" />
            ))}
          </svg>
        </div>

        {/* Activity */}
        <div className="space-y-2">
          {[
            { text: "Maths Term Results published", time: "2m ago" },
            { text: "184 attendance records synced", time: "15m ago" },
          ].map(({ text, time }) => (
            <div key={text} className="flex items-center gap-2.5">
              <CheckCircle2 size={12} className="text-[#0DCCB4] shrink-0" />
              <p className="text-[11px] text-white/45 flex-1">{text}</p>
              <p className="text-[10px] text-white/20">{time}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-[#050D1A] dot-grid overflow-hidden flex flex-col justify-center pt-[72px]">
        {/* Ambient glows */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#003366] rounded-full blur-[160px] opacity-15 pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#0066CC] rounded-full blur-[140px] opacity-10 pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-[#0DCCB4] rounded-full blur-[120px] opacity-8 pointer-events-none" />

        <div className="section-container relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Copy */}
            <div className="flex-1 max-w-[600px] text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.04] mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#0DCCB4] animate-pulse" />
                <span className="text-[11px] font-semibold text-white/50 uppercase tracking-widest">
                  Education Infrastructure Platform
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.1 }}
                className="text-5xl sm:text-[60px] lg:text-[68px] font-bold leading-[1.05] tracking-tight text-white mb-6"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                Education Has{" "}
                <span className="gradient-text">a Data Problem.</span>
                <br className="hidden sm:block" />
                We Built the{" "}
                Infrastructure{" "}
                to Fix It.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.2 }}
                className="text-[17px] text-white/50 leading-relaxed mb-10 max-w-[500px] mx-auto lg:mx-0"
              >
                Talim connects schools, colleges, and universities on one
                intelligent platform — so every learning moment becomes
                measurable, every record becomes verifiable, and every
                institution can grow with confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
              >
                <button
                  onClick={() => setModalOpen(true)}
                  className="group flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-semibold text-white bg-gradient-to-r from-[#003366] to-[#0066CC] hover:from-[#004480] hover:to-[#0077EE] shadow-[0_0_32px_rgba(0,102,204,0.4)] hover:shadow-[0_0_48px_rgba(0,102,204,0.55)] transition-all duration-200"
                >
                  Get Started Free
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => setVideoOpen(true)}
                  className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-[15px] font-semibold text-white/60 hover:text-white border border-white/[0.1] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/15">
                    <Play size={9} fill="currentColor" />
                  </span>
                  Watch Demo
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.4 }}
                className="mt-8 text-[13px] text-white/25 text-center lg:text-left"
              >
                Trusted by institutions across{" "}
                <span className="text-white/55 font-semibold">5+ countries</span>
                <span className="mx-2 text-white/15">·</span>
                No credit card required
              </motion.p>
            </div>

            {/* Mockup */}
            <div className="flex-1 w-full lg:flex-none lg:w-[480px]">
              <DashboardMockup />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent"
          />
        </motion.div>
      </section>

      <PortalModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/rmejrs_kzT8?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </motion.div>
        </div>
      )}
    </>
  );
}
