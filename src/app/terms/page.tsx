import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DocSections, { DocAsideLink, type DocSection } from "@/components/DocSections";
import { PRIVACY_EMAIL } from "@/lib/site";
import { INLINE_LINK } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Terms of service — Talim",
  description: "The terms on which the Talim platform is provided to institutions: the agreement, ownership of records, named accounts and suspension.",
  alternates: { canonical: "/terms" },
};

const sections: DocSection[] = [
  {
    id: "agreement",
    title: "The agreement",
    body: "Talim is provided to institutions under a written agreement covering subscription scope, uptime, support, onboarding and data ownership.",
  },
  {
    id: "ownership",
    title: "Ownership of records",
    body: (
      <>
        Institutions retain ownership of their records at all times. How those records are collected, used and protected is set out in our{" "}
        <Link href="/privacy" className={INLINE_LINK}>
          privacy policy
        </Link>
        .
      </>
    ),
  },
  {
    id: "accounts",
    title: "Accounts",
    body: [
      "Accounts are for named users and may not be shared.",
      <>
        Parents, teachers and students can close their own account at any time.{" "}
        <Link href="/delete-account" className={INLINE_LINK}>
          How account deletion works
        </Link>
        .
      </>,
    ],
  },
  {
    id: "suspension",
    title: "Suspension",
    body: "Service may be suspended for non-payment or for use that endangers other customers' data.",
  },
  {
    id: "binding-terms",
    title: "Binding terms",
    body: "The full agreement, including service levels and the data processing addendum, is issued at contracting and forms the binding terms.",
  },
];

/**
 * The public terms of service at /terms (formerly the last section of /legal).
 *
 * @returns The terms of service page.
 */
export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Legal"
          title="Terms of service."
          lead="Talim is provided to institutions under a written agreement. This page summarises the terms on which the platform is provided."
          badge="Draft · Pending legal review · Last updated October 2026"
        />
        <DocSections sections={sections} aside={<DocAsideLink href={`mailto:${PRIVACY_EMAIL}`}>Contact our DPO</DocAsideLink>} />
      </main>
      <Footer />
    </>
  );
}
