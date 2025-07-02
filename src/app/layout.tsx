import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingPortalButton from "@/components/FloatingPortalButton";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talim - The Smart Learning Management System for Modern Education",
  description: "Transform your educational institution with Talim's comprehensive LMS. Connect schools, teachers, parents, and students worldwide with our secure, data-driven platform for transparent, modern education management.",
  keywords: "learning management system, education software, school management, LMS, student management, teacher portal, parent communication, educational technology, school administration, online learning platform",
  authors: [{ name: "Talim Education Technology" }],
  creator: "Talim",
  publisher: "Talim",
  openGraph: {
    title: "Talim - Smart Learning Management System",
    description: "Empower your educational community with Talim's comprehensive platform for schools, teachers, parents, and students worldwide.",
    url: "https://www.mytalim.com",
    siteName: "Talim",
    type: "website",
    images: [
      {
        url: "/talim.svg",
        width: 1200,
        height: 630,
        alt: "Talim - Smart Learning Management System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talim - Smart Learning Management System",
    description: "Transform education with our comprehensive LMS platform",
    images: ["/talim.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/talim.svg",
    shortcut: "/talim.svg",
    apple: "/talim.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.variable} antialiased bg-gray-100`}>
        <div>{children}</div> {/* ✅ Enforce max-width */}
        <FloatingPortalButton />
      </body>
    </html>
  );
}
