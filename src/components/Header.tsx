"use client";

import Image from "next/image";
import { Outfit } from "next/font/google";
import { ArrowRight } from "./Icons";
import { useState } from "react";
import PortalModal from "./PortalModal";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="w-full px-4 sm:px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="border rounded-2xl border-[#f5f5f5] w-full px-4 sm:px-6 md:px-20 py-3 sm:py-4 flex justify-between items-center gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <Image 
              src="/talim.svg" 
              alt="Logo" 
              width={46.65} 
              height={45}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-[46.65px] md:h-[45px] flex-shrink-0"
            />
            <p className={`${outfit.className} text-lg sm:text-xl md:text-[24px] truncate`}>Talim</p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-b from-[#003366] via-[#003366] to-[#81B8F0] text-white px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 border border-[#81B8F0] rounded-xl sm:rounded-2xl flex items-center gap-1.5 sm:gap-2 hover:from-[#003366] hover:via-[#003366] hover:to-[#81B8F0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base whitespace-nowrap flex-shrink-0"
          >
            <span className="xs:hidden">Get Started</span>
            
          </button>
        </div>
      </header>

      <PortalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Header;