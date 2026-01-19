"use client"

import React, { useState, useEffect, useRef } from "react";
import { Outfit } from "next/font/google";
import { Calendar, MapPin, Users, TrendingUp, Database, Globe, ArrowRight, Sparkles } from "lucide-react";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const UpcomingEventSection = () => {
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
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .event-delay-100 {
          animation-delay: 0.1s;
          opacity: 0;
        }

        .event-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .event-delay-300 {
          animation-delay: 0.3s;
          opacity: 0;
        }

        .event-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }

        .event-delay-500 {
          animation-delay: 0.5s;
          opacity: 0;
        }

        .event-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }
      `}</style>

      <section ref={sectionRef} className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4FF] via-[#FBFCFE] to-[#E8F4FF] rounded-3xl -z-10"></div>
        
        {/* Event Badge */}
        <div className={`flex justify-center mb-6 ${isVisible ? 'animate-slideInLeft event-delay-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#003366] to-[#0055AA] text-white px-6 py-2 rounded-full shadow-lg">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className={`${outfit.className} font-semibold text-sm`}>UPCOMING EVENT</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-12">
          <h2 className={`${outfit.className} text-3xl md:text-4xl lg:text-5xl font-bold text-[#003366] mb-4 leading-tight ${isVisible ? 'animate-slideInLeft event-delay-200' : 'opacity-0'}`}>
            Talim Educational Technology Summit 2026
          </h2>
          <p className={`text-xl md:text-2xl font-semibold bg-gradient-to-r from-[#003366] to-[#0055AA] bg-clip-text text-transparent mb-6 ${isVisible ? 'animate-slideInRight event-delay-300' : 'opacity-0'}`}>
            Bridging the Digital Divide: Data-Driven Education for Africa's Future
          </p>
          <p className={`text-[#767676] text-base md:text-lg max-w-4xl mx-auto leading-relaxed ${isVisible ? 'animate-slideInLeft event-delay-400' : 'opacity-0'}`}>
            Join us for a transformative educational summit where technology meets tradition. 
            We're bringing together leading stakeholders, educators, and innovators to revolutionize 
            African education through data-driven learning methodologies.
          </p>
        </div>

        {/* Event Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Date */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#E8F4FF] hover:border-[#003366] ${isVisible ? 'animate-slideInLeft event-delay-500' : 'opacity-0'}`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#81B8F0] rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`${outfit.className} font-bold text-[#003366] text-lg mb-1`}>Date</h3>
                <p className="text-[#767676] font-semibold">April 2026</p>
                <p className="text-[#767676] text-sm">Full dates to be announced</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#E8F4FF] hover:border-[#003366] ${isVisible ? 'animate-slideInLeft event-delay-600' : 'opacity-0'}`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#81B8F0] rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`${outfit.className} font-bold text-[#003366] text-lg mb-1`}>Location</h3>
                <p className="text-[#767676] font-semibold">Port Harcourt City</p>
                <p className="text-[#767676] text-sm">Rivers State, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#E8F4FF] hover:border-[#003366] ${isVisible ? 'animate-slideInRight event-delay-500' : 'opacity-0'}`}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#003366] to-[#81B8F0] rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`${outfit.className} font-bold text-[#003366] text-lg mb-1`}>Partners</h3>
                <p className="text-[#767676] font-semibold">Ministry of Education</p>
                <p className="text-[#767676] text-sm">Leading EdTech Stakeholders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Themes */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border-2 border-[#E8F4FF] mb-12 ${isVisible ? 'animate-slideInRight event-delay-600' : 'opacity-0'}`}>
          <h3 className={`${outfit.className} text-2xl md:text-3xl font-bold text-[#003366] mb-8 text-center`}>
            Summit Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data-Driven Education */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8F4FF] to-[#81B8F0] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Database className="w-8 h-8 text-[#003366]" />
              </div>
              <h4 className={`${outfit.className} font-bold text-[#003366] text-lg mb-3`}>
                Data-Driven Learning
              </h4>
              <p className="text-[#767676] text-sm leading-relaxed">
                Exploring how data analytics and insights can transform educational outcomes and personalize student learning experiences.
              </p>
            </div>

            {/* Technology Integration */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8F4FF] to-[#81B8F0] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-8 h-8 text-[#003366]" />
              </div>
              <h4 className={`${outfit.className} font-bold text-[#003366] text-lg mb-3`}>
                Modern Curriculum
              </h4>
              <p className="text-[#767676] text-sm leading-relaxed">
                Moving beyond obsolete teaching methods to embrace contemporary, relevant curricula that prepare students for the digital age.
              </p>
            </div>

            {/* Global Standards */}
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#E8F4FF] to-[#81B8F0] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Globe className="w-8 h-8 text-[#003366]" />
              </div>
              <h4 className={`${outfit.className} font-bold text-[#003366] text-lg mb-3`}>
                Global Best Practices
              </h4>
              <p className="text-[#767676] text-sm leading-relaxed">
                Bringing Western world educational standards and methodologies to African institutions while respecting local contexts.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className={`inline-block ${isVisible ? 'animate-slideInLeft event-delay-600' : 'opacity-0'}`}>
            <button className="group bg-gradient-to-r from-[#003366] to-[#0055AA] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 mx-auto">
              <span className={outfit.className}>Register Your Interest</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <p className="text-[#767676] text-sm mt-4">
              Limited seats available • Early bird registration opens soon
            </p>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className={`mt-16 bg-gradient-to-r from-[#003366] to-[#0055AA] rounded-3xl p-8 md:p-12 text-white ${isVisible ? 'animate-slideInRight event-delay-600' : 'opacity-0'}`}>
          <h3 className={`${outfit.className} text-2xl md:text-3xl font-bold mb-6 text-center`}>
            Why Attend This Summit?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h4 className={`${outfit.className} font-bold mb-2`}>Network with Industry Leaders</h4>
                <p className="text-white/90 text-sm">Connect with education stakeholders, tech innovators, and government officials shaping Africa's educational future.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h4 className={`${outfit.className} font-bold mb-2`}>Learn Best Practices</h4>
                <p className="text-white/90 text-sm">Discover proven strategies for implementing data-driven education and modern learning technologies in your institution.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h4 className={`${outfit.className} font-bold mb-2`}>Shape the Future</h4>
                <p className="text-white/90 text-sm">Be part of the movement transforming African education and closing the gap with global educational standards.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold">✓</span>
              </div>
              <div>
                <h4 className={`${outfit.className} font-bold mb-2`}>Access Exclusive Resources</h4>
                <p className="text-white/90 text-sm">Get hands-on experience with Talim's platform and receive exclusive implementation guides and support materials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingEventSection;
