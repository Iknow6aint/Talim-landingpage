import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import DocSections, { DocAsideLink, type DocSection } from "@/components/DocSections";
import { PORTAL_URLS, PRIVACY_EMAIL, SUPPORT_EMAIL } from "@/lib/site";
import { INLINE_LINK } from "@/lib/styles";

export const metadata: Metadata = {
  title: "Delete your Talim account — Talim",
  description:
    "How to delete your Talim account from the web portals or the mobile app, the 30-day grace period, what is erased, what your school keeps, and what to do if you can't sign in.",
  alternates: { canonical: "/delete-account" },
};

const DELETION_REQUEST_HREF = `mailto:${PRIVACY_EMAIL}?subject=${encodeURIComponent("Delete my Talim account")}`;

const portals = [
  ["Teachers", PORTAL_URLS.teacher],
  ["Parents", PORTAL_URLS.parent],
  ["Students", PORTAL_URLS.student],
  ["School Admin", PORTAL_URLS.admin],
] as const;

const sections: DocSection[] = [
  {
    id: "web",
    title: "Delete from a web portal",
    body: "Parents, teachers, students and school administrators can delete their own account from the portal they use.",
    ordered: true,
    items: [
      <>
        Sign in to your portal:{" "}
        {portals.map(([name, href], index) => (
          <span key={name}>
            {index > 0 && ", "}
            <a href={href} className={INLINE_LINK}>
              {name}
            </a>
          </span>
        ))}
        .
      </>,
      "Open Settings → Account.",
      "Choose Delete account.",
      "Enter your password, tick that you understand what happens next, and confirm.",
    ],
  },
  {
    id: "mobile",
    title: "Delete from the mobile app",
    body: "The Talim app on iPhone and Android works the same way for every role.",
    ordered: true,
    items: ["Open the Talim app and sign in.", "Go to Settings → Account.", "Tap Delete account.", "Enter your password, tick that you understand, and confirm."],
  },
  {
    id: "grace",
    title: "The 30-day grace period",
    body: [
      "As soon as you confirm, your account is signed out on every device and locked, and we email you the date it will be deleted. Nothing is erased yet.",
      "Changed your mind? Sign in any time in the next 30 days and the deletion is cancelled. Your account carries on exactly as before, and we email you to confirm.",
      "After 30 days your personal details are erased for good. This can't be undone.",
    ],
  },
  {
    id: "erased",
    title: "What is erased",
    body: "Your account is anonymised: it stays as a placeholder called “Deleted user”, so your school's records still add up, but nothing on it identifies you.",
    items: [
      "Your name, email address, phone number, date of birth and profile photo",
      "Profile details such as a teacher's bio, or a parent's occupation and address",
      "Your password, sign-in sessions and push notification registrations",
      "For parents, the link between your account and your children",
    ],
  },
  {
    id: "kept",
    title: "What your school keeps",
    body: "Schools must keep certain records. These stay with the school, de-identified: they no longer carry your name or contact details.",
    items: [
      "Grades, results and attendance",
      "Fee payments and receipts",
      "Support tickets and messages, shown as sent by “Deleted user”",
    ],
  },
  {
    id: "school-admins",
    title: "School administrators",
    body: [
      "A school can't be left without someone to run it. If you are your school's only active administrator, make another staff member an administrator first, then delete your account.",
      <>
        If there is no one to hand over to, email{" "}
        <a href={`mailto:${SUPPORT_EMAIL}`} className={INLINE_LINK}>
          {SUPPORT_EMAIL}
        </a>{" "}
        and we will help. Talim platform staff accounts are closed by Talim, not from the apps.
      </>,
    ],
  },
  {
    id: "cant-sign-in",
    title: "If you can't sign in",
    body: [
      <>
        Email{" "}
        <a href={DELETION_REQUEST_HREF} className={INLINE_LINK}>
          {PRIVACY_EMAIL}
        </a>{" "}
        from the email address on the account. Tell us your name, your school and whether you are a parent, teacher, student or administrator.
      </>,
      "We only act on requests from the account's own address. We reply to confirm before scheduling the deletion, and the same 30 days and the same rules about what is erased and kept apply.",
      <>
        Read more about how we handle your records in our{" "}
        <Link href="/privacy" className={INLINE_LINK}>
          privacy policy
        </Link>
        .
      </>,
    ],
  },
];

/**
 * The public account deletion page at /delete-account, linked from every app and from the Google Play listing.
 *
 * @returns The delete account page.
 */
export default function DeleteAccountPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <PageHero
          eyebrow="Your account"
          title="Delete your Talim account."
          lead="You can delete your Talim account yourself, from any Talim portal or the mobile app. This page explains how, what happens over the next 30 days, and what your school keeps."
        />
        <DocSections sections={sections} aside={<DocAsideLink href={DELETION_REQUEST_HREF}>Can&apos;t sign in? Email us</DocAsideLink>} />
      </main>
      <Footer />
    </>
  );
}
