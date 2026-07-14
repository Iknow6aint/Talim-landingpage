import Image from "next/image";
import { Mail } from "lucide-react";

const footerLinks = [
  { title:"Platform", links:[["Overview","#platform"],["Product Tour","#product-tour"],["Analytics","#analytics"],["Verified Records","#verified-records"]] },
  { title:"Solutions", links:[["Primary Schools","#institutions"],["Secondary Schools","#institutions"],["Colleges","#institutions"],["School Networks","#institutions"]] },
  { title:"Stakeholders", links:[["School Administrators","https://school.mytalim.com"],["Teachers","https://teachers.mytalim.com"],["Parents","https://parents.mytalim.com"],["Students","https://students.mytalim.com"]] },
  { title:"Resources", links:[["Product Tour","#product-tour"],["FAQs","#faq"],["Contact Support","mailto:support@mytalim.com"]] },
  { title:"Company", links:[["About Talim","#about"],["Contact","mailto:support@mytalim.com"],["Book a Demo","mailto:support@mytalim.com?subject=Talim%20Demo%20Request"]] },
] as const;

const marquee = ["School Operations","Academic Intelligence","Every Stakeholder Connected","Secure Payments","Measurable Learning"];

export default function Footer(){return <footer id="about" className="overflow-hidden bg-[#020d18] text-white">
  <div className="overflow-hidden border-b border-white/[.06] py-5"><div className="talim-marquee flex w-max">{[...marquee,...marquee].map((item,index)=><span key={`${item}-${index}`} className="flex items-center gap-4 whitespace-nowrap px-6 text-xs font-semibold text-white/50">{item}<span className="text-[#2563EB]">+</span></span>)}</div></div>
  <div className="overflow-hidden px-5 pt-6 text-center"><p className="font-display text-[clamp(6rem,17vw,12rem)] font-extrabold leading-[.85] tracking-[-.06em] text-white">Talim</p></div>
  <div className="mx-auto grid max-w-[1340px] gap-10 px-5 pb-12 pt-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(5,1fr)] lg:px-6">
    <div><a href="#home" className="flex items-center gap-2.5 font-display text-lg font-extrabold"><Image src="/images/landing/brand/talim-mark.png" alt="" width={30} height={30} className="rounded-lg"/>Talim</a><p className="mt-4 max-w-[230px] text-sm leading-6 text-white/40">Education infrastructure for measurable learning.</p><a href="mailto:support@mytalim.com" className="mt-5 flex items-center gap-2 text-xs text-white/45 transition hover:text-white"><Mail size={13}/>support@mytalim.com</a></div>
    {footerLinks.map(column=><div key={column.title}><p className="text-xs font-extrabold text-white/80">{column.title}</p><ul className="mt-5 space-y-3">{column.links.map(([label,href])=><li key={label}><a href={href} className="text-xs text-white/40 transition hover:text-white/75" {...(href.startsWith("http")?{target:"_blank",rel:"noopener noreferrer"}:{})}>{label}</a></li>)}</ul></div>)}
  </div>
  <div className="mx-auto flex max-w-[1340px] flex-col gap-3 border-t border-white/[.07] px-5 py-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between lg:px-6"><p>© 2026 Talim Education Technology. All rights reserved.</p><p>Privacy and legal information available on request.</p></div>
  </footer>}
