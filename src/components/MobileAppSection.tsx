"use client"

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { BookOpen, Users, GraduationCap, MessageCircle, ClipboardCheck, Calendar } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const MobileAppSection = () => {
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
        rootMargin: '0px 0px -50px 0px'
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

  return (
    <>
      <style jsx global>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .animate-fadeInScale {
          animation: fadeInScale 0.6s ease-out forwards;
        }

        .stagger-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .stagger-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .stagger-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .stagger-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .stagger-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .stagger-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>

      <section ref={sectionRef} className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`${outfit.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-4 ${isVisible ? 'animate-slideInUp stagger-100' : 'opacity-0'}`}>
            Download Talim Mobile App
          </h2>
          <p className={`text-[#767676] text-base md:text-lg max-w-3xl mx-auto mb-4 ${isVisible ? 'animate-slideInUp stagger-200' : 'opacity-0'}`}>
            Get the full Talim experience on your mobile device. Access courses, track attendance, 
            communicate with teachers and parents, and manage your learning on the go.
          </p>
          <p className={`text-[#003366] font-semibold text-sm md:text-base ${isVisible ? 'animate-slideInUp stagger-300' : 'opacity-0'}`}>
            Available on iOS and Android • Coming soon to African app stores
          </p>
        </div>

        {/* Download Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 ${isVisible ? 'animate-fadeInScale stagger-400' : 'opacity-0'}`}>
          <a
            href="#"
            className="inline-block transition-transform hover:scale-105 active:scale-95"
            aria-label="Download on Google Play"
          >
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 min-w-[200px] shadow-lg hover:shadow-xl transition-shadow">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-lg font-semibold -mt-1">Google Play</div>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="inline-block transition-transform hover:scale-105 active:scale-95"
            aria-label="Download on App Store"
          >
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 min-w-[200px] shadow-lg hover:shadow-xl transition-shadow">
              <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-lg font-semibold -mt-1">App Store</div>
              </div>
            </div>
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Learning Management */}
          <div className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EEEEEE] hover:border-[#003366] ${isVisible ? 'animate-fadeInScale stagger-300' : 'opacity-0'}`}>
            <div className="w-16 h-16 bg-[#E8F4FF] rounded-full flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-[#003366]" />
            </div>
            <h3 className={`${outfit.className} text-xl font-bold text-[#003366] mb-3`}>
              Learning Management
            </h3>
            <p className="text-[#767676] text-sm leading-relaxed">
              Access your curriculum, assignments, and learning materials. Download content for offline learning and track your academic progress in real-time.
            </p>
          </div>

          {/* Real-time Communication */}
          <div className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EEEEEE] hover:border-[#003366] ${isVisible ? 'animate-fadeInScale stagger-400' : 'opacity-0'}`}>
            <div className="w-16 h-16 bg-[#E8F4FF] rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-[#003366]" />
            </div>
            <h3 className={`${outfit.className} text-xl font-bold text-[#003366] mb-3`}>
              Real-time Communication
            </h3>
            <p className="text-[#767676] text-sm leading-relaxed">
              Stay connected with teachers, parents, and classmates. Send messages, participate in discussions, and receive instant notifications.
            </p>
          </div>

          {/* Attendance & Grades */}
          <div className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EEEEEE] hover:border-[#003366] ${isVisible ? 'animate-fadeInScale stagger-500' : 'opacity-0'}`}>
            <div className="w-16 h-16 bg-[#E8F4FF] rounded-full flex items-center justify-center mb-6">
              <ClipboardCheck className="w-8 h-8 text-[#003366]" />
            </div>
            <h3 className={`${outfit.className} text-xl font-bold text-[#003366] mb-3`}>
              Attendance & Grades
            </h3>
            <p className="text-[#767676] text-sm leading-relaxed">
              Mark attendance with ease, view grades and performance analytics. Get detailed reports on student progress and academic achievements.
            </p>
          </div>

          {/* Parent Portal */}
          <div className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EEEEEE] hover:border-[#003366] ${isVisible ? 'animate-fadeInScale stagger-400' : 'opacity-0'}`}>
            <div className="w-16 h-16 bg-[#E8F4FF] rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-[#003366]" />
            </div>
            <h3 className={`${outfit.className} text-xl font-bold text-[#003366] mb-3`}>
              Parent Portal
            </h3>
            <p className="text-[#767676] text-sm leading-relaxed">
              Parents can monitor their child's progress, communicate with teachers, view attendance records, and stay informed about school activities.
            </p>
          </div>

          {/* Schedule Management */}
          <div className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EEEEEE] hover:border-[#003366] ${isVisible ? 'animate-fadeInScale stagger-500' : 'opacity-0'}`}>
            <div className="w-16 h-16 bg-[#E8F4FF] rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-[#003366]" />
            </div>
            <h3 className={`${outfit.className} text-xl font-bold text-[#003366] mb-3`}>
              Schedule Management
            </h3>
            <p className="text-[#767676] text-sm leading-relaxed">
              View class timetables, upcoming events, exam schedules, and assignment deadlines. Set reminders and never miss important dates.
            </p>
          </div>

          {/* Teacher Tools */}
          <div className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#EEEEEE] hover:border-[#003366] ${isVisible ? 'animate-fadeInScale stagger-600' : 'opacity-0'}`}>
            <div className="w-16 h-16 bg-[#E8F4FF] rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="w-8 h-8 text-[#003366]" />
            </div>
            <h3 className={`${outfit.className} text-xl font-bold text-[#003366] mb-3`}>
              Teacher Tools
            </h3>
            <p className="text-[#767676] text-sm leading-relaxed">
              Create and grade assignments, manage curriculum, conduct assessments, and access comprehensive analytics to enhance teaching effectiveness.
            </p>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className={`mt-12 text-center ${isVisible ? 'animate-fadeInScale stagger-600' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#003366] to-[#81B8F0] text-white px-6 py-3 rounded-full shadow-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className={`${outfit.className} font-semibold`}>
              Expanding to African App Stores Soon
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileAppSection;
