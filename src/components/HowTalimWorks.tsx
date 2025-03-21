import FeatureCard from "./FeatureCard";

const sections = [
  {
    category: "For Schools",
    bgColor: "bg-[#0A4076] text-white",
    features: [
      {
        title: "🏫 Teach Without Interruptions, Online or Offline",
        description:
          "Update grades, take attendance, and assign lessons anytime, anywhere. Everything syncs automatically when you reconnect.",
        imageSrc: "/images/talim-screenshot-1.png", // Replace with actual path
      },
      {
        title: "🏫 Teach Without Interruptions, Online or Offline",
        description:
          "Update grades, take attendance, and assign lessons anytime, anywhere. Everything syncs automatically when you reconnect.",
        imageSrc: "/images/talim-screenshot-2.png",
      },
    ],
  },
  {
    category: "For Teachers",
    bgColor: "bg-[#0A4076] text-white",
    features: [
      {
        title: "📚 Designed for West African Classrooms",
        description:
          "TALIM makes teaching easy by giving you tools designed for West African curricula, culture, and local needs to teach and learn.",
        imageSrc: "/images/talim-screenshot-3.png",
      },
      {
        title: "📚 Teach Without Interruptions, Online or Offline",
        description:
          "Update grades, take attendance, and assign lessons anytime, anywhere. Everything syncs automatically when you reconnect.",
        imageSrc: "/images/talim-screenshot-4.png",
      },
    ],
  },
  {
    category: "For Students",
    bgColor: "bg-[#F58220] text-white",
    features: [
      {
        title: "🎓 Learn at Your Own Pace",
        description:
          "Access class materials anytime, submit assignments, and track grades instantly.",
        imageSrc: "/images/talim-screenshot-5.png",
      },
      {
        title: "🎓 Stay Connected with Teachers",
        description:
          "Chat with teachers, ask questions, and get feedback instantly.",
        imageSrc: "/images/talim-screenshot-6.png",
      },
    ],
  },
  {
    category: "For Parents",
    bgColor: "bg-[#F58220] text-white",
    features: [
      {
        title: "👨‍👩‍👧 Parents Stay Informed, Instantly",
        description:
          "Help parents stay involved with their children. TALIM sends real-time alerts to parents about grades, attendance, and school announcements.",
        imageSrc: "/images/talim-screenshot-7.png",
      },
      {
        title: "🎓 Track Your Child’s Progress",
        description:
          "Monitor assignments, grades, and school activities anytime, anywhere.",
        imageSrc: "/images/talim-screenshot-8.png",
      },
    ],
  },
];

const HowTalimWorks = () => {
  return (
    <section>
      <h2 className="text-center text-3xl font-bold mb-8">How Talim Works</h2>

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
