"use client"

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Star, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2000, isVisible }: { end: string; duration?: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const endNum = parseInt(end);
    setCount(0); // Reset to 0 when end value changes
    const startTime = Date.now();

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(easeOutQuart * endNum);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endNum);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, isVisible]);

  return <span>{count}%</span>;
};

const TrustedBySchools = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
        threshold: 0.2,
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

  const testimonials = [
    {
      rating: 4,
      text: "TALIM completely changed how we run our school. Attendance, results, communication — everything is now organized and just a few clicks away. Our teachers spend less time on paperwork and more time teaching. It's like having a full admin team in one platform.",
      name: "Principal",
      school: "Greenwood High School",
      image: "/1.jpg",
      stats: [
        {
          percentage: "75",
          description: "Faster result processing after switching to TALIM."
        },
        {
          percentage: "82",
          description: "Fewer manual record errors in attendance and grading."
        }
      ]
    },
    {
      rating: 5,
      text: "The platform has transformed our administrative processes. Communication with parents is seamless, and tracking student progress has never been easier. Our staff loves how intuitive and efficient TALIM is.",
      name: "Head Teacher",
      school: "Sunrise Academy",
      image: "/ht.jpg",
      stats: [
        {
          percentage: "90",
          description: "Improvement in parent-teacher communication."
        },
        {
          percentage: "65",
          description: "Reduction in administrative workload."
        }
      ]
    },
    {
      rating: 5,
      text: "TALIM has been a game-changer for our institution. The ability to manage everything from one platform has significantly improved our efficiency and allowed us to focus more on student development.",
      name: "Director",
      school: "Excellence International School",
      image: "/dd.jpg",
      stats: [
        {
          percentage: "88",
          description: "Increased operational efficiency."
        },
        {
          percentage: "70",
          description: "Time saved on manual data entry."
        }
      ]
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const currentTestimonial = testimonials[currentIndex];

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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
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

      <section ref={sectionRef} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold text-black mb-4 ${isVisible ? 'animate-fadeInUp delay-100' : 'opacity-0'}`}>
              Trusted by Schools{' '}
              <span className="border-2 border-black rounded-2xl px-4 py-1 inline-block">
                Worldwide
              </span>
            </h2>
            <p className={`text-gray-600 text-lg ${isVisible ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
              Schools using TALIM have improved communication, reduced
              <br />
              paperwork, and achieved smoother operations.
            </p>
          </div>

          {/* Content Card with Navigation */}
          <div className={`relative ${isVisible ? 'animate-fadeIn delay-300' : 'opacity-0'}`}>
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            {/* Content Card */}
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
                {/* Left - Testimonial */}
                <div className="bg-white rounded-2xl p-8 shadow-sm flex-1 hover:shadow-md transition-shadow">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-6 h-6 transition-all duration-300 ${
                          star <= currentTestimonial.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'fill-gray-300 text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-800 text-lg leading-relaxed mb-8">
                    {currentTestimonial.text}
                  </p>

                  {/* Principal Info */}
                  <div className="flex items-center gap-4">
                    <Image
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      width={56}
                      height={56}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-black">{currentTestimonial.name}</p>
                      <p className="text-gray-600 text-sm">{currentTestimonial.school}</p>
                    </div>
                  </div>
                </div>

                {/* Right - Statistics */}
                <div className="flex flex-col gap-6 md:w-80">
                  {currentTestimonial.stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className={`bg-white rounded-2xl p-6 shadow-sm flex-1 hover:shadow-md transition-all hover:-translate-y-1 ${
                        isVisible ? `animate-scaleIn delay-${400 + index * 100}` : 'opacity-0'
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-5xl font-bold text-black">
                          <AnimatedCounter 
                            end={stat.percentage} 
                            duration={2000}
                            isVisible={isVisible}
                          />
                        </h3>
                        <TrendingUp className="w-6 h-6 text-black" />
                      </div>
                      <p className="text-gray-600 text-sm">
                        {stat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-black w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Security Text */}
          <div className={`text-center mt-12 max-w-3xl mx-auto ${isVisible ? 'animate-fadeInUp delay-500' : 'opacity-0'}`}>
            <p className="text-[#003366] text-lg leading-relaxed">
              TALIM is built with security and trust at its core — using advanced encryption, 
              secure cloud hosting, and role-based access control to keep your school's 
              data safe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedBySchools;