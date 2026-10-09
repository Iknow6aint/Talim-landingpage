import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DocSections, { DocAsideLink, type DocSection } from "@/components/DocSections";
import { PRIVACY_EMAIL } from "@/lib/site";
import { INLINE_LINK } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Privacy policy — Talim",
  description: "What Talim collects, who controls it, how it is used and secured, and the rights you have over your records, including deleting your account.",
  alternates: { canonical: "/privacy" },
};

const sections: DocSection[] = [
  {
    id: "collect",
    title: "What we collect",
    body: "Talim stores the records an institution needs to operate: learner and staff profiles, enrolment and class assignment, attendance, assessment results, fee and payment records, messages sent through the platform, and the technical logs that keep accounts secure.",
    items: [
      "Identity and contact details for staff, guardians and learners",
      "Academic records: attendance, assessments, results and progress",
      "Financial records: invoices, payments, receipts and balances",
      "Usage and security logs tied to each account",
    ],
  },
  {
    id: "controller",
    title: "Who controls the data",
    body: "The institution is the data controller. Talim is the processor: we hold and process records on the institution's instructions and do not sell, rent or trade them, and we do not use learner data to train advertising or third-party models.",
  },
  {
    id: "use",
    title: "How it is used",
    body: "Data is used to deliver the platform to the people entitled to see it, to keep accounts secure, and to produce the reports the institution asks for. Access is role-based, so each user sees only what their role permits within their institution.",
  },
  {
    id: "children",
    title: "Children's data",
    body: "Records about minors are only ever created and managed under the authority of the institution and the guardian relationship it records. Guardians access their own children's records through the Parent portal; no learner record is publicly addressable.",
  },
  {
    id: "security",
    title: "Security and retention",
    body: "Data is encrypted in transit and at rest, access is authenticated per role, and administrative actions are logged. Records are retained for as long as the institution's agreement and local education record-keeping requirements need, and are exported or deleted on the institution's instruction when that period ends.",
  },
  {
    id: "rights",
    title: "Your rights",
    body: [
      "Individuals may request access to their records, correction of inaccurate entries, export of their data, or deletion where retention rules allow.",
      <>
        Parents, teachers and students can delete their own account in any Talim app, from Settings → Account → Delete account. The account is signed out and locked straight away, and its personal details are erased after 30 days. Signing in during those 30 days cancels the deletion. Grades, attendance and payments stay with the institution, de-identified.{" "}
        <Link href="/delete-account" className={INLINE_LINK}>
          How account deletion works
        </Link>
        .
      </>,
      <>
        Other requests are made through the institution, which we support directly. Write to{" "}
        <a href={`mailto:${PRIVACY_EMAIL}`} className={INLINE_LINK}>
          {PRIVACY_EMAIL}
        </a>{" "}
        and we will route it.
      </>,
    ],
  },
  {
    // Keeps old /legal#terms links landing somewhere useful after the redirect.
    id: "terms",
    title: "Terms of service",
    body: (
      <>
        The terms on which Talim is provided to institutions are set out on their own page.{" "}
        <Link href="/terms" className={INLINE_LINK}>
          Read the terms of service
        </Link>
        .
      </>
    ),
  },
];

/**
 * The public privacy policy at /privacy (formerly the first half of /legal).
 *
 * @returns The privacy policy page.
 */
export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Legal"
          title="Privacy policy."
          lead="Talim holds records about children. This page sets out what we collect, who controls it, how it is used and kept safe, and the rights you have over it."
          badge="Draft · Pending legal review · Last updated October 2026"
        />
        <DocSections sections={sections} aside={<DocAsideLink href={`mailto:${PRIVACY_EMAIL}`}>Contact our DPO</DocAsideLink>} />
      </main>
      <Footer />
    </>
  );
}
