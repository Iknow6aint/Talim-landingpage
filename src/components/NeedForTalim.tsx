"use client"

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const WhySchoolsNeedTalim = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const traditionalItems = [
    "Manual record-keeping on paper",
    "Timetables created manually and prone to errors",
    "Teachers submit attendance on sheets",
    "Students wait days for printed results",
    "Messages and announcements through word of mouth",
    "Limited communication between school and parents",
    "Files and notes handed out physically"
  ];

  const modernItems = [
    { icon: "security-safe.svg", text: "All records stored securely online" },
    { icon: "timer.svg", text: "Automatic timetables for all classes" },
    { icon: "calendar-tick.svg", text: "Attendance taken digitally, instantly synced" },
    { icon: "text-document.svg", text: "Instant result access for students and parents" },
    { icon: "volume-high.svg", text: "Instant school-wide announcements in one click" },
    { icon: "messages-3.svg", text: "Real-time chat between teachers, students, and parents" },
    { icon: "document-download.svg", text: "Resources shared and downloaded anytime online" }
  ];

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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
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

        .item-delay-1 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .item-delay-2 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .item-delay-3 {
          animation-delay: 0.7s;
          opacity: 0;
        }

        .item-delay-4 {
          animation-delay: 0.8s;
          opacity: 0;
        }

        .item-delay-5 {
          animation-delay: 0.9s;
          opacity: 0;
        }

        .item-delay-6 {
          animation-delay: 1s;
          opacity: 0;
        }

        .item-delay-7 {
          animation-delay: 1.1s;
          opacity: 0;
        }
      `}</style>

      <section ref={sectionRef} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
              Why Schools Need TALIM
            </h2>
            <p className={`text-gray-600 text-lg ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
              TALIM replaces outdated manual processes with smart,
              <br />
              automated tools built for modern schools.
            </p>
          </div>

          {/* Two Column Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left - Traditional */}
            <div className={`bg-white rounded-3xl p-8 ${isVisible ? 'animate-slideInLeft delay-300' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold text-black mb-8">
                Without TALIM (Traditional)
              </h3>
              <div className="space-y-0">
                {traditionalItems.map((text, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-4 py-6 ${
                      index !== traditionalItems.length - 1 ? 'border-b border-[#f0f0f0]' : ''
                    } ${index === 0 ? 'border-t border-[#f0f0f0]' : ''} ${
                      isVisible ? `animate-fadeIn item-delay-${index + 1}` : 'opacity-0'
                    } hover:bg-gray-50 transition-colors duration-300 rounded-lg px-2`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Image 
                        src="/document.svg" 
                        alt="" 
                        width={20} 
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-gray-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Modern with TALIM */}
            <div className={`bg-gradient-to-br from-[#003366] to-[#003366] rounded-3xl p-8 text-white ${isVisible ? 'animate-slideInRight delay-400' : 'opacity-0'}`}>
              <h3 className="text-2xl font-bold mb-8">
                With TALIM (Modern & Efficient)
              </h3>
              <div className="space-y-0">
                {modernItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-4 py-6 ${
                      index !== modernItems.length - 1 ? 'border-b border-[#1E5790]' : ''
                    } ${index === 0 ? 'border-t border-[#1E5790]' : ''} ${
                      isVisible ? `animate-fadeIn item-delay-${index + 1}` : 'opacity-0'
                    } hover:bg-white/10 transition-colors duration-300 rounded-lg px-2`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <Image 
                        src={`/${item.icon}`} 
                        alt="" 
                        width={20} 
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-white">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySchoolsNeedTalim;