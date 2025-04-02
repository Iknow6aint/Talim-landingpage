"use client";

import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import pro from "@/asserts/Product Info Card.png";

export default function ManagementSection() {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-12">
      {/* Left Section - Text & Buttons */}
      <div className="max-w-lg text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
          Let’s make management <br /> super easy for you
        </h2>
        <p className="mt-3 text-gray-500 text-lg">
          Join schools across West Africa to save time, reduce stress, and boost success.
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          {/* Watch Demo Button */}
          <button className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 text-lg">
            <FaPlay className="text-gray-600" />
            Watch Demo
          </button>

          {/* Start Free Trial Button */}
          <button className="flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-lg shadow-md">
            Start free trial
            <HiBriefcase />
          </button>
        </div>
      </div>

      {/* Right Section - Tablet Mockup */}
      <div className="mt-10 md:mt-0 flex justify-center">
        <Image
          src={pro}
          alt="Dashboard UI on Tablet"
          width={600}
          height={477} // 👈 Ensures exact height of 477px
          className="max-w-[500px] h-[477px] w-auto object-cover shadow-lg rounded-xl"
        />
      </div>
    </div>
  );
}
