"use client";

import Image from "next/image";
import hero from "@/asserts/africa.png";
import user1 from "@/asserts/user1.jpeg";
import user2 from "@/asserts/user2.jpeg";
import user3 from "@/asserts/user3.jpeg";
import user4 from "@/asserts/user4.jpeg";
import user5 from "@/asserts/user5.jpeg";
import user6 from "@/asserts/user6.jpeg";
import user7 from "@/asserts/user7.jpeg";
import user8 from "@/asserts/user8.jpeg";
import user9 from "@/asserts/user9.jpeg";
import user10 from "@/asserts/user10.jpeg";
import user11 from "@/asserts/user11.jpeg";
import user12 from "@/asserts/user12.jpeg";

export default function DigitalEcosystem() {
  return (
    <div className="relative w-full text-white py-20 px-6 md:px-16">
      {/* Background Image */}
      <div className="absolute inset-0 animate-zoom">
        <Image
          src={hero}
          alt="University Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-[#0066CC]/70" />

      {/* Content Wrapper */}
      <div className="relative flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left Side - Text */}
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Get Early Access to Africa’s <br />
            Digital Academic Ecosystem
          </h2>
          <p className="mt-4 text-lg text-gray-200 leading-relaxed">
            Join West African schools using Talim to manage classes, connect 
            with parents, and teach local curricula in their everyday life.
          </p>
        </div>

        {/* Right Side - Glowing Circle with Smaller Images */}
        <div className="relative mt-12 md:mt-0 w-[450px] h-[450px] flex items-center justify-center">
          {/* Glowing Circle */}
          <div className="absolute w-full h-full rounded-full border-[8px] border-white/50 shadow-[0px_0px_30px_rgba(255,255,255,0.5)]" />

          {/* Profile Images */}
          <div className="grid grid-cols-4 gap-4 relative">
            {[
              user1, user2, user3, user4, user5, user6, user7, user8,
              user9, user10, user11, user12,
            ].map((img, idx) => (
              <div key={idx} className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
                <Image src={img} alt="User" width={80} height={80} className="object-cover w-full h-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
