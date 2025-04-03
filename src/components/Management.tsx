"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import pro from "@/asserts/Product Info Card.png";
import { CiPlay1 } from "react-icons/ci";

export default function ManagementSection() {
  return (
    <div className="w-full max-w-[1200px] sm:py-[200px] mx-auto flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-20 px-6 py-12 ">
      {/* Left Section - Text & Buttons */}
      <div className="max-w-[340px] sm:max-w-[507px] text-center md:text-left flex flex-col items-center sm:items-start">
        <h2 className="text-3xl md:text-4xl font-medium text-[#444444]">
          Let’s make management super easy for you
        </h2>
        <p className="mt-3 text-[#8E8E8E] text-[18px]">
          Join schools across West Africa to save time, reduce stress, and boost
          success.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3 max-w-[189px] md:max-w-[383px]">
          {/* Watch Demo Button */}
          <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0066CC]/33 hover:bg-[#0066CC] border border-[#000000]/10 text-[#333333] text-lg cursor-pointer shadow-[inset_0px_-4px_4px_rgba(251,251,251,0.25),inset_0px_4px_4px_rgba(255,255,255,0.30)]">
            <CiPlay1 strokeWidth={1} />
            Watch Demo
          </button>

          {/* Start Free Trial Button */}
          <button className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#0066CC] hover:bg-blue-700 border border-[#FFFFFF] text-white text-lg  cursor-pointer shadow-[inset_0px_-4px_4px_rgba(251,251,251,0.25),inset_0px_4px_4px_rgba(255,255,255,0.30)]">
            Start free trial
            <HiBriefcase />
          </button>
        </div>
      </div>

      {/* Right Section - Tablet Mockup */}
      <div className=" md:mt-0">
        <Image
          src="/pro.png"
          alt="Dashboard UI on Tablet"
          width={600}
          height={480}
          className="w-full  "
        />
      </div>
    </div>
  );
}
