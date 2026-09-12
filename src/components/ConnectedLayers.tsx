"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PRODUCT_IMAGES } from "@/lib/site";

const layers = [
  {
    name: "Operate",
    title: "Streamline school operations",
    body: "Coordinate classes, enrolment, schedules and approvals from one calm command centre.",
    points: ["Admissions and student management", "Attendance, timetable and approvals", "Staff and role management"],
    stat: "1 workspace",
    statLabel: "for daily operations",
    image: "classes-demo",
    alt: "Talim classes and enrolment management screen",
  },
  {
    name: "Teach",
    title: "Support every teaching workflow",
    body: "Plan lessons, run assessments and record results without leaving the classroom flow.",
    points: ["Lesson planning and curriculum", "Assessments and grading", "Learner progress tracking"],
    stat: "1 workspace",
    statLabel: "for teaching and assessment",
    image: "assessment-demo",
    alt: "Talim assessments screen",
  },
  {
    name: "Connect",
    title: "Keep every stakeholder informed",
    body: "Announcements, messages and requests reach the right people through one connected channel.",
    points: ["Announcements and messaging", "Parent and student portals", "Leave requests and approvals"],
    stat: "4 portals",
    statLabel: "on one shared record",
    image: "announcements-demo",
    alt: "Talim announcements screen",
  },
  {
    name: "Measure",
    title: "Turn activity into decisions",
    body: "See academic, operational and financial patterns while there is still time to respond.",
    points: ["Academic and attendance trends", "Financial and fee reporting", "Institution-wide dashboards"],
    stat: "1 view",
    statLabel: "of institutional performance",
    image: "admin-dashboard-demo",
    alt: "Talim admin dashboard",
  },
];

export default function ConnectedLayers() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let inView = false;
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
    }, { threshold: 0.25 });
    observer.observe(section);

    const onKey = (event: KeyboardEvent) => {
      if (!inView || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === "ArrowRight") setActive((index) => (index + 1) % layers.length);
      if (event.key === "ArrowLeft") setActive((index) => (index + layers.length - 1) % layers.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const layer = layers[active];

  return (
    <section ref={sectionRef} id="platform" aria-labelledby="platform-title" className="px-7 pb-10 pt-[100px]">
      <div className="mx-auto max-w-[1560px] text-center">
        <p data-rise="" className="text-xs font-bold uppercase tracking-[0.16em] text-brand">How Talim works</p>
        <h2 id="platform-title" data-wipe="" className="mx-auto mt-[22px] max-w-[960px] text-[clamp(34px,5.2vw,82px)] leading-[0.96] tracking-[-0.05em]">
          One Platform. Four Connected Layers.
        </h2>
        <p data-rise="" className="mx-auto mt-6 max-w-[720px] text-[19px] leading-[1.6] text-body">
          Follow the flow from daily operations to better decisions. Use the controls—or your arrow keys—to explore.
        </p>
      </div>

      <div data-rise="" className="mx-auto mt-11 max-w-[1560px] rounded-[30px] bg-white p-3.5">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-2">
          {layers.map((item, index) => (
            <button
              key={item.name}
              type="button"
              data-btn=""
              aria-pressed={active === index}
              onClick={() => setActive(index)}
              className={`cursor-pointer rounded-[20px] px-[18px] py-4 text-left transition-colors duration-300 ${active === index ? "bg-ink text-white" : "bg-mist text-ink"}`}
            >
              <span className="block text-xs font-bold tracking-[0.12em] opacity-75">{String(index + 1).padStart(2, "0")}</span>
              <span className="mt-1.5 block font-display text-[19px] font-black tracking-[-0.02em]">{item.name}</span>
            </button>
          ))}
        </div>

        <div key={active} className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-9 px-3 pb-6 pt-9 sm:px-[26px] sm:pb-[30px]" style={{ animation: "tl-fade .45s cubic-bezier(.2,.8,.2,1) both" }}>
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">
              {String(active + 1).padStart(2, "0")} / {layer.name}
            </p>
            <h3 className="mt-4 text-[clamp(26px,3vw,46px)] leading-[1.04] tracking-[-0.04em]">{layer.title}</h3>
            <p className="mt-[18px] text-lg leading-[1.6] text-body">{layer.body}</p>
            <ul className="mt-[26px] flex flex-col gap-3">
              {layer.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-[17px]">
                  <span className="size-2 shrink-0 rounded-full bg-brand" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-[30px] flex flex-wrap items-baseline gap-3">
              <p className="font-display text-[30px] font-black tracking-[-0.03em]">{layer.stat}</p>
              <p className="font-hand text-2xl text-body">{layer.statLabel}</p>
            </div>
          </div>
          <div className="rounded-[20px] bg-mist p-2.5">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image src={`${PRODUCT_IMAGES}/${layer.image}.png`} alt={layer.alt} fill sizes="(max-width: 860px) 90vw, 50vw" className="object-cover object-[left_top]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
