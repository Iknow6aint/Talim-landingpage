import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-[#0066CC] w-full flex items-center justify-center px-3 pt-5">
      <div className="max-w-[375px] sm:max-w-[1015px]">
        {/* CTA Section */}
        <div className="text-white rounded-xl w-full pt-10 text-center flex flex-col items-center justify-center">
          <div className="max-w-[871px] ">
            <h2 className="text-[35px] sm:text-[40px] font-medium leading-[110%]">
              Let’s make management super easy for you
            </h2>
            <p className="mt-1 text-[18px] sm:text-[22px] max-w-[593px]  mx-auto">
              Join schools across West Africa to save time, reduce stress, and
              boost success.
            </p>
          </div>

          {/* Overlapping Image */}
          <div className="">
            <Image
              src="/dashboard.png"
              alt="Dashboard Preview"
              width={1015}
              height={677}
              className="mx-auto rounded-t-lg mt-10 px-2 sm:px-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
