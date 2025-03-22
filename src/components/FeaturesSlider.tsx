"use client";

import { useState } from "react";
import Image from "next/image";
import slide1 from "@/asserts/Image.png";
import slide2 from "@/asserts/Product Info Card.png";
import slide3 from "@/asserts/Product Info Carda.png";
import slide4 from "@/asserts/Product Info Cardb.png";

const slides = [
  {
    image: slide1,
    title: "Real-Time School Oversight",
    description: "Track teacher activity, student progress, and parent engagement instantly",
  },
  {
    image: slide2,
    title: "Work Without Internet",
    description: "Update grades, attendance, and assignments offline. Sync later",
  },
  {
    image: slide3,
    title: "Teach Local Curricula",
    description: "WAEC, BECE, and National Curriculum templates included",
  },
  {
    image: slide4,
    title: "Teach Local Curricula",
    description: "WAEC, BECE, and National Curriculum templates included",
  },
];

const FeaturesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className=" relative w-full max-w-screen-xl   mx-auto overflow-hidden px-4">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-6">Do More With Talim</h2>

      {/* Slider Container */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
          disabled={currentIndex === 0}
        >
          ◀
        </button>

        {/* Slides Wrapper */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 85}%)`, // Shifts left by 85% to show half of the last slide
            }}
          >
            {slides.map((slide, index) => (
              <div key={index} className={`min-w-[85%] ${index === slides.length - 1 ? "min-w-[50%]" : ""}`}>
                <div className="relative w-full max-w-4xl h-[500px] md:h-[579px]">
                  <Image src={slide.image} alt={slide.title} layout="fill" objectFit="contain" className="rounded-lg" />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-blue-900">{slide.title}</h3>
                  <p className="text-gray-700">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
          disabled={currentIndex === slides.length - 1}
        >
          ▶
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-blue-900" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSlider;
