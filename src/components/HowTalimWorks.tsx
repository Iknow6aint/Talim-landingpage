import React from "react";
import FeatureCard from "./FeatureCard";
import real from "@/asserts/how123.png";
import real2 from "@/asserts/how234.png";

const HowTalimWorks: React.FC = () => {
  const sections = [
    {
      category: "For Schools",
      bgColor: "bg-school ",
      features: [
        {
          title: "🏫 Teach Without Interruptions, Online or Offline",
          description: "Update grades, take attendance, and assign lessons anytime, anywhere.",
          imageSrc: real, // ✅ Corrected
        },
        {
          title: "🏫 Teach Without Interruptions, Online or Offline",
          description: "Update grades, take attendance, and assign lessons anytime, anywhere.",
          imageSrc: real, // ✅ Corrected
        },
      ],
    },
    {
      category: "For Teachers",
      bgColor: "bg-school ",
      features: [
        {
          title: "📚 Designed for West African Classrooms",
          description: "TALIM makes teaching easy by giving you tools designed for West African curricula.",
          imageSrc: real, // ✅ Corrected
        },
        {
          title: "📚 Teach Without Interruptions, Online or Offline",
          description: "Update grades, take attendance, and assign lessons anytime, anywhere.",
          imageSrc: real2, // ✅ Corrected
        },
      ],
    },
    {
      category: "For Students",
      bgColor: "bg-[#F58220] text-black",
      features: [
        {
          title: "🎓 Teach Without Interruptions, Online or Offline",
          description: "Update grades, take attendance, and assign lessons anytime, anywhere.",
          imageSrc: real,
        },
        {
          title: "🎓 Teach Without Interruptions, Online or Offline",
          description: "Update grades, take attendance, and assign lessons anytime, anywhere.",
          imageSrc: real,
        },
      ],
    },
    {
      category: "For Parents",
      bgColor: "bg-[#F58220] text-black",
      features: [
        {
          title: "👨‍👩‍👧 Parents Stay Informed, Instantly",
          description: "Help parents stay involved with their children.",
          imageSrc: real,
        },
        {
          title: "🎓 Teach Without Interruptions, Online or Offline",
          description: "Update grades, take attendance, and assign lessons anytime, anywhere.",
          imageSrc: real,
        },
      ],
    },
  ];

  return (
    <section className="bg-[#0A4076]">
      <h2 className=" text-center  text-white text-2xl md:text-3xl font-bold py-8   mb-8">How Talim Works</h2>

      {sections.map((section, index) => (
        <div key={index} className={`${section.bgColor} py-16 px-4 md:px-6`}>
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-y-6">
            {/* Left Side: Category Title */}
            <h3 className="text-lg md:text-3xl font-semibold md:w-1/4 w-full text-center md:text-left">
              {section.category}
            </h3>

            {/* Right Side: Feature Cards */}
            <div className="w-full md:w-3/4 flex flex-col md:flex-row md:space-x-6 gap-6">
              {section.features.map((feature, i) => (
                <FeatureCard key={i} {...feature} className="w-full md:w-[48%]" />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HowTalimWorks;
