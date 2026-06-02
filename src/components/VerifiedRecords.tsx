"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, BadgeCheck, Lock, ArrowRight } from "lucide-react";

const features = [
  { icon: BadgeCheck, text: "Cryptographically signed academic records" },
  { icon: Globe, text: "Verifiable by employers and institutions worldwide" },
  { icon: Lock, text: "Tamper-proof — impossible to falsify" },
  { icon: ShieldCheck, text: "Compliant with international credentialing standards" },
];

function CredentialCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#003366] to-[#0066CC] flex items-center justify-center">
            <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-manrope)" }}>T</span>
          </div>
          <span className="font-bold text-gray-900 text-sm" style={{ fontFamily: "var(--font-manrope)" }}>mytalim</span>
        </div>
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-[10px] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          Verified
        </span>
      </div>

      <div className="bg-gradient-to-br from-[#003366]/5 to-[#0066CC]/5 border border-[#003366]/10 rounded-xl p-4 mb-4">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1">Academic Certificate</p>
        <p className="text-lg font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>West African Senior School Certificate</p>
        <p className="text-sm text-gray-500 mt-1">Issued: June 2024</p>
      </div>

      <div className="space-y-2.5">
        {[
          { subject: "Mathematics", grade: "A1" },
          { subject: "English Language", grade: "A2" },
          { subject: "Physics", grade: "B2" },
          { subject: "Chemistry", grade: "B3" },
        ].map(({ subject, grade }) => (
          <div key={subject} className="flex items-center justify-between">
            <p className="text-[13px] text-gray-600">{subject}</p>
            <span className="px-2.5 py-0.5 rounded-full bg-[#003366]/10 text-[#003366] text-[12px] font-bold">{grade}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Record Hash</p>
          <p className="text-[11px] text-gray-500 font-mono mt-0.5">a3f9c2...8e4d1b</p>
        </div>
        <div className="flex items-center gap-1.5 text-teal-600">
          <ShieldCheck size={14} />
          <span className="text-[11px] font-semibold">Authentic</span>
        </div>
      </div>
    </div>
  );
}

export default function VerifiedRecords() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0DCCB4]/10 border border-[#0DCCB4]/25 text-[#0DCCB4] text-[10px] font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0DCCB4] animate-pulse" />
              The Future of Credentials
            </span>

            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Your Degree Should Be as Verifiable as{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #003366, #0066CC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Your Passport.
              </span>
            </h2>

            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              We&apos;re building toward a world where every grade, every credential, and
              every academic milestone is cryptographically secured and independently
              verifiable — by employers, universities, and institutions worldwide.
            </p>

            <p className="text-base text-gray-500 leading-relaxed mb-8">
              No more fraudulent certificates. No more lost transcripts. Just a permanent,
              portable academic identity that travels with every learner — from their first
              classroom to their last degree.
            </p>

            <ul className="space-y-3 mb-10">
              {features.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#0DCCB4]/10 border border-[#0DCCB4]/20 flex items-center justify-center shrink-0">
                    <Icon size={13} className="text-[#0DCCB4]" />
                  </div>
                  <p className="text-[15px] text-gray-600">{text}</p>
                </li>
              ))}
            </ul>

            <button className="group flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#003366] border border-[#003366]/25 hover:bg-[#003366]/5 hover:border-[#003366]/40 transition-all duration-200">
              Join the Waitlist
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* Right: credential card */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            className="relative"
          >
            {/* Decorative glow */}
            <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-teal-300 to-[#0066CC] rounded-3xl scale-90 pointer-events-none" />
            <div className="relative">
              <CredentialCard />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-white shadow-lg border border-gray-100"
            >
              <Globe size={14} className="text-[#003366]" />
              <p className="text-[12px] font-semibold text-gray-700">Verifiable globally</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
