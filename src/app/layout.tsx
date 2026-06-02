import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talim — The Education Infrastructure for Measurable Learning",
  description:
    "Talim connects schools, colleges, and universities with the data infrastructure they need to measure outcomes, verify credentials, and grow with confidence. Built for every institution, worldwide.",
  keywords:
    "education infrastructure, school management system, learning management, academic record verification, data-driven education, student management, teacher portal, parent portal, EdTech platform, school software",
  authors: [{ name: "Talim Education Technology" }],
  creator: "Talim",
  publisher: "Talim",
  openGraph: {
    title: "Talim — The Education Infrastructure for Measurable Learning",
    description:
      "Connect your institution to a platform where every learning moment is measurable, every record is verifiable, and every stakeholder stays connected.",
    url: "https://www.mytalim.com",
    siteName: "Talim",
    type: "website",
    images: [
      {
        url: "/talim.svg",
        width: 1200,
        height: 630,
        alt: "Talim — Education Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Talim — The Education Infrastructure for Measurable Learning",
    description:
      "The platform where every learning moment becomes measurable, every record becomes verifiable.",
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
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  );
}
