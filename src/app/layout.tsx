import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://badiru.io"),
  title: {
    default: "Olasubomi Badiru — AI, Analytics & Web Developer",
    template: "%s | Olasubomi Badiru",
  },
  description:
    "Portfolio of Olasubomi Badiru. AI Systems Engineer building scalable AI-driven systems, RAG pipelines, and high-performance web applications.",
  keywords: [
    "Olasubomi Badiru",
    "AI Engineer",
    "Analytics Engineer",
    "Web Developer",
    "Full Stack Developer",
    "RAG Pipelines",
    "Next.js Portfolio",
    "TechGen Pro",
  ],
  authors: [{ name: "Olasubomi Badiru" }],
  creator: "Olasubomi Badiru",
  openGraph: {
    title: "Olasubomi Badiru — AI, Analytics & Web Developer",
    description:
      "AI Systems Engineer building scalable AI-driven systems, RAG pipelines, and high-performance web applications.",
    url: "https://badiru.io",
    siteName: "Olasubomi Badiru Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Olasubomi Badiru Portfolio Preview",
      },
    ],
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olasubomi Badiru — AI, Analytics & Web Developer",
    description:
      "AI Systems Engineer building scalable AI-driven systems, RAG pipelines, and high-performance web applications.",
    images: ["/og-image.png"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
