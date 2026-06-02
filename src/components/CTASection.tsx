"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import PortalModal from "./PortalModal";

export default function CTASection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-[#050D1A] dot-grid py-28 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0066CC] blur-[200px] opacity-12 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#003366] blur-[160px] opacity-15 pointer-events-none" />

        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-[11px] font-semibold text-[#0DCCB4] uppercase tracking-widest mb-6">
              Get Started Today
            </p>

            <h2
              className="text-5xl sm:text-[62px] font-bold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              The Future of Education{" "}
              <span className="gradient-text">Is Measurable.</span>
            </h2>

            <p className="text-xl text-white/45 leading-relaxed mb-12 max-w-2xl mx-auto">
              Join institutions across the world that are building smarter, more connected,
              and more data-driven schools — starting today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="group flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#003366] to-[#0066CC] hover:from-[#004480] hover:to-[#0077EE] shadow-[0_0_40px_rgba(0,102,204,0.45)] hover:shadow-[0_0_60px_rgba(0,102,204,0.6)] transition-all duration-200"
              >
                Start for Free
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white/70 hover:text-white border border-white/[0.12] hover:border-white/25 hover:bg-white/[0.04] transition-all duration-200"
              >
                <Calendar size={16} />
                Book a Demo
              </button>
            </div>

            <p className="mt-8 text-sm text-white/25">
              Free setup · No credit card required · Onboard in under 15 minutes
            </p>
          </motion.div>
        </div>
      </section>

      <PortalModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
