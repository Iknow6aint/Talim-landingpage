import Image from "next/image";
import { PORTAL_URLS, PRODUCT_IMAGES } from "@/lib/site";
import { revealRange } from "@/lib/styles";

const portals = [
  {
    key: "admin",
    name: "School Admin",
    dot: "bg-ink",
    url: PORTAL_URLS.admin,
    image: "admin-dashboard-demo",
    tall: false,
    features: ["Complete institutional oversight", "Financial and operational reports", "Staff and student management", "Approve workflows instantly"],
  },
  {
    key: "teacher",
    name: "Teacher",
    dot: "bg-brand",
    url: PORTAL_URLS.teacher,
    image: "teacher-dashboard-demo",
    tall: false,
    features: ["Plan lessons and assessments", "Grade efficiently", "Track learner progress", "Mark attendance in seconds"],
  },
  {
    key: "parent",
    name: "Parent",
    dot: "bg-pine",
    url: PORTAL_URLS.parent,
    image: "parent-children-demo",
    tall: true,
    features: ["Track attendance and results", "View fees and receipts", "Communicate with the school", "Submit leave requests"],
  },
  {
    key: "student",
    name: "Student",
    dot: "bg-sand",
    url: PORTAL_URLS.student,
    image: "student-dashboard-demo",
    tall: false,
    features: ["View timetable and subjects", "Track assignments and results", "Access resources and messages", "See progress at a glance"],
  },
];

export default function RolePortals() {
  return (
    <section id="solutions" aria-labelledby="portals-title" className="px-7 pb-10 pt-[90px]">
      <div className="mx-auto max-w-[1560px] text-center">
        <p data-rise="" className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Built for every stakeholder</p>
        <h2 id="portals-title" data-wipe="" className="mx-auto mt-[22px] max-w-[960px] text-[clamp(34px,5.2vw,82px)] leading-[0.96] tracking-[-0.05em]">
          Powerful Portals. One Connected Community.
        </h2>
        <p data-rise="" className="mx-auto mt-6 max-w-[720px] text-[19px] leading-[1.6] text-body">
          Each person gets a focused experience. Every action still updates one shared source of truth. Hover a portal to see it come alive.
        </p>
      </div>

      <div className="mx-auto mt-[52px] grid max-w-[920px] grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[18px]">
        {portals.map((portal, index) => (
          <article key={portal.key} data-stake={portal.key} data-rise="" style={revealRange(index * 3, 26 + index * 3)} className="rounded-[26px] bg-white p-5 text-ink sm:p-7">
            <div data-stake-panel="" className="aspect-[16/10] overflow-hidden rounded-2xl bg-mist px-3 pt-3">
              {portal.tall ? (
                <div className="flex h-full justify-center">
                  <Image
                    src={`${PRODUCT_IMAGES}/${portal.image}.png`}
                    alt={`${portal.name} portal on Talim mobile`}
                    width={853}
                    height={1844}
                    sizes="180px"
                    className="h-auto w-[42%] self-start rounded-t-[18px] shadow-[0_10px_30px_rgba(11,37,69,0.18)]"
                  />
                </div>
              ) : (
                <div className="relative h-full overflow-hidden rounded-t-[10px]">
                  <Image src={`${PRODUCT_IMAGES}/${portal.image}.png`} alt={`${portal.name} portal dashboard`} fill sizes="(max-width: 700px) 90vw, 440px" className="object-cover object-[left_top]" />
                </div>
              )}
            </div>
            <div className="mt-6 flex items-center gap-2.5">
              <span data-stake-dot="" className={`inline-block size-2.5 rounded-full ${portal.dot}`} />
              <h3 className="text-[25px] tracking-[-0.025em]">{portal.name}</h3>
            </div>
            <ul data-stake-sub="" className="mt-4 flex flex-col gap-2.5 text-base text-body">
              {portal.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <a data-stake-link="" href={portal.url} target="_blank" rel="noopener noreferrer" className="mt-[22px] inline-block text-base font-bold text-brand">
              Explore portal <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
