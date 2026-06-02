"use client";

import { Mail, MapPin, Phone, Twitter, Linkedin, Instagram, Youtube } from "lucide-react";

const footerLinks = {
  Platform: ["School Operations", "Academic Intelligence", "Communication", "Financial Tools", "Verified Records"],
  Solutions: ["Primary Schools", "Secondary Schools", "Colleges & Universities", "Vocational Institutes", "School Networks"],
  Company: ["About Talim", "Careers", "Press", "Blog", "Contact Us"],
  Resources: ["Documentation", "API Reference", "Case Studies", "Help Center", "System Status"],
};

const offices = [
  {
    city: "Charlotte, NC",
    country: "United States",
    address: "1235 East BLVD, Charlotte, NC 28278",
    phone: "+1 888 778-0218",
    flag: "🇺🇸",
    primary: true,
  },
  { city: "Abuja", country: "Nigeria", phone: "+234 916 168 4111", flag: "🇳🇬" },
  { city: "Port Harcourt", country: "Nigeria", phone: "+234 916 168 4111", flag: "🇳🇬" },
  { city: "Keffi, Nasarawa", country: "Nigeria", phone: "+234 907 578 3540", flag: "🇳🇬" },
];

export default function Footer() {
  return (
    <footer className="bg-[#020810] text-white">
      {/* Top section */}
      <div className="section-container py-16 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#003366] to-[#0066CC] flex items-center justify-center">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-manrope)" }}>T</span>
              </div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: "var(--font-manrope)" }}>mytalim</span>
            </div>
            <p className="text-[13px] text-white/35 leading-relaxed mb-5">
              Education infrastructure for institutions that believe learning should be measurable, verifiable, and lifelong.
            </p>
            <a
              href="mailto:support@mytalim.com"
              className="flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 transition-colors"
            >
              <Mail size={13} />
              support@mytalim.com
            </a>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="text-[11px] font-semibold text-white/25 uppercase tracking-widest mb-4">{group}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-white/40 hover:text-white/75 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Offices */}
      <div className="section-container py-10 border-b border-white/[0.06]">
        <p className="text-[11px] font-semibold text-white/20 uppercase tracking-widest mb-6">Our Offices</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {offices.map((o) => (
            <div
              key={o.city}
              className={`rounded-xl p-4 ${
                o.primary
                  ? "bg-gradient-to-br from-[#003366]/40 to-[#001122]/60 border border-[#0066CC]/20"
                  : "bg-white/[0.03] border border-white/[0.05]"
              }`}
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className="text-base">{o.flag}</span>
                <div>
                  <p className="text-[13px] font-semibold text-white/70">{o.city}</p>
                  <p className="text-[11px] text-white/30">{o.country}</p>
                </div>
              </div>
              {o.address && (
                <div className="flex items-start gap-1.5 mb-1.5">
                  <MapPin size={11} className="text-white/25 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-white/30 leading-snug">{o.address}</p>
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Phone size={11} className="text-white/25 shrink-0" />
                <p className="text-[11px] text-white/35">{o.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="section-container py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-white/20">© 2026 Talim Education Technology. All rights reserved.</p>

          <div className="flex items-center gap-1">
            {[
              { icon: Twitter, label: "Twitter" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/25 hover:text-white/60 hover:bg-white/[0.06] transition-all"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="text-[12px] text-white/20 hover:text-white/45 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
