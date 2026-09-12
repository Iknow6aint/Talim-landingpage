import type { Metadata, Viewport } from "next";
import { Caveat, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const satoshi = localFont({
  variable: "--font-satoshi",
  src: [
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  display: "swap",
});

const title = "Talim — Run Every Institution. Understand Every Learner.";
const description =
  "Talim connects school operations, academic data, finance, communication, and stakeholder experiences in one intelligent platform—so institutions make better decisions and every learner can succeed.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mytalim.com"),
  title,
  description,
  keywords:
    "education infrastructure, school management system, learning management, academic record verification, data-driven education, student management, teacher portal, parent portal, EdTech platform, school software",
  authors: [{ name: "Talim Education Technology" }],
  creator: "Talim",
  publisher: "Talim",
  openGraph: {
    title,
    description,
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
    title,
    description,
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

export const viewport: Viewport = {
  themeColor: "#F6F4EC",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${caveat.variable} ${satoshi.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
