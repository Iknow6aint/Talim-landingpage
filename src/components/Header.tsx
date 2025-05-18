import { CiPlay1 } from "react-icons/ci";
import { HiOutlineGift } from "react-icons/hi2";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { ArrowRight } from "./Icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Header = () => {
  return (
    <header className="w-full  px-6 md:px-20 py-4 flex justify-between items-center ">
      {/* Logo */}
      <div className=" flex items-center gap-2">
        <Image src="/talim.svg" alt="Logo" width={46.65} height={45} />
        <p className={`${outfit.className} text-[24px]`}>Talim</p>
      </div>

      {/* CTA Button */}
      <div className="flex  gap-2">
        <button className="bg-black text-white px-4 py-3  border border-white rounded-full flex items-center gap-2 ">
          Get Started
          <ArrowRight />
        </button>
      </div>
    </header>
  );
};

export default Header;
