import FeatureCard from "./FeatureCard";
import how1 from "@/asserts/how123.png";
import how2 from "@/asserts/how234.png";


const sections = [
  {
    category: "For Schools",
    bgColor: "bg-[#0A4076] ",
    features: [
      {
        title: "🏫 Teach Without Interruptions, Online or Offline",
        description:
          "Update grades, take attendance, and assign lessons anytime, anywhere. Everything syncs automatically when you reconnect.",
        imageSrc: how1.src, // Replace with actual path
      },
      {
        title: "🏫 Teach Without Interruptions, Online or Offline",
        description:
          "Update grades, take attendance, and assign lessons anytime, anywhere. Everything syncs automatically when you reconnect.",
        imageSrc:how1.src,
      },
    ],
  },
  {
    category: "For Teachers",
    bgColor: "bg-[#0A4076] ",
    features: [
      {
        title: "📚 Designed for West African Classrooms",
        description:
          "TALIM makes teaching easy by giving you tools designed for West African curricula, culture, and local needs to teach and learn.",
        imageSrc:how1.src,
      },
      {
        title: "📚 Teach Without Interruptions, Online or Offline",
        description:
          "Update grades, take attendance, and assign lessons anytime, anywhere. Everything syncs automatically when you reconnect.",
        imageSrc: how1.src,
      },
    ],
  },
  {
    category: "For Students",
    bgColor: "bg-[#F68F35] ",
    features: [
      {
        title: "🎓 Learn at Your Own Pace",
        description:
          "Access class materials anytime, submit assignments, and track grades instantly.",
        imageSrc: how2.src,
      },
      {
        title: "🎓 Stay Connected with Teachers",
        description:
          "Chat with teachers, ask questions, and get feedback instantly.",
        imageSrc: how2.src,
      },
    ],
  },
  {
    category: "For Parents",
    bgColor: "bg-[#F68F35]",
    features: [
      {
        title: "👨‍👩‍👧 Parents Stay Informed, Instantly",
        description:
          "Help parents stay involved with their children. TALIM sends real-time alerts to parents about grades, attendance, and school announcements.",
        imageSrc: how2.src,
      },
      {
        title: "🎓 Track Your Child’s Progress",
        description:
          "Monitor assignments, grades, and school activities anytime, anywhere.",
        imageSrc: how2.src,
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
            <hr className="mt-2 md:mt-4 border-[1px] w-1/4 md:w-1/6 border-white" />

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
