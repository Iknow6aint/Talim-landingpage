import { BsDot } from "react-icons/bs";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 px-3 md:px-10 flex gap-4">
      <div className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full xl:h-[380px]">
        {/* Left Section */}
        <div className="bg-[#0066CC] text-white p-6 md:p-10 xl:p-15 rounded-xl md:w-[495px] xl:w-2/5 h-full">
          <div className="max-w-[#329px] sm:max-w-[384px]">
            <h2 className="text-[35px] sm:text-[40px] font-medium">
              Bringing Africa’s Education Online
            </h2>
            <p className="mt-2 text-sm">
              We help West African schools manage classes, follow curriculum,
              and keep parents updated.
            </p>
            <a href="#" className="inline-block mt-4 text-white font-medium">
              Get Started →
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 bg-[#0066CC]/12 w-full  md:w-[873px] xl:w-3/5 rounded-xl h-full p-10">
          {/* Product Links */}
          <div>
            <h4 className="text-sm font-bold text-[#8D8484] mb-5">Product</h4>
            <ul className="mt-2 space-y-2 text-sm text-[#3E3838]">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Watch Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Community Links */}
          <div className="col-span-1 row-start-2 md:col-span-1 md:row-start-auto">
            <h4 className="text-sm font-bold text-[#8D8484] mb-4">Community</h4>
            <ul className="mt-2 space-y-2 text-sm text-[#3E3838]">
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-start md:items-end ">
            <div className="flex items-center ">
              <div className="">
                <Image src="/talimlogo.svg" alt="Logo" width={29} height={29} />
              </div>
              <span className="text-md font-semibold text-[#0066CC]">
                Talim
              </span>
            </div>
          </div>
          <div className=" col-span-1 row-start-3 sm:row-start-auto mt-10 w-full flex flex-col md:flex-row sm:col-span-3 justify-between items-start sm:items-center text-sm text-[#514A4A]">
            <div className="flex flex-col sm:flex-row gap-3 items-center font-semibold">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <BsDot className="text-[#E4DBDB] w-6 h-6" strokeWidth={2} />
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
            </div>
          </div>
          <div className="col-start-2 row-start-3 sm:row-start-3 sm:col-start-3 flex items-end justify-end">
            {" "}
            <p className="">© 2025 TALIM</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
    </footer>
  );
}
