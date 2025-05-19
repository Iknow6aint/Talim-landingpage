import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";
import { ArrowRight } from "./Icons";

type Faq = { question: string; answer: string };

export default function FaqSection() {
  // 1) Define all your Q&A pairs here
  const faqs: Faq[] = [
    {
      question: "What is Talim?",
      answer:
        "Talim is a modern education management platform designed to simplify school operations and improve collaboration between schools, teachers, parents, and students.",
    },
    {
      question: "Who can use Talim?",
      answer:
        "Any institution, teacher, or parent can sign up for Talim. We offer different roles and permissions so you only see what’s relevant to you.",
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
        "Simply click “Get Started” at the top of the page, register your school or personal account, and follow our setup wizard to onboard in under 5 minutes.",
    },
  ];

  return (
    <div className="max-w-[1123px] mt-24 p-4 flex flex-col md:flex-row md:items-end mx-auto gap-10 justify-between">
      <div className=" lg:w-[500px] xl:w-[645px]">
        <h3 className="text-[35px] sm:text-[40px] font-semibold text-center text-[#2E2E2E] max-w-[399px]">
          Frequently Asked Questions
        </h3>
        <div className="mt-6 space-y-4 -auto">
          {faqs.map((faq) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
      <div className="max-w-[448px] flex flex-col gap-4 items-center py-10 border border-[#EBEBEB] rounded-2xl px-2">
        <Image src="/trophy.svg" alt="A trophy" width={101} height={75} />
        <h3 className="max-w-[254px] font-semibold text-center text-[18px] text-[#1A1A1A]">
          Ready to Transform Your School Experience?
        </h3>
        <p className="text-[#767676] text-center">
          Join thousands of educators, students, and parents improving learning
          with Talim. It’s fast, easy, and built for everyone.
        </p>
        <button className="bg-black text-white px-4 py-3  border border-white rounded-full flex items-center gap-2 ">
          Get Started
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="border border-[#EBEBEB] p-4 rounded-lg cursor-pointer transition-all shadow-[inset_-4px_-4px_4px_rgba(251,251,251,0.25),inset_0px_4px_4px_rgba(255,255,255,0.30)]">
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
