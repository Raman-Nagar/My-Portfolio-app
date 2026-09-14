import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const siteUrl = "https://www.ramannagar.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Raman Nagar | Frontend Engineer — React, Next.js, TypeScript",
    template: "%s | Raman Nagar",
  },
  description:
    "Frontend Engineer with 3+ years of experience building enterprise web apps, admin dashboards, and scalable UIs using React, Next.js, TypeScript, and Redux Toolkit.",
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
      "Frontend Engineer with 3+ years of experience building enterprise web apps, admin dashboards, and scalable UIs using React, Next.js, TypeScript, and Redux Toolkit.",
    images: [
      {
        url: "/my-dp-2.jpg",
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
      "Frontend Engineer with 3+ years of experience building enterprise web apps, admin dashboards, and scalable UIs using React, Next.js, TypeScript, and Redux Toolkit.",
    images: ["/my-dp-2.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
