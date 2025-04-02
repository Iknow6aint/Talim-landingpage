"use client";

import Image from "next/image";

export default function DigitalEcosystem() {
  return (
    <div className="relative w-full bg-[#0057B8] text-white py-20 px-6 md:px-16">
      {/* Background Map (Optional, Use CSS Background Image) */}
      <div className="absolute inset-0 opacity-30 bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/images/africa-map.png')" }}
      />

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

        {/* Right Side - Glowing Circle with Images */}
        <div className="relative mt-12 md:mt-0 w-[450px] h-[450px] flex items-center justify-center">
          {/* Glowing Circle */}
          <div className="absolute w-full h-full rounded-full border-[10px] border-white/50 shadow-[0px_0px_30px_rgba(255,255,255,0.5)]" />

          {/* Small Profile Images */}
          <div className="grid grid-cols-4 gap-4">
            {[
              "/images/user1.jpg",
              "/images/user2.jpg",
              "/images/user3.jpg",
              "/images/user4.jpg",
              "/images/user5.jpg",
              "/images/user6.jpg",
              "/images/user7.jpg",
              "/images/user8.jpg",
              "/images/user9.jpg",
              "/images/user10.jpg",
              "/images/user11.jpg",
              "/images/user12.jpg",
            ].map((img, idx) => (
              <div key={idx} className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                <Image src={img} alt="User" width={64} height={64} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
