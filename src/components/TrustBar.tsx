import Image from "next/image";

const types = [
  ["Primary schools", "/images/landing/institution-types/primary-schools.png"],
  ["Secondary schools", "/images/landing/institution-types/secondary-schools.png"],
  ["Colleges and universities", "/images/landing/institution-types/colleges-universities.png"],
  ["Vocational institutes", "/images/landing/institution-types/vocational-institutes.png"],
  ["Training academies", "/images/landing/institution-types/training-academies.png"],
  ["School networks", "/images/landing/institution-types/school-networks.png"],
] as const;

const trust = ["Connected school data", "Role-based access", "Secure infrastructure", "Guided onboarding"];

export default function TrustBar() {
  return (
    <section id="institutions" className="border-b border-[#b8cee2] bg-[#dce9f5] px-5 py-16">
      <div className="mx-auto max-w-[1340px]">
        <div className="mb-9 flex flex-wrap justify-center gap-2.5">
          {trust.map((item) => <span key={item} className="rounded-full border border-[#bdd1e4] bg-[#e7f0f8] px-4 py-2 text-xs font-semibold text-[#46617d]">{item}</span>)}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {types.map(([label, src]) => (
            <div key={label} className="overflow-hidden rounded-2xl border border-[#bfd2e4] bg-[#eaf2f9] shadow-[0_8px_30px_rgba(15,35,60,.06)] transition duration-300 hover:-translate-y-1 hover:border-[#8fb5d8] hover:shadow-[0_15px_40px_rgba(15,35,60,.1)]">
              <Image src={src} alt={label} width={350} height={466} sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 190px" className="h-auto w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
