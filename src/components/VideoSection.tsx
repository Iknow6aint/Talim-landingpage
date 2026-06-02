"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative bg-[#050D1A] dot-grid py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#003366] blur-[160px] opacity-15 pointer-events-none" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[11px] font-semibold text-[#0DCCB4] uppercase tracking-widest mb-4">See It in Action</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Watch How We&apos;re Changing the Way{" "}
            <span className="gradient-text">Institutions Work</span>
          </h2>
          <p className="text-lg text-white/45 leading-relaxed">
            See Talim in action — from onboarding your first class to publishing
            term results and verifying credentials.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute inset-0 blur-2xl opacity-20 bg-gradient-to-br from-[#0066CC] to-[#0DCCB4] rounded-3xl scale-95 pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_40px_100px_rgba(0,0,0,0.6)] aspect-video bg-[#0D1629]">
            {playing ? (
              <iframe
                src="https://www.youtube.com/embed/rmejrs_kzT8?autoplay=1&rel=0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Gradient background for thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/60 to-[#050D1A]" />

                {/* Text overlay */}
                <div className="relative z-10 text-center px-6 mb-10">
                  <p className="text-xl sm:text-2xl font-bold text-white/80 leading-snug" style={{ fontFamily: "var(--font-manrope)" }}>
                    Because Every Great Institution Deserves{" "}
                    <span className="gradient-text">Great Tools.</span>
                  </p>
                </div>

                {/* Play button */}
                <button
                  onClick={() => setPlaying(true)}
                  className="relative z-10 group flex flex-col items-center gap-4"
                >
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-xl scale-150 group-hover:scale-[1.8] transition-transform duration-500" />
                    <div className="relative w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/25 transition-all duration-300">
                      <Play size={24} fill="white" className="text-white ml-1" />
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-white/60 group-hover:text-white/90 transition-colors">
                    Watch Demo
                  </span>
                </button>

                {/* Subtle grid bars at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050D1A]/60 to-transparent" />
              </div>
            )}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-6 text-sm text-white/25"
        >
          3 min overview · No signup required
        </motion.p>
      </div>
    </section>
  );
}
