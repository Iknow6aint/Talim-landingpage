import Image from "next/image";
import React from "react";

const Reason = () => {
  return (
    <div className="py-20">
      <div className="max-w-[367px] sm:max-w-[845px] mx-auto text-center">
        <h1 className="text-[35px] sm:text-[40px] font-semibold text-[#1A1A1A] leading-[116.7%]">
          Why Educational Leaders Choose <span className="text-blue-600">Talim</span>
        </h1>
        <p className="mt-4 text-[16px] md:text-[18px] text-[#767676] max-w-[650px] mx-auto leading-[124.7%]">
          Designed specifically for modern educational institutions worldwide with unmatched reliability, enterprise-grade security, and proven ROI. Join the education revolution that's transforming how schools operate.
        </p>
      </div>
      <Image
        src="reason.svg"
        alt="Reasons to choose talim"
        width={1495}
        height={274}
      />
    </div>
  );
};

export default Reason;
