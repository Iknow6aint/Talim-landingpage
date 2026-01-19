"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PortalModal from "./PortalModal";
import dashboardImg from "../assets/dashboard Parent.png";
import resultsImg from "../assets/results.png";
import chatsImg from "../assets/chats.png";



const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Carousel images - using assets from src/assets/
  const carouselImages = [
    { src: dashboardImg, alt: 'Dashboard overview' },
    { src: resultsImg, alt: 'Results page' },
    { src: chatsImg, alt: 'Messages' },
  ];

  function ScreenshotCarousel() {
    const [index, setIndex] = useState(0);
    const length = carouselImages.length;

    useEffect(() => {
      const id = setInterval(() => setIndex((i) => (i + 1) % length), 4000);
      return () => clearInterval(id);
    }, [length]);

    return (
      <div className="relative">
        <div className="carousel-viewport">
          <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {carouselImages.map((img, i) => (
              <div key={i} className="carousel-slide">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={600}
                  className="object-cover w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          aria-label="Previous"
          onClick={() => setIndex((index - 1 + length) % length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 carousel-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 16.707a1 1 0 01-1.414 0L5.586 11.414a1 1 0 010-1.414l5.293-5.293a1 1 0 111.414 1.414L8.414 10l3.879 3.879a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <button
          aria-label="Next"
          onClick={() => setIndex((index + 1) % length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 carousel-button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 rotate-180" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 16.707a1 1 0 01-1.414 0L5.586 11.414a1 1 0 010-1.414l5.293-5.293a1 1 0 111.414 1.414L8.414 10l3.879 3.879a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>

        <div className="flex gap-2 justify-center mt-3">
          {carouselImages.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`carousel-dot ${i === index ? 'bg-[#003366]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    );
  }

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

        /* Carousel styles */
        .carousel-viewport { overflow: hidden; border-radius: 12px; }
        .carousel-track { display: flex; transition: transform 0.7s ease; }
        .carousel-slide { flex: 0 0 100%; }
        .carousel-dot { width: 10px; height: 10px; border-radius: 9999px; border: none; }
        .carousel-button { background: rgba(255,255,255,0.9); border-radius: 9999px; padding: 6px; box-shadow: 0 6px 18px rgba(2,6,23,0.08); border: none; }
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
          {/* Screenshot carousel: update /public/screens/* with your screenshots (dashboard.png, results.png, messages.png) */}
          <div className="w-full max-w-[1000px] mx-auto">
            {/* Inline carousel component */}
            {/** Simple, dependency-free carousel with autoplay, arrows and dots **/}
            <ScreenshotCarousel />
          </div>
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