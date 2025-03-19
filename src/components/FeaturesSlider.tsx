"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/slide1.png", // Update with correct paths
    title: "Real-Time School Oversight",
    description: "Track teacher activity, student progress, and parent engagement instantly",
  },
  {
    image: "/images/slide2.png",
    title: "Work Without Internet",
    description: "Update grades, attendance, and assignments offline. Sync later",
  },
  {
    image: "/images/slide3.png",
    title: "Teach Local Curricula",
    description: "WAEC, BECE, and National Curriculum templates included",
  },
];

const FeaturesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-screen-xl mx-auto overflow-hidden">
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-6">Do More With Talim</h2>

      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex flex-col items-center">
            <Image src={slide.image} alt={slide.title} width={1440} height={579} className="rounded-lg" />
            <div className="text-center mt-4">
              <h3 className="text-xl font-bold text-blue-900">{slide.title}</h3>
              <p className="text-gray-700">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-blue-900" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSlider;
