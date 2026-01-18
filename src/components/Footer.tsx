"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }
      `}</style>

      <div ref={footerRef} className="max-w-7xl mx-auto py-0 mt-20 px-4">
        {/* Logo and Tagline - Centered */}
        <div className="text-center mb-12">
          <div className={`flex items-center gap-2 justify-center ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
            <Image src="/talim.svg" alt="Logo" width={46.65} height={45} />
            <p className={`${outfit.className} text-[24px]`}>Talim</p>
          </div>
          <p className={`text-[#767676] mt-4 mb-6 max-w-[426px] mx-auto ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
            Empowering schools, teachers, parents, and students worldwide to
            connect, collaborate, and succeed effortlessly.
          </p>

          {/* Email Section */}
          <div className={`flex items-center justify-center gap-2 mb-8 ${isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
            <Mail className="w-5 h-5 text-[#003366]" />
            <a 
              href="mailto:support@mytalim.com" 
              className="text-[#003366] hover:text-[#81B8F0] transition-colors font-medium"
            >
              support@mytalim.com
            </a>
          </div>
        </div>

        {/* Contact Information Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 ${isVisible ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
          {/* Main Office - USA */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-[#EEEEEE]">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-[#003366] flex-shrink-0 mt-1" />
              <div>
                <h3 className={`${outfit.className} font-bold text-[#003366] mb-2`}>Main Office</h3>
                <p className="text-[#767676] text-sm leading-relaxed">
                  1235 East BLVD<br />
                  Charlotte, NC 28278<br />
                  USA
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <Phone className="w-4 h-4 text-[#003366] flex-shrink-0 mt-1" />
              <div className="text-sm">
                <a href="tel:+18887780218" className="text-[#003366] hover:text-[#81B8F0] transition-colors block">
                  +1 888 778-0218
                </a>
                <a href="tel:+17048441804" className="text-[#003366] hover:text-[#81B8F0] transition-colors block">
                  +1 704-844-1804
                </a>
              </div>
            </div>
          </div>

          {/* Abuja Branch */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-[#EEEEEE]">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-[#003366] flex-shrink-0 mt-1" />
              <div>
                <h3 className={`${outfit.className} font-bold text-[#003366] mb-2`}>Abuja Branch</h3>
                <p className="text-[#767676] text-sm leading-relaxed">
                  D32, Same Global Estate<br />
                  Lokogoma FCT<br />
                  Abuja, Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <Phone className="w-4 h-4 text-[#003366] flex-shrink-0 mt-1" />
              <a href="tel:+2349161684111" className="text-[#003366] hover:text-[#81B8F0] transition-colors text-sm">
                +234 916 168 4111
              </a>
            </div>
          </div>

          {/* Port Harcourt Branch */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-[#EEEEEE]">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-[#003366] flex-shrink-0 mt-1" />
              <div>
                <h3 className={`${outfit.className} font-bold text-[#003366] mb-2`}>Port Harcourt Branch</h3>
                <p className="text-[#767676] text-sm leading-relaxed">
                  No 5 Glitter Avenue<br />
                  East-West Road, Nkpolu<br />
                  Port Harcourt, Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <Phone className="w-4 h-4 text-[#003366] flex-shrink-0 mt-1" />
              <a href="tel:+2349161684111" className="text-[#003366] hover:text-[#81B8F0] transition-colors text-sm">
                +234 916 168 4111
              </a>
            </div>
          </div>

          {/* Keffi Branch */}
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-[#EEEEEE]">
            <div className="flex items-start gap-3 mb-3">
              <MapPin className="w-5 h-5 text-[#003366] flex-shrink-0 mt-1" />
              <div>
                <h3 className={`${outfit.className} font-bold text-[#003366] mb-2`}>Keffi Branch</h3>
                <p className="text-[#767676] text-sm leading-relaxed">
                  7A, Off Walida Estate<br />
                  Angwan Jarme<br />
                  Keffi, Nasarawa State, Nigeria
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 mt-3">
              <Phone className="w-4 h-4 text-[#003366] flex-shrink-0 mt-1" />
              <a href="tel:+2349075783540" className="text-[#003366] hover:text-[#81B8F0] transition-colors text-sm">
                +234 907 578 3540
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons - Centered */}
        <div className={`flex justify-center gap-4 mb-8 ${isVisible ? 'animate-fadeIn delay-500' : 'opacity-0'}`}>
          <a
            href="#"
            className="border border-[#EEEEEE] p-2 rounded-full flex items-center cursor-pointer hover:bg-gray-100 hover:border-[#003366] transition-all hover:scale-110"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="border border-[#EEEEEE] p-2 rounded-full flex items-center cursor-pointer hover:bg-gray-100 hover:border-[#003366] transition-all hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="border border-[#EEEEEE] p-2 rounded-full flex items-center cursor-pointer hover:bg-gray-100 hover:border-[#003366] transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Footer Image */}
      <div className={`w-full relative mt-8 ${isVisible ? 'animate-fadeIn delay-500' : 'opacity-0'}`}>
        <Image
          src="/footer-image.png"
          alt="Footer"
          width={1440}
          height={280}
          className="w-full h-auto object-cover"
          quality={100}
        />
      </div>
    </>
  );
};

export default Footer;