"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Building2, Check, GraduationCap, Users } from "lucide-react";
import { useState } from "react";

const roles = [
  {
    icon: Building2,
    role: "School Admin",
    image: "/images/landing/product/admin-dashboard-demo.png",
    width: 1647,
    height: 955,
    mobile: false,
    features: ["Complete institutional oversight", "Financial and operational reports", "Staff and student management", "Approve workflows instantly"],
    url: "https://school.mytalim.com",
  },
  {
    icon: BookOpen,
    role: "Teacher",
    image: "/images/landing/product/teacher-dashboard-demo.png",
    width: 1701,
    height: 925,
    mobile: false,
    features: ["Plan lessons and assessments", "Grade efficiently", "Track learner progress", "Mark attendance in seconds"],
    url: "https://teachers.mytalim.com",
  },
  {
    icon: Users,
    role: "Parent",
    image: "/images/landing/product/parent-children-demo.png",
    width: 853,
    height: 1844,
    mobile: true,
    features: ["Track attendance and results", "View fees and receipts", "Communicate with the school", "Submit leave requests"],
    url: "https://parents.mytalim.com",
  },
  {
    icon: GraduationCap,
    role: "Student",
    image: "/images/landing/product/student-dashboard-demo.png",
    width: 1703,
    height: 923,
    mobile: false,
    features: ["View timetable and subjects", "Track assignments and results", "Access resources and messages", "See progress at a glance"],
    url: "https://students.mytalim.com",
  },
] as const;

export default function RolePortals() {
  const [active, setActive] = useState(0);

  return (
    <section id="solutions" className="relative overflow-hidden bg-[#cfe2f3] px-5 py-24 sm:py-28">
      <div className="absolute inset-0 dot-grid-light opacity-70" />
      <div className="relative mx-auto max-w-[1380px]">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#2563eb]">Built for every stakeholder</p>
          <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-[#06366d] sm:text-6xl">
            Powerful Portals.<br />One Connected Community.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#315373]/70 sm:text-lg">Each person gets a focused experience. Every action still updates one shared source of truth.</p>
        </motion.div>

        <div className="-mx-5 mt-14 overflow-x-auto px-5 pb-8 [scrollbar-width:none] lg:mx-0 lg:overflow-visible lg:px-0">
          <div className="flex min-w-max snap-x snap-mandatory gap-5 lg:grid lg:min-w-0 lg:grid-cols-4">
            {roles.map((role, index) => {
              const Icon = role.icon;
              const selected = active === index;
              return (
                <motion.article
                  key={role.role}
                  onMouseEnter={() => setActive(index)}
                  onFocusCapture={() => setActive(index)}
                  onClick={() => setActive(index)}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className={`group w-[82vw] max-w-[340px] snap-center overflow-hidden rounded-[28px] border-2 bg-[#e8f1f8] p-3 shadow-[0_20px_50px_rgba(0,51,102,.08)] transition-colors duration-300 lg:w-auto ${selected ? "border-[#2563eb]" : "border-[#b9cee2] hover:border-[#8fb5d8]"}`}
                >
                  <div className="relative flex h-[190px] items-start justify-center overflow-hidden rounded-[20px] bg-[#051426]">
                    <Image src={role.image} alt={`${role.role} Talim portal`} width={role.width} height={role.height} sizes="(max-width:1024px) 340px, 24vw" className={role.mobile ? "h-[340px] w-auto object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]" : "h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051426]/25 to-transparent" />
                    <span className={`absolute right-3 top-3 size-2.5 rounded-full transition ${selected ? "bg-[#35d07f] shadow-[0_0_14px_#35d07f]" : "bg-white/30"}`} />
                  </div>

                  <div className="px-3 pb-4 pt-4">
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-[#dceeff] text-[#06366d]"><Icon size={19} /></span>
                      <h3 className="font-display text-xl font-extrabold text-[#101827]">{role.role}</h3>
                    </div>
                    <ul className="mt-5 space-y-2.5">
                      {role.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm leading-snug text-[#5f7186]"><Check size={15} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[#22c55e]" />{feature}</li>)}
                    </ul>
                    <a href={role.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#2563eb]">Explore portal <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
