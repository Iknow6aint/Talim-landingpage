import { CiPlay1 } from "react-icons/ci";
import { HiOutlineGift } from "react-icons/hi2";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full bg-white  px-6 md:px-20 py-4 flex justify-between items-center border border-[#F7F7F7] shadow-[inset_0px_-4px_4px_rgba(225,225,225,0.25),inset_0px_4px_4px_rgba(249,249,249,0.25)]">
      {/* Logo */}
      <div className="text-lg font-semibold flex items-center">
      <Image src="/talimlogo.svg" alt="Logo" width={46.65} height={45} />
      <p className="sm:hidden">Talim</p>
      </div>

      {/* CTA Button */}
      <div className="flex  gap-2">
        <button className="bg-[#0066CC]/33 text-[#333333] rounded-xl border border-[#000000]/10 px-4 py-2 rounded-lg shadow-md hidden sm:flex items-center gap-2 shadow-[inset_0px_-4px_4px_rgba(251,251,251,0.25),inset_0px_4px_4px_rgba(255,255,255,0.30)]">
          <CiPlay1 strokeWidth={1} />
          Watch Demo
        </button>
        <button className="bg-[#0066CC] text-white px-4 py-2 rounded-xl border border-white rounded-lg hidden sm:flex items-center gap-2 shadow-[inset_0px_-4px_4px_rgba(251,251,251,0.25),inset_0px_4px_4px_rgba(255,255,255,0.30)]">
          Start free trial
          <HiOutlineGift strokeWidth={2} />
        </button>
      </div>
    </header>
  );
};

export default Header;
