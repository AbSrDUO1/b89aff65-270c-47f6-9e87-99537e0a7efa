import type { Metadata } from "next";
import "./globals.css";
import { Inter_Tight } from "next/font/google";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PulseLaunch Marketing Landing",
  description: "A clean, conversion-focused single-page marketing site."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased bg-gradient-to-br from-[#0b1020] to-[#1f2948]`}>{children}</body>
    </html>
  );
}
