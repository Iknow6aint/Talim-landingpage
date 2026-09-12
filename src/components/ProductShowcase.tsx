"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PRODUCT_IMAGES } from "@/lib/site";

const screens = [
  { title: "Admin Dashboard", caption: "institutional overview", image: "admin-dashboard-demo", tall: false },
  { title: "Student Management", caption: "classes and enrolment", image: "classes-demo", tall: false },
  { title: "Attendance", caption: "real-time tracking", image: "attendance-demo", tall: false },
  { title: "Timetable", caption: "scheduling made simple", image: "timetable-demo", tall: false },
  { title: "Payments", caption: "fee collection", image: "fees-demo", tall: false },
  { title: "Announcements", caption: "community communication", image: "announcements-demo", tall: false },
  { title: "Assessments", caption: "teaching workflows", image: "assessment-demo", tall: false },
  { title: "Teacher Portal", caption: "teacher command centre", image: "teacher-dashboard-demo", tall: false },
  { title: "Student Portal", caption: "learner progress", image: "student-dashboard-demo", tall: false },
  { title: "Mobile Operations", caption: "workflows on the go", image: "mobile-dashboard-demo", tall: true },
  { title: "My Children", caption: "parent overview", image: "parent-children-demo", tall: true },
  { title: "Mobile Payments", caption: "fees and receipts", image: "parent-payments-demo", tall: true },
  { title: "Mobile Grades", caption: "learner performance", image: "grades-mobile-demo", tall: true },
  { title: "Leave Requests", caption: "approvals and timeline", image: "leave-request-demo", tall: true },
];

const skins = [
  { bg: "#12314F", fg: "#FFFFFF", sub: "#9FBEDF", panel: "#0B2545" },
  { bg: "#FFFFFF", fg: "#0B2545", sub: "#47617E", panel: "#F2F5FA" },
  { bg: "#1F6BFF", fg: "#FFFFFF", sub: "#E1ECFF", panel: "#1559D6" },
  { bg: "#E9E2C6", fg: "#0B2545", sub: "#4A4657", panel: "#DFD6B2" },
];

const groups = [
  { label: "Administration", start: 0 },
  { label: "Teaching", start: 6 },
  { label: "Portals", start: 7 },
  { label: "Mobile", start: 9 },
];

const LAST = screens.length - 1;
const pad = (value: number) => String(value).padStart(2, "0");

function cardMotion(offset: number) {
  if (offset < 0) return { transform: "translateY(-118%) rotate(-6deg) scale(.94)", opacity: 0 };
  const depth = Math.min(offset, 3);
  return { transform: `translateY(${depth * 24}px) scale(${1 - depth * 0.045})`, opacity: offset > 3 ? 0 : 1 };
}

export default function ProductShowcase() {
  const deckRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const deck = deckRef.current;
      if (!deck) return;
      const travel = Math.max(1, deck.offsetHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, -deck.getBoundingClientRect().top / travel));
      setActive(Math.round(progress * LAST));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  const jumpTo = (index: number) => {
    const deck = deckRef.current;
    if (!deck) return;
    const travel = Math.max(1, deck.offsetHeight - window.innerHeight);
    const top = deck.getBoundingClientRect().top + window.scrollY;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: top + (travel / LAST) * index + 2, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const current = screens[active];
  const activeGroup = groups.reduce((found, group, index) => (active >= group.start ? index : found), 0);

  return (
    <section id="product-tour" aria-labelledby="tour-title" className="bg-ink pt-20 text-cream">
      <div className="mx-auto max-w-[1560px] px-7">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-light">See Talim in action</p>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <h2 id="tour-title" className="max-w-[760px] text-[clamp(32px,4.6vw,74px)] leading-[0.96] tracking-[-0.05em] text-white">
            Fourteen screens, dealt one at a time.
          </h2>
          <div className="flex flex-wrap gap-2">
            {groups.map((group, index) => (
              <button
                key={group.label}
                type="button"
                data-btn=""
                aria-pressed={activeGroup === index}
                onClick={() => jumpTo(group.start)}
                className={`cursor-pointer rounded-full px-5 py-[11px] text-sm font-bold text-white ${activeGroup === index ? "bg-brand" : "bg-white/12"}`}
              >
                {group.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div ref={deckRef} className="relative mt-9" style={{ height: `calc(100vh + ${LAST * 46}vh)` }}>
        <div className="sticky top-0 flex h-svh flex-col items-center justify-center gap-6 px-7 pb-10 pt-[70px]">
          <div className="flex w-[min(1060px,94vw)] items-end justify-between gap-5">
            <div className="min-w-0" aria-live="polite">
              <p className="font-display text-[clamp(22px,2.6vw,34px)] font-black tracking-[-0.035em] text-white">{current.title}</p>
              <p className="font-hand text-[23px] text-sky">{current.caption}</p>
            </div>
            <div className="flex shrink-0 items-center gap-3.5">
              <p className="hidden font-display text-base font-black tabular-nums text-sky sm:block">
                {pad(active + 1)} / {screens.length}
              </p>
              <button type="button" data-btn="" aria-label="Previous screen" onClick={() => jumpTo(Math.max(0, active - 1))} className="flex size-[46px] cursor-pointer items-center justify-center rounded-full bg-white/12 text-lg text-white">
                ↑
              </button>
              <button type="button" data-btn="" aria-label="Next screen" onClick={() => jumpTo(Math.min(LAST, active + 1))} className="flex size-[46px] cursor-pointer items-center justify-center rounded-full bg-brand text-lg text-white">
                ↓
              </button>
            </div>
          </div>

          <div className="relative h-[min(62vh,600px)] w-[min(1060px,94vw)]">
            {screens.map((screen, index) => {
              const skin = skins[index % skins.length];
              const offset = index - active;
              return (
                <article
                  key={screen.title}
                  aria-hidden={offset !== 0}
                  className="absolute inset-0 flex flex-col overflow-hidden rounded-[28px] p-5 shadow-[0_30px_70px_rgba(0,0,0,0.3)] sm:p-7"
                  style={{
                    ...cardMotion(offset),
                    background: skin.bg,
                    color: skin.fg,
                    zIndex: 100 - Math.abs(offset),
                    transition: "transform .62s cubic-bezier(.2,.85,.25,1), opacity .5s ease",
                  }}
                >
                  <div className="flex shrink-0 items-start justify-between gap-4">
                    <h3 className="text-[clamp(18px,2vw,26px)] tracking-[-0.03em]">{screen.title}</h3>
                    <span className="text-[13px] font-bold tracking-[0.08em]" style={{ color: skin.sub }}>{pad(index + 1)}</span>
                  </div>
                  <div className="mt-[18px] flex min-h-0 flex-1 items-center justify-center">
                    <div className="relative h-full max-w-full overflow-hidden rounded-2xl" style={{ background: skin.panel, aspectRatio: screen.tall ? "9 / 19" : "16 / 9" }}>
                      <Image
                        src={`${PRODUCT_IMAGES}/${screen.image}.png`}
                        alt={`Talim ${screen.title}: ${screen.caption}`}
                        fill
                        sizes={screen.tall ? "300px" : "(max-width: 1100px) 90vw, 1000px"}
                        className="object-contain p-1.5"
                      />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="h-[5px] w-[min(1060px,94vw)] overflow-hidden rounded-full bg-white/14">
            <div className="h-full rounded-full bg-brand transition-[width] duration-[350ms] ease-talim" style={{ width: `${Math.round((active / LAST) * 100)}%` }} />
          </div>
        </div>
      </div>
      <div className="h-20" />
    </section>
  );
}
