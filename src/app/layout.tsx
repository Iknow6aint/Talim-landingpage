import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Talim Landing Page",
  description: "Bringing Africa’s Education Online",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-gray-100`}>
        <div >{children}</div> {/* ✅ Enforce max-width */}
      </body>
    </html>
  );
}
