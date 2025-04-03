"use client";

import Image from "next/image";
import reason from "@/asserts/reason 2.png"

const roles = [
  {
    title: "School Principals",
    image: "/reason1.png", // Replace with actual path
    size: "md:col-span-2 ", // Standard size
  },
  {
    title: "Teachers",
    image: "/reason2.png",
    size: "md:col-span-1", // Standard size
  },
  {
    title: "Parents",
    image: "/reason3.png",
    size: "", // Standard size
  },
  {
    title: "Students",
    image: "/reason4.png",
    size: "md:col-span-2 ", // Larger width, occupies two rows
  },
];

export default function EducationPlatform() {
  return (
    <div className="w-full max-w-[971px] mx-auto text-center px-6 py-12 mt-10 ">
      {/* Heading */}
      <div className="max-w-[367px] sm:max-w-[845px]">
        <h2 className="text-[35px] sm:text-[40px] font-medium text-[#2A2A2A] leading-[116.7%]">
          A Platform Built for Everyone in Education
        </h2>
        <p className="mt-2 text-lg text-[#757575] sm:text-[#9E9E9E] max-w-[619px] mx-auto leading-[124.7%]">
          Talim helps administrators, teachers, parents, and students handle
          academic matters seamlessly, no more endless paperwork.
        </p>
      </div>

      {/* Image Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {roles.map((role, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-lg ${role.size || ""}`}
          >
            <Image
              src={role.image}
              alt={role.title}
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            {/* Overlay */}
            <div >
              <h3 className="text-white text-xl font-semibold">{role.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
