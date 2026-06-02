"use client";

import { motion } from "framer-motion";

const institutionTypes = [
  { label: "Primary Schools", icon: "🏫" },
  { label: "Secondary Schools", icon: "🎓" },
  { label: "Colleges & Universities", icon: "🏛️" },
  { label: "Vocational Institutes", icon: "🔧" },
  { label: "Training Academies", icon: "📚" },
  { label: "School Networks", icon: "🌐" },
];

export default function TrustBar() {
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="section-container">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-[13px] font-semibold text-gray-400 uppercase tracking-widest mb-8"
        >
          Built for every type of educational institution
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {institutionTypes.map(({ label, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-gray-50 hover:border-[#003366]/30 hover:bg-[#003366]/[0.03] transition-all duration-200 cursor-default"
            >
              <span className="text-base">{icon}</span>
              <span className="text-[13px] font-medium text-gray-600">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
