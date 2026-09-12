import { revealRange } from "@/lib/styles";

// Layout placeholders from the V4 design. Replace with approved, attributed quotes before mounting on the page.
const reviews = [
  { quote: "Placeholder quote from a school principal describing how Talim changed the way the leadership team sees the term.", name: "Principal", role: "Secondary school · placeholder", bg: "#FFFFFF", fg: "#0B2545", sub: "#47617E", mark: "#1F6BFF", rule: "rgba(11,37,69,0.1)", avatar: "#C9D9F4", offset: false },
  { quote: "Placeholder quote from a school administrator about collecting fees and reconciling records without chasing paper.", name: "Administrator", role: "School network · placeholder", bg: "#0B2545", fg: "#F6F4EC", sub: "#9FBEDF", mark: "#6FA3FF", rule: "rgba(255,255,255,0.16)", avatar: "#1F6BFF", offset: true },
  { quote: "Placeholder quote from a teacher on marking registers, grading and seeing which learners need attention early.", name: "Teacher", role: "Primary school · placeholder", bg: "#FFFFFF", fg: "#0B2545", sub: "#47617E", mark: "#0F766E", rule: "rgba(11,37,69,0.1)", avatar: "#B7DDD8", offset: false },
  { quote: "Placeholder quote from a parent about following attendance, results and payments from one place on a phone.", name: "Parent", role: "Guardian · placeholder", bg: "#E9E2C6", fg: "#0B2545", sub: "#5A5442", mark: "#0B2545", rule: "rgba(11,37,69,0.14)", avatar: "#CFC5A0", offset: true },
];

export default function Testimonials() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="px-7 pb-10 pt-[100px]">
      <div className="mx-auto grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-11">
        <div>
          <p data-rise="" className="text-xs font-bold uppercase tracking-[0.16em] text-brand">From the people who use it</p>
          <h2 id="reviews-title" data-wipe="" className="mt-[22px] text-[clamp(32px,4.4vw,72px)] leading-[0.98] tracking-[-0.048em]">
            Principals, teachers, parents, learners.
          </h2>
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] items-start gap-[18px]">
        {reviews.map((review, index) => (
          <figure
            key={review.name}
            data-quote=""
            data-rise=""
            className={`rounded-[26px] p-[30px] ${review.offset ? "lg:mt-[34px]" : ""}`}
            style={{ ...revealRange(index * 3, 26 + index * 3), background: review.bg, color: review.fg }}
          >
            <p aria-hidden="true" className="font-display text-[56px] font-black leading-[0.6]" style={{ color: review.mark }}>“</p>
            <blockquote className="mt-[18px] text-pretty text-lg leading-[1.55]">{review.quote}</blockquote>
            <figcaption className="mt-[26px] flex items-center gap-3 border-t pt-[18px]" style={{ borderColor: review.rule }}>
              <span className="size-10 shrink-0 rounded-full" style={{ background: review.avatar }} />
              <span className="min-w-0">
                <span className="block font-display text-base font-black tracking-[-0.02em]">{review.name}</span>
                <span className="block text-sm" style={{ color: review.sub }}>{review.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
