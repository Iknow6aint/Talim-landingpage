import Image from "next/image";
import type { ReactNode } from "react";
import { APP_STORE_URL, PRODUCT_IMAGES } from "@/lib/site";
import { revealRange } from "@/lib/styles";

const features = ["Push alerts for results, fees and announcements", "Offline-tolerant attendance capture", "One login across every portal role"];

const phones = [
  { label: "My children", image: "parent-children-demo", frame: "w-[min(34%,190px)] -rotate-5 rounded-[30px] bg-ink shadow-[0_24px_60px_rgba(11,37,69,0.22)]", screen: "rounded-[24px] bg-ink-soft", sizes: "190px" },
  { label: "Mobile dashboard", image: "mobile-dashboard-demo", frame: "z-[2] w-[min(38%,215px)] rounded-[32px] bg-brand shadow-[0_30px_70px_rgba(11,37,69,0.26)]", screen: "rounded-[26px] bg-brand-deep", sizes: "215px" },
  { label: "Grades", image: "grades-mobile-demo", frame: "w-[min(34%,190px)] rotate-5 rounded-[30px] bg-sand shadow-[0_24px_60px_rgba(11,37,69,0.18)]", screen: "rounded-[24px] bg-sand-deep", sizes: "190px" },
];

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[26px] shrink-0" aria-hidden="true">
      <path d="M16.6 12.9 5.4 19.4a2 2 0 0 1-.9-1.7V6.3a2 2 0 0 1 .9-1.7l11.2 6.5z" fill="#4ADE80" />
      <path d="M5.4 4.6 14 9.6l2.6-1.5-8.2-4.7a2 2 0 0 0-3 .6z" fill="#60A5FA" />
      <path d="M5.4 19.4 14 14.4l2.6 1.5-8.2 4.7a2 2 0 0 1-3-.6z" fill="#F87171" />
      <path d="m16.6 8.1 3 1.7a1.7 1.7 0 0 1 0 3l-3 1.7L13.5 12z" fill="#FBBF24" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 shrink-0" aria-hidden="true">
      <path d="M16.3 12.6c0-2 1.6-3 1.7-3.1-1-1.4-2.4-1.6-2.9-1.6-1.2-.1-2.4.7-3 .7-.6 0-1.6-.7-2.6-.7-1.3 0-2.6.8-3.2 2-1.4 2.4-.4 6 1 8 .7 1 1.5 2 2.5 2 1 0 1.4-.6 2.6-.6s1.5.6 2.6.6 1.7-.9 2.4-1.8c.7-1.1 1-2.1 1-2.2 0 0-2-.8-2.1-3.3zM14.4 6.6c.5-.7.9-1.6.8-2.6-.8 0-1.8.5-2.4 1.2-.5.6-1 1.6-.8 2.5.9.1 1.8-.4 2.4-1.1z" fill="#fff" />
    </svg>
  );
}

const stores: { icon: ReactNode; eyebrow: string; name: string; href: string | null }[] = [
  { icon: <AppleIcon />, eyebrow: "Download on the", name: "App Store", href: APP_STORE_URL },
  { icon: <GooglePlayIcon />, eyebrow: "Get it on", name: "Google Play", href: null },
];

const badgeClass = "inline-flex items-center gap-3.5 rounded-2xl bg-ink py-3.5 pl-5 pr-[26px] text-white";

export default function MobileShowcase() {
  return (
    <section id="mobile" aria-labelledby="mobile-title" className="px-7 pb-10 pt-[100px]">
      <div className="mx-auto grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(100%,360px),1fr))] items-center gap-[52px] overflow-hidden rounded-[34px] bg-white p-[clamp(24px,4vw,64px)]">
        <div className="min-w-0">
          <p data-rise="" className="text-xs font-bold uppercase tracking-[0.16em] text-pine">Talim mobile</p>
          <h2 id="mobile-title" data-wipe="" className="mt-[22px] text-[clamp(32px,4.2vw,66px)] leading-[0.98] tracking-[-0.05em]">
            The school day, in a pocket.
          </h2>
          <p data-rise="" className="mt-6 max-w-[520px] text-lg leading-[1.65] text-body">
            Parents check attendance, fees and results. Teachers mark registers and grade. Learners follow their timetable and progress. Same record, same moment.
          </p>
          <ul data-rise="" className="mt-[26px] flex flex-col gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-[13px] text-[17px]">
                <span aria-hidden="true" className="flex size-6 shrink-0 items-center justify-center rounded-full bg-pine text-xs font-bold text-white">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <div data-rise="" className="mt-[34px] flex flex-wrap gap-3.5">
            {stores.map((store) => {
              const label = (
                <>
                  {store.icon}
                  <span className="flex flex-col leading-[1.15]">
                    <span className="text-[11px] uppercase text-sky">{store.eyebrow}</span>
                    <span className="font-display text-[19px] font-black tracking-[-0.02em]">{store.name}</span>
                  </span>
                </>
              );
              return store.href ? (
                <a key={store.name} data-btn="" href={store.href} target="_blank" rel="noopener noreferrer" className={`${badgeClass} hover:text-white`}>
                  {label}
                </a>
              ) : (
                <div key={store.name} className={`${badgeClass} opacity-60`}>
                  {label}
                </div>
              );
            })}
          </div>
          <p className="mt-3.5 font-hand text-[23px] text-body">Android app coming soon</p>
        </div>

        <div className="flex min-w-0 items-end justify-center gap-[clamp(12px,2vw,26px)]">
          {phones.map((phone, index) => (
            <div key={phone.label} data-rise="" style={revealRange(index * 4, 26 + index * 4)} className={`relative aspect-[9/19] p-2 ${phone.frame}`}>
              <div className={`relative size-full overflow-hidden ${phone.screen}`}>
                <Image src={`${PRODUCT_IMAGES}/${phone.image}.png`} alt={`${phone.label} on Talim mobile`} fill sizes={phone.sizes} className="object-cover object-top" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
