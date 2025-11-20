"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PortalModal from "./PortalModal";



const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s ease-out forwards;
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

        .delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>

      <section className="flex flex-col items-center justify-center text-center mt-20 mx-auto">
        <div className="flex flex-col items-center gap-8 max-w-[1086px]">
          <div className={`bg-gradient-to-r from-[#f7f7f7] to-[#f8f8f8] px-4 py-2 rounded-full mb-4 ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
            <p className="text-sm text-black font-medium flex items-center gap-2">
              <img 
                src="/frame.png" 
                alt="School life icon" 
                width={80} 
                height={35} 
                className="object-contain"
              />
              Making school life simpler for everyone
            </p>
          </div>
          <h1 className={`text-[35px] md:text-[50px] text-black-600 font-semibold text-center leading-[110%] tracking-[0.8px] ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
            All-in-One School <span className="block">Management Made Simple</span>
          </h1>
          <p className={`text-[#767676] text-[18px] text-center max-w-[617px] leading-[118%] ${isVisible ? 'animate-fadeInUp delay-300' : 'opacity-0'}`}>
            Manage classes, teachers, students, and parents — all from one<br/> connected platform. Share resources, take attendance, view<br/> results, and keep everyone informed effortlessly.
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 items-center ${isVisible ? 'animate-fadeInUp delay-400' : 'opacity-0'}`}>
           <button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-b from-[#003366] via-[#003366] to-[#81B8F0] text-white px-6 py-3 border border-[#81B8F0] rounded-2xl flex items-center gap-2 hover:from-[#003366] hover:via-[#003366] hover:to-[#81B8F0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className={`mt-20 ${isVisible ? 'animate-scaleIn delay-600' : 'opacity-0'}`}>
          <Image
            src="/School Dashboard.png"
            alt="School and students"
            width={1000}
            height={778}
            className="hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </section>

      <PortalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Hero;