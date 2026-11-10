import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { AmbientGlow } from "@/components/AmbientGlow";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Muzain Shehzade V M — 1st Year B.Tech CS (AI) Student",
  description:
    "First-year Computer Science & Artificial Intelligence student at Thejus Engineering College, Thrissur, Kerala. Building algorithms, mastering C and Python, and exploring AI foundations.",
  keywords: [
    "Muzain Shehzade",
    "Muzain Shehzade V M",
    "Thejus Engineering College",
    "1st Year CS AI Student",
    "Thrissur Kerala",
    "Python",
    "C Programming",
    "Computer Vision",
    "Next.js Portfolio",
    "Noir and Lumen",
  ],
  authors: [{ name: "Muzain Shehzade V M", url: "https://github.com/muzaain" }],
  creator: "Muzain Shehzade V M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/muzaain",
    title: "Muzain Shehzade V M — 1st Year CS (AI) Portfolio",
    description:
      "First-year B.Tech CS (AI) at Thejus Engineering College, Thrissur. Building algorithms and exploring AI from the fundamentals up.",
    siteName: "Muzain Shehzade Portfolio",
    images: [
      {
        url: "/images/muzain.jpg",
        width: 1080,
        height: 1920,
        alt: "Muzain Shehzade V M",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzain Shehzade V M — 1st Year CS (AI) Portfolio",
    description:
      "First-year B.Tech CS (AI) at Thejus Engineering College, Thrissur. Building algorithms and exploring AI from the fundamentals up.",
    creator: "@muzainshehzade",
    images: ["/images/muzain.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-canvas text-charcoal font-sans selection:bg-copper selection:text-canvas antialiased relative">
        <ScrollProgressBar />
        <CustomCursor />
        <AmbientGlow />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
