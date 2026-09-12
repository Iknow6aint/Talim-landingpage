import type { CSSProperties } from "react";
import BrandMark from "./BrandMark";
import { CONTACT_EMAIL, DEMO_HREF, PORTAL_URLS, PRIVACY_EMAIL, SUPPORT_EMAIL } from "@/lib/site";

const columns = [
  {
    title: "Platform",
    links: [
      ["Platform overview", "#platform"],
      ["Product tour", "#product-tour"],
      ["Analytics", "#analytics"],
      ["Verified records", "#verified-records"],
      ["Mobile apps", "#mobile"],
    ],
  },
  {
    title: "Stakeholders",
    links: [
      ["School administrators", PORTAL_URLS.admin],
      ["Teachers", PORTAL_URLS.teacher],
      ["Parents", PORTAL_URLS.parent],
      ["Students", PORTAL_URLS.student],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Stakeholder portals", "#solutions"],
      ["FAQs", "#faq"],
      ["Contact support", `mailto:${SUPPORT_EMAIL}`],
    ],
  },
  {
    title: "Company",
    links: [
      ["Institutions", "#institutions"],
      ["Contact", `mailto:${CONTACT_EMAIL}`],
      ["Book a demo", DEMO_HREF],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cream px-7 pb-14 pt-20">
      <div className="mx-auto max-w-[1560px]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-9">
          <div className="min-w-0">
            <a href="#home" className="flex items-center gap-2.5 text-ink hover:text-ink">
              <BrandMark size={30} />
              <span className="font-display text-[21px] font-black tracking-[-0.03em]">Talim</span>
            </a>
            <p className="mt-[18px] max-w-[260px] text-[17px] leading-[1.55] text-body">Education infrastructure for measurable learning.</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-[18px] inline-block text-base font-semibold text-brand">{SUPPORT_EMAIL}</a>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{column.title}</p>
              <ul className="mt-[18px] flex flex-col items-start gap-[11px] text-base">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a data-foot-link="" href={href} className="text-ink" {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div aria-hidden="true" className="mt-[72px] flex items-end justify-center gap-[0.01em] overflow-hidden pb-[0.06em] font-display text-[clamp(64px,15vw,240px)] font-black leading-[0.8] tracking-[-0.055em] text-[#B9C4D2]">
          {"Talim".split("").map((letter, index) => (
            <span key={index} data-letter="" className="inline-block" style={{ animationRange: `entry ${index * 4}% entry 100%` } as CSSProperties}>
              {letter}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-between gap-3.5 border-t border-ink/10 pt-6 text-[15px] text-muted">
          <p>© 2026 Talim Education Technology. All rights reserved.</p>
          <a href={`mailto:${PRIVACY_EMAIL}`} className="text-muted">Privacy enquiries</a>
        </div>
      </div>
    </footer>
  );
}
