"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, Building2, GraduationCap, Grid3X3, Info, Users, X } from "lucide-react";
import { useEffect, useState } from "react";
import PortalModal from "./PortalModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Institutions", href: "#institutions" },
  { label: "Product tour", href: "#product-tour" },
];

const menuItems = [
  { icon: Grid3X3, title: "Platform", copy: "Everything institutions need in one system", href: "#platform" },
  { icon: GraduationCap, title: "Solutions", copy: "Connected tools for every stakeholder", href: "#solutions" },
  { icon: Building2, title: "Institutions", copy: "Built for schools, colleges and networks", href: "#institutions" },
  { icon: Users, title: "Portals", copy: "Admin, teacher, parent and student access", href: "#solutions" },
  { icon: BookOpen, title: "Product tour", copy: "See Talim working across an institution", href: "#product-tour" },
  { icon: Info, title: "About Talim", copy: "Education infrastructure for measurable learning", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [portalOpen, setPortalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const close = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.div animate={{ top: scrolled ? 0 : 42 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-x-0 z-50 flex justify-center px-3 pointer-events-none">
        <motion.nav
          aria-label="Main navigation"
          animate={{ marginTop: scrolled ? 12 : 20, maxWidth: scrolled ? 900 : 980 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex w-full items-center gap-3 rounded-full border border-white/15 bg-[#041525]/88 px-3 py-2.5 shadow-[0_14px_50px_rgba(0,10,30,.38)] backdrop-blur-xl md:gap-6 md:px-5"
        >
          <a href="#home" className="flex shrink-0 items-center gap-2 text-white" aria-label="Talim home">
            <Image src="/images/landing/brand/talim-mark.png" alt="" width={30} height={30} className="rounded-lg" />
            <span className="font-display text-lg font-extrabold tracking-tight">Talim</span>
          </a>

          <div className="hidden flex-1 items-center justify-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-semibold text-white/70 transition-colors hover:text-white">
                {link.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[.07] text-white transition hover:bg-white/15"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <Grid3X3 size={17} />
            </button>
            <button
              type="button"
              onClick={() => setPortalOpen(true)}
              className="hidden rounded-full bg-[#2563EB] px-5 py-2.5 text-sm font-bold text-white shadow-[0_0_24px_rgba(37,99,235,.4)] transition hover:-translate-y-0.5 hover:bg-[#3471ef] sm:block"
            >
              Explore portals
            </button>
          </div>
        </motion.nav>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-start justify-center bg-[#020a14]/75 px-4 pt-24 backdrop-blur-md"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onMouseDown={(event) => event.target === event.currentTarget && setMenuOpen(false)}
          >
            <motion.div
              role="dialog" aria-modal="true" aria-label="Navigation menu"
              initial={{ opacity: 0, y: 18, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }}
              className="w-full max-w-4xl rounded-[28px] border border-white/10 bg-[#061a30] p-5 shadow-2xl sm:p-9"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-lg font-extrabold text-white">
                  <Image src="/images/landing/brand/talim-mark.png" alt="" width={30} height={30} className="rounded-lg" /> Talim
                </div>
                <button autoFocus type="button" onClick={() => setMenuOpen(false)} className="grid size-10 place-items-center rounded-full bg-white/10 text-white" aria-label="Close menu"><X size={18} /></button>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {menuItems.map(({ icon: Icon, title, copy, href }) => (
                  <a key={title} href={href} onClick={() => setMenuOpen(false)} className="group flex gap-4 rounded-2xl p-4 transition hover:bg-white/[.06]">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-blue-400/25 bg-blue-500/15 text-blue-300"><Icon size={19} /></span>
                    <span><span className="block font-bold text-white">{title}</span><span className="mt-1 block text-sm leading-snug text-white/50">{copy}</span></span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <PortalModal isOpen={portalOpen} onClose={() => setPortalOpen(false)} />
    </>
  );
}
