"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  ["Which institutions can use Talim?", "Talim supports primary and secondary schools, colleges, vocational institutes, training academies, and multi-campus school networks."],
  ["Can we migrate our existing records?", "Yes. The onboarding process can include structured migration of student, staff, class, and academic records from your existing system."],
  ["What does onboarding involve?", "Onboarding is planned around your institution and can include configuration, data preparation, role setup, and guided staff training."],
  ["Do parents and students receive accounts?", "Yes. Each stakeholder can access a dedicated portal designed around the information and actions relevant to their role."],
  ["Can Talim support multiple campuses?", "Yes. Talim is designed to connect operations and reporting across both single-campus and multi-campus institutions."],
  ["How is access to institutional data controlled?", "Access is role-based, so users see the tools and records permitted for their responsibilities within the institution."],
];

export default function FaqSection() {
  const [open, setOpen] = useState(0);
  return <section id="faq" className="bg-[#d6e5f2] px-5 py-24 sm:py-28"><div className="mx-auto grid max-w-[1160px] gap-12 lg:grid-cols-[.8fr_1.2fr]">
    <div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#2563EB]">Frequently asked questions</p><h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-[#07182b] sm:text-5xl">A smooth transition starts with clear answers.</h2><p className="mt-5 max-w-md leading-7 text-slate-500">Every institution is different. These answers cover the most common questions before onboarding begins.</p><a href="mailto:support@mytalim.com" className="mt-8 inline-flex rounded-full bg-[#07182b] px-6 py-3 text-sm font-bold text-white">Ask another question</a></div>
    <div className="divide-y divide-slate-200 border-y border-slate-200">{faqs.map(([question,answer],index)=><div key={question}><button onClick={()=>setOpen(open===index?-1:index)} aria-expanded={open===index} className="flex w-full items-center justify-between gap-5 py-5 text-left font-display font-extrabold text-slate-900"><span>{question}</span><Plus size={19} className={`shrink-0 transition ${open===index?"rotate-45 text-blue-600":"text-slate-400"}`}/></button><div className={`grid transition-[grid-template-rows] duration-300 ${open===index?"grid-rows-[1fr]":"grid-rows-[0fr]"}`}><div className="overflow-hidden"><p className="pb-6 pr-10 text-sm leading-7 text-slate-500">{answer}</p></div></div></div>)}</div>
  </div></section>;
}
