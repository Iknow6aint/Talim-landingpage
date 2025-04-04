import { HiOutlineGift } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="container bg-white sm:bg-transparent  relative flex flex-col items-center justify-center text-center overflow-hidden  text-white ">
      <div className="flex flex-col items-center sm:items-start sm:absolute md:top-[150px] lg:top-[250px] xl:top-[350px]  sm:transform md:left-1/3 lg:left-1/2 text-left sm:z-60 w-full text-center sm:text-left max-w-[353px] sm:max-w-[508px] sm:px-6 pt-6 mb-6 sm:mb-0">
        <h1 className="text-[35px] sm:text-[50px] font-medium text-black sm:text-white text-center sm:text-left leading-[110%] tracking-[0.8px]">
          Bringing Africa’s Education Online
        </h1>
        <p className="mt-1 text-[#888888] sm:text-[#CACACA] text-[18px] text-center sm:text-left leading-[118%]">
          We help West African schools manage classes, follow curriculum, and
          keep parents updated.
        </p>
        <button className="mt-6 text-[16px] bg-[#0066CC] text-white font-medium px-6 py-1 sm:py-3 rounded-2xl border border-[#FFFFFF]/10 flex gap-2 items-center shadow-[inset_0px_-4px_4px_rgba(251,251,251,0.25),inset_0px_4px_4px_rgba(255,255,255,0.30)]">
          Start free trial
          <HiOutlineGift strokeWidth={2} />
        </button>
      </div>
      {/* Background Video */}
      <div className="overflow-hidden flex relative">
        <video
          className=" inset-0 w-full  object-cover rounded-2xl "
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 z-50 bg-black/30 rounded-2xl w-full transform "></div>
      </div>

      {/* Text Content */}
    </section>
  );
};

export default Hero;
