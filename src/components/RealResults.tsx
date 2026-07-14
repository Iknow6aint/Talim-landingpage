import { ArrowDownRight, Clock3, MessageCircleMore, ScanLine } from "lucide-react";

const outcomes = [
  { icon: Clock3, label: "Less repetitive administration", copy: "Connected workflows reduce duplicate entry across classes, attendance, results, and fees." },
  { icon: MessageCircleMore, label: "Clearer stakeholder communication", copy: "Announcements and updates reach the right administrators, teachers, parents, and students." },
  { icon: ScanLine, label: "Earlier visibility", copy: "Decision-makers can see patterns while there is still time to respond—not after the term closes." },
];

export default function RealResults() {
  return <section className="bg-[#dce9f5] px-5 py-24 sm:py-28"><div className="mx-auto max-w-[1160px]"><div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.16em] text-[#2563EB]">Practical outcomes</p><h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-tight text-[#07182b] sm:text-5xl">Better systems create room for better learning.</h2></div><p className="max-w-xl text-base leading-7 text-[#58718a] lg:justify-self-end">Until customer results are independently approved, we focus on the operational improvements Talim is designed to enable.</p></div><div className="mt-12 grid gap-4 md:grid-cols-3">{outcomes.map(({icon:Icon,label,copy},index)=><article key={label} className="group rounded-3xl border border-[#b8cee2] bg-[#e7f0f8] p-7 transition hover:-translate-y-1 hover:border-[#8fb5d8] hover:shadow-xl"><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-xl bg-[#d5e7f7] text-[#2563EB]"><Icon size={20}/></span><span className="text-sm font-extrabold text-[#8aa2ba]">0{index+1}</span></div><h3 className="mt-7 font-display text-xl font-extrabold text-[#11263d]">{label}</h3><p className="mt-3 text-sm leading-6 text-[#58718a]">{copy}</p><ArrowDownRight className="mt-7 text-blue-500 transition group-hover:translate-x-1 group-hover:translate-y-1" size={20}/></article>)}</div></div></section>;
}
