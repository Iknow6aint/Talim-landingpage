"use client";

import { motion } from "framer-motion";
import { School, GraduationCap, BookOpenCheck, Briefcase, Network } from "lucide-react";

const types = [
  {
    icon: School,
    title: "Primary & Secondary Schools",
    body: "Manage classes, track attendance, communicate with parents, and publish results — all from one admin panel.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100 hover:border-blue-200",
  },
  {
    icon: GraduationCap,
    title: "Colleges & Universities",
    body: "Handle complex course structures, multi-department staff, large student bodies, and academic record management at scale.",
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "border-purple-100 hover:border-purple-200",
  },
  {
    icon: BookOpenCheck,
    title: "Vocational & Technical Institutes",
    body: "Track competency-based learning, manage practical assessments, and issue verifiable certificates for skills acquired.",
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100 hover:border-amber-200",
  },
  {
    icon: Briefcase,
    title: "Corporate Training Academies",
    body: "Manage employee learning programs, track completion rates, and generate data-driven reports on workforce development.",
    color: "text-[#0DCCB4]",
    bg: "bg-teal-50",
    border: "border-teal-100 hover:border-teal-200",
  },
  {
    icon: Network,
    title: "School Networks & Districts",
    body: "Oversee multiple institutions from a single platform. Benchmark performance across schools and make informed decisions.",
    color: "text-[#003366]",
    bg: "bg-[#003366]/5",
    border: "border-[#003366]/10 hover:border-[#003366]/20",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const card = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function InstitutionTypes() {
  return (
    <section id="institutions" className="py-28 bg-[#F8FAFC]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[11px] font-semibold text-[#003366] uppercase tracking-widest mb-4">For Every Institution</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            Whether You Run a{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg, #003366, #0066CC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Classroom or a Campus
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Talim adapts to your institution&apos;s structure, size, and complexity —
            not the other way around.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {types.map((t) => (
            <motion.div
              key={t.title}
              variants={card}
              className={`bg-white border rounded-2xl p-6 card-hover ${t.border}`}
            >
              <div className={`w-11 h-11 rounded-xl ${t.bg} flex items-center justify-center mb-4`}>
                <t.icon size={20} className={t.color} />
              </div>
              <h3 className="text-[16px] font-bold text-gray-900 mb-2.5" style={{ fontFamily: "var(--font-manrope)" }}>
                {t.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">{t.body}</p>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={card}
            className="bg-gradient-to-br from-[#003366] to-[#0066CC] border border-[#003366] rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <p className="text-[11px] font-semibold text-white/50 uppercase tracking-widest mb-3">Don&apos;t see yours?</p>
              <h3 className="text-[17px] font-bold text-white mb-3" style={{ fontFamily: "var(--font-manrope)" }}>
                We&apos;ll make it work for you
              </h3>
              <p className="text-[14px] text-white/60 leading-relaxed">
                Every institution is different. Talk to our team and we&apos;ll help you get set up.
              </p>
            </div>
            <button className="mt-6 w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-sm font-semibold text-white transition-all duration-200">
              Contact Us →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
