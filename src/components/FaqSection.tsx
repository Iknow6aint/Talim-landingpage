"use client"

import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import PortalModal from "./PortalModal";

type Faq = { question: string; answer: string };

export default function FaqSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


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

  const faqs: Faq[] = [
    {
      question: "What is Talim?",
      answer:
        "Talim is a modern education management platform designed to simplify school operations and improve collaboration between schools, teachers, parents, and students.",
    },
    {
      question: "Who can use Talim?",
      answer:
        "Any institution, teacher, or parent can sign up for Talim. We offer different roles and permissions so you only see what's relevant to you.",
    },
    {
      question: "Is Talim secure and compliant with data privacy laws?",
      answer:
        "Yes—Talim uses end‑to‑end encryption, SOC‑2 compliant data centers, and follows GDPR and other regional privacy regulations to keep your data safe.",
    },
    {
      question: "Can Talim be used by schools in any country?",
      answer:
        "Absolutely. Talim is designed to support multiple languages, time‑zones, and curricula. You can tailor it to your local needs.",
    },
    {
      question: "How do I get started with Talim?",
      answer:
        'Simply click "Get Started" at the top of the page, register your school or personal account, and follow our setup wizard to onboard in under 5 minutes.',
    },
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

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out forwards;
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

        .delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        .delay-700 {
          animation-delay: 0.7s;
          opacity: 0;
        }

        details summary::-webkit-details-marker {
          display: none;
        }

        details[open] summary svg {
          transform: rotate(180deg);
        }

        details summary svg {
          transition: transform 0.3s ease;
        }
      `}</style>

      <div ref={sectionRef} className="max-w-[1123px] mt-24 p-4 flex flex-col md:flex-row md:items-end mx-auto gap-10 justify-between">
        <div className="lg:w-[500px] xl:w-[645px]">
          <h3 className={`text-[35px] sm:text-[40px] font-semibold text-center text-[#2E2E2E] max-w-[399px] ${isVisible ? 'animate-fadeInLeft delay-100' : 'opacity-0'}`}>
            Frequently Asked Questions
          </h3>
          <div className="mt-6 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className={isVisible ? `animate-fadeInLeft delay-${200 + index * 100}` : 'opacity-0'}
              >
                <FaqItem question={faq.question} answer={faq.answer} />
              </div>
            ))}
          </div>
        </div>
        <div className={`max-w-[448px] flex flex-col gap-4 items-center py-10 border border-[#EBEBEB] rounded-2xl px-2 ${isVisible ? 'animate-fadeInRight delay-300' : 'opacity-0'}`}>
          <Image src="/trophy.svg" alt="A trophy" width={101} height={75} />
          <h3 className="max-w-[254px] font-semibold text-center text-[18px] text-[#1A1A1A]">
            Ready to Transform Your School Experience?
          </h3>
          <p className="text-[#767676] text-center">
            Join thousands of educators, students, and parents improving learning
            with Talim. It's fast, easy, and built for everyone.
          </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-b from-[#003366] via-[#003366] to-[#81B8F0] text-white px-6 py-3 border border-[#81B8F0] rounded-2xl flex items-center gap-2 hover:from-[#003366] hover:via-[#003366] hover:to-[#81B8F0] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >            Get Started
          </button>
        </div>
      </div>
      <PortalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border border-[#EBEBEB] p-4 rounded-lg cursor-pointer transition-all shadow-[inset_-4px_-4px_4px_rgba(251,251,251,0.25),inset_0px_4px_4px_rgba(255,255,255,0.30)] hover:shadow-lg hover:border-[#003366]/20">
      <summary className="text-lg text-[#404040] flex items-center justify-between">
        {question}
        <span>
          <BiChevronDown />
        </span>
      </summary>
      <p className="mt-2 text-gray-600">{answer}</p>
    </details>
  );
}