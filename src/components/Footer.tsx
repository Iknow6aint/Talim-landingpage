"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";

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

      <div ref={footerRef} className="max-w-[426px] mx-auto py-0 mt-20 text-center">
        <div className={`flex items-center gap-2 justify-center ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
          <Image src="/talim.svg" alt="Logo" width={46.65} height={45} />
          <p className={`${outfit.className} text-[24px]`}>Talim</p>
        </div>
        <p className={`text-[#767676] mt-4 mb-6 ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          Empowering schools, teachers, parents, and students worldwide to
          connect, collaborate, and succeed effortlessly.
        </p>

        {/* Email Section */}
        <div className={`flex items-center justify-center gap-2 mb-6 ${isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
          <Mail className="w-5 h-5 text-[#003366]" />
          <a 
            href="mailto:mytalim@gmail.com" 
            className="text-[#003366] hover:text-[#81B8F0] transition-colors font-medium"
          >
            mytalim@gmail.com
          </a>
        </div>

        {/* Social Icons */}
        <div className={`flex justify-center gap-4 ${isVisible ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
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