"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, GraduationCap, BookOpen, Heart, ArrowRight } from "lucide-react";
import PortalModal from "./PortalModal";

const roles = [
  {
    icon: Building2,
    role: "School Admins",
    headline: "Run your entire school from one screen",
    body: "Manage every class, staff member, fee, timetable, announcement, and report — without switching tools or losing data.",
    features: ["Class & staff management", "Fee collection & receipts", "School-wide announcements", "Financial reporting"],
    color: "text-blue-500",
    iconBg: "bg-blue-50 border-blue-100",
    accent: "from-blue-500/5 to-blue-600/0",
    hoverBorder: "hover:border-blue-200",
    url: "https://school.mytalim.com",
  },
  {
    icon: GraduationCap,
    role: "Teachers",
    headline: "Spend more time teaching, less time tracking",
    body: "Curriculum, attendance, grading, and parent communication — organized, automated, and accessible anywhere.",
    features: ["Attendance marking & analytics", "Curriculum & assessment tools", "Grading & result publishing", "Resource sharing"],
    color: "text-purple-500",
    iconBg: "bg-purple-50 border-purple-100",
    accent: "from-purple-500/5 to-purple-600/0",
    hoverBorder: "hover:border-purple-200",
    url: "https://teachers.mytalim.com",
  },
  {
    icon: BookOpen,
    role: "Students",
    headline: "Own your academic journey",
    body: "See your grades, resources, schedule, and attendance in real time. Stay connected with teachers and track your progress.",
    features: ["Live grade tracking", "Learning resources library", "Class timetable", "Real-time messaging"],
    color: "text-[#0DCCB4]",
    iconBg: "bg-teal-50 border-teal-100",
    accent: "from-teal-500/5 to-teal-600/0",
    hoverBorder: "hover:border-teal-200",
    url: "https://students.mytalim.com",
  },
  {
    icon: Heart,
    role: "Parents",
    headline: "Stay connected without the anxiety",
    body: "Know exactly how your child is doing — attendance, results, timetables, and direct teacher messages — all in one place.",
    features: ["Child attendance calendar", "Results & grade reports", "Fee payment portal", "Direct teacher messaging"],
    color: "text-rose-500",
    iconBg: "bg-rose-50 border-rose-100",
    accent: "from-rose-500/5 to-rose-600/0",
    hoverBorder: "hover:border-rose-200",
    url: "https://parents.mytalim.com",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function RolePortals() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section id="solutions" className="py-28 bg-[#F8FAFC] dot-grid-light">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <p className="text-[11px] font-semibold text-[#003366] uppercase tracking-widest mb-4">For Everyone</p>
            <h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-5"
              style={{ fontFamily: "var(--font-manrope)" }}
            >
              Talim Works for{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg, #003366, #0066CC)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Everyone in the Learning Journey
              </span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Four dedicated portals, one connected platform. Every stakeholder gets exactly
              what they need — nothing more, nothing less.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {roles.map((r) => (
              <motion.div
                key={r.role}
                variants={card}
                className={`bg-white border border-gray-150 rounded-2xl p-7 card-hover group ${r.hoverBorder} transition-all duration-200`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${r.iconBg}`}>
                    <r.icon size={20} className={r.color} />
                  </div>
                  <span className="text-[12px] font-semibold text-gray-400 uppercase tracking-widest">{r.role}</span>
                </div>

                <h3 className="text-[18px] font-bold text-gray-900 mb-3 leading-snug" style={{ fontFamily: "var(--font-manrope)" }}>
                  {r.headline}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed mb-5">{r.body}</p>

                <ul className="space-y-1.5 mb-6">
                  {r.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className={`w-1 h-1 rounded-full ${r.color.replace("text-", "bg-")}`} />
                      <p className="text-[13px] text-gray-500">{f}</p>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setModalOpen(true)}
                  className={`flex items-center gap-1.5 text-[13px] font-semibold ${r.color} group-hover:gap-2.5 transition-all duration-200`}
                >
                  Explore {r.role} Portal
                  <ArrowRight size={13} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <PortalModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
