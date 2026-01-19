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

        {/* Main Office - Featured */}
        <div className={`max-w-2xl mx-auto mb-10 ${isVisible ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
          <div className="bg-gradient-to-br from-[#003366] to-[#004d99] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="text-center mb-6">
              <h3 className={`${outfit.className} font-bold text-white text-2xl mb-2`}>Main Office</h3>
              <div className="w-16 h-1 bg-[#81B8F0] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-white">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-[#81B8F0] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#E8F4FD] font-medium mb-1">Address</p>
                  <p className="text-white/90 leading-relaxed">
                    1235 East BLVD<br />
                    Charlotte, NC 28278<br />
                    USA
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-[#81B8F0] flex-shrink-0 mt-1" />
                <div>
                  <p className="text-[#E8F4FD] font-medium mb-1">Phone</p>
                  <a href="tel:+18887780218" className="text-white/90 hover:text-white transition-colors block">
                    +1 888 778-0218
                  </a>
                  <a href="tel:+17048441804" className="text-white/90 hover:text-white transition-colors block">
                    +1 704-844-1804
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Branch Offices */}
        <div className={`mb-8 ${isVisible ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}>
          <h4 className={`${outfit.className} text-center text-[#003366] text-lg font-semibold mb-6`}>
            Our Branch Offices
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Abuja Branch */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-[#EEEEEE] hover:border-[#81B8F0]">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#003366]" />
                <h3 className={`${outfit.className} font-bold text-[#003366]`}>Abuja</h3>
              </div>
              <p className="text-[#767676] text-sm leading-relaxed mb-3">
                D32, Same Global Estate<br />
                Lokogoma FCT<br />
                Abuja, Nigeria
              </p>
              <div className="flex items-center gap-2 pt-3 border-t border-[#EEEEEE]">
                <Phone className="w-4 h-4 text-[#003366]" />
                <a href="tel:+2349161684111" className="text-[#003366] hover:text-[#81B8F0] transition-colors text-sm font-medium">
                  +234 916 168 4111
                </a>
              </div>
            </div>

            {/* Port Harcourt Branch */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-[#EEEEEE] hover:border-[#81B8F0]">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#003366]" />
                <h3 className={`${outfit.className} font-bold text-[#003366]`}>Port Harcourt</h3>
              </div>
              <p className="text-[#767676] text-sm leading-relaxed mb-3">
                No 5 Glitter Avenue<br />
                East-West Road, Nkpolu<br />
                Port Harcourt, Nigeria
              </p>
              <div className="flex items-center gap-2 pt-3 border-t border-[#EEEEEE]">
                <Phone className="w-4 h-4 text-[#003366]" />
                <a href="tel:+2349161684111" className="text-[#003366] hover:text-[#81B8F0] transition-colors text-sm font-medium">
                  +234 916 168 4111
                </a>
              </div>
            </div>

            {/* Keffi Branch */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-[#EEEEEE] hover:border-[#81B8F0]">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#003366]" />
                <h3 className={`${outfit.className} font-bold text-[#003366]`}>Keffi</h3>
              </div>
              <p className="text-[#767676] text-sm leading-relaxed mb-3">
                7A, Off Walida Estate<br />
                Angwan Jarme<br />
                Keffi, Nasarawa State, Nigeria
              </p>
              <div className="flex items-center gap-2 pt-3 border-t border-[#EEEEEE]">
                <Phone className="w-4 h-4 text-[#003366]" />
                <a href="tel:+2349075783540" className="text-[#003366] hover:text-[#81B8F0] transition-colors text-sm font-medium">
                  +234 907 578 3540
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons - Centered */}
        <div className={`flex justify-center gap-4 mb-12 ${isVisible ? 'animate-fadeIn delay-500' : 'opacity-0'}`}>
          <a
            href="#"
            className="bg-white border border-[#EEEEEE] p-3 rounded-full flex items-center cursor-pointer hover:bg-[#003366] hover:border-[#003366] transition-all hover:scale-110 group"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-[#003366] group-hover:text-white transition-colors" />
          </a>
          <a
            href="#"
            className="bg-white border border-[#EEEEEE] p-3 rounded-full flex items-center cursor-pointer hover:bg-[#003366] hover:border-[#003366] transition-all hover:scale-110 group"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5 text-[#003366] group-hover:text-white transition-colors" />
          </a>
          <a
            href="#"
            className="bg-white border border-[#EEEEEE] p-3 rounded-full flex items-center cursor-pointer hover:bg-[#003366] hover:border-[#003366] transition-all hover:scale-110 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-[#003366] group-hover:text-white transition-colors" />
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