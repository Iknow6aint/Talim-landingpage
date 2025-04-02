"use client";

import Image from "next/image";
import reason1 from "@/asserts/reason 1.png";
import reason2 from "@/asserts/reason 2.png";
import reason3 from "@/asserts/reason 3.png";
import reason4 from "@/asserts/reason 4.png";

const roles = [
  { title: "School Principals", image: reason1, size: "md:w-[60%]" }, // Larger width
  { title: "Teachers", image: reason2, size: "md:w-[35%]" }, // Smaller width
  { title: "Parents", image: reason3, size: "md:w-[35%]" }, // Smaller width
  { title: "Students", image: reason4, size: "md:w-[60%]" }, // Larger width
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

      {/* Role Sections using Flexbox */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {roles.map((role, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-xl w-full ${role.size} h-[250px]`} // Reduced height
          >
            {/* Image */}
            <Image
              src={role.image}
              alt={role.title}
              width={600}
              height={250} // Adjusted height
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/4 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold">{role.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
