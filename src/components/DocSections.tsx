import type { ReactNode } from "react";

export type DocSection = {
  /** Anchor id, also used by the "On this page" index. */
  id: string;
  title: string;
  /** One paragraph, or several. */
  body: ReactNode | ReactNode[];
  /** Optional bullet list under the body. */
  items?: ReactNode[];
  /** Render `items` as numbered steps instead of bullets. */
  ordered?: boolean;
};

type DocSectionsProps = {
  sections: DocSection[];
  /** Optional call to action under the index, e.g. a mailto button. */
  aside?: ReactNode;
};

/**
 * Two-column document layout used by the legal and help pages: a sticky "On this page" index
 * beside numbered white cards, one per section.
 *
 * @param props - The sections to render and an optional aside under the index.
 * @returns The document body section.
 */
export default function DocSections({ sections, aside }: DocSectionsProps) {
  return (
    <section className="px-7 py-10">
      <div className="mx-auto grid max-w-[1560px] items-start gap-11 lg:grid-cols-[260px_minmax(0,1fr)]">
        <nav aria-label="On this page" className="min-w-0 lg:sticky lg:top-[110px]">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">On this page</p>
          <ul className="mt-[18px] flex flex-col items-start gap-[11px] text-base">
            {sections.map((section) => (
              <li key={section.id}>
                <a data-foot-link="" href={`#${section.id}`} className="text-ink">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
          {aside}
        </nav>

        <div className="flex min-w-0 flex-col gap-3.5">
          {sections.map((section, index) => (
            <DocCard key={section.id} section={section} num={String(index + 1).padStart(2, "0")} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * One numbered section card.
 *
 * @param props - The section and its two-digit number.
 * @returns The section article.
 */
function DocCard({ section, num }: { section: DocSection; num: string }) {
  const paragraphs = Array.isArray(section.body) ? section.body : [section.body];
  const items = section.items ?? [];
  const List = section.ordered ? "ol" : "ul";

  return (
    <article id={section.id} aria-labelledby={`${section.id}-title`} data-rise="" className="scroll-mt-[110px] rounded-[26px] bg-white p-6 sm:p-[34px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">{num}</p>
      <h2 id={`${section.id}-title`} className="mt-3.5 text-[clamp(24px,2.6vw,36px)] leading-[1.1] tracking-[-0.035em]">
        {section.title}
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="mt-[18px] max-w-[720px] text-pretty text-[17px] leading-[1.7] text-body">
          {paragraph}
        </p>
      ))}
      {items.length > 0 && (
        <List className="mt-5 flex max-w-[720px] flex-col gap-2.5">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-[17px] leading-[1.5]">
              {section.ordered ? (
                <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-mist text-[13px] font-bold text-brand-deep">
                  {index + 1}
                </span>
              ) : (
                <span aria-hidden="true" className="mt-[9px] size-[7px] shrink-0 rounded-full bg-brand" />
              )}
              <span className={section.ordered ? "min-w-0 pt-0.5" : "min-w-0"}>{item}</span>
            </li>
          ))}
        </List>
      )}
    </article>
  );
}

/**
 * Dark pill link for the `aside` slot under the index (e.g. "Contact our DPO").
 *
 * @param props - The link target and its label.
 * @returns The styled anchor.
 */
export function DocAsideLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a data-btn="" href={href} className="mt-[26px] inline-flex rounded-full bg-ink px-6 py-[15px] text-[15px] font-bold text-white hover:text-white">
      {children}
    </a>
  );
}
