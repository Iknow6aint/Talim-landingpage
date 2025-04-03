"use client";

import Image from "next/image";

export default function DigitalEcosystem() {
  return (
    <div
      className="relative w-full text-white py-20 sm:pl-10 lg:px-20 mt-10"
      style={{ backgroundImage: "url('/core.png')",  backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",  }}
    >
      {/* Content Wrapper */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 w-full ">
        {/* Left Side - Text */}
        <div className="lg:max-w-[450px] xl:max-w-[572px] md:max-w-[300px] text-center sm:text-left">
          <h2 className="text-4xl md:text-5xl font-medium ">
            Get Early Access to Africa’s Digital Academic Ecosystem
          </h2>
          <p className="mt-4 text-lg text-[#D0D0D0]">
            Join West African schools using Talim to manage classes, connect
            with parents, and teach local curricula in their everyday life.
          </p>
        </div>

        {/* Right Side - Glowing Circle with Images */}
        <div className="relative mt-12 md:mt-0 w-[320px] h-[320px] lg:w-[450px] lg:h-[450px] flex items-center justify-center">
          {/* Glowing Circle */}
          <div className="absolute w-full h-full rounded-full border-[2px] bg-[#0066CC] border-white shadow-[0px_0px_30px_rgba(255,255,255,0.5)]" />
          {/* Small Profile Images */}
          <div className="grid grid-cols-4 gap-2">
            {[
              "/pic1.png",
              "/pic2.png",
              "/pic3.png",
              "/pic4.png",
              "/pic5.png",
              "/pic6.png",
              "/pic7.png",
              "/pic8.png",
              "/pic9.png",
              "/pic10.png",
              "/pic11.png",
              "/pic12.png",
            ].map((img, idx) => (
              <div
                key={idx}
                className="w-[50px] h-[50px] sm:w-[65px] z-50 sm:h-[65px] rounded-full flex items-center justify-center border-[1.5px]  border-white"
              >
                <Image
                  src={img}
                  alt="User"
                  width={65}
                  height={65}
                  className="object-cover rounded-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
