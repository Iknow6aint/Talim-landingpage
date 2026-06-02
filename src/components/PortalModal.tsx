"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Building2, GraduationCap, BookOpen, Heart, ArrowRight } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const portals = [
  {
    icon: BookOpen,
    label: "Student Portal",
    description: "Access your grades, resources, timetable, and messages",
    url: "https://students.mytalim.com",
    color: "text-[#0DCCB4]",
    iconBg: "bg-teal-50 border-teal-200",
    hoverBorder: "hover:border-teal-300",
  },
  {
    icon: GraduationCap,
    label: "Teacher Portal",
    description: "Manage classes, curriculum, attendance, and grading",
    url: "https://teachers.mytalim.com",
    color: "text-purple-500",
    iconBg: "bg-purple-50 border-purple-200",
    hoverBorder: "hover:border-purple-300",
  },
  {
    icon: Heart,
    label: "Parent Portal",
    description: "Monitor your child's progress, attendance, and results",
    url: "https://parents.mytalim.com",
    color: "text-rose-500",
    iconBg: "bg-rose-50 border-rose-200",
    hoverBorder: "hover:border-rose-300",
  },
  {
    icon: Building2,
    label: "School Admin Portal",
    description: "Oversee your entire institution from one dashboard",
    url: "https://school.mytalim.com",
    color: "text-blue-500",
    iconBg: "bg-blue-50 border-blue-200",
    hoverBorder: "hover:border-blue-300",
  },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const panelVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  exit: { opacity: 0, scale: 0.96, y: 16, transition: { duration: 0.2 } },
};

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

export default function PortalModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-5 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#003366] to-[#0066CC] flex items-center justify-center">
                  <span className="text-white font-bold text-xs" style={{ fontFamily: "var(--font-manrope)" }}>T</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900" style={{ fontFamily: "var(--font-manrope)" }}>Choose Your Portal</p>
                  <p className="text-[11px] text-gray-400">Select your role to continue</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
              >
                <X size={15} />
              </button>
            </div>

            {/* Portal cards */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="visible"
              className="p-4 grid grid-cols-2 gap-2.5"
            >
              {portals.map((p) => (
                <motion.a
                  key={p.label}
                  variants={item}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-white card-hover ${p.hoverBorder} transition-all duration-200`}
                >
                  <div className={`w-9 h-9 rounded-lg border flex items-center justify-center mb-3 ${p.iconBg}`}>
                    <p.icon size={17} className={p.color} />
                  </div>
                  <p className="text-[13px] font-semibold text-gray-900 mb-1" style={{ fontFamily: "var(--font-manrope)" }}>
                    {p.label}
                  </p>
                  <p className="text-[11px] text-gray-500 leading-snug flex-1">{p.description}</p>
                  <div className={`flex items-center gap-1 mt-3 text-[11px] font-semibold ${p.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    Open <ArrowRight size={10} />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Footer */}
            <div className="px-6 pb-5 pt-1 text-center">
              <p className="text-[12px] text-gray-400">
                Need help?{" "}
                <a href="mailto:support@mytalim.com" className="text-[#003366] font-semibold hover:underline">
                  support@mytalim.com
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
