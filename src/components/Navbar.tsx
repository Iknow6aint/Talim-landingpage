"use client";

import { useEffect, useRef, useState } from "react";
import BrandMark from "./BrandMark";
import { CONTACT_EMAIL, DEMO_HREF } from "@/lib/site";

const links = [
  { label: "Product", href: "#product-tour" },
  { label: "How it works", href: "#platform" },
  { label: "Institutions", href: "#institutions" },
  { label: "Contact", href: `mailto:${CONTACT_EMAIL}` },
];

export default function Navbar() {
  const progressRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${Math.min(1, window.scrollY / max)})`;
      setScrolled(window.scrollY > 24);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <>
      <div ref={progressRef} aria-hidden="true" className="fixed inset-x-0 top-0 z-[400] h-[3px] origin-left bg-brand" style={{ transform: "scaleX(0)" }} />
      <nav
        aria-label="Main navigation"
        className={`fixed left-1/2 top-4 z-[300] flex max-w-[calc(100vw-20px)] -translate-x-1/2 items-center gap-4 rounded-full bg-white/80 backdrop-blur-[22px] backdrop-saturate-[1.4] transition-[padding,box-shadow] duration-300 ease-talim sm:gap-[26px] ${
          scrolled ? "py-[7px] pl-4 pr-[7px] shadow-[0_6px_30px_rgba(11,37,69,0.14)]" : "py-2.5 pl-[18px] pr-2.5 shadow-[0_2px_20px_rgba(11,37,69,0.07)]"
        }`}
      >
        <a href="#home" aria-label="Talim home" className="flex shrink-0 items-center gap-[9px] text-ink hover:text-ink">
          <BrandMark size={28} priority />
          <span className="font-display text-xl font-black tracking-[-0.035em]">Talim</span>
        </a>
        <div className="hidden min-w-0 items-center gap-6 overflow-x-auto whitespace-nowrap text-[15px] font-semibold [scrollbar-width:none] md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-body hover:text-ink">
              {link.label}
            </a>
          ))}
        </div>
        <a data-nav-cta="" href={DEMO_HREF} className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-brand px-[22px] py-[13px] text-[15px] font-bold text-white hover:text-white">
          Book a demo
        </a>
      </nav>
    </>
  );
}
