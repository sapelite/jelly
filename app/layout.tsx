import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jelisol.xyz"),
  title: {
    default: "JELI - The First-Ever Memecoin Tap Trading App on Solana",
    template: "%s | JELI",
  },
  description:
    "JELI is the first-ever memecoin tap trading app on Solana. Experience reflex-based trading with tap-to-trade execution. Mobile-first, frictionless, and built for speed.",
  keywords: [
    "JELI",
    "Solana",
    "memecoin",
    "trading",
    "tap trading",
    "crypto",
    "DeFi",
    "reflex trading",
    "tap to trade",
    "Solana trading",
    "memecoin app",
  ],
  authors: [{ name: "JELI" }],
  creator: "JELI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jelisol.xyz",
    title: "JELI - Memecoin Tap Trading on Solana",
    description:
      "The first-ever memecoin tap trading app on Solana. Experience reflex-based trading with tap-to-trade execution. Mobile-first and frictionless.",
    siteName: "JELI",
    images: [
      {
        url: "https://jelisol.xyz/og-image.svg",
        width: 1200,
        height: 630,
        alt: "JELI - Memecoin Tap Trading on Solana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JELI - Memecoin Tap Trading on Solana",
    description:
      "The first-ever memecoin tap trading app on Solana. Tap faster than the trenches.",
    creator: "@jeli",
    images: ["https://jelisol.xyz/og-image.svg"],
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
    canonical: "https://jelisol.xyz",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
