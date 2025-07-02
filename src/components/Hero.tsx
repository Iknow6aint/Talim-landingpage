"use client";

import { HiOutlineGift } from "react-icons/hi2";
import { ArrowRight } from "./Icons";
import Image from "next/image";
import { useState } from "react";
import PortalModal from "./PortalModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className=" flex flex-col items-center justify-center text-center  mt-20 mx-auto ">
        <div className="flex flex-col items-center gap-8 max-w-[1086px]">
          <div className="bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 rounded-full border border-blue-200 mb-4">
            <p className="text-sm text-blue-800 font-medium flex items-center gap-2">
              <HiOutlineGift className="w-4 h-4" />
              Trusted by 500+ Educational Institutions Worldwide
            </p>
          </div>
          <h1 className="text-[35px] md:text-[50px] font-semibold text-center leading-[110%] tracking-[0.8px]">
            The Complete Learning Management System for <span className="text-blue-600">Modern Education</span>
          </h1>
          <p className="text-[#767676] text-[18px] text-center max-w-[617px] leading-[118%]">
            Revolutionize your educational institution with Talim's comprehensive platform. Connect schools, teachers, parents, and students globally through transparent, data-driven education management that delivers proven results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 border border-blue-600 rounded-full flex items-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book a Demo
              <ArrowRight />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              Watch Demo Video
            </button>
          </div>
        </div>
        <Image
          src="/school.svg"
          alt="School and students"
          width={2000}
          height={778}
          className=""
        />
      </section>

      <PortalModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Hero;
