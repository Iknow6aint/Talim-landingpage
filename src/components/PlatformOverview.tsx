"use client";

import { motion } from "framer-motion";
import { Building2, BarChart3, Network, CreditCard, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    label: "School Operations",
    headline: "Run your institution without the paperwork",
    body: "Classes, timetables, staff management, fees, and communication — all connected in one place. Stop juggling tools and start leading.",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    accent: "border-blue-500/15",
  },
  {
    icon: BarChart3,
    label: "Academic Intelligence",
    headline: "Know what's working before the term ends",
    body: "Real-time grade tracking, curriculum analytics, and assessment performance across every class, every subject, every student.",
    color: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    accent: "border-purple-500/15",
  },
  {
    icon: Network,
    label: "Connected Communication",
    headline: "Every stakeholder in one conversation",
    body: "Admins, teachers, parents, and students — real-time messaging that never drops context. Group chats, announcements, direct messages.",
    color: "from-[#0DCCB4]/20 to-[#0DCCB4]/5",
    iconColor: "text-[#0DCCB4]",
    iconBg: "bg-[#0DCCB4]/10 border-[#0DCCB4]/20",
    accent: "border-[#0DCCB4]/15",
  },
  {
    icon: CreditCard,
    label: "Financial Operations",
    headline: "Collect, track, and report with confidence",
    body: "Automated fee collection, multi-provider payments (Paystack, Stripe, OPay), digital receipts, and transparent financial reporting.",
    color: "from-amber-500/20 to-amber-600/5",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-500/10 border-amber-500/20",
    accent: "border-amber-500/15",
  },
  {
    icon: ShieldCheck,
    label: "Verified Records",
    headline: "The credential your learners will carry forever",
    body: "Tamper-proof academic records — verifiable by employers, institutions, and regulators worldwide. A permanent, portable academic identity.",
    color: "from-[#0DCCB4]/25 to-[#0066CC]/10",
    iconColor: "text-[#0DCCB4]",
    iconBg: "bg-[#0DCCB4]/10 border-[#0DCCB4]/25",
    accent: "border-[#0DCCB4]/25",
    isFuture: true,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function PlatformOverview() {
  return (
    <section id="platform" className="py-28 bg-white dot-grid-light">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[11px] font-semibold text-[#003366] uppercase tracking-widest mb-4">The Platform</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            One Platform.{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg, #003366, #0066CC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Every Layer of Learning.
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            From daily operations to long-term academic intelligence — Talim is the
            connective layer your institution has been missing.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.label}
              variants={card}
              className={`relative bg-white border rounded-2xl p-6 card-hover ${p.accent} ${p.isFuture ? "lg:col-span-1 ring-1 ring-[#0DCCB4]/20" : ""}`}
            >
              {p.isFuture && (
                <span className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0DCCB4]/10 border border-[#0DCCB4]/20 text-[10px] font-semibold text-[#0DCCB4] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0DCCB4] animate-pulse" />
                  Coming Soon
                </span>
              )}
              <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${p.iconBg}`}>
                <p.icon size={18} className={p.iconColor} />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-2">{p.label}</p>
              <h3 className="text-[17px] font-bold text-gray-900 mb-3 leading-snug" style={{ fontFamily: "var(--font-manrope)" }}>
                {p.headline}
              </h3>
              <p className="text-[14px] text-gray-500 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}

          {/* Filler card — spans 2 cols on large to fill the grid */}
          <motion.div
            variants={card}
            className="hidden lg:flex items-center justify-center bg-gradient-to-br from-[#003366]/5 to-[#0066CC]/5 border border-[#003366]/10 rounded-2xl p-6"
          >
            <p className="text-center text-sm text-gray-400 leading-relaxed">
              More capabilities launching throughout 2026.{" "}
              <a href="#" className="text-[#003366] font-semibold hover:underline">
                Join the waitlist →
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
