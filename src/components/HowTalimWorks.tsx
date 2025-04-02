"use client"; // Ensure this is a client component

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image"; // Import next/image for optimized images
import how1 from "@/asserts/how123.png"; // Import your images directly if needed

const categories = [
  {
    id: 1,
    title: "Teach Without Interruptions, Online or Offline",
    description:
      "Update grades, take attendance, and assign lessons anytime, anywhere. Everything syncs automatically when you reconnect.",
    image: how1, // Use the relative path for images in the public folder
  },
  {
    id: 2,
    title: "Engage Students Effortlessly",
    description:
      "Interactive tools help students stay engaged, participate in discussions, and track their progress.",
    image: "/how123.png", // Same here
  },
  {
    id: 3,
    title: "Automate Administrative Tasks",
    description:
      "Save time by automating attendance, grading, and resource management with Talim.",
    image: "/images/automation.png", // Public folder image
  },
];

export default function HowTalimWorks() {
  return (
    <div className="relative w-full  px-4">
      <h2 className="text-2xl font-semibold text-center mb-6">
        What Talim Offers
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: ".next-button",
          prevEl: ".prev-button",
        }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={category.id} className="flex items-center">
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-lg shadow-lg">
              {/* Left Side: Number & Text */}
              <div className="flex flex-col md:w-1/2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-500 text-white rounded-full text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-gray-600 mt-3">{category.description}</p>
              </div>

              {/* Right Side: Image */}
              <div className="md:w-1/2">
                <Image
                  src={category.image}
                  alt={category.title}
                  layout="responsive" // Makes the image responsive
                  width={500} // Aspect ratio
                  height={300} // Aspect ratio
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button className="prev-button flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md">
          <FaArrowLeft /> Previous
        </button>
        <button className="next-button flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-md">
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
