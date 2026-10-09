import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FaqAccordion, { type FaqItem } from "@/components/FaqAccordion";
import { APP_STORE_URL, CONTACT_EMAIL, PORTAL_URLS, PRIVACY_EMAIL, SUPPORT_EMAIL } from "@/lib/site";
import { INLINE_LINK } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Help and support — Talim",
  description: "How to get help with Talim: raise a ticket from the Teachers, School Admin, Parents or Students portal or the mobile app, email support, and answers to common questions.",
  alternates: { canonical: "/support" },
};

type AppHelp = {
  name: string;
  /** Menu path to the ticket form, one entry per step. */
  path: string[];
  note: string;
  href: string;
  linkLabel: string;
};

/**
 * Hostname shown for a portal link.
 *
 * @param url - The portal's absolute URL.
 * @returns The host, e.g. "teachers.mytalim.com".
 */
const host = (url: string) => new URL(url).host;

const apps: AppHelp[] = [
  {
    name: "Teachers",
    path: ["Settings", "Help", "New ticket"],
    note: "Ask your school office about classes and records, or the Talim team when something in the app isn't working.",
    href: PORTAL_URLS.teacher,
    linkLabel: host(PORTAL_URLS.teacher),
  },
  {
    name: "School Admin",
    path: ["Help & support", "New ticket"],
    note: "Reach the Talim team directly. Tickets your staff, parents and students raise with the school arrive on your Support desk.",
    href: PORTAL_URLS.admin,
    linkLabel: host(PORTAL_URLS.admin),
  },
  {
    name: "Parents",
    path: ["Settings", "Help", "New ticket"],
    note: "Choose the child the ticket is about, and whether it's for the school office or the Talim team.",
    href: PORTAL_URLS.parent,
    linkLabel: host(PORTAL_URLS.parent),
  },
  {
    name: "Students",
    path: ["Settings", "Help", "Contact support"],
    note: "Ask your school office or the Talim team, and follow their replies in the same place.",
    href: PORTAL_URLS.student,
    linkLabel: host(PORTAL_URLS.student),
  },
  {
    name: "Mobile app",
    path: ["Settings", "Help", "Contact Talim support"],
    note: "The same help for every role. Contact your school raises a ticket with the school office; My tickets shows the replies.",
    href: APP_STORE_URL,
    linkLabel: "Talim on the App Store",
  },
];

const faqs: FaqItem[] = [
  {
    question: "I can't sign in.",
    answer: (
      <p>
        Check you are on the portal for your role (they are listed above) and signing in with the email address your school registered. If your school has deactivated your account, the school office can turn it back on. If you asked to delete your account in the last 30 days, signing in cancels the deletion. Still stuck? Email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={INLINE_LINK}>
          {SUPPORT_EMAIL}
        </a>
        .
      </p>
    ),
  },
  {
    question: "How do I reset my password?",
    answer: "Choose Forgot password on your portal's sign-in page, or on the mobile app's sign-in screen, and follow the link we email you. If the email doesn't arrive within a few minutes, check your spam folder, then ask your school office to confirm the address on your account.",
  },
  {
    question: "My child's or my class details are wrong.",
    answer: "Names, classes, results and attendance are recorded by your school, so the school office is the right place to correct them. Raise a ticket to your school from Settings → Help, or contact the office directly.",
  },
  {
    question: "A payment isn't showing, or I have a question about fees.",
    answer: "Fees are set and confirmed by your school. If a payment you made isn't showing after a working day, raise a ticket to your school with the receipt or transaction reference so the bursary can match it.",
  },
  {
    question: "How do I delete my account?",
    answer: (
      <p>
        Go to Settings → Account → Delete account in any Talim app.{" "}
        <Link href="/delete-account" className={INLINE_LINK}>
          What happens when you delete your account
        </Link>
        .
      </p>
    ),
  },
];

const contacts = [
  { label: "Support", email: SUPPORT_EMAIL },
  { label: "Data and privacy", email: PRIVACY_EMAIL },
  { label: "Partnerships and demos", email: CONTACT_EMAIL },
];

/**
 * The public help page at /support: where to raise a ticket in each app, how to reach the team, and common questions.
 *
 * @returns The support page.
 */
export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Support"
          title="Get help with Talim."
          lead="The fastest way to get help is a ticket from inside the app you use. It reaches your school office or the Talim team with your account already attached, and the replies come back to the same place."
        />

        <section aria-labelledby="tickets-title" className="px-7 py-10">
          <div className="mx-auto max-w-[1560px]">
            <h2 id="tickets-title" className="text-[clamp(28px,3.4vw,48px)] leading-[1.02] tracking-[-0.045em]">
              Raise a ticket in your app
            </h2>
            <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-3.5">
              {apps.map((app) => (
                <li key={app.name} data-rise="" className="flex min-w-0 flex-col rounded-[26px] bg-white p-6 sm:p-[30px]">
                  <h3 className="text-2xl tracking-[-0.03em]">{app.name}</h3>
                  <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] font-bold text-ink">
                    <span className="sr-only">Go to </span>
                    {app.path.map((step, index) => (
                      <span key={step} className="inline-flex items-center gap-2">
                        {index > 0 && <span aria-hidden="true" className="text-brand-deep">→</span>}
                        <span className="rounded-full bg-mist px-3 py-1">{step}</span>
                      </span>
                    ))}
                  </p>
                  <p className="mt-4 flex-1 text-base leading-[1.6] text-body">{app.note}</p>
                  <a href={app.href} target="_blank" rel="noopener noreferrer" className={`mt-5 self-start text-base ${INLINE_LINK}`}>
                    {app.linkLabel}
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-7 pb-10 pt-[60px]">
          <div className="mx-auto grid max-w-[1560px] grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-start gap-[clamp(32px,4vw,72px)]">
            <div className="min-w-0">
              <h2 className="text-[clamp(28px,3.4vw,48px)] leading-[1.02] tracking-[-0.045em]">Email us</h2>
              <div className="mt-8 h-px bg-ink/15" />
              <ul className="flex flex-col gap-4 py-[30px]">
                {contacts.map((contact) => (
                  <li key={contact.email}>
                    <p className="text-[13px] text-muted">{contact.label}</p>
                    <a href={`mailto:${contact.email}`} className="break-words text-[clamp(17px,1.4vw,21px)] font-semibold text-brand-deep">
                      {contact.email}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="h-px bg-ink/15" />
              <p className="pt-6 font-hand text-2xl text-body">we reply within one working day</p>
            </div>

            <div className="min-w-0">
              <h2 id="faq-title" className="text-[clamp(28px,3.4vw,48px)] leading-[1.02] tracking-[-0.045em]">
                Common questions
              </h2>
              <div className="mt-8">
                <FaqAccordion items={faqs} idPrefix="support-faq" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
