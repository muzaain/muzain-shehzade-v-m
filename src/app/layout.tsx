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
  title: "Muzain Shehzade V M — AI Engineer & Systems Developer",
  description:
    "First-batch B.Tech CS (AI) student at Thejus Engineering College, Thrissur, Kerala. Building intelligent systems, deep learning architectures, and editorial web experiences with quiet precision.",
  keywords: [
    "Muzain Shehzade",
    "Muzain Shehzade V M",
    "Thejus Engineering College",
    "AI Student Thrissur",
    "Kerala AI Engineer",
    "Deep Learning",
    "PyTorch",
    "Next.js Portfolio",
    "Noir and Lumen",
    "Machine Learning Developer",
  ],
  authors: [{ name: "Muzain Shehzade V M", url: "https://github.com/muzainshehzade" }],
  creator: "Muzain Shehzade V M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muzainshehzade.vercel.app",
    title: "Muzain Shehzade V M — Portfolio Vol. 01",
    description:
      "B.Tech CS (AI) at Thejus Engineering College, Thrissur. Building intelligent systems with quiet precision.",
    siteName: "Muzain Shehzade Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzain Shehzade V M — Portfolio Vol. 01",
    description:
      "B.Tech CS (AI) at Thejus Engineering College, Thrissur. Building intelligent systems with quiet precision.",
    creator: "@muzainshehzade",
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
