"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Import images
import reason1 from "@/asserts/reason 1.png";
import reason2 from "@/asserts/reason 2.png";
import reason3 from "@/asserts/reason 3.png";
import reason4 from "@/asserts/reason 4.png";
import reason5 from "@/asserts/reason 4.png"; 

// Slides array
const slides = [
  { image: reason1, title: "School Principals", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { image: reason2, title: "Teachers", description: "Helping teachers manage student records, assignments, and communications with ease." },
  { image: reason3, title: "Parents", description: "Giving parents real-time insights into their children's academic progress." },
  { image: reason4, title: "Students", description: "Providing students with the tools they need to succeed in their studies and beyond." },
  { image: reason5, title: "Administrators", description: "Simplifying school management with powerful, easy-to-use administrative tools." },
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);

      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setNextIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        setIsFading(false);
      }, 500); // Transition duration
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [nextIndex]);

  return (
    <div className="flex flex-col md:flex-row h-screen md:h-[80vh] lg:h-[700px] w-full">
      {/* Left Section - Static Content */}
      <div className="w-full md:w-1/2 bg-[#F68F35] text-white p-6 md:p-10 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          A Platform Built for Everyone in Education
        </h2>
        <p className="text-base md:text-lg">
          Talim helps administrators, teachers, parents, and students handle
          academic matters seamlessly—no more endless paperwork.
        </p>
      </div>

      {/* Right Section - Dynamic Image & Text */}
      <div className="w-full md:w-1/2 relative h-64 md:h-[80vh] lg:h-[700px] overflow-hidden">
        {/* Current Image */}
        <div className="absolute inset-0 w-full h-full transition-opacity duration-500 ease-out opacity-100">
          <Image
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Next Image (Fades In) */}
        <div
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-out ${
            isFading ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slides[nextIndex].image}
            alt={slides[nextIndex].title}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>

        {/* Overlay with Text */}
        <div className="absolute inset-0 flex items-end p-10">
          <div
            className={`text-white transition-opacity duration-500 ease-out ${
              isFading ? "opacity-0 translate-y-5" : "opacity-100 translate-y-0"
            }`}
          >
            <h3 className="text-xl md:text-2xl font-semibold">
              {slides[currentIndex].title}
            </h3>
            <p className="text-sm md:text-lg mt-2">
              {slides[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
