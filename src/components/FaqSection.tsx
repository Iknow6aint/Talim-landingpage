import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

export default function FaqSection() {
  return (
    <div className="mt-24 p-4 sm:p-0  flex flex-col items-center justify-center">
      <div className="max-w-[358px] sm:max-w-[794px]">
        <h3 className="text-[35px] sm-text-[40px] font-medium text-center text-[#2E2E2E]">
          Questions we get a lot
        </h3>
        <div className="mt-6 space-y-4 max-w-3xl md:w-[500px] lg:w-[794px] mx-auto">
          <FaqItem question="🛠 What if my teachers aren’t technology wise?" />
          <FaqItem question="🛡️ What about data security?" />
          <FaqItem question="💰 How much does it cost?" />
        </div>
      </div>
    </div>
  );
}

function FaqItem({ question }: { question: string }) {
  return (
    <details className="bg-[#0066CC]/10 border border-[#CBD1D1]/22 p-4 rounded-lg cursor-pointer transition-all shadow-[inset_-4px_-4px_4px_rgba(251,251,251,0.25),inset_0px_4px_4px_rgba(255,255,255,0.30)]">
      <summary className="text-lg text-[#404040] flex items-center justify-between">
        {question}
        <span>
          <BiChevronDown />
        </span>
      </summary>
      <p className="mt-2 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </details>
  );
}
