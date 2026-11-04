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

const siteUrl = "https://luiskaiser.com";
const portraitUrl = `${siteUrl}/images/luis-kaiser.webp`;
const portrait = {
  url: portraitUrl,
  width: 1796,
  height: 2235,
  alt: "Luis Kaiser",
};
const profileTitle = "Luis Kaiser | AI Researcher at Google X";
const profileDescription =
  "Luis Kaiser is an AI researcher at Google X and an applied mathematics PhD working on reinforcement learning, continual learning, and AI for science.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: profileTitle,
  description: profileDescription,
  alternates: { canonical: "/" },
  applicationName: "Luis Kaiser",
  authors: [{ name: "Luis Kaiser", url: `${siteUrl}/` }],
  creator: "Luis Kaiser",
  publisher: "Luis Kaiser",
  keywords: [
    "Luis Kaiser",
    "AI researcher",
    "applied mathematics",
    "reinforcement learning",
    "continual learning",
    "AI for science",
    "Google X",
    "UT Austin",
  ],
  category: "technology",
  openGraph: {
    type: "profile",
    url: "/",
    siteName: "Luis Kaiser",
    title: profileTitle,
    description: profileDescription,
    firstName: "Luis",
    lastName: "Kaiser",
    locale: "en_US",
    images: [portrait],
  },
  twitter: {
    card: "summary",
    title: profileTitle,
    description: profileDescription,
    images: [portrait],
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Luis Kaiser",
      inLanguage: "en-US",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profile`,
      url: `${siteUrl}/`,
      name: profileTitle,
      isPartOf: { "@id": `${siteUrl}/#website` },
      mainEntity: { "@id": `${siteUrl}/#person` },
      primaryImageOfPage: { "@id": `${siteUrl}/#portrait` },
      inLanguage: "en-US",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Luis Kaiser",
      url: `${siteUrl}/`,
      image: {
        "@id": `${siteUrl}/#portrait`,
      },
      jobTitle: "AI Researcher",
      description: profileDescription,
      worksFor: {
        "@type": "Organization",
        name: "X, the moonshot factory",
        alternateName: "Google X",
        url: "https://x.company/",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "The University of Texas at Austin",
          url: "https://www.utexas.edu/",
        },
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
    },
    {
      "@type": "ImageObject",
      "@id": `${siteUrl}/#portrait`,
      url: portraitUrl,
      contentUrl: portraitUrl,
      width: portrait.width,
      height: portrait.height,
      caption: portrait.alt,
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${interTight.variable} tracking-tight antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
