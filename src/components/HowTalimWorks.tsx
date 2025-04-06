"use client"; // Ensure this is a client component
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Image from "next/image"; // Import next/image for optimized images

// Import images
import talim1 from "../../public/talim1.png";
import talim2 from"../../public/talim2.png";
import talim3 from "../../public/talim3.png";
import talim4 from "../../public/talim4.png";

const slides = [
  {
    id: 1,
    title: "📚 Teach Without Interruptions, Online or Offline",
    description:
      "Update grades, take attendance, and assign lessons anytime, anywhere. Everything syncs automatically when you reconnect.",
    image: talim1,
  },
  {
    id: 2,
    title: "👨👩 Parents Stay Informed, Instantly",
    description:
      "Help parents stay involved with their children. TALIM sends real-time alerts to parents about grades, attendance, and school announcements.",
    image: talim2,
  },
  {
    id: 3,
    title: "🌍 Designed for West African Classrooms",
    description:
      "TALIM makes teaching easy by giving you tools designed for West African curricula, culture, and local needs to teach and learn.",
    image: talim3,
  },
  {
    id: 4,
    title: "🤝 Everyone Connected, Nothing Lost",
    description:
      "TALIM makes teaching easy by giving you tools designed for West African curricula, culture, and local needs to teach and learn.",
    image: talim4,
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

  useEffect(() => {
    const next = document.querySelector(".next-button");
    const prev = document.querySelector(".prev-button");

    if (next && prev) {
      next.addEventListener("click", nextSlide);
      prev.addEventListener("click", prevSlide);
    }

    return () => {
      next?.removeEventListener("click", nextSlide);
      prev?.removeEventListener("click", prevSlide);
    };
  }, []);

  return (
    <div className="relative w-full mt-20">
      <h2 className="text-[35px] sm:text-[40px] text-[#2A2A2A] font-medium text-center mb-2 sm:mb-1">
        What Talim Offers
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ nextEl: ".next-button", prevEl: ".prev-button" }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {slides.map((category, index) => (
          <SwiperSlide key={category.id} className="flex items-center">
            <div
              className={`flex flex-col md:flex-row items-start gap-6 p-4 rounded-lg ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left Side: Number & Text */}
              <div className={`flex flex-col md:w-1/2 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                <div className="sm:max-w-[488px]">
                  <div className="flex flex-col items-left gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-[#0066CC] text-white rounded-full text-lg ml-3">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <p className="text-gray-600 mt-3">{category.description}</p>
                </div>
              </div>

              {/* Right Side: Image */}
              <div className="md:w-1/2 w-full">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={800}
                  height={650}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-6 sm:mt-1 mx-[10px] md:mx-[20px] lg:mx-[35px] xl:mx-[50px]">
        <button className="prev-button flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#DCDCDC] cursor-pointer">
          <FaArrowLeft strokeWidth="1" /> Previous
        </button>
        <button className="next-button flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#DCDCDC] cursor-pointer">
          Next <FaArrowRight strokeWidth="1" />
        </button>
      </div>
    </div>
  );
}
