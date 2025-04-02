"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import dashboard1 from "@/asserts/africa.png";
const slides = [
  {
    id: 1,
    title: "📚 Teach Without Interruptions, Online or Offline",
    description:
      "Update grades, take attendance, and assign lessons anytime, anywhere. Everything syncs automatically when you reconnect.",
    image: dashboard1,
  },
  {
    id: 2,
    title: "📊 Track Performance with Insights",
    description:
      "Get real-time analytics on student performance, attendance, and engagement in one dashboard.",
    image: dashboard1,
  },
  {
    id: 3,
    title: "📝 Streamline Academic Tasks",
    description:
      "Automate grading, class schedules, and resource sharing to make education management effortless.",
    image: dashboard1,
  },
];

export default function TalimOffers() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="container w-full max-w-[1200px] mx-auto text-center px-6 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        What Talim Offers
      </h2>

      {/* Content Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-left">
          <span className="text-blue-600 text-lg font-semibold">
            0{currentSlide + 1}
          </span>
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mt-2">
                {slides[currentSlide].title}
              </h3>
              <p className="mt-2 text-gray-600">{slides[currentSlide].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={slides[currentSlide].image}
                alt="Talim Dashboard"
                width={600}
                height={787} // Set height to match the design
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          ← Previous
        </button>
        <div className="flex gap-1">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
