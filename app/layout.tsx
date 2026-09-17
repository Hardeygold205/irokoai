// import { Space_Grotesk, Geist } from "next/font/google";

// export const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   variable: "--font-space-grotesk",
// });

// export const geist = Geist({
//   subsets: ["latin"],
//   variable: "--font-geist",
// });

import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/layout/PageTransition";
import Footer from "@/components/layout/Footer";
import LazyScrolling from "@/components/layout/LazyScrolling";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irokoai.ng"),

  title: {
    default: "Iroko AI",
    template: "",
  },

  description:
    "Iroko AI is an agri-tech food production infrastructure in Nigeria focused on automated, climate-controlled hydroponics and high-tech greenhouse farming.",
  keywords: [
    "Iroko AI",
    "Iroko AI Limited",
    "Agriculture",
    "Poultry",
    "Greenhouse",
    "Food Production",
    "Nigeria",
    "Sustainable Agriculture",
    "Livestock",
    "Noretafarms",
  ],

  authors: [
    {
      name: "Extension Africa",
    },
  ],

  creator: "Iroko AI",

  publisher: "Iroko AI",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Iroko AI",
    description: "Every farmer gets an agronomist. No smartphone required.",

    url: "https://irokoai.ng",

    siteName: "Iroko AI",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iroko AI",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Iroko AI",
    description: "Every farmer gets an agronomist.",

    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <LazyScrolling>
          <PageTransition>{children}</PageTransition>
          <Footer />
        </LazyScrolling>
      </body>
    </html>
  );
}
