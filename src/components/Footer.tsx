import React from "react";
import Image from "next/image";
import { Outfit } from "next/font/google";
import { Instagram, Linkedin, Twitter } from "./Icons";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <div className="max-w-[426px] mx-auto py-10 mt-28 text-center space-y-6">
      {" "}
      <div className=" flex items-center gap-2 justify-center">
        <Image src="/talim.svg" alt="Logo" width={46.65} height={45} />
        <p className={`${outfit.className} text-[24px]`}>Talim</p>
      </div>
      <p className="text-[#767676]">
        Empowering schools, teachers, parents, and students worldwide to
        connect, collaborate, and succeed effortlessly.
      </p>
      <div className="flex justify-center gap-4">
        <div className="border border-[#EEEEEE] p-2 rounded-full flex items-center cursor-pointer hover:bg-gray-100">
          <Instagram />
        </div>
        <div className="border border-[#EEEEEE] p-2 rounded-full flex items-center cursor-pointer hover:bg-gray-100">
          <Twitter />
        </div>
        <div className="border border-[#EEEEEE] p-2 rounded-full flex items-center cursor-pointer hover:bg-gray-100">
          <Linkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
