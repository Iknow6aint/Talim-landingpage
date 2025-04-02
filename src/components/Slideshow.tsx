"use client";

import Image from "next/image";
import reason from "@/asserts/reason 2.png"

const roles = [
  {
    title: "School Principals",
    image:reason, // Replace with actual path
    size: "md:col-span-1 md:col-start-2 md:row-span-2", // Standard size
  },
  {
    title: "Teachers",
    image: reason,
    size: "md:col-span-1", // Standard size
  },
  {
    title: "Parents",
    image: reason,
    size: "md:col-span-1", // Standard size
  },
  {
    title: "Students",
    image: reason,
    size: "md:col-span-1 md:col-start-2 md:row-span-2", // Larger width, occupies two rows
  },
];

export default function EducationPlatform() {
  return (
    <div className="w-full max-w-[971px] mx-auto text-center px-6 py-12">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        A Platform Built for Everyone in Education
      </h2>
      <p className="mt-2 text-lg text-gray-500 max-w-2xl mx-auto">
        Talim helps administrators, teachers, parents, and students handle
        academic matters seamlessly, no more endless paperwork.
      </p>

      {/* Image Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
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
