const capabilities = ["School Operations", "Academic Intelligence", "Connected Communication", "Financial Operations", "Parent Engagement", "Verified Records"];

export default function CapabilityMarquee() {
  return (
    <div className="relative z-40 flex h-[42px] items-center overflow-hidden border-b border-white/[.06] bg-[#020b15]" aria-label="Talim capabilities">
      <div className="talim-marquee flex w-max motion-reduce:animate-none">
        {[...capabilities, ...capabilities].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-4 whitespace-nowrap px-6 text-xs font-semibold tracking-wide text-white/60">
            {item}<span className="text-[#3B82F6]">+</span>
          </span>
        ))}
      </div>
    </div>
  );
}
