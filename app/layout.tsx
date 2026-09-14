import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luiskaiser.com"),
  title: "Luis Kaiser - Homepage",
  description:
    "Luis Kaiser is an AI researcher and applied mathematics PhD at UT Austin working on reinforcement learning, continual learning, and AI for science.",
  alternates: { canonical: "/" },
  applicationName: "Luis Kaiser",
  authors: [{ name: "Luis Kaiser", url: "/" }],
  creator: "Luis Kaiser",
  publisher: "Luis Kaiser",
  keywords: [
    "Luis Kaiser",
    "AI researcher",
    "applied mathematics",
    "reinforcement learning",
    "continual learning",
    "AI for science",
    "UT Austin",
  ],
  category: "technology",
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Luis Kaiser",
    title: "Luis Kaiser | AI Researcher & Applied Mathematics PhD",
    description:
      "AI researcher and applied mathematics PhD at UT Austin working on reinforcement learning, continual learning, and AI for science.",
    firstName: "Luis",
    lastName: "Kaiser",
  },
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
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://luiskaiser.com/#person",
  name: "Luis Kaiser",
  url: "https://luiskaiser.com/",
  image: "https://luiskaiser.com/images/luis-kaiser.webp",
  jobTitle: "AI Researcher",
  description:
    "AI researcher and applied mathematics PhD at UT Austin working on reinforcement learning, continual learning, and AI for science.",
  affiliation: {
    "@type": "Organization",
    name: "X, the moonshot factory",
    url: "https://x.company/",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Technical University of Munich",
      url: "https://www.tum.de/en/",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "University of Wuerzburg",
      url: "https://www.uni-wuerzburg.de/en/",
    },
  ],
  knowsAbout: [
    "Reinforcement learning",
    "Continual learning",
    "Artificial intelligence for science",
    "Applied mathematics",
  ],
  sameAs: [
    "https://scholar.google.com/citations?user=AB4exREAAAAJ&hl=en",
    "https://www.linkedin.com/in/luiskaiser/",
    "https://github.com/utkaiser",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interTight.variable} bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
