"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import PortalModal from "./PortalModal";

const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "For Institutions", href: "#institutions" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050D1A]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-[8px] bg-gradient-to-br from-[#003366] to-[#0066CC] flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-manrope)" }}>T</span>
              </div>
              <span
                className="text-white font-bold text-lg tracking-tight"
                style={{ fontFamily: "var(--font-manrope)" }}
              >
                mytalim
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-all duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-4 py-2 rounded-lg text-sm font-semibold text-white/80 hover:text-white hover:bg-white/[0.07] border border-white/[0.12] transition-all duration-150"
              >
                Sign In
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="px-5 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#003366] to-[#0066CC] hover:from-[#004488] hover:to-[#0077EE] shadow-[0_0_20px_rgba(0,102,204,0.4)] transition-all duration-150"
              >
                Request a Demo
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white/80 hover:text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#050D1A]/95 backdrop-blur-xl border-t border-white/[0.06] overflow-hidden"
            >
              <div className="section-container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="px-4 py-3 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/[0.06] transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-3 border-t border-white/[0.06] mt-2">
                  <button
                    onClick={() => { setModalOpen(true); setMenuOpen(false); }}
                    className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white/80 border border-white/[0.12] text-center"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => { setModalOpen(true); setMenuOpen(false); }}
                    className="w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#003366] to-[#0066CC] text-center"
                  >
                    Request a Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <PortalModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
