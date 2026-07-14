"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Building2, GraduationCap, Heart, X } from "lucide-react";
import { useEffect } from "react";

interface Props { isOpen: boolean; onClose: () => void; }

const portals = [
  { icon: Building2, label: "School Admin", description: "Institution operations, finance and reporting", url: "https://school.mytalim.com", number: "01" },
  { icon: BookOpen, label: "Teacher", description: "Classes, attendance, assessments and grading", url: "https://teachers.mytalim.com", number: "02" },
  { icon: Heart, label: "Parent", description: "Children, payments, attendance and updates", url: "https://parents.mytalim.com", number: "03" },
  { icon: GraduationCap, label: "Student", description: "Subjects, timetable, grades and resources", url: "https://students.mytalim.com", number: "04" },
] as const;

export default function PortalModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; window.removeEventListener("keydown", onKey); };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[70] grid place-items-center bg-[#01070d]/82 p-4 backdrop-blur-md" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
        <motion.div role="dialog" aria-modal="true" aria-labelledby="portal-title" initial={{ opacity: 0, y: 24, scale: .965 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 18, scale: .98 }} transition={{ duration: .36, ease: [0.22, 1, 0.36, 1] }} className="relative w-full max-w-3xl overflow-hidden rounded-[30px] border border-blue-300/15 bg-[#06182a] shadow-[0_35px_100px_rgba(0,0,0,.6)]">
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-blue-600/20 blur-[90px]" />
          <div className="relative flex items-start justify-between border-b border-blue-200/10 px-6 py-6 sm:px-8">
            <div className="flex items-center gap-4"><Image src="/images/landing/brand/talim-mark.png" alt="" width={42} height={42} className="rounded-xl" /><div><p className="text-[10px] font-extrabold uppercase tracking-[.18em] text-blue-300">Choose your workspace</p><h2 id="portal-title" className="mt-1 font-display text-2xl font-extrabold text-[#e4edf7]">Where are you signing in?</h2></div></div>
            <button autoFocus onClick={onClose} className="grid size-10 place-items-center rounded-full border border-blue-200/10 bg-blue-100/[.05] text-[#91a7bd] transition hover:rotate-90 hover:bg-blue-100/10 hover:text-[#dce7f3]" aria-label="Close portal selector"><X size={18} /></button>
          </div>

          <motion.div initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: .07 } } }} className="relative grid gap-3 p-5 sm:grid-cols-2 sm:p-8">
            {portals.map(({ icon: Icon, label, description, url, number }) => <motion.a key={label} variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0 } }} href={url} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-blue-200/10 bg-[#0a2138] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-[#0d2945] hover:shadow-[0_18px_45px_rgba(0,70,170,.18)]">
              <div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition group-hover:scale-110 group-hover:bg-blue-500/20"><Icon size={20} /></span><span className="font-mono text-xs text-[#4f6c89]">{number}</span></div>
              <h3 className="mt-6 font-display text-lg font-extrabold text-[#dce7f3]">{label} Portal</h3>
              <p className="mt-2 text-sm leading-6 text-[#8097ad]">{description}</p>
              <span className="mt-5 flex items-center gap-2 text-xs font-extrabold text-blue-300">Open workspace <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
            </motion.a>)}
          </motion.div>

          <div className="relative flex flex-col gap-2 border-t border-blue-200/10 px-6 py-5 text-xs text-[#7088a0] sm:flex-row sm:items-center sm:justify-between sm:px-8"><p>Each portal uses the same connected Talim system.</p><a href="mailto:support@mytalim.com" className="font-bold text-blue-300 transition hover:text-[#dce7f3]">Need help? Contact support</a></div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  );
}
