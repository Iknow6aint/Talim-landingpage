"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Talim transformed how we manage our school. Result processing that used to take two weeks now takes two hours. Parents are always informed, teachers are less overwhelmed, and we finally have data we can actually use.",
    name: "Mrs. Adaeze Okafor",
    title: "Principal, Greenleaf Secondary School",
    country: "🇳🇬",
    stars: 5,
    stat: "Result processing: 2 weeks → 2 hours",
  },
  {
    quote: "As a parent, knowing my child's attendance and grades in real time — without waiting for a termly report — is everything. The messaging feature means I actually talk to my son's teachers now. This is what schools should have had years ago.",
    name: "Mr. James Okonkwo",
    title: "Parent, Port Harcourt",
    country: "🇳🇬",
    stars: 5,
    stat: "Parent engagement up 3×",
  },
  {
    quote: "The analytics dashboard gave us insights we didn't know we were missing. We identified underperforming classes early, adjusted teaching strategies, and saw measurable improvement within one term. No other platform does this at our price point.",
    name: "Dr. Sarah Mensah",
    title: "Head of Academics, Sunrise Academy",
    country: "🇬🇭",
    stars: 5,
    stat: "Grade improvement within one term",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function RealResults() {
  return (
    <section className="py-28 bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[11px] font-semibold text-[#003366] uppercase tracking-widest mb-4">Real Results</p>
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5"
            style={{ fontFamily: "var(--font-manrope)" }}
          >
            What Institutions Are{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg, #003366, #0066CC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Seeing With Talim
            </span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            From first-time setups to full institutional transformations — here&apos;s what
            schools are experiencing after switching to Talim.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={card}
              className="bg-gray-50 border border-gray-150 rounded-2xl p-7 flex flex-col card-hover hover:border-gray-200"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Stat highlight */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#003366]/8 border border-[#003366]/12 mb-4 w-fit">
                <span className="text-[11px] font-semibold text-[#003366]">📊 {t.stat}</span>
              </div>

              {/* Quote */}
              <p className="text-[14px] text-gray-600 leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-5 border-t border-gray-200">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#003366] to-[#0066CC] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-gray-900">{t.name} {t.country}</p>
                  <p className="text-[12px] text-gray-400">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
