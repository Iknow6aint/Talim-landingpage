import { HiOutlineGift } from "react-icons/hi2";
import { ArrowRight } from "./Icons";
import Image from "next/image";

const Hero = () => {
  return (
    <section className=" flex flex-col items-center justify-center text-center  mt-20 mx-auto">
      <div className="flex flex-col items-center gap-8 max-w-[1086px]">
        <h1 className="text-[35px] md:text-[50px] font-semibold text-center leading-[110%] tracking-[0.8px]">
          The Smarter Way to Manage Education
        </h1>
        <p className="text-[#767676] text-[18px] text-center max-w-[617px] leading-[118%]">
          Empowering schools, teachers, parents, and students worldwide to
          connect, collaborate, and succeed effortlessly.
        </p>
        <button className="bg-black text-white px-4 py-3  border border-white rounded-full flex items-center gap-2 ">
          Get Started
          <ArrowRight />
        </button>
      </div>
      <Image
        src="/school.svg"
        alt="School and students"
        width={2000}
        height={778}
      />
    </section>
  );
};

export default Hero;
