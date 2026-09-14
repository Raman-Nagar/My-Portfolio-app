import Header from "@/components/header";
import "./globals.css";
import { Inter, Sora } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import ScrollProgress from "@/components/scroll-progress";
import BackToTop from "@/components/back-to-top";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

const siteUrl = "https://www.ramannagar.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raman Nagar | Frontend Engineer — React, Next.js, TypeScript",
    template: "%s | Raman Nagar",
  },
  description:
    "Frontend Engineer with 4 years of experience building enterprise web apps, admin dashboards, and scalable UIs using React, Next.js, TypeScript, and Redux Toolkit.",
  keywords: [
    "Raman Nagar",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Redux Toolkit",
    "TanStack Query",
    "Frontend Developer India",
    "React Next.js Portfolio",
    "Indore Developer",
  ],
  authors: [{ name: "Raman Nagar", url: siteUrl }],
  creator: "Raman Nagar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Raman Nagar | Frontend Engineer",
    title: "Raman Nagar | Frontend Engineer — React, Next.js, TypeScript",
    description:
      "Frontend Engineer with 4 years of experience building enterprise web apps, admin dashboards, and scalable UIs using React, Next.js, TypeScript, and Redux Toolkit.",
    images: [
      {
        url: "/my-dp.png",
        width: 1200,
        height: 630,
        alt: "Raman Nagar — Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raman Nagar | Frontend Engineer — React, Next.js, TypeScript",
    description:
      "Frontend Engineer with 4 years of experience building enterprise web apps, admin dashboards, and scalable UIs using React, Next.js, TypeScript, and Redux Toolkit.",
    images: ["/my-dp.png"],
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
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "fPe56k8TwdW3VAlmSdoEsc8DZuoMQrN6bKYge_9LdJo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <meta name="theme-color" content="#6366f1" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} font-sans bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#0a0f1e] dark:text-gray-50 dark:text-opacity-90 noise `}
      >
        {/* mesh gradient background */}
        <div className="fixed inset-0 -z-20 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.18),transparent)]" />

        {/* accent blobs — larger, softer, more premium */}
        <div className="fixed top-[-10rem] -z-10 right-[5rem] h-[45rem] w-[45rem] rounded-full bg-indigo-200/40 dark:bg-indigo-900/20 blur-[8rem]" />
        <div className="fixed top-[20rem] -z-10 left-[-20rem] h-[40rem] w-[55rem] rounded-full bg-violet-200/30 dark:bg-violet-900/15 blur-[8rem]" />
        <div className="fixed bottom-[-10rem] -z-10 right-[-10rem] h-[35rem] w-[35rem] rounded-full bg-pink-200/20 dark:bg-pink-900/10 blur-[8rem]" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <ScrollProgress />
            <Header />
            {children}
            <Footer />
            <BackToTop />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
