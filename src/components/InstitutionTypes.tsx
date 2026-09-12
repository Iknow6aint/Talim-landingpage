import Image from "next/image";

const institutions = [
  { name: "Primary Schools", image: "primary-schools", width: 350, height: 466, offset: false },
  { name: "Secondary Schools", image: "secondary-schools", width: 346, height: 454, offset: true },
  { name: "Colleges & Universities", image: "colleges-universities", width: 330, height: 456, offset: false },
  { name: "Vocational Institutes", image: "vocational-institutes", width: 326, height: 450, offset: false },
  { name: "Training Academies", image: "training-academies", width: 334, height: 460, offset: true },
  { name: "School Networks", image: "school-networks", width: 340, height: 462, offset: false },
];

export default function InstitutionTypes() {
  return (
    <section id="institutions" aria-labelledby="institutions-title" className="overflow-x-clip px-7 pb-[60px] pt-[110px]">
      <div className="mx-auto grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-11">
        <div>
          <p data-rise="" className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Built for every institution</p>
          <h2 id="institutions-title" data-wipe="" className="mt-[22px] text-[clamp(32px,4.4vw,72px)] leading-[0.98] tracking-[-0.048em]">
            Six kinds of institution. One system underneath.
          </h2>
        </div>
        <p data-rise="" className="pb-2 font-hand text-[27px] text-body">from one classroom to a whole network</p>
      </div>

      <div className="mx-auto mt-16 flex max-w-[1140px] flex-wrap items-start justify-center gap-[18px]">
        {institutions.map((institution, index) => (
          <article
            key={institution.name}
            data-inst=""
            data-pop=""
            style={{ animationName: `tl-pop${index + 1}` }}
            className={`flex-[0_1_min(100%,344px)] rounded-[22px] bg-white px-6 pb-8 pt-7 ${institution.offset ? "min-[1080px]:mt-[52px]" : ""}`}
          >
            {/* The source artwork is a full card; crop to its illustrated tile. */}
            <div data-inst-icon="" className="relative size-[84px] overflow-hidden rounded-[20px]">
              <Image
                src={`/images/landing/institution-types/${institution.image}.png`}
                alt=""
                width={institution.width}
                height={institution.height}
                sizes="140px"
                className="absolute left-[-28%] top-[-26%] h-auto w-[157%] max-w-none"
              />
            </div>
            <h3 className="mt-[22px] font-display text-[21px] font-black leading-[1.2] tracking-[-0.02em]">{institution.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
