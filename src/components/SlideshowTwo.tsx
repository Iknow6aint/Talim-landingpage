"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const images = [
  "/image1.png", // Replace with actual filenames
  "/image2.png",
  "/image3.png",
  "/image4.png",
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="flex flex-col sm:flex-row max-h-[830px] md:max-h-[430px] lg:max-h-[580px] xl:max-h-[700px] overflow-hidden bg-[#0066CC]">
      {/* Left Side: Text Content */}
      <div className="sm:w-1/2 bg-[#0066CC] flex flex-col justify-center text-center sm:text-left px-12 text-white">
        <div className="max-w-[330px] sm:max-w-[488px] sm:ml-10 py-20 sm:py-0 flex flex-col items-center sm:items-start">
          <h1 className="text-3xl md:text-4xl font-medium">
            A Platform Built for Everyone in Education
          </h1>
          <p className="mt-4 text-lg text-[#C4C4C4]">
            Talim helps administrators, teachers, parents and students handle
            academic matters seamlessly, no more endless paperwork.
          </p>

          <div className="mt-6 flex space-x-2">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-white" : "bg-white/50"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Swiper Slideshow */}
      <div className="sm:w-1/2 mt-2 sm:mt-0 h-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          loop={true}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroSection;
