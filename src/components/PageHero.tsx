import type { ReactNode } from "react";

type PageHeroProps = {
  /** Small uppercase label above the title. */
  eyebrow: string;
  /** The page's only h1. */
  title: ReactNode;
  /** Lead paragraph under the title. */
  lead: ReactNode;
  /** Optional sand pill under the lead, e.g. a review or last-updated note. */
  badge?: string;
};

/**
 * Opening band shared by the standalone pages (privacy, terms, support, delete account):
 * eyebrow, the page h1, a lead paragraph and an optional status pill, with the landing's rise-in entrance.
 *
 * @param props - The eyebrow, title, lead and optional badge text.
 * @returns The hero section.
 */
export default function PageHero({ eyebrow, title, lead, badge }: PageHeroProps) {
  return (
    <section className="px-7 pb-[30px] pt-[170px]">
      <div className="mx-auto max-w-[1560px]">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-deep" style={{ animation: "tl-rise .7s cubic-bezier(.2,.8,.2,1) both" }}>
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-[1000px] text-balance text-[clamp(40px,6.4vw,104px)] leading-[0.92] tracking-[-0.052em]" style={{ animation: "tl-rise .8s cubic-bezier(.2,.9,.25,1) .08s both" }}>
          {title}
        </h1>
        <p className="mt-[26px] max-w-[660px] text-[19px] leading-[1.6] text-body" style={{ animation: "tl-rise .8s cubic-bezier(.2,.8,.2,1) .16s both" }}>
          {lead}
        </p>
        {badge && (
          <p className="mt-[26px] inline-flex items-center gap-2.5 rounded-full bg-sand px-[18px] py-2.5 text-[13px] font-bold uppercase tracking-[0.08em] text-[#544F3E]" style={{ animation: "tl-rise .8s cubic-bezier(.2,.8,.2,1) .22s both" }}>
            {badge}
          </p>
        )}
      </div>
    </section>
  );
}
